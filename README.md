# Web Application Development Club Website

A professional, high-performance website for the Web Application Development Club at AISSMS IOIT, Pune. Built with Next.js (frontend) and Node.js/Express (backend).

## 🚀 Live Demo

- **Frontend**:https://ioit-wad-club.vercel.app/

## ✨ Features

- **Modern Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Professional UI**: Corporate-style design with clean aesthetics
- **Backend API**: Node.js/Express REST API for data management
- **Form Integration**: Formspree for contact and membership forms
- **Static Export**: Pre-rendered pages for fast loading

## 📁 Project Structure

```
wad-club-website/
├── client/                 # Next.js Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── home/       # Homepage sections
│   │   │   └── layout/     # Layout components (Navbar, Footer)
│   │   ├── pages/          # Next.js pages
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   ├── package.json
│   ├── tailwind.config.js
│   └── next.config.js
│
└── server/                 # Express Backend
    ├── data/               # Static data files
    ├── routes/             # API routes
    ├── server.js           # Express server entry
    ├── package.json
    └── .env
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The website will be available at `http://localhost:3000`

## 📚 API Endpoints

### Team API (`/api/team`)
- `GET /api/team` - Get all team members
- `GET /api/team/:id` - Get team member by ID
- `GET /api/team/category/:category` - Get members by category
- `GET /api/team/roles/leadership` - Get leadership team
- `GET /api/team/roles/heads` - Get all team heads

### Projects API (`/api/projects`)
- `GET /api/projects` - Get all projects (supports query params: category, status, year)
- `GET /api/projects/:id` - Get project by ID
- `GET /api/projects/developer/:name` - Get projects by developer
- `GET /api/projects/meta/categories` - Get all project categories
- `GET /api/projects/meta/stats` - Get project statistics

### Events API (`/api/events`)
- `GET /api/events` - Get all events (supports query params: status, type)
- `GET /api/events/:id` - Get event by ID
- `GET /api/events/upcoming` - Get upcoming events
- `GET /api/events/past` - Get past events
- `GET /api/events/meta/types` - Get event types

## 🎨 Pages

- **Home** (`/`) - Landing page with hero, team preview, and events sections
- **Team** (`/team`) - Complete team directory
- **Events** (`/events`) - Project showcase by club members
- **Contact** (`/contact`) - Contact form and information
- **Join** (`/join`) - Membership application form
- **Gallery** (`/gallery`) - Photo gallery

## 🎨 Color Palette

- **Primary**: Blue (#2563eb - primary-600)
- **Accent**: Cyan (#06b6d4 - accent-500)
- **Secondary**: Slate grays for text and backgrounds
- **Success**: Green for completed status
- **Warning**: Yellow for in-development status

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Framer Motion (animations)

### Backend
- Node.js
- Express.js
- CORS
- Helmet (security)
- Morgan (logging)

## 📄 License

This project is created for the Web Application Development Club at AISSMS IOIT, Pune.

---

## 🚀 Production Deployment Guide

### Step 1: Deploy Frontend to Vercel

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign in with GitHub

2. **Import Repository**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `webApplicationDevelopmentClub-IOIT`

3. **Configure Project**:
   - **Root Directory**: Click "Edit" and set to `client`
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

4. **Environment Variables** (Optional):
   - `NEXT_PUBLIC_API_URL`: Your Render backend URL (after deploying backend)

5. **Deploy**: Click "Deploy" and wait for build to complete

6. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain

**Your frontend will be live at**: `https://your-project.vercel.app`

---

### Step 2: Deploy Backend to Render

1. **Go to Render**: Visit [render.com](https://render.com) and sign in with GitHub

2. **Create New Web Service**:
   - Click "New" → "Web Service"
   - Connect your GitHub repository

3. **Configure Service**:
   - **Name**: `wad-club-api`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Region**: Singapore (or nearest to your users)
   - **Branch**: `main`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`

4. **Environment Variables**:
   Add these in the "Environment" section:
   ```
   NODE_ENV=production
   PORT=10000
   FRONTEND_URL=https://your-vercel-app.vercel.app
   ```

5. **Deploy**: Click "Create Web Service"

**Your API will be live at**: `https://wad-club-api.onrender.com`

---

### Step 3: Configure CORS (Already Done)

The backend is already configured with production CORS settings in `server.js`:

```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'https://wad-club-ioit.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean);
```

Update `FRONTEND_URL` on Render with your actual Vercel URL.

---

### Step 4: Update Frontend API URL (If Using Backend)

If you want the frontend to fetch from the backend API, create a `.env.local` file in `client/`:

```env
NEXT_PUBLIC_API_URL=https://wad-club-api.onrender.com
```

---

### Step 5: Verify Deployment

1. **Test Frontend**:
   - Visit your Vercel URL
   - Navigate through all pages (Home, Team, Events, Contact, Join)
   - Test the contact and join forms (they use Formspree)

2. **Test Backend API**:
   - Visit `https://your-render-url.onrender.com/api/health`
   - Should return: `{"status":"OK","message":"Web Application Development Club API is running"}`

3. **Test CORS**:
   - Open browser console on frontend
   - Make an API request to backend
   - Ensure no CORS errors

---

### Important Notes

⚠️ **Render Free Tier**: The backend will spin down after 15 minutes of inactivity. First request after inactivity may take 30-50 seconds.

⚠️ **Formspree**: Contact and Join forms already use Formspree (`https://formspree.io/f/mykpawbo`). Form submissions will be sent to your Formspree account.

⚠️ **Static Site**: The frontend is a static Next.js site. Team and Events data is hardcoded in the frontend pages (not fetched from API) for faster loading.

---

## 🔧 Maintenance

### Updating Team Members
Edit: `client/src/pages/team.tsx` → `teamMembers` array

### Updating Projects
Edit: `client/src/pages/events.tsx` → `projects` array

### Updating Footer
Edit: `client/src/components/layout/Footer.tsx`

### Redeploying
Push changes to GitHub. Vercel and Render will auto-deploy from the `main` branch.

---

Made by **Pritam Rangari** for WAD Club, AISSMS IOIT Pune.
7. Click "Create Web Service"

---

Built by Pritam Rangari
