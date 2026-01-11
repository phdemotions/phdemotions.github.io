const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("content/assets");
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});

  // Collections
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/**/*.md")
      .filter(post => post.data.published !== false)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("featuredPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/**/*.md")
      .filter(post => post.data.published !== false && post.data.featured === true)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/projects/**/*.md")
      .sort((a, b) => (b.data.order || 999) - (a.data.order || 999));
  });

  eleventyConfig.addCollection("publications", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/publications/**/*.md")
      .sort((a, b) => (b.data.year || 0) - (a.data.year || 0));
  });

  eleventyConfig.addCollection("media", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/media/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("newsletter", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/newsletter/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Get all unique tags
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        const tags = item.data.tags;
        if (typeof tags === "string") {
          tagSet.add(tags);
        } else if (Array.isArray(tags)) {
          tags.forEach(tag => tagSet.add(tag));
        }
      }
    });
    return Array.from(tagSet).sort();
  });

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL dd, yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-MM-dd");
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });

  eleventyConfig.addFilter("yearFromDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy");
  });

  // Reading time filter (approximation: 200 words per minute)
  eleventyConfig.addFilter("readingTime", (text) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/g).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  });

  // Limit filter
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  // Related posts filter (based on shared tags)
  eleventyConfig.addFilter("relatedPosts", (collection, currentPost, limit = 3) => {
    if (!currentPost.data.tags) return [];

    const currentTags = Array.isArray(currentPost.data.tags)
      ? currentPost.data.tags
      : [currentPost.data.tags];

    return collection
      .filter(post => {
        // Exclude current post
        if (post.url === currentPost.url) return false;

        // Must be published
        if (post.data.published === false) return false;

        // Check for shared tags
        if (!post.data.tags) return false;
        const postTags = Array.isArray(post.data.tags)
          ? post.data.tags
          : [post.data.tags];

        return postTags.some(tag => currentTags.includes(tag));
      })
      .sort((a, b) => {
        // Sort by number of shared tags (descending)
        const aTags = Array.isArray(a.data.tags) ? a.data.tags : [a.data.tags];
        const bTags = Array.isArray(b.data.tags) ? b.data.tags : [b.data.tags];

        const aMatches = aTags.filter(tag => currentTags.includes(tag)).length;
        const bMatches = bTags.filter(tag => currentTags.includes(tag)).length;

        return bMatches - aMatches;
      })
      .slice(0, limit);
  });

  // Excerpt filter (if not provided in frontmatter)
  eleventyConfig.addFilter("excerpt", (content) => {
    const excerpt = content.split("\n").slice(0, 3).join(" ");
    return excerpt.substring(0, 200) + "...";
  });

  // Filter to get posts by tag
  eleventyConfig.addFilter("filterByTag", (posts, tag) => {
    return posts.filter(post => {
      if (!post.data.tags) return false;
      const tags = Array.isArray(post.data.tags) ? post.data.tags : [post.data.tags];
      return tags.includes(tag);
    });
  });

  // Markdown configuration
  const markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "header-anchor",
      symbol: "#",
      ariaHidden: false,
    }),
    level: [2, 3, 4],
    slugify: eleventyConfig.getFilter("slugify")
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync config
  eleventyConfig.setBrowserSyncConfig({
    files: ['_site/assets/css/**/*.css']
  });

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      layouts: "src/_layouts",
      data: "src/_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
