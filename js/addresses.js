function submitForm(e) {
  e.preventDefault();
  e.stopPropagation();

  $(".progress").removeClass("d-none");
  $("#submit").addClass("d-none");

  var URL = 'https://script.google.com/macros/s/AKfycbwidlVi0OK3QDkfYaRayK3T8VE94oSFznYWMx5qrpMdkDQJR3o/exec'
  $.ajax({
    url: URL + "?" + $('#addressForm').serialize(),
    dataType: "jsonp"
  }).done(function() {
        $("#message").text("All set, thank you!")
        $("#submit").remove();
    })
    .fail(function() {
      $("#message").text("Ack! Something went wrong, please try again in a minute or two");
    })
    .always(function() {
      $(".progress").addClass("d-none");
      $("#submit").removeClass("d-none");
    });
}

$(document).ready(function() {
  $('#addressForm').submit(submitForm);
});
