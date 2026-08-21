# EcoSteel Technical Migration (Phase 1)

This project contains the complete technical migration of the EcoSteel website (`http://ecosteels.com/`) from legacy static HTML/CSS/JS/PHP into a modern **React + Vite** frontend and **Node.js + Express** backend.

> **STRICT ZERO REDESIGN COMPLIANCE:**  
> The visual appearance, layout, typography, colors, spacing, image assets, animations, and visible text content of the live website have been 100% preserved. Zero UI modifications were performed in Phase 1.

---

## Project Structure

```
ecosteel/
│
├── client/                     # Frontend Application (React + Vite)
│   ├── public/                 # Static Assets
│   │   ├── css/                # Original EcoSteel Bootstrap & Custom CSS
│   │   ├── fonts/              # FontAwesome & Glyphicon webfonts
│   │   ├── img/                # Product, Logo, Banner & Client images
│   │   └── favicon-32x32.png
│   │
│   ├── src/
│   │   ├── components/         # Reusable React UI Components
│   │   │   ├── Navbar.jsx      # Navigation Header & Mobile Menu Toggle
│   │   │   ├── Footer.jsx      # Footer Links & Company Details
│   │   │   ├── HeroSlider.jsx  # Home Page Hero Carousel
│   │   │   ├── Accordion.jsx   # Interactive About Accordion
│   │   │   ├── ProductGrid.jsx # Home Page Product Cards Grid
│   │   │   ├── ProductSidebar.jsx # Product Pages Navigation Sidebar
│   │   │   ├── TestimonialSlider.jsx # Testimonials Carousel
│   │   │   ├── ThirdPartySlider.jsx # Third Party Inspection Badges
│   │   │   └── ClientSlider.jsx # Client Logos Carousel
│   │   │
│   │   ├── pages/              # React Page Components
│   │   │   ├── Home.jsx        # Home Page (/)
│   │   │   ├── AboutUs.jsx     # About Us Page (/about-us)
│   │   │   ├── ContactUs.jsx   # Contact Us Page (/contact-us)
│   │   │   ├── ButtweldPipeFittings.jsx # Product Page
│   │   │   ├── ForgedFittings.jsx       # Product Page
│   │   │   ├── Flanges.jsx              # Product Page
│   │   │   ├── Fasteners.jsx            # Product Page
│   │   │   ├── PipesAndTubes.jsx        # Product Page
│   │   │   ├── PlatesAndSheets.jsx      # Product Page
│   │   │   ├── Rods.jsx                 # Product Page
│   │   │   └── Quality.jsx              # Quality Assurance Page
│   │   │
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx  # Application Wrapper Layout
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx   # React Router Setup & Legacy Aliases
│   │   ├── App.jsx             # Root App
│   │   ├── main.jsx            # Application Entry Point
│   │   └── index.css           # Global Stylesheet
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend Application (Node.js + Express)
│   ├── src/
│   │   ├── config/
│   │   │   └── env.js          # Environment Settings
│   │   ├── controllers/
│   │   │   └── contactController.js # Contact API Handler
│   │   ├── routes/
│   │   │   └── contactRoutes.js     # API Express Routes (/api/contact)
│   │   ├── services/
│   │   │   └── mailService.js       # Nodemailer Email Sending Service
│   │   ├── middleware/
│   │   │   └── errorMiddleware.js   # Express Error Handler
│   │   └── server.js           # Server Entry Point
│   │
│   ├── package.json
│   └── .env.example            # Environment Variables Template
│
├── README.md                   # Project Documentation
└── cleanup_report.md           # Audit & Cleanup Decision Log
```

---

## How to Run locally

### 1. Run the Frontend Client (React + Vite)
```bash
cd client
npm install
npm run dev
```
The client dev server will run at `http://localhost:5173`.

To build production bundle:
```bash
cd client
npm run build
```

---

### 2. Run the Backend Server (Express API)
```bash
cd server
npm install
npm run start
# Or for auto-reload during development:
npm run dev
```
The server will run on `http://localhost:5000`.

To configure SMTP email sending credentials, copy `.env.example` to `.env`:
```env
PORT=5000
NODE_ENV=development
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CONTACT_RECEIVER_EMAIL=sales@ecosteels.com
```

---

## Migration Summary

- **Frontend Tech Stack**: Legacy HTML/CSS/jQuery → **React + Vite + React Router DOM**.
- **Backend Tech Stack**: Legacy PHP scripts / static HTML → **Node.js + Express + Nodemailer**.
- **Routes Supported**:
  - Clean URLs (`/about-us`, `/contact-us`, `/butt-weld-pipe-fittings`, `/forged-fittings`, `/flanges`, `/fasteners`, `/pipes-and-tubes`, `/plates-and-sheets`, `/rods`, `/quality`).
  - Legacy `.html` URLs (`/about-us.html`, `/contact-us.html`, etc.) aliased for backward compatibility.
- **Legacy Files Isolation**:
  - `ibi/` subfolder (belonging to `ibibrushware.com`) has been isolated and kept untouched outside the EcoSteel React codebase.
  - `indexbackup.html` & `reninelogo.png` (belonging to Renine Metalloys template) documented as obsolete.
