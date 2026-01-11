---
layout: base.njk
title: Newsletter Archive
description: Past issues of Josh Gonzales's newsletter on consumer psychology and behavioral insights
permalink: /newsletter/
---

<div class="container">

# {{ title }}

Browse past issues of my newsletter, where I share insights on consumer psychology, research updates, and thoughtful essays on decision-making and behavior.

<aside class="newsletter-signup">
  <h3>Subscribe to the newsletter</h3>
  <p>Get new insights delivered to your inbox.</p>

  <!-- ConvertKit embed code placeholder -->
  <!-- To add your ConvertKit form:
       1. Go to your ConvertKit dashboard
       2. Navigate to your form
       3. Click "Embed" and choose "HTML"
       4. Copy the embed code and paste it below
       5. Remove these HTML comments
  -->
  <!-- PASTE CONVERTKIT EMBED CODE HERE -->

  <p><em>Email signup form will be embedded here using ConvertKit.</em></p>

  <p><strong>How to use ConvertKit's RSS-to-Email:</strong></p>
  <ol>
    <li>In ConvertKit, go to "Broadcasts" → "RSS"</li>
    <li>Add your RSS feed URL: <code>{{ site.url }}/feed.xml</code></li>
    <li>Configure how often to check for new posts</li>
    <li>Customize your email template</li>
    <li>ConvertKit will automatically send new blog posts to subscribers</li>
  </ol>
</aside>

## Past Issues

<div class="post-list">
  {% for issue in collections.newsletter %}
  <article class="post-card">
    <header>
      <h3><a href="{{ issue.url }}">{{ issue.data.title }}</a></h3>
      <div class="post-meta">
        <time datetime="{{ issue.date | htmlDateString }}">{{ issue.date | readableDate }}</time>
      </div>
    </header>

    {% if issue.data.excerpt %}
    <p class="post-excerpt">{{ issue.data.excerpt }}</p>
    {% endif %}

    <a href="{{ issue.url }}" class="read-more">Read issue →</a>
  </article>
  {% endfor %}
</div>

</div>
