# Netlify Deployment Guide

This guide will help you deploy your React application to Netlify.

## Prerequisites

- A Netlify account (sign up at [netlify.com](https://www.netlify.com))
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js installed locally (for testing builds)

## Deployment Methods

### Method 1: Git Integration (Recommended)

This is the easiest and most automated way to deploy.

#### Steps:

1. **Push your code to a Git repository:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin master
   ```

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select your repository

3. **Configure Build Settings:**
   Netlify will auto-detect these settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** (Netlify will use the latest LTS)

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - Your site will be live at `https://your-site-name.netlify.app`

5. **Automatic Deployments:**
   - Every push to your main branch will trigger a new deployment
   - Pull requests will create preview deployments

### Method 2: Netlify CLI

Deploy directly from your terminal.

#### Steps:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy:**
   ```bash
   # Initialize (first time only)
   netlify init
   
   # Or deploy directly
   netlify deploy --prod
   ```

4. **Follow the prompts:**
   - Choose "Create & configure a new site"
   - Select your team
   - Choose a site name
   - Confirm build settings

### Method 3: Drag and Drop

Quick deployment without Git.

#### Steps:

1. **Build your project locally:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder

3. **Your site is live!**

## Configuration

Your `netlify.toml` file is already configured with:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Redirects:** All routes redirect to `index.html` for React Router
- **Headers:** Proper MIME types for JavaScript files

## Environment Variables

If you need to set environment variables (like Firebase config):

1. Go to Site settings → Environment variables
2. Add your variables
3. Redeploy your site

## Custom Domain

To add a custom domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Build Optimization

The build is already optimized with:
- Code splitting
- Minification
- Tree shaking
- Asset optimization

## Troubleshooting

### Build Fails

1. Check the build logs in Netlify dashboard
2. Ensure `package.json` has all dependencies
3. Verify Node.js version compatibility

### Routes Not Working

The `netlify.toml` already includes redirects for React Router. If issues persist:
- Check that the redirect rule is present
- Ensure `index.html` is in the `dist` folder

### Environment Variables Not Working

- Make sure variables are set in Netlify dashboard
- Redeploy after adding variables
- Use `import.meta.env.VITE_*` prefix for Vite variables

## Continuous Deployment

With Git integration, every push to your main branch automatically triggers a new deployment. Pull requests create preview deployments for testing.

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Community](https://community.netlify.com)

