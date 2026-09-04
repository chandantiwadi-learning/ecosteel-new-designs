# Eco Steel Engineering - Full-Stack Architecture & Deployment Guide

This repository contains the complete production-grade web application for **Eco Steel Engineering** (`http://ecosteels.com/`), structured for high-performance B2B industrial operations:
- **Frontend**: React + Vite (Optimized for deployment on **Vercel**)
- **Backend API**: Node.js + Express + Mongoose + Resend (Optimized for deployment on **Render**)
- **Database**: MongoDB Atlas
- **Transactional Email**: Resend API

---

## Architecture Overview

```
Vercel
   │  React + Vite Frontend (Static SPA)
   │  Environment: VITE_API_URL
   ▼
Render
   │  Express.js B2B API Server (Port: process.env.PORT || 5000)
   │  CORS + Body Parser + Centralized Error Handling
   ▼
Database & Integrations
   ├── MongoDB Atlas: Inquiry Schema (status indexed for admin panel readiness)
   └── Resend API: Transactional Customer Auto-Reply & Internal Team Alerts
```

### Inquiry Lifecycle

1. Customer submits the RFQ / Contact form on the React frontend.
2. Frontend dispatches `POST /api/inquiries` (via `VITE_API_URL`).
3. Backend validates required fields, trims inputs, and verifies corporate email syntax.
4. Inquiry document is persisted to MongoDB Atlas with default status `"new"`.
5. Resend API dispatches:
   - **Email 1 (Customer Auto-Reply)**: Professional HTML acknowledgement reassuring response within 24 hours.
   - **Email 2 (Team Notification)**: Clean, styled internal notification containing full customer details and specifications.
6. Backend returns JSON response:
   ```json
   {
     "success": true,
     "message": "Your inquiry has been submitted successfully. Our team will contact you shortly."
   }
   ```
*(Note: If MongoDB save succeeds but email dispatch experiences network/quota failure, the error is logged and the customer request still returns success to prevent dropped leads).*

---

## Directory Structure

```
ecosteel-new-designs/
│
├── client/                     # React + Vite Frontend
│   ├── public/                 # Static assets, branding, and imagery
│   ├── src/
│   │   ├── components/         # Reusable UI components (Contact, Navbar, Footer, etc.)
│   │   ├── pages/              # Page views (Home, ContactUs, AboutUs, Products, etc.)
│   │   ├── layouts/            # Main application layout wrapper
│   │   ├── routes/             # App routing definitions
│   │   ├── data/               # Product catalog & metallurgical specs
│   │   └── index.css           # Global stylesheet & design tokens
│   ├── .env.example            # Frontend environment variable template
│   ├── vite.config.js          # Vite config with dev API proxy
│   └── package.json
│
├── server/                     # Express Backend Service
│   ├── config/
│   │   └── db.js               # MongoDB Atlas connection handler
│   ├── controllers/
│   │   └── inquiryController.js# Input sanitization, validation, DB save, emails
│   ├── middleware/
│   │   └── errorMiddleware.js  # Centralized error handler & 404 handler
│   ├── models/
│   │   └── Inquiry.js          # Mongoose model (indexed for future admin panel)
│   ├── routes/
│   │   └── inquiryRoutes.js    # Express routes (/api/inquiries, /api/health)
│   ├── services/
│   │   └── emailService.js     # Resend email templates & dispatch logic
│   ├── .env.example            # Backend environment variable template
│   ├── package.json
│   └── server.js               # Server entry point
│
└── README.md
```

---

## Configuration Guide

### 1. MongoDB Atlas Setup

1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create or select a Project and deploy a free **M0 Sandbox** or dedicated cluster.
3. Under **Security → Database Access**:
   - Create a database user (e.g., `ecosteel_admin`).
   - Assign **Read and write to any database** privileges.
   - Save the password securely.
4. Under **Security → Network Access**:
   - Click **Add IP Address**.
   - Select **Allow Access From Anywhere** (`0.0.0.0/0`) to allow connections from Render hosting servers.
5. In **Database Deployments**, click **Connect → Drivers (Node.js)**:
   - Copy your connection string:
     ```
     mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/ecosteel?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with your database user credentials.

---

### 2. Resend API Setup

1. Sign up for an account at [Resend](https://resend.com).
2. Go to **API Keys** and click **Create API Key**:
   - Name: `ecosteel-production`
   - Permission: **Full access**
   - Copy the generated API key (format: `re_xxxxxxxxxxxx`).
3. **Domain Verification** (Production):
   - Under **Domains**, click **Add Domain** and enter your company domain (e.g., `ecosteels.com`).
   - Add the specified DNS records (DKIM, SPF) to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).
   - Once verified, set `FROM_EMAIL=Eco Steel Engineering <sales@ecosteels.com>`.
4. **Development / Testing without Custom Domain**:
   - Resend provides a free onboarding sandbox sender: `Eco Steel Engineering <onboarding@resend.dev>`.
   - In sandbox mode, Resend sends only to your verified account email address.

---

### 3. Environment Variables

#### Backend (`server/.env`):
Create `server/.env` by copying `server/.env.example`:
```env
PORT=5000
NODE_ENV=development

# MongoDB Atlas URI
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/ecosteel?retryWrites=true&w=majority

# Resend API Key
RESEND_API_KEY=re_your_api_key_here

# Verified Sender Identity
FROM_EMAIL=Eco Steel Engineering <onboarding@resend.dev>

# Team Recipient Email for Inquiry Leads
TEAM_EMAIL=sales@ecosteels.com

# Allowed Frontend Origin (for CORS)
CLIENT_URL=http://localhost:5173
```

#### Frontend (`client/.env`):
Create `client/.env` by copying `client/.env.example`:
```env
# Point to local server in dev, or leave empty if using Vite proxy
VITE_API_URL=http://localhost:5000
```

---

## Local Development

### Prerequisites
- Node.js (v18 or v20+ recommended)
- npm

### 1. Run the Backend API
```bash
cd server
npm install
npm run dev
```
The server will boot with `nodemon` at `http://localhost:5000`.  
Health check: `http://localhost:5000/api/health`.

### 2. Run the Frontend
```bash
cd client
npm install
npm run dev
```
The frontend dev server will launch at `http://localhost:5173`.

---

## Deployment Guide

### A. Deploy Backend API to Render

1. Push your repository to GitHub / GitLab.
2. Sign in to [Render](https://render.com) and click **New + → Web Service**.
3. Connect your repository.
4. Configure service settings:
   - **Name**: `ecosteel-api` (or preferred name)
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` or higher
5. Add **Environment Variables** in Render Dashboard:
   | Key | Value |
   |---|---|
   | `NODE_ENV` | `production` |
   | `PORT` | `10000` (Render sets PORT automatically, server binds to `process.env.PORT`) |
   | `MONGODB_URI` | *Your MongoDB Atlas connection URI* |
   | `RESEND_API_KEY` | *Your Resend API Key (`re_...`)* |
   | `FROM_EMAIL` | `Eco Steel Engineering <sales@ecosteels.com>` |
   | `TEAM_EMAIL` | `sales@ecosteels.com` |
   | `CLIENT_URL` | *Your live Vercel URL (e.g., `https://ecosteel.vercel.app`)* |
6. Click **Deploy Web Service**.
7. Note down your live API service URL (e.g., `https://ecosteel-api.onrender.com`).

---

### B. Deploy Frontend to Vercel

1. Sign in to [Vercel](https://vercel.com) and click **Add New → Project**.
2. Select your repository.
3. Configure project settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `client`
4. Expand **Environment Variables**:
   | Key | Value |
   |---|---|
   | `VITE_API_URL` | `https://ecosteel-api.onrender.com` (Your live Render backend URL) |
5. Click **Deploy**.
6. After deployment completes, update the Render backend's `CLIENT_URL` environment variable with your production Vercel domain to ensure CORS allows form transmissions.

---

## API Reference

### `POST /api/inquiries`
Submits a new customer inquiry or quotation request.

**Payload**:
```json
{
  "fullName": "John Doe",
  "email": "purchasing@clientcompany.com",
  "phone": "+1 555 123 4567",
  "companyName": "Energy Solutions Ltd",
  "country": "United States",
  "productInterest": "Forged Fittings",
  "quantity": "500 pcs",
  "subject": "Inquiry for 3000# Socketweld Elbows",
  "message": "Please quote pricing for ASME B16.11 3000# socketweld elbows in 316L SS."
}
```

**Success Response (201 Created)**:
```json
{
  "success": true,
  "message": "Your inquiry has been submitted successfully. Our team will contact you shortly."
}
```

**Error Response (400 Bad Request / 500 Internal Error)**:
```json
{
  "success": false,
  "message": "Please provide a valid corporate email address."
}
```

### `GET /api/health`
Health check endpoint returning server status and uptime.
