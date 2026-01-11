---
layout: base.njk
title: Projects
description: Research projects, writing initiatives, and creative endeavors by Josh Gonzales
permalink: /projects/
---

<div class="container">

# {{ title }}

{{ description }}

<div class="project-grid">
  {% for project in collections.projects %}
  <article class="project-card">
    {% if project.data.status %}
    <span class="project-status {{ project.data.status }}">{{ project.data.status }}</span>
    {% endif %}

    <h3><a href="{{ project.url }}">{{ project.data.title }}</a></h3>

    {% if project.data.description %}
    <p>{{ project.data.description }}</p>
    {% endif %}

    {% if project.data.tags %}
    <div class="post-tags">
      {% for tag in project.data.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}

    <a href="{{ project.url }}" class="read-more">Learn more →</a>
  </article>
  {% endfor %}
</div>

</div>
