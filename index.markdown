---
layout: default;
title: gnmerritt.net - Nathan's home on the web
---

{% for post in site.posts limit:6 %}
  {% post %}
{% endfor %}

### Older Posts ###

{% for post in site.posts offset:6 %}
  <li>
    <span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}