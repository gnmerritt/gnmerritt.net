const FAVES="https://api.gnmerritt.net/faves";

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
  $.ajax(FAVES, {
    data : JSON.stringify(favesList),
    contentType : 'application/json',
    type : 'POST'
  }).done(function() {
      $("#message").text("Got it, thank you!");      
      $("#results-link").removeClass("d-none");
      $("#submit").remove();
    })
    .fail(function() {
      $("#message").text("Ack! Something went wrong, please don't tease Nathan too much");
    })
    .always(cleanup);
}

function loadResults() {
  const results = $('#results');
  if (!results.length) {
    return;
  }
  $.ajax(FAVES).done((res) => {
    processResults(res, results);
    $('.progress').addClass("d-none");
    results.removeClass("d-none");
  });
}

function processResults(picks, dest) {
 const categories = {};
 for (p of picks) {
  const cat = p.category;
  const answers = categories[cat] ?? [];
  answers.push({who: p.name, pick: p.pick});
  categories[cat] = answers;
 }
 Object.entries(categories).forEach(([c, picks]) => {
    dest.append(`<h3>${c}</h3>`);
    const list = $('<ul></ul>');
    for (p of picks) {
      list.append(`<li>${p.pick} (${p.who ?? 'anon'})</li>`);
    }
    dest.append(list);
  }) 
}

$(document).ready(function() {
  $('#faves-form').submit(submitForm);
  loadResults();
});
