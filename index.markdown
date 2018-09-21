---
layout: default
title: gnmerritt.net - Nathan's home on the web
---

<h3 class="showPhone">Posts:</h3>

{% for post in site.posts limit:6 %}
  {% capture postUid %}{{ post.date | date: "%d%b%Y" }}{% endcapture %}

  <article
    class="post pt-4 px-4"
    id="{{ postUid }}">
       <h3> <a href="{{ post.id }}">{{ post.title }}</a></h3>
       <p class="date">{{ post.date | date: "%d %B  %Y"}}</p>

       <br />
       <hr />

       <div class="preview clear">
         {% if forloop.first %}
           {{ post.content }}
         {% else %}
            <span>{{ post.content | strip_html | truncatewords: 50 }}</span>
         {% endif %}
       </div>

       <div class="clear">
         <div class="more"><a href="{{ post.id }}">{% if forloop.first %}Permalink{% else %}...Read full post{% endif %}</a></div>
       </div>
  </article>
{% endfor %}
