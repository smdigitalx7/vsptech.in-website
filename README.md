# VSP Technologies Website

A modern, responsive website for VSP Technologies - a campus recruitment training company based in Visakhapatnam, India.

## Features

- 🎯 **Modern React Architecture** - Built with React 18, TypeScript, and Vite
- 🎨 **Beautiful UI Components** - Using Radix UI and Tailwind CSS
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Fast Performance** - Optimized build and loading
- 🔒 **Secure** - Security headers and best practices
- 📧 **Contact Form** - Integrated with FastAPI backend and Brevo email service
- 🚀 **Vercel Ready** - Optimized for Vercel deployment

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Radix UI, Tailwind CSS, Framer Motion
- **Backend**: FastAPI (Python) with Brevo email service
- **Deployment**: Vercel (Frontend), Render/VPS (Backend)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Vercel CLI (for deployment)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd vsptech.in-website
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp env.example .env.local
```

4. Update the `.env.local` file with your actual values (optional):

```env
NODE_ENV=development
# Optional: Override backend API URL (defaults to deployed backend)
VITE_API_BASE_URL=https://vsptech-mailservice-brevo.onrender.com
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment on Vercel

### Automatic Deployment

1. Connect your GitHub repository to Vercel
2. Set the following environment variables in Vercel dashboard (optional):

   - `NODE_ENV`: `production`
   - `VITE_API_BASE_URL`: Your backend API URL (defaults to deployed backend)

3. Deploy! Vercel will automatically build and deploy your application.

### Manual Deployment

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy:

```bash
vercel --prod
```

## Project Structure

```
├── backend/               # FastAPI backend (separate service)
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilities
│   │   └── pages/         # Page components
│   ├── assets/            # Static assets
│   ├── public/            # Public files
│   └── index.html         # HTML template
├── shared/                # Shared schemas and types
├── vercel.json           # Vercel configuration
└── vite.config.ts        # Vite configuration
```

## Environment Variables

| Variable           | Description                        | Required |
| ------------------ | ---------------------------------- | -------- |
| `NODE_ENV`         | Environment mode                   | No       |
| `VITE_API_BASE_URL`| Backend API URL (optional override) | No       |

## API Endpoints

The frontend communicates with a separate FastAPI backend:
- Backend URL: `https://vsptech-mailservice-brevo.onrender.com`
- `POST /api/contact` - Submit contact form
- `GET /health` - Health check

See `backend/README.md` for backend setup and deployment.

## Performance Optimizations

- ✅ Code splitting and lazy loading
- ✅ Image optimization
- ✅ Font preloading
- ✅ Bundle size optimization
- ✅ Caching headers
- ✅ Compression

## SEO Features

- ✅ Meta tags optimization
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs

## Security Features

- ✅ Security headers
- ✅ CORS configuration
- ✅ Input validation
- ✅ XSS protection
- ✅ CSRF protection

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, email info@vsptech.com or visit our website at https://vsptech.in
