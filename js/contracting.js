function submitForm(e) {
  e.preventDefault();
  e.stopPropagation();

  $(".progress").removeClass("d-none");
  $("#submit").addClass("d-none");

  var URL = 'https://script.google.com/macros/s/AKfycbxg9SExUf1PGzbor99Vko-tg2ycvf8x5iZ7pTOQ3SUmnnNkroY/exec';
  $.post(URL + "?" + $('#inquiryForm').serialize())
    .done(function() {
      $("#message")
        .text("Thank you! Your inquiry submitted successfully, Nathan will be in touch in the next 1-2 business days");
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

$(document).ready(function() {
  $('#inquiryForm').submit(submitForm);
});
