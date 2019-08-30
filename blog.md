---
layout: default
title: Writing
edit: false
scroll: false
---

<div>
  <h1 class="h1-title">Blog</h1>
  <h2>Latest Entries</h2>
    {% for post in site.posts limit: 6 %}
      <a class="tag-list" href="{{ site.baseurl}}{{ post.url }}">
            <!-- <li>{{ post.date | date: "%d %B %Y" }}&nbsp; | &nbsp;<a href="{{ site.baseurl}}{{ post.url }}">{{ post.title }}</a></li> -->
            <p class="archive-post-title">{{ post.title }}</p>
            <hr class="archive-hr">
            <p class="archive-post-date">{{ post.date | date: "%d %B %Y" }}</p>
      </a>
    {% endfor %}
</div>
<br>
<hr>

<!-- OLD DIVIDED STYLE -->
<!-- <div>
  <h1 class="h1-title">Blog</h1>
  <h2>Latest Entries</h2>
  <ul class="tag-list">
    {% for post in site.posts limit: 6 %}
        <li>{{ post.date | date: "%d %B %Y" }}&nbsp; | &nbsp;<a href="{{ site.baseurl}}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>
<br>
<hr> -->


<h2>Topics</h2>

<section class="archive-tags-list">
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
<a class="archive-tags" href="{{ site.baseurl}}/tag/{{ tag }}">{{ tag | capitalize }}</a><span>&nbsp;|</span>
{% endfor %}
</section>

<br>
<br>
<hr>

<section class="archive-post-list">
  {% for post in site.posts %}
      {% assign currentDate = post.date | date: "%Y" %}
      {% if currentDate != myDate %}
          {% unless forloop.first %}</a>{% endunless %}
          <h2 class="archive-dates">{{ currentDate }} Archive</h2>
          <!-- <ul class="tag-list"> -->
          {% assign myDate = currentDate %}
      {% endif %}
      <a class="tag-list" href="{{ site.baseurl}}{{ post.url }}">
        <p class="archive-post-date">{{ post.date | date: "%-d %B" }}</p>
        <hr class="archive-hr">
        <p class="archive-post-title">{{ post.title }}</p>
      {% if forloop.last %}</a><br>{% endif %}
  {% endfor %}
      </a>
</section>



<!-- OLD DIVIDED METHOD 
<section class="archive-post-list">
  {% for post in site.posts %}
      {% assign currentDate = post.date | date: "%Y" %}
      {% if currentDate != myDate %}
          {% unless forloop.first %}</ul>{% endunless %}
          <h2 class="archive-dates">{{ currentDate }} Archive</h2>
          <ul class="tag-list">
          {% assign myDate = currentDate %}
      {% endif %}
      <li><span>{{ post.date | date: "%-d %B" }}&nbsp; | &nbsp;</span><a href="{{ site.baseurl}}{{ post.url }}">{{ post.title }}</a></li>
      {% if forloop.last %}</ul><br>{% endif %}
  {% endfor %}
</section> -->