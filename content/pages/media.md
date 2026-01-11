---
layout: base.njk
title: Media & Press
description: Media appearances, interviews, and published articles by Josh Gonzales
permalink: /media/
---

<div class="container">

# {{ title }}

My research and writing on consumer psychology have been featured in various media outlets. Below is a selection of recent appearances and published articles.

For media inquiries, speaking opportunities, or interview requests, please contact me via email.

<ul class="media-list">
  {% for item in collections.media %}
  <li class="media-item">
    <div class="media-outlet">{{ item.data.outlet }}</div>
    <h3 class="media-title"><a href="{{ item.data.url }}" target="_blank" rel="noopener noreferrer">{{ item.data.title }}</a></h3>
    <div class="media-date">
      <time datetime="{{ item.date | htmlDateString }}">{{ item.date | readableDate }}</time>
    </div>
    {% if item.data.excerpt %}
    <p class="media-excerpt">{{ item.data.excerpt }}</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>

## Regular Outlets

I regularly contribute articles to:

- **The Conversation** - Academic research explained for general audiences
- **Psychology Today** - Consumer psychology and behavioral insights

</div>
