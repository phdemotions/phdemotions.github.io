# Content Style Guide

Guidelines for creating and maintaining content on joshgonzales.ca

## Writing Principles

### Academic Credibility
- Use clear, precise language
- Cite sources when making research claims
- Explain technical concepts for general audiences
- Maintain scholarly tone while being accessible

### Voice & Tone
- **Professional but approachable**: Academic without being stuffy
- **Authoritative**: Draw on research expertise
- **Helpful**: Aim to educate and inform
- **Authentic**: Share genuine insights and perspectives

## Content Types

### Blog Posts

**Purpose**: Share research insights, commentary on consumer psychology, and thoughtful analysis

**Best Practices**:
- **Length**: 800-2000 words (optimal for readability and SEO)
- **Structure**: Use clear headings (H2, H3) to organize content
- **Opening**: Start with a hook or compelling question
- **Evidence**: Include research findings, examples, or data
- **Conclusion**: End with takeaways or implications
- **Excerpt**: Write compelling 1-2 sentence summary (required)

**Example Structure**:
```markdown
# Title (H1 - auto-generated from frontmatter)

Opening paragraph with hook...

## Main Point 1 (H2)

Content with evidence...

### Supporting Detail (H3)

More specific information...

## Main Point 2 (H2)

...

## Conclusion

Key takeaways...
```

**Tags**: Use consistent tags:
- Research areas: "consumer psychology", "behavioral economics", "decision-making"
- Methods: "research", "meta-analysis", "experiments"
- Topics: "emotions", "branding", "marketing"
- General: "announcements", "commentary"

### Publications

**Required Fields**:
- Full citation information
- Abstract (if available)
- Links to PDF or DOI

**Best Practices**:
- Update citation counts quarterly
- Link to open access versions when available
- Use consistent author name format

### Projects

**Purpose**: Showcase ongoing research and initiatives

**Best Practices**:
- Keep status updated (active/completed/planned)
- Link to related publications
- Explain implications for broader audiences
- Update timeline as project progresses

### Media Appearances

**Purpose**: Document external writing and media coverage

**Best Practices**:
- Include publication name prominently
- Add date of publication
- Write brief excerpt explaining the piece
- Link to original source

### Newsletter

**Purpose**: Regular insights delivered via email, archived on site

**Best Practices**:
- Consistent sending schedule
- Mix of original insights and research highlights
- Personal and conversational tone
- Clear value proposition
- Call-to-action (engage with research, reply, etc.)

## SEO Best Practices

### Meta Descriptions (Excerpts)
- **Length**: 120-160 characters
- **Include**: Key topic and value proposition
- **Avoid**: Clickbait or misleading summaries
- **Format**: Complete sentences

**Good**: "New research reveals how specific emotions like anxiety and excitement influence purchasing decisions and brand loyalty."

**Bad**: "You won't believe what emotions do to shopping!"

### Titles
- **Length**: Under 60 characters (for search results)
- **Format**: Specific and descriptive
- **Include**: Main keyword/topic
- **Avoid**: Excessive punctuation or ALL CAPS

**Good**: "Understanding Emotional Decision-Making in Consumer Behavior"

**Bad**: "EMOTIONS!!! How They TOTALLY Control Your Shopping (SHOCKING)"

### Keywords
- Use natural language (not keyword stuffing)
- Include topic in first paragraph
- Use variations of main concepts
- Link to related internal content

### Internal Linking
- Link to related blog posts
- Cross-reference publications and projects
- Use descriptive anchor text
- Avoid "click here" links

## Formatting Guidelines

### Headings
- **H1**: Title only (auto-generated from frontmatter)
- **H2**: Main sections
- **H3**: Subsections
- **H4**: Specific points (use sparingly)

### Lists
- Use bulleted lists for unordered items
- Use numbered lists for sequential steps or rankings
- Keep items parallel in structure

### Emphasis
- **Bold**: Key terms, emphasis
- *Italic*: Publications, emphasis, foreign terms
- > Blockquotes: Pull quotes, important takeaways

### Links
- Link to sources and citations
- Use descriptive link text
- External links: Open in new tab (auto-configured for media)
- Internal links: Same tab

### Images
- Always include alt text
- Use descriptive filenames
- Optimize for web (<200KB)
- Place in `content/assets/images/`
- Credit sources when necessary

**Markdown Format**:
```markdown
![Descriptive alt text for accessibility](/content/assets/images/filename.jpg)
```

## Cross-Posting Guidelines

When republishing content from The Conversation, Psychology Today, etc:

1. **Add canonical URL** in frontmatter:
   ```yaml
   canonical_url: "https://theconversation.com/original-article"
   ```

2. **Note at top of post**: The template automatically adds a notice for cross-posts

3. **Wait appropriate time**: Follow publication guidelines for timing

4. **Include full content**: Don't link to external site, republish in full

5. **Update formatting**: Adapt for your site's style

## Accessibility

### Writing
- Use plain language where possible
- Explain technical terms on first use
- Break up long paragraphs
- Use descriptive headings
- Provide context for links

### Images
- All images need alt text
- Describe what's shown, not "image of"
- For charts: Describe the key finding

### Media
- Provide transcripts for audio/video
- Caption videos when possible

## Publication Workflow

### Before Publishing

- [ ] Proofread for typos and grammar
- [ ] Check all links work
- [ ] Verify images display correctly
- [ ] Test on mobile
- [ ] Review excerpt for clarity
- [ ] Ensure tags are consistent
- [ ] Add alt text to images

### Publishing Checklist

1. Set `published: true` in frontmatter
2. Set `featured: true` if appropriate for homepage
3. Run `npm run build` to test
4. Commit and push to GitHub
5. Verify deployment in Actions tab
6. Check live site
7. Share on social media

### After Publishing

- Add to newsletter if appropriate
- Share on relevant platforms
- Monitor for comments/feedback
- Update if needed (maintain version history)

## Content Calendar

### Regular Cadence
- **Blog**: 1-2 posts per month minimum
- **Newsletter**: Monthly (aligned with blog posts)
- **Publications**: Update as published
- **Projects**: Update quarterly
- **Media**: Add as published

### Content Ideas
- Research explainers
- Commentary on current events
- Deep dives into specific emotions
- Methodological discussions
- Career/academic advice
- Conference recaps
- Book/article reviews

## Brand Voice Examples

### ✅ Good Examples

"Recent research in consumer psychology reveals that discrete emotions—like fear, joy, and anger—have distinct effects on purchasing decisions, even when overall mood is controlled."

"As a PhD candidate studying consumer behavior, I'm often asked: 'Why do I buy things I don't need?' The answer is more nuanced than a simple lack of self-control."

### ❌ Avoid

"SHOCKING new study DESTROYS everything you thought about shopping!"

"As the world's leading expert in emotions..." (overly promotional)

"I'm just a grad student, so take this with a grain of salt..." (undermining expertise)

## Updating This Guide

This guide should evolve with the site. Update as you:
- Discover what resonates with your audience
- Develop new content types
- Refine your voice
- Learn from analytics

---

Remember: Quality over quantity. Every piece should provide value and reflect your expertise.
