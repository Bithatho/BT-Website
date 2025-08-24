# Vercel Deployment Guide

This guide will help you deploy the Biji Thomas website to Vercel.

## Prerequisites

1. **Install Node.js** (required for Vercel CLI)
   - Download from: https://nodejs.org/
   - Choose the LTS version (recommended)
   - This will also install npm

2. **Create a Vercel account** (if you don't have one)
   - Go to: https://vercel.com/
   - Sign up with GitHub, GitLab, or email

## Deployment Steps

### Option 1: Using Vercel CLI (Command Line)

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   - Follow the prompts to authenticate

3. **Deploy the website**
   ```bash
   vercel
   ```
   - Answer the setup questions:
     - Set up and deploy? **Y**
     - Which scope? (choose your account)
     - Link to existing project? **N** (for new deployment)
     - What's your project's name? **bt-website** (or your preferred name)
     - In which directory is your code located? **./** (current directory)

4. **Production deployment**
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard (Web Interface)

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your GitHub repository: `https://github.com/Bithatho/BT-Website.git`
4. Configure project settings:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
   - **Install Command**: (leave empty)
5. Click "Deploy"

## Configuration Files

- `vercel.json` - Vercel configuration file (already created)
- `index.html` - Main website file
- `styles.css` - Stylesheet
- `script.js` - JavaScript functionality

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project dashboard on Vercel
2. Click on "Domains" tab
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables

This static website doesn't require any environment variables.

## Automatic Deployments

Once connected to GitHub, Vercel will automatically deploy:
- **Production**: When you push to the `main` branch
- **Preview**: When you create pull requests

## Commands Summary

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (development)
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# Open project in browser
vercel --open
```

## Troubleshooting

1. **Node.js not found**: Install Node.js from nodejs.org
2. **Permission errors**: Run terminal as administrator (Windows) or use `sudo` (Mac/Linux)
3. **Build errors**: Check that all files are present and properly formatted

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel CLI Reference: https://vercel.com/docs/cli

---

Your website will be available at a URL like: `https://bt-website-xyz.vercel.app`
