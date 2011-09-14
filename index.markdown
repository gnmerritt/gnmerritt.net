---
layout: default
title: gnmerritt.net - Nathan's home on the web
---

{% for post in site.posts limit:6 %}
   <div class="post">
     <h2> <a href="{{ post.id }}.html">{{ post.title }}</a></h2>
     <p class="date">{{ post.date | date: "%A, %d %B  %Y"}}</p>
     <p>{{ post.content | strip_html | truncatewords: 75 }}</p>
     <p> <a href="{{ post.id }}.html">Read Full Post...</a></p>
  </div>
{% endfor %}

### Older Posts ###

{% for post in site.posts offset:6 %}
  <li>
    <span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}