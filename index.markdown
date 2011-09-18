---
layout: default
title: gnmerritt.net - Nathan's home on the web
---

{% for post in site.posts limit:6 %}
  {% capture postUid %}{{ post.date | date: "%d%b%Y" }}{% endcapture %}

  <article class="post" id="{{ postUid }}">
       <h3> <a href="{{ post.id }}.html">{{ post.title }}</a></h3>
       <p class="date">{{ post.date | date: "%A, %d %B  %Y"}}</p>
       <br />

       <div class="preview">{{ post.content | strip_html | truncatewords: 50 }}</div>

       <div class="clear">
         <p class="hide" onclick="gnm.togglePost(this, '{{ postUid }}')">Hide Post</p>
         <p class="more"><a href="{{ post.id }}.html">...Read Full Post</a></p>
       </div>
  </article>
{% endfor %}

### Older Posts ###

{% for post in site.posts offset:6 limit:10 %}
  <li>
    <span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}