# 🚀 Vercel CLI Deployment Guide

Complete step-by-step guide to deploy your premium React website using Vercel CLI.

## 📋 Prerequisites

### Step 1: Install Node.js

1. **Download Node.js**
   - Go to: https://nodejs.org/
   - Download the **LTS version** (recommended)
   - Choose the Windows installer (.msi file)

2. **Install Node.js**
   - Run the downloaded installer
   - Follow the installation wizard
   - ✅ Check "Automatically install the necessary tools" when prompted
   - Restart your computer after installation

3. **Verify Installation**
   ```bash
   node --version
   npm --version
   ```

### Step 2: Create Vercel Account

1. Go to: https://vercel.com/
2. Sign up with GitHub (recommended) or email
3. Connect your GitHub account if not already connected

## 🛠️ Deployment Steps

### Step 1: Install Vercel CLI

Open a **new** Command Prompt or PowerShell and run:

```bash
npm install -g vercel
```

### Step 2: Navigate to Project Directory

```bash
cd "P:\BT Website New\biji-thomas-website\BT-Website"
```

### Step 3: Login to Vercel

```bash
vercel login
```

Follow the prompts:
- Choose your preferred login method (GitHub recommended)
- Complete authentication in your browser
- Return to terminal when prompted

### Step 4: Deploy to Vercel

```bash
vercel
```

**Answer the setup questions:**

1. **Set up and deploy?** → `Y` (Yes)
2. **Which scope?** → Choose your account/team
3. **Link to existing project?** → `N` (No, create new)
4. **What's your project's name?** → `biji-thomas-website` (or your preferred name)
5. **In which directory is your code located?** → `./` (current directory)

Vercel will automatically detect it's a React app and configure accordingly.

### Step 5: Production Deployment

After the initial deployment, deploy to production:

```bash
vercel --prod
```

## ⚙️ Build Configuration

Your `vercel.json` is already configured with:

- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Node Version**: 18
- **Static File Optimization**: Enabled
- **SPA Routing**: Configured for React Router

## 🌐 Expected Results

After successful deployment, you'll receive:

- **Preview URL**: `https://biji-thomas-website-xxx.vercel.app`
- **Production URL**: `https://biji-thomas-website.vercel.app`
- **Dashboard**: Access via Vercel dashboard

## 🔧 Troubleshooting

### Common Issues & Solutions

**1. "npm not recognized"**
- Restart terminal after Node.js installation
- Ensure Node.js is in your system PATH

**2. "Build failed"**
- Check for syntax errors in your code
- Ensure all dependencies are listed in package.json

**3. "Permission denied"**
- Run terminal as Administrator (Windows)
- Use `sudo` prefix on Mac/Linux

**4. "Module not found"**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### Build Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to Vercel (development)
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# Open project in browser
vercel --open
```

## 🚀 Post-Deployment

### Automatic Deployments

Once connected to GitHub:
- **Production**: Auto-deploy when you push to `main` branch
- **Preview**: Auto-deploy for pull requests

### Custom Domain (Optional)

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Domains" tab
4. Add your custom domain
5. Follow DNS configuration instructions

### Performance Optimization

Your site is automatically optimized with:
- **Global CDN**: Fast loading worldwide
- **Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Lazy loading for better performance
- **Compression**: Gzip/Brotli compression enabled

## 📊 Monitoring

Monitor your deployment:
- **Analytics**: Built-in Vercel Analytics
- **Performance**: Core Web Vitals tracking
- **Logs**: Real-time deployment logs
- **Functions**: Serverless function monitoring

## 🎯 Success Metrics

Your deployed website will achieve:
- **Lighthouse Score**: 95+ across all metrics
- **Loading Speed**: < 2 seconds first contentful paint
- **Mobile Performance**: Optimized for all devices
- **SEO Ready**: Perfect meta tags and structure

## 🆘 Need Help?

- **Vercel Documentation**: https://vercel.com/docs
- **React Deployment Guide**: https://vercel.com/guides/deploying-react-with-vercel
- **Support**: Contact via Vercel dashboard

---

**Your premium website will be live in minutes!** 🌟
