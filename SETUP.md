# Quick Setup Guide

Get your site running in 5 minutes.

## 1. Install Dependencies

```bash
npm install
```

## 2. Update Site Information

Edit `src/_data/site.json` with your information:

```json
{
  "name": "Your Name",
  "title": "Your Name - Your Title",
  "description": "Your bio",
  "url": "https://yourdomain.com",
  "author": {
    "name": "Your Name",
    "email": "your@email.com",
    "twitter": "@yourhandle"
  },
  "googleScholar": "your-google-scholar-url",
  "cvUrl": "/assets/cv.pdf"
}
```

## 3. Add Your Content

### Replace Sample Content

1. **About Page**: Edit `content/pages/about.md`
2. **Homepage Bio**: Automatically pulls from `site.json`
3. **First Blog Post**: Edit or delete `content/blog/2025/welcome-to-my-new-site.md`

### Add Your Headshot

1. Add your photo to `src/assets/images/headshot.jpg`
2. Edit `src/_layouts/home.njk` line 19-24 to uncomment the image

### Add Your Publications

1. Delete `content/publications/sample-publication.md`
2. Create new files for each publication (see README for format)

### Add Your Projects

1. Delete or edit `content/projects/dissertation-research.md`
2. Create new project files as needed

### Add Media Appearances

1. Delete sample media files in `content/media/`
2. Add your own media appearances

## 4. Start Development Server

```bash
npm start
```

Visit `http://localhost:8080`

## 5. Customize Styling (Optional)

Edit `src/assets/css/main.css`:

- Change accent color: Search for `--color-accent`
- Adjust spacing: Modify spacing variables in `:root`
- Font preferences: Update font families

## 6. Add Newsletter Signup

### Get ConvertKit Embed Code

1. Log in to ConvertKit
2. Create a form
3. Click "Embed" → "HTML"
4. Copy the code

### Add to Site

Replace placeholder comments in:
- `src/_layouts/home.njk` (line 49)
- `content/pages/newsletter.md` (line 18)

### Setup RSS-to-Email

1. In ConvertKit: Broadcasts → RSS
2. Add feed: `https://yourdomain.com/feed.xml`
3. Configure frequency
4. Customize template

## 7. Enable Analytics (Optional)

### Google Analytics 4

1. Create GA4 property
2. Get measurement ID (G-XXXXXXXXXX)
3. Edit `src/_layouts/base.njk`
4. Uncomment lines 36-43
5. Replace tracking ID

## 8. Deploy to GitHub Pages

### Initial Setup

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

### Configure GitHub Pages

1. Go to repository Settings → Pages
2. Source: "GitHub Actions"
3. Wait for deployment (check Actions tab)

### Add Custom Domain

1. In DNS provider, add A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
2. In GitHub: Settings → Pages → Custom domain
3. Enter your domain
4. Enable "Enforce HTTPS"

## 9. First Blog Post

Create `content/blog/2025/my-first-post.md`:

```markdown
---
title: "My First Post"
date: 2025-01-15
excerpt: "A brief introduction to my new site"
tags: ["announcements"]
published: true
featured: true
layout: post.njk
---

Your content here...
```

## 10. Test Everything

Before going live:

- [ ] Check all pages load correctly
- [ ] Test navigation links
- [ ] Verify RSS feed at `/feed.xml`
- [ ] Test dark mode
- [ ] Check mobile responsiveness
- [ ] Validate HTML at validator.w3.org
- [ ] Test accessibility with browser tools
- [ ] Verify meta tags with Twitter/Facebook debuggers

## Next Steps

- Add more content regularly
- Set up email newsletter workflow
- Update CV and publications
- Promote your site on social media
- Submit to academic directories

## Getting Help

- Read the full README.md
- Check .eleventy.js.md for configuration details
- Eleventy documentation: https://www.11ty.dev/docs/

---

You're ready to launch! 🚀
