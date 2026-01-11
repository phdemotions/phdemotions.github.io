# Project Structure

Complete overview of the joshgonzales.ca site structure.

## Directory Tree

```
phdemotions.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages deployment workflow
├── content/                         # All markdown content
│   ├── blog/
│   │   ├── 2024/
│   │   │   └── understanding-emotional-decision-making.md
│   │   └── 2025/
│   │       └── welcome-to-my-new-site.md
│   ├── media/
│   │   ├── conversation-article.md
│   │   └── psychology-today.md
│   ├── newsletter/
│   │   └── 2024/
│   │       └── issue-001.md
│   ├── pages/
│   │   ├── about.md
│   │   ├── blog.md
│   │   ├── media.md
│   │   ├── newsletter.md
│   │   └── publications.md
│   ├── projects/
│   │   └── dissertation-research.md
│   └── publications/
│       └── sample-publication.md
├── src/
│   ├── _data/
│   │   └── site.json              # Site metadata and configuration
│   ├── _includes/
│   │   ├── footer.njk             # Footer component
│   │   ├── header.njk             # Header and navigation
│   │   └── post-card.njk          # Reusable blog post card
│   ├── _layouts/
│   │   ├── base.njk               # Base HTML template
│   │   ├── blog.njk               # Blog list page
│   │   ├── home.njk               # Homepage layout
│   │   ├── newsletter.njk         # Newsletter issue layout
│   │   ├── post.njk               # Blog post layout
│   │   ├── project.njk            # Individual project layout
│   │   └── publications.njk       # Publications page layout
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css           # All site styles
│   │   ├── cv.pdf                 # Placeholder for CV
│   │   └── favicon.svg            # Site favicon
│   ├── blog-tag.njk               # Template for individual tag pages
│   ├── blog-tags.njk              # All tags list page
│   ├── feed.njk                   # RSS feed template
│   ├── robots.txt                 # Search engine instructions
│   └── sitemap.njk                # XML sitemap template
├── .eleventy.js                   # Eleventy configuration
├── .eleventy.js.md                # Configuration documentation
├── .gitignore                     # Git ignore rules
├── CNAME                          # Custom domain for GitHub Pages
├── CONTENT-GUIDE.md               # Content writing guidelines
├── LICENSE                        # MIT license for code
├── package.json                   # NPM dependencies and scripts
├── PROJECT-STRUCTURE.md           # This file
├── README.md                      # Main documentation
├── SETUP.md                       # Quick setup guide
└── index.md                       # Homepage content
```

## Key Files Explained

### Configuration Files

**`.eleventy.js`**
- Main Eleventy configuration
- Defines collections (blog, projects, publications, etc.)
- Custom filters for dates, reading time, related posts
- Markdown processing settings
- Passthrough copy rules

**`package.json`**
- NPM dependencies
- Build scripts
- Project metadata

**`.gitignore`**
- Excludes node_modules, _site, and system files from git

**`CNAME`**
- Tells GitHub Pages to use joshgonzales.ca domain

### Content Directories

**`content/blog/YYYY/`**
- Blog posts organized by year
- URL structure: `/blog/YYYY/slug/`

**`content/projects/`**
- Research project descriptions
- Individual project pages

**`content/publications/`**
- Academic publication entries
- Generates JSON-LD structured data

**`content/media/`**
- Media appearances and articles
- Links to external publications

**`content/newsletter/`**
- Newsletter archive
- Republished email content

**`content/pages/`**
- Static pages (About, etc.)
- Custom URLs via permalink

### Templates

**`src/_layouts/base.njk`**
- Base HTML structure
- Meta tags (SEO, Open Graph, Twitter Cards)
- Header and footer includes

**`src/_layouts/home.njk`**
- Homepage-specific layout
- Hero section
- Featured posts
- Newsletter signup
- Latest blog posts

**`src/_layouts/post.njk`**
- Blog post template
- Reading time calculation
- Related posts
- Canonical URL notice

**`src/_layouts/blog.njk`**
- Blog list/archive page
- Shows all published posts

**`src/_layouts/publications.njk`**
- Publications list
- JSON-LD structured data
- Citation information

**`src/_layouts/project.njk`**
- Individual project pages
- Status badges
- Project links

**`src/_layouts/newsletter.njk`**
- Newsletter issue template
- Newsletter signup CTA

### Components

**`src/_includes/header.njk`**
- Site navigation
- Logo/site name
- Active page indicator

**`src/_includes/footer.njk`**
- Footer links
- Copyright notice
- Site information

**`src/_includes/post-card.njk`**
- Reusable blog post preview
- Used on homepage, blog list, related posts
- Shows title, date, tags, excerpt

### Generated Pages

**`src/blog-tags.njk`**
- Lists all tags used across blog
- URL: `/blog/tags/`

**`src/blog-tag.njk`**
- Individual tag archive pages
- Uses pagination to create page per tag
- URL: `/blog/tags/[tag-name]/`

**`src/feed.njk`**
- RSS feed generation
- Full-text posts
- URL: `/feed.xml`

**`src/sitemap.njk`**
- XML sitemap for search engines
- All pages, posts, and content
- URL: `/sitemap.xml`

### Styling

**`src/assets/css/main.css`**
- Complete site styles
- CSS custom properties for theming
- Dark mode support via media query
- Mobile-first responsive design
- No external dependencies

### Deployment

**`.github/workflows/deploy.yml`**
- GitHub Actions workflow
- Automatically builds and deploys on push to main
- Node.js 20, npm install, build, deploy

### Documentation

**`README.md`**
- Complete project documentation
- Setup instructions
- Content management guide
- Deployment instructions
- Troubleshooting

**`SETUP.md`**
- Quick start guide
- Step-by-step setup
- First-time configuration

**`CONTENT-GUIDE.md`**
- Writing guidelines
- SEO best practices
- Brand voice
- Content workflow

**`.eleventy.js.md`**
- Configuration reference
- Collection definitions
- Filter documentation

**`LICENSE`**
- MIT license for code
- Content copyright notice

## Content Frontmatter Reference

### Blog Posts
```yaml
title: "Post Title"
date: 2025-01-15
excerpt: "Required summary"
tags: ["tag1", "tag2"]
published: true
featured: false
layout: post.njk
canonical_url: "https://..." # Optional
```

### Projects
```yaml
title: "Project Title"
description: "Brief description"
status: "active" # active|completed|planned
order: 1
tags: ["tag1"]
layout: project.njk
links:
  - label: "Link Name"
    url: "https://..."
```

### Publications
```yaml
title: "Publication Title"
authors: "Author1, Author2"
journal: "Journal Name"
journal_url: "https://..."
year: 2024
volume: 34
issue: 2
pages: "245-267"
citations: 12
doi: "10.1016/..."
pdf_url: "/assets/..."
abstract: "Abstract text"
```

### Media
```yaml
outlet: "Publication Name"
title: "Article Title"
url: "https://..."
date: 2024-10-15
excerpt: "Brief description"
```

### Newsletter
```yaml
title: "Issue Title"
date: 2024-12-01
excerpt: "Issue summary"
layout: newsletter.njk
```

## Build Process

1. **Input**: Markdown files in `content/` and templates in `src/`
2. **Processing**: Eleventy processes through Nunjucks
3. **Collections**: Content organized into collections
4. **Filters**: Date formatting, reading time, etc.
5. **Output**: Static HTML files in `_site/`
6. **Assets**: CSS, images copied to `_site/assets/`

## URL Structure

- Homepage: `/`
- About: `/about/`
- Blog list: `/blog/`
- Blog post: `/blog/YYYY/slug/`
- Tag list: `/blog/tags/`
- Tag archive: `/blog/tags/tag-name/`
- Projects list: `/projects/`
- Individual project: `/projects/slug/`
- Publications: `/publications/`
- Media: `/media/`
- Newsletter archive: `/newsletter/`
- Newsletter issue: `/newsletter/slug/`
- RSS feed: `/feed.xml`
- Sitemap: `/sitemap.xml`

## Performance Optimizations

- Static generation (no server-side processing)
- Minimal CSS (<100KB total)
- No JavaScript frameworks
- System fonts (no web font loading)
- Lazy image loading (browser native)
- Single CSS file
- No external CDNs

## SEO Features

- Semantic HTML
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data (publications)
- XML sitemap
- RSS feed
- Robots.txt
- Canonical URLs
- Meta descriptions
- Alt text on images

## Accessibility Features

- Skip links
- ARIA labels
- Semantic HTML
- Keyboard navigation
- Focus indicators
- Color contrast (WCAG AA)
- Responsive text sizing
- Screen reader friendly

---

Last updated: January 2025
