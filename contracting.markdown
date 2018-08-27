---
layout: hiring
title: Hire Nathan Merritt
---

<h1 class="text-center">Contracting Engagements with Nathan Merritt</h1>
<br>

I'm an experienced full-stack software engineer - I've shipped everything from
mobile apps to enterprise data science tools. I'm currently available to hire
for 2-6 week engagements. I come up to speed quickly and am usually contributing
code on the first day.

Here's a partial list of things I've worked on or with before. More details are
available on my [LinkedIn profile](https://www.linkedin.com/in/gnmerritt/) or feel
free to reach out directly with questions.

<div class="text-center">
  <h4>Frontend</h4>
  React/Redux, Backbone, Mustache, jQuery, Dust.js, responsive design, mobile & tablet optimization

  <h4>Backend</h4>
  Java (Spring, Dropwizard, servlets), Python (Django, Flask, Twistd), Rust (Rocket, actix-web), Nginx

  <h4>DevOps</h4>
  AWS, GCP, Docker, Debian

  <h4>Data science</h4>
  Spark, PostgreSQL, Elasticsearch, HDFS, Hive/Hadoop, Redshift, GCP Dataflow, R

  <h4>Development lifecycle</h4>
  TeamCity, Jenkins, Gradle, git
</div>

<br>

<h3 class="text-center">Sound like we might be a good fit?</h3>

I'm looking forward to hearing from you! Please fill out the form below and I'll
get back to you with more information and my availability in 1-2 business days.

<hr/>

<form id="inquiryForm">
  <div class="form-group form-inline">
    <input name="name" class="form-control" type="text" placeholder="Your name" autofocus required />
    <span>&nbsp;and&nbsp;</span>
    <input name="email" class="form-control" type="email" placeholder="email address" required />
    <small class="form-text text-muted">(No spam, I promise)</small>
  </div>

  <div class="form-group">
    <label for="description">Project description</label>
    <textarea rows="4" cols="80" class="desc form-control" name="description" required placeholder="Please describe your project in 1-2 sentences"></textarea>
  </div>

  <div class="form-group">
    <label for="">When would you like work to start?</label>
    <select name="start_date" class="form-control" required>
      <option value="0">As soon as possible</option>
      <option value="14">Within the next two weeks</option>
      <option value="30" selected="selected">Within the next month</option>
      <option value="60">Any time in the next several months</option>
    </select>
  </div>

  <div>
    <span id="message" />
  </div>  

  <br/>
  <div class="text-right">
    <button type="submit" class="btn btn-primary" id="submit">Send to Nathan</button>    
  </div>

  <div class="progress d-none">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:100%"></div>
  </div>
</form>

<script type="text/javascript">
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
</script>
