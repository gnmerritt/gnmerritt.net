---
layout: default
title: gnmerritt.net - Nathan's home on the web
---

<h3 class="showPhone">Posts:</h3>

{% for post in site.posts limit:12 %}
  {% capture postUid %}{{ post.date | date: "%d%b%Y" }}{% endcapture %}
  {% if forloop.index > 3 %}
    {% assign hidden = true %}
  {% else %}
    {% assign hidden = false %}
  {% endif %}

  <article
    class="post{% if hidden %} closed{% endif %}"
    id="{{ postUid }}">
       <h3> <a href="{{ post.id }}.html">{{ post.title }}</a></h3>
       <p class="date">{{ post.date | date: "%d %B  %Y"}}</p>
       <br />

       <div class="preview clear">{{ post.content | strip_html | truncatewords: 50 }}</div>

       <div class="clear">
         <p class="hide hidePhone" onclick="gnm.togglePost(this, '{{ postUid }}')">
	   {% if hidden %}Show Post{% else %}Hide Post{% endif %}
	 </p>
         <p class="more"><a href="{{ post.id }}.html">...Read Full Post</a></p>
       </div>
  </article>
{% endfor %}