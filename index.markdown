---
layout: default
title: gnmerritt.net - Nathan's home on the web
---

{% for post in site.posts limit:6 %}
  <article class="post">
     <h3> <a href="{{ post.id }}.html">{{ post.title }}</a></h3>
     <p class="date">{{ post.date | date: "%A, %d %B  %Y"}}</p>
     <p class="preview">{{ post.content | strip_html | truncatewords: 75 }}</p>
     {% if post.content.size > 75 %}
       <p> <a href="{{ post.id }}.html">Read Full Post...</a></p>
     {% endif %}
  </article>
{% endfor %}

### Older Posts ###

{% for post in site.posts offset:6 %}
  <li>
    <span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}