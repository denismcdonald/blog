---
title: Blog
footer: true
---

<div>
  <h1 class="h1-titled">Ook.</h1>
    {% for post in site.posts limit: 5 %}
      <a class="archive-list" href="{{ site.baseurl}}{{ post.url }}">
            <p class="archive-post-title">{{ post.title }}</p>
            <hr class="archive-hr">
            <p class="archive-post-date">{{ post.date | date: "%b %Y" }}</p>
      </a>
    {% endfor %}
</div>

<!-- <h2><a href="/archive.html" class="archive-dates">Archive</a></h2>

<h2>Topics</h2>

<section class="archive-list">
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
<a class="archive-tags" href="{{ site.baseurl}}/tag/{{ tag }}">{{ tag | capitalize }}</a><span>&nbsp;|&nbsp;</span>
{% endfor %}
</section> -->