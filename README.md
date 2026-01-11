# joshgonzales.ca

Academic portfolio and blog for Josh Gonzales - PhD candidate studying consumer psychology at the University of Guelph.

## Features

- **Static Site Generator**: Built with [Eleventy](https://www.11ty.dev/) for fast, accessible, and SEO-optimized pages
- **Minimal Design**: Clean, academic aesthetic with system fonts and dark mode support
- **Content Collections**: Blog posts, research projects, publications, media appearances, and newsletter archive
- **RSS Feed**: Full-text RSS feed for blog subscribers
- **SEO Optimized**: Open Graph tags, Twitter Cards, JSON-LD structured data, and semantic HTML
- **Accessibility**: WCAG compliant with ARIA labels, skip links, and keyboard navigation
- **Performance**: <100KB initial load, no external dependencies, no render-blocking resources

## Site Structure

```
.
├── content/               # All markdown content
│   ├── blog/             # Blog posts (organized by year)
│   ├── projects/         # Research projects
│   ├── publications/     # Academic publications
│   ├── media/            # Media appearances
│   ├── newsletter/       # Newsletter archive
│   └── pages/            # Static pages (About, etc.)
├── src/
│   ├── _layouts/         # Nunjucks templates
│   ├── _includes/        # Reusable components
│   ├── _data/            # Site metadata
│   └── assets/           # CSS, images, etc.
├── .eleventy.js          # Eleventy configuration
└── _site/                # Generated site (git-ignored)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/phdemotions/phdemotions.github.io.git
   cd phdemotions.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to `http://localhost:8080`

### Available Commands

- `npm start` - Start development server with live reload
- `npm run build` - Build production site to `_site/` directory
- `npm run clean` - Remove the `_site/` directory

## Content Management

### Creating a Blog Post

Create a new markdown file in `content/blog/YYYY/your-post-slug.md`:

```markdown
---
title: "Your Post Title"
date: 2025-01-15
excerpt: "A brief summary of your post (required for SEO and previews)"
tags: ["consumer psychology", "research"]
published: true
featured: false
layout: post.njk
canonical_url: "https://example.com/original-post" # Optional, for crossposts
---

Your content here...
```

**URL Structure**: Blog posts are automatically organized by year: `/blog/YYYY/slug/`

**Frontmatter Fields**:
- `title` (required): Post title
- `date` (required): Publication date
- `excerpt` (required): Summary for previews and SEO
- `tags` (optional): Array of tags for categorization
- `published` (default: true): Set to `false` for drafts
- `featured` (default: false): Set to `true` to feature on homepage
- `canonical_url` (optional): For cross-posted articles
- `layout` (required): Use `post.njk`

### Creating a Project

Create a markdown file in `content/projects/project-name.md`:

```markdown
---
title: "Project Title"
description: "Brief project description"
status: "active" # Options: active, completed, planned
order: 1 # Lower numbers appear first
tags: ["research", "consumer psychology"]
layout: project.njk
links:
  - label: "Project Website"
    url: "https://example.com"
  - label: "GitHub Repository"
    url: "https://github.com/username/repo"
---

Detailed project information...
```

### Adding a Publication

Create a markdown file in `content/publications/publication-slug.md`:

```markdown
---
title: "Publication Title"
authors: "Gonzales, J., Smith, A., & Johnson, R."
journal: "Journal Name"
journal_url: "https://journal-website.com"
year: 2024
volume: 34
issue: 2
pages: "245-267"
citations: 12 # Update manually
doi: "10.1016/j.example.2024.01.001"
pdf_url: "/assets/publications/filename.pdf" # Optional
abstract: "Brief abstract of the publication"
---
```

The publications page will automatically generate JSON-LD structured data for each publication.

### Adding Media Appearances

Create a markdown file in `content/media/outlet-slug.md`:

```markdown
---
outlet: "The Conversation"
title: "Article Title"
url: "https://theconversation.com/article-url"
date: 2024-10-15
excerpt: "Brief description of the article or appearance"
---
```

### Newsletter Archive

Create newsletter issues in `content/newsletter/YYYY/issue-slug.md`:

```markdown
---
title: "Newsletter Issue Title"
date: 2024-12-01
excerpt: "Brief summary of this issue"
layout: newsletter.njk
---

Newsletter content...
```

## Customization

### Site Metadata

Edit `src/_data/site.json` to update:
- Site name and description
- Contact information
- Google Scholar URL
- CV URL
- Social media handles

### Styling

The site uses a minimal design system with:
- System fonts (Georgia for headings, system UI fonts for body)
- Automatic dark mode via `prefers-color-scheme`
- CSS custom properties for easy theming
- Mobile-first responsive design

Edit `src/assets/css/main.css` to customize colors, fonts, or spacing. All design tokens are defined in CSS custom properties at the top of the file.

### Navigation

Update the main navigation in `src/_includes/header.njk`.

### Footer

Update footer content in `src/_includes/footer.njk`.

## Newsletter Integration (ConvertKit)

### Email Signup Form

1. Go to your ConvertKit dashboard
2. Create or select your form
3. Click "Embed" and choose "HTML"
4. Copy the embed code
5. Paste it in the newsletter signup sections:
   - `src/_layouts/home.njk` (homepage)
   - `content/pages/newsletter.md` (newsletter archive page)

Replace the placeholder comments with your actual embed code.

### RSS-to-Email Automation

To automatically send new blog posts to subscribers:

1. In ConvertKit, go to "Broadcasts" → "RSS"
2. Add your RSS feed URL: `https://joshgonzales.ca/feed.xml`
3. Configure frequency (e.g., check daily for new posts)
4. Customize your email template
5. Enable the RSS automation

ConvertKit will automatically send new blog posts to your subscribers.

### Newsletter Archive

To republish email newsletters on your site:

1. Copy your newsletter content
2. Create a new file in `content/newsletter/YYYY/`
3. Add frontmatter with title, date, and excerpt
4. Paste your content
5. The newsletter will appear in your archive at `/newsletter/`

## Deployment

### GitHub Pages Setup

This site is configured for automatic deployment to GitHub Pages.

1. **Repository Settings**:
   - Ensure your repository is named `phdemotions.github.io`
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Custom Domain**:
   - The `CNAME` file is already configured with `joshgonzales.ca`
   - In your DNS provider, add these records:
     ```
     A record: @ → 185.199.108.153
     A record: @ → 185.199.109.153
     A record: @ → 185.199.110.153
     A record: @ → 185.199.111.153
     CNAME record: www → phdemotions.github.io
     ```
   - In GitHub Settings → Pages, add custom domain: `joshgonzales.ca`
   - Enable "Enforce HTTPS"

3. **Deployment**:
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Check the "Actions" tab to monitor deployment

### Local Testing

Before pushing, test the production build locally:

```bash
npm run build
cd _site
python3 -m http.server 8000
```

Visit `http://localhost:8000` to preview the built site.

## SEO & Analytics

### Google Analytics 4

To enable analytics:

1. Create a GA4 property
2. Get your measurement ID (format: `G-XXXXXXXXXX`)
3. Edit `src/_layouts/base.njk`
4. Find the commented GA4 code
5. Uncomment it and replace `G-XXXXXXXXXX` with your ID

### Monitoring

The site includes:
- Full-text RSS feed at `/feed.xml`
- XML sitemap at `/sitemap.xml`
- `robots.txt` for search engine crawling
- Open Graph and Twitter Card meta tags
- JSON-LD structured data for publications

## Performance

The site is optimized for performance:

- No external dependencies (CDNs, web fonts, etc.)
- Critical CSS inlined in HTML
- Images lazy-loaded by default
- Minimal JavaScript (only analytics if enabled)
- Static generation (no server-side processing)

Target: <100KB initial page load

## Accessibility

The site follows WCAG 2.1 Level AA guidelines:

- Semantic HTML throughout
- ARIA labels where appropriate
- Skip links for keyboard navigation
- Sufficient color contrast
- Responsive text sizing
- Focus indicators
- Alt text for images

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Graceful degradation of CSS features

## License

Content: All rights reserved to Josh Gonzales
Code: MIT License (see below)

---

## Development Notes

### File Naming Conventions

- Blog posts: `content/blog/YYYY/kebab-case-title.md`
- Projects: `content/projects/kebab-case-name.md`
- Publications: `content/publications/kebab-case-title.md`

### Markdown Features

Supported markdown features:
- Headings (H1-H6)
- Links (internal and external)
- Images with alt text
- Ordered and unordered lists
- Blockquotes (styled as pull quotes)
- Code blocks with syntax highlighting
- Tables
- Footnotes

### URL Slugification

URLs are automatically generated from filenames and use kebab-case.

### Date Handling

All dates use JavaScript Date objects and are formatted with Luxon. Dates in frontmatter should use ISO format: `YYYY-MM-DD`.

## Troubleshooting

### Build Errors

**Error: "Cannot find module"**
- Run `npm install` to ensure all dependencies are installed

**Error: Collection not found**
- Check that your content files are in the correct directories
- Verify frontmatter is valid YAML

**Error: Template not found**
- Ensure `layout` field in frontmatter matches a file in `src/_layouts/`

### Content Not Appearing

- Check that `published` is not set to `false`
- Verify the file is in the correct collection directory
- Check frontmatter for typos

### Styling Issues

- Clear browser cache
- Check that CSS file is being copied (run `npm run build`)
- Verify CSS custom properties in `:root`

## Contributing

This is a personal website, but if you notice bugs or have suggestions:

1. Open an issue on GitHub
2. Describe the problem or suggestion
3. Include screenshots if relevant

## Contact

- Email: [Your email]
- Google Scholar: [Link from site.json]
- Website: https://joshgonzales.ca

---

Built with ❤️ using [Eleventy](https://www.11ty.dev/)
