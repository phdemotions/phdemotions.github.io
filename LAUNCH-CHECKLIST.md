# Launch Checklist

Complete this checklist before launching joshgonzales.ca to the public.

## Pre-Launch: Content

### Site Information
- [ ] Update `src/_data/site.json` with your actual information
  - [ ] Name and title
  - [ ] Bio/description
  - [ ] Email address
  - [ ] Google Scholar URL
  - [ ] Twitter handle (if applicable)
  - [ ] Site URL (joshgonzales.ca)

### About Page
- [ ] Edit `content/pages/about.md` with your full bio
- [ ] Add your research interests
- [ ] List your current projects
- [ ] Add educational background
- [ ] Update "last updated" date

### Homepage
- [ ] Add your headshot image
  - [ ] Save as `src/assets/images/headshot.jpg`
  - [ ] Update `src/_layouts/home.njk` to use actual image
  - [ ] Optimize image size (<500KB)
- [ ] Verify bio displays correctly
- [ ] Check all links work

### Publications
- [ ] Delete sample publication
- [ ] Add your actual publications
- [ ] Verify Google Scholar link works
- [ ] Update citation counts
- [ ] Add PDF links if available

### Projects
- [ ] Edit or delete dissertation research sample
- [ ] Add your actual research projects
- [ ] Set correct status for each project
- [ ] Add project links

### Media
- [ ] Delete sample media entries
- [ ] Add your actual media appearances
- [ ] Verify all external links work
- [ ] Add recent articles from The Conversation, Psychology Today, etc.

### Blog
- [ ] Delete or edit sample blog posts
- [ ] Write your first real post
- [ ] Set featured post for homepage
- [ ] Verify blog URL structure (/blog/YYYY/slug/)

### Newsletter
- [ ] Delete sample newsletter issue
- [ ] Decide on newsletter strategy
- [ ] Plan first newsletter content

### CV
- [ ] Replace `src/assets/cv.pdf` with your actual CV
- [ ] Verify CV link works
- [ ] Ensure PDF is up to date

## Pre-Launch: Styling & Branding

### Visual Identity
- [ ] Create or add actual headshot photo
- [ ] Create custom favicon (optional - default JG logo included)
- [ ] Choose accent color (optional - default blue #0066cc)
- [ ] Review typography choices

### Branding Consistency
- [ ] Consistent name usage across all pages
- [ ] Bio matches other platforms
- [ ] Professional photo quality
- [ ] Color scheme matches personal brand

## Pre-Launch: Technical Setup

### ConvertKit Integration
- [ ] Create ConvertKit account (if not already done)
- [ ] Create signup form
- [ ] Get embed code
- [ ] Add embed code to `src/_layouts/home.njk`
- [ ] Add embed code to `content/pages/newsletter.md`
- [ ] Test form submission
- [ ] Set up RSS-to-email automation
  - [ ] Add feed URL: https://joshgonzales.ca/feed.xml
  - [ ] Configure frequency
  - [ ] Customize email template
  - [ ] Test with your email

### Analytics (Optional)
- [ ] Create Google Analytics 4 property
- [ ] Get measurement ID
- [ ] Add to `src/_layouts/base.njk`
- [ ] Verify tracking works in GA4 real-time view

### Domain Setup
- [ ] Purchase domain: joshgonzales.ca (if not done)
- [ ] Configure DNS records:
  - [ ] A record: @ → 185.199.108.153
  - [ ] A record: @ → 185.199.109.153
  - [ ] A record: @ → 185.199.110.153
  - [ ] A record: @ → 185.199.111.153
  - [ ] CNAME: www → phdemotions.github.io
- [ ] Wait for DNS propagation (up to 48 hours)

### GitHub Setup
- [ ] Create repository: phdemotions.github.io
- [ ] Push code to GitHub
- [ ] Go to Settings → Pages
- [ ] Set Source to "GitHub Actions"
- [ ] Add custom domain: joshgonzales.ca
- [ ] Enable "Enforce HTTPS"
- [ ] Wait for deployment (check Actions tab)

## Pre-Launch: Testing

### Local Testing
- [ ] Run `npm install`
- [ ] Run `npm start`
- [ ] Test all pages locally
- [ ] Check mobile responsiveness
- [ ] Test dark mode
- [ ] Verify navigation works

### Build Testing
- [ ] Run `npm run build`
- [ ] Check for build errors
- [ ] Verify _site folder contents
- [ ] Test built site locally

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Page-by-Page Review
- [ ] Homepage
  - [ ] Hero section displays correctly
  - [ ] Featured posts show
  - [ ] Latest blog posts show
  - [ ] Newsletter signup visible
  - [ ] Media appearances visible (if any)
  - [ ] All links work
- [ ] About page
  - [ ] Bio reads well
  - [ ] Links work
  - [ ] CV download works
- [ ] Blog
  - [ ] Post list displays
  - [ ] Tags work
  - [ ] Tag pages work
  - [ ] Individual posts display correctly
  - [ ] Reading time shows
  - [ ] Related posts work
- [ ] Projects
  - [ ] Project grid displays
  - [ ] Individual project pages work
  - [ ] Status badges show correctly
- [ ] Publications
  - [ ] Publications list correctly
  - [ ] Links work
  - [ ] JSON-LD validates
- [ ] Media
  - [ ] Media list displays
  - [ ] External links work
  - [ ] Dates show correctly
- [ ] Newsletter
  - [ ] Archive page works
  - [ ] Individual issues display
  - [ ] Signup form visible

### Technical Validation
- [ ] HTML validation: https://validator.w3.org/
- [ ] CSS validation: https://jigsaw.w3.org/css-validator/
- [ ] RSS feed validation: https://validator.w3.org/feed/
- [ ] Accessibility check: https://wave.webaim.org/
- [ ] Mobile-friendly test: https://search.google.com/test/mobile-friendly
- [ ] Page speed: https://pagespeed.web.dev/

### SEO Checks
- [ ] Meta descriptions on all pages
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Sitemap accessible: /sitemap.xml
- [ ] Robots.txt accessible: /robots.txt
- [ ] RSS feed accessible: /feed.xml
- [ ] Canonical URLs set correctly
- [ ] All images have alt text
- [ ] Headings hierarchy correct (H1 → H2 → H3)

### Social Media Validation
- [ ] Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Launch Day

### Final Checks
- [ ] All placeholder content removed
- [ ] All sample content deleted or updated
- [ ] Personal information accurate
- [ ] Links tested one more time
- [ ] Mobile display checked
- [ ] Newsletter signup tested

### Deployment
- [ ] Push final changes to GitHub
- [ ] Monitor Actions tab for successful deployment
- [ ] Visit live site: https://joshgonzales.ca
- [ ] Test HTTPS works
- [ ] Test www redirect (if configured)
- [ ] Clear browser cache and test again

### Search Engine Submission
- [ ] Submit to Google Search Console
  - [ ] Add property
  - [ ] Verify ownership
  - [ ] Submit sitemap
- [ ] Submit to Bing Webmaster Tools (optional)
- [ ] Check robots.txt allows crawling

## Post-Launch

### First Week
- [ ] Monitor Google Analytics (if enabled)
- [ ] Check for broken links
- [ ] Monitor email signups
- [ ] Test newsletter workflow
- [ ] Check search console for errors

### Content
- [ ] Schedule first newsletter
- [ ] Plan first blog post (if not published)
- [ ] Share launch on social media
- [ ] Update LinkedIn with website
- [ ] Update Twitter bio with website
- [ ] Update email signature

### Promotion
- [ ] Share on LinkedIn
- [ ] Share on Twitter
- [ ] Add to academic profiles
- [ ] Update ResearchGate profile
- [ ] Update Google Scholar profile
- [ ] Add to university directory (if applicable)
- [ ] Share with colleagues
- [ ] Add to email signature

### Maintenance Schedule
- [ ] Update publications quarterly
- [ ] Update projects as they progress
- [ ] Blog at least monthly
- [ ] Newsletter at least monthly
- [ ] Update CV annually
- [ ] Check for broken links quarterly
- [ ] Update citation counts semi-annually

## Ongoing Optimization

### Monthly
- [ ] Review analytics
- [ ] Update featured posts if needed
- [ ] Check for technical issues
- [ ] Respond to any newsletter subscribers

### Quarterly
- [ ] Update publications
- [ ] Review and update projects
- [ ] Update CV if needed
- [ ] Audit content for accuracy
- [ ] Check all external links

### Annually
- [ ] Review entire site content
- [ ] Update About page
- [ ] Refresh design if needed
- [ ] Review SEO performance
- [ ] Update copyright year in footer

## Success Metrics

Track these metrics to measure success:

### Traffic
- [ ] Monthly unique visitors
- [ ] Page views per session
- [ ] Most popular content
- [ ] Traffic sources

### Engagement
- [ ] Email subscribers
- [ ] Newsletter open rates
- [ ] Average time on page
- [ ] Blog post read completion

### Academic Impact
- [ ] Increase in citation views from site traffic
- [ ] Media inquiries received
- [ ] Speaking invitations
- [ ] Research collaboration requests

---

## Launch Date: __________

**Launched by:** __________

**Notes:**
_____________________
_____________________
_____________________

---

Congratulations on launching your academic website! 🎉
