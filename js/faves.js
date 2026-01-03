function submitForm(e) {
  e.preventDefault();
  e.stopPropagation();

  $(".progress").removeClass("d-none");
  $("#submit").addClass("d-none");
  $("#message").text("");
  
  const cleanup = () => {
    $(".progress").addClass("d-none");
    $("#submit").removeClass("d-none");
  };

  let writeInCat = null;
  let writeInFav = null;
  let name = null;
  let message = null;
  let faves = {};
  let public = false;
  $('#faves-form').serializeArray().forEach(e => {    
    if (e.name === 'write-in-cat') {
      writeInCat = e.value;
    } else if (e.name === 'write-in-fav') {
      writeInFav = e.value;
    } else if (e.name === 'name' && e.value !== "") {
      name = e.value;
    } else if (e.name === 'message' && e.value !== "") {
      message = e.value;
    } else if (e.name === 'public') {
      public = true;
    }
    else {
      faves[e.name] = e.value;
    }
  });
  if (writeInCat && writeInFav) {
    faves[writeInCat] = writeInFav;
  }

  if (name && message) {
    $.ajax("https://api.gnmerritt.net/messages", {
      data : JSON.stringify({
        from: name, message
      }),
      contentType : 'application/json',
      type : 'POST'
    });
    $("input[name=message]").val("");
  }

  const favesList = Object.entries(faves).map(([k, v]) => ({
    category: k,
    pick: v,
    name, public
  })).filter((f) => !!f.pick);
  
  if (favesList.length === 0) {
    cleanup();
    return;
  }
  $.ajax("https://api.gnmerritt.net/faves", {
    data : JSON.stringify(favesList),
    contentType : 'application/json',
    type : 'POST'
  }).done(function() {
      $("#message").text("Got it, thank you!");      
      $("#submit").remove();
    })
    .fail(function() {
      $("#message").text("Ack! Something went wrong, please don't tease Nathan too much");
    })
    .always(cleanup);
}

$(document).ready(function() {
  $('#faves-form').submit(submitForm);
});
