---
title: Blog
---

<div>
  <h1 class="h1-title">Blog</h1>
  <h2>Latest Entries</h2>
    {% for post in site.posts limit: 5 %}
      <a class="archive-list" href="{{ site.baseurl}}{{ post.url }}">
            <p class="archive-post-title">{{ post.title }}</p>
            <hr class="archive-hr">
            <p class="archive-post-date">{{ post.date | date: "%d %B %Y" }}</p>
      </a>
    {% endfor %}
</div>

<h2 class="archive-titles">Topics</h2>

<section class="archive-list">
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


<section class="archive-post-list">
  {% for post in site.posts %}
      {% assign currentDate = post.date | date: "%Y" %}
      {% if currentDate != myDate %}
          {% unless forloop.first %}</a>{% endunless %}
          <h2 class="archive-titles">{{ currentDate }} Archive</h2>
          {% assign myDate = currentDate %}
      {% endif %}
      <a class="archive-list" href="{{ site.baseurl}}{{ post.url }}">
        <p class="archive-post-title">{{ post.title }}</p>
        <hr class="archive-hr">
        <p class="archive-post-date">{{ post.date | date: "%-d %B" }}</p>
      {%- if forloop.last -%}</a>{%- endif -%}
  {%- endfor -%}
      </a>
<!-- </section> -->