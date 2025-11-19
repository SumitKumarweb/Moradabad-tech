# Sitemap Generation

This project includes an automated sitemap generator that creates a comprehensive `sitemap.xml` file covering all routes in the application.

## Overview

The sitemap includes:
- **Static Routes**: Home, category pages, login, signup, profile
- **Articles**: All article pages (4 articles)
- **Quizzes**: All quiz pages (4 quizzes)
- **JavaScript Questions**: All 155 JavaScript question pages
- **Code Editors**: All 10 editor language pages
- **Interview Topics**: All interview sections and their topics
- **Top DSA Problems**: All 447+ top DSA problem pages

## Usage

### Generate Sitemap

```bash
npm run generate-sitemap
```

This will generate `public/sitemap.xml` with all routes.

### Set Custom Domain

By default, the sitemap uses `https://yourdomain.com` as the base URL. To set your actual domain:

```bash
SITE_URL=https://yourdomain.com npm run generate-sitemap
```

Or set it permanently in your environment or CI/CD pipeline.

### Automatic Generation

The sitemap is automatically generated before each build:

```bash
npm run build
```

This ensures your sitemap is always up-to-date when deploying.

## File Location

- **Generator Script**: `scripts/generateSitemap.js`
- **Output File**: `public/sitemap.xml`
- **Built File**: `dist/sitemap.xml` (after build)

## Sitemap Structure

The sitemap follows the [Sitemap Protocol 0.9](https://www.sitemaps.org/protocol.html) standard and includes:

- `<loc>`: Full URL of the page
- `<lastmod>`: Last modification date
- `<changefreq>`: How frequently the page changes (daily, weekly, monthly)
- `<priority>`: Priority relative to other pages (0.0 to 1.0)

## Priority Levels

- **Homepage**: 1.0 (highest priority)
- **Main Pages**: 0.9 (login, signup, profile)
- **Category Pages**: 0.8 (articles, quizzes, etc.)
- **Content Pages**: 0.6-0.7 (articles, quizzes, questions, etc.)

## Notes

1. **Firebase DSA Problems**: DSA problems stored in Firebase are not automatically included. If you need them, you can:
   - Manually add them to the sitemap
   - Modify the script to fetch from Firebase
   - Use a dynamic sitemap endpoint

2. **Interview Topics**: The script extracts all interview topics from the codebase. Make sure your topic IDs match the route structure.

3. **Base URL**: Remember to update the base URL before deploying to production.

## Submitting to Search Engines

After deploying, submit your sitemap to search engines:

- **Google Search Console**: Add sitemap URL: `https://yourdomain.com/sitemap.xml`
- **Bing Webmaster Tools**: Submit sitemap URL
- **Other Search Engines**: Follow their respective submission processes

## Updating Routes

When adding new routes:

1. **Static Routes**: Add to the `generateSitemap.js` script
2. **Dynamic Routes**: The script automatically extracts:
   - Article slugs from `src/lib/articles.jsx`
   - Quiz IDs from `src/lib/articles.jsx`
   - JavaScript question IDs from `src/lib/javascriptQuestions.js`
   - Interview topics from `src/lib/interviewTopics.js`
   - Top DSA problem slugs from `src/lib/topDSAProblems.js`
   - Editor languages from the hardcoded list

## Troubleshooting

### Sitemap Not Updating

- Make sure you run `npm run generate-sitemap` before building
- Check that `public/sitemap.xml` exists and was updated
- Verify the build copied it to `dist/sitemap.xml`

### Wrong Domain in Sitemap

- Set the `SITE_URL` environment variable
- Or manually edit `scripts/generateSitemap.js` to change the default

### Missing Routes

- Check that your route data files are in the expected format
- Verify the regex patterns in the script match your data structure
- Check the console output for warnings about missing files

