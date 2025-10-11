# Vercel Deployment Guide

This guide will help you deploy the VSP Technologies website to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Email Service**: Set up Mailjet account

## Step 1: Email Service Setup

1. Go to [mailjet.com](https://mailjet.com) and create an account
2. Get your API Key and Secret from the dashboard
3. Verify your sender email address

## Step 2: Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Connect Repository**:

   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**:

   - Framework Preset: `Vite`
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set Environment Variables**:

   ```
   NODE_ENV=production
   MJ_API_KEY=your_mailjet_api_key
   MJ_API_SECRET=your_mailjet_api_secret
   CONTACT_EMAIL=info@vsptech.com
   FROM_EMAIL=noreply@vsptech.com
   ```

4. **Deploy**: Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Login**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**:
   ```bash
   vercel env add MJ_API_KEY
   vercel env add MJ_API_SECRET
   vercel env add CONTACT_EMAIL
   vercel env add FROM_EMAIL
   ```

## Step 3: Domain Configuration

1. **Custom Domain** (Optional):

   - Go to your project settings in Vercel
   - Add your custom domain (e.g., `vsptech.in`)
   - Update DNS records as instructed

2. **SSL Certificate**: Automatically provided by Vercel

## Step 4: Verify Deployment

1. **Health Check**: Visit `https://your-app.vercel.app/api/health`
2. **Contact Form**: Test the contact form functionality
3. **Performance**: Check Core Web Vitals in Vercel dashboard

## Environment Variables Reference

| Variable        | Description            | Example               |
| --------------- | ---------------------- | --------------------- |
| `NODE_ENV`      | Environment mode       | `production`          |
| `MJ_API_KEY`    | Mailjet API key        | `your_api_key`        |
| `MJ_API_SECRET` | Mailjet API secret     | `your_api_secret`     |
| `CONTACT_EMAIL` | Contact form recipient | `info@vsptech.com`    |
| `FROM_EMAIL`    | Email sender address   | `noreply@vsptech.com` |

## Troubleshooting

### Common Issues

1. **Build Failures**:

   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Email Not Working**:

   - Verify Mailjet credentials
   - Check sender email is verified
   - Review Vercel function logs

3. **API Routes Not Working**:
   - Check file structure in `api/` folder
   - Verify function exports
   - Check Vercel function logs

### Debugging

1. **View Logs**:

   ```bash
   vercel logs
   ```

2. **Local Development**:

   ```bash
   vercel dev
   ```

3. **Check Function Logs**:
   - Go to Vercel dashboard
   - Click on your project
   - Go to "Functions" tab
   - View logs for specific functions

## Performance Optimization

The project is already optimized for Vercel with:

- ✅ **Code Splitting**: Automatic code splitting
- ✅ **Image Optimization**: Vercel's built-in image optimization
- ✅ **Edge Functions**: Serverless functions at the edge
- ✅ **CDN**: Global content delivery network
- ✅ **Caching**: Optimized caching headers
- ✅ **Compression**: Automatic gzip compression

## Monitoring

1. **Vercel Analytics**: Built-in analytics dashboard
2. **Core Web Vitals**: Performance metrics
3. **Function Logs**: Serverless function monitoring
4. **Error Tracking**: Automatic error reporting

## Security

The deployment includes:

- ✅ **HTTPS**: Automatic SSL certificates
- ✅ **Security Headers**: XSS, CSRF protection
- ✅ **CORS**: Proper cross-origin configuration
- ✅ **Environment Variables**: Secure secret management

## Support

If you encounter issues:

1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Review the [Troubleshooting](#troubleshooting) section
3. Check the project's [README.md](./README.md)
4. Contact support at info@vsptech.com
