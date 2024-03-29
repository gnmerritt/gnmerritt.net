function submitForm(e) {
  e.preventDefault();
  e.stopPropagation();

  $(".progress").removeClass("d-none");
  $("#submit").addClass("d-none");

  var data = {
    techs: [],
  };
  $('#inquiryForm').serializeArray().forEach(e => {
    if (e.value === 'on') {
      data.techs.push(e.name);
    } else if (e.name === 'start_date') {
      data[e.name] = parseInt(e.value, 10);
    } else {
      data[e.name] = e.value;
    }
  });
  $.ajax("https://api.gnmerritt.net/inquiries", {
    data : JSON.stringify(data),
    contentType : 'application/json',
    type : 'POST'
  }).done(function() {
      $("#message")
        .text("Thank you! Your inquiry was submitted successfully, Nathan will be in touch in the next 1-2 business days");
      $("#submit").remove();
    })
    .fail(function() {
      $("#message").text("Ack! Something went wrong, please try again");
    })
    .always(function() {
      $(".progress").addClass("d-none");
      $("#submit").removeClass("d-none");
    });
}

function clickSkill(e) {
  var button = e.target;
  $(".skillbox button.category").removeClass("active");
  $(button).addClass("active");
  var content = $(button).siblings(".skills").html();
  $(".skill-spot").html(content);
}

$(document).ready(function() {
  $('#inquiryForm').submit(submitForm);
  $("button.category").click(clickSkill);
  // active backend web skills
  $("button.category.active").click();
});
