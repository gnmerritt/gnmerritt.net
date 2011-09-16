---
layout: default
title: gnmerritt.net - Nathan's home on the web
---

<section>

{% for post in site.posts limit:6 %}
  {% capture postUid %}{{ post.date | date: "%d%b%Y" }}{% endcapture %}

  <article class="post" id="{{ postUid }}">
       <div class="clear">
         <h3> <a href="{{ post.id }}.html">{{ post.title }}</a></h3>
         <p class="date">{{ post.date | date: "%A, %d %B  %Y"}}</p>
       </div>
       <br />

       <p class="preview">{{ post.content | strip_html | truncatewords: 75 }}</p>

       <div class="clear">
     {% if post.content.size > 75 %}
       <p class="hide" onclick="gnm.toggleOpen('{{ postUid }}')">Toggle Post</p>
       <p class="more"><a href="{{ post.id }}.html">...Read Full Post</a></p>
     {% endif %}
       </div>
       <br />
  </article>
{% endfor %}

</section>

### Older Posts ###

{% for post in site.posts offset:6 %}
  <li>
    <span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}