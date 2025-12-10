# Bits and Atoms - Project Structure Guide

## 📁 Project Organization

This project follows a **monorepo structure** with clear separation between frontend and backend:

```
BitsAndAtoms-Perfect/
├── frontend/               # React + Vite Frontend Application
│   ├── src/
│   │   ├── components/    # React Components
│   │   │   ├── ui/       # Reusable UI Components
│   │   │   ├── figma/    # Figma Integration Components
│   │   │   └── *.tsx     # Page Components
│   │   ├── config/       # Configuration files
│   │   │   └── api.ts    # API Endpoints (UPDATE HERE FOR ROUTES)
│   │   ├── App.tsx       # Main App Component
│   │   └── index.tsx     # Entry Point
│   ├── public/           # Static Assets
│   ├── package.json      # Frontend Dependencies
│   ├── vite.config.ts    # Vite Configuration
│   ├── tsconfig.json     # TypeScript Configuration
│   └── index.html        # HTML Template
│
├── backend/              # Express.js Backend API
│   ├── src/
│   │   ├── routes/       # API Routes
│   │   │   └── contact.js   # Contact Form Route (UPDATE PATH HERE)
│   │   ├── utils/        # Utility Functions
│   │   │   └── mailer.js    # Email Service
│   │   ├── middleware/   # Custom Middleware
│   │   └── server.js     # Main Server Entry Point
│   ├── uploads/          # User Uploaded Files
│   ├── config/           # Configuration Files
│   ├── package.json      # Backend Dependencies
│   ├── .env.example      # Environment Variables Template
│   └── .env              # Environment Variables (NOT in git)
│
├── package.json          # Root Monorepo Configuration
├── README.md             # This File
├── .gitignore
└── .git/
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16+ 
- **npm** v8+

### Installation

```bash
# Install all dependencies (root + frontend + backend)
npm install

# Or install separately:
npm install --workspace frontend
npm install --workspace backend
```

### Development

```bash
# Option 1: Run both frontend and backend
npm run dev

# Option 2: Run frontend only
npm run dev:frontend

# Option 3: Run backend only
npm run dev:backend

# Option 4: Run backend (alternative)
cd backend && npm start
```

**Frontend runs on:** `http://localhost:5173`  
**Backend runs on:** `http://localhost:5000`

---

## 📋 API Routing Guide

### Adding or Changing API Routes

#### **Frontend Side** (Update here when routes change)
Location: `frontend/src/config/api.ts`

```typescript
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
  // Add new endpoints here
  // USERS: `${API_BASE_URL}/users`,
  // PROJECTS: `${API_BASE_URL}/projects`,
};
```

#### **Backend Side** (Implementation)
Location: `backend/src/routes/`

Example: `backend/src/routes/contact.js`
```javascript
router.post("/", upload, async (req, res) => {
  // Handle contact form submission
  // Route: POST /api/contact
});
```

**Main server file:** `backend/src/server.js`
```javascript
app.use('/api/contact', contactRoutes);  // Route registration
```

### Route Change Workflow

1. **Create/Update backend route** in `backend/src/routes/`
2. **Register route** in `backend/src/server.js`
3. **Add endpoint** to `frontend/src/config/api.ts`
4. **Use endpoint** in components: `import { API_ENDPOINTS } from '../config/api'`

---

## 🔧 Environment Configuration

### Frontend Environment
File: `frontend/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

### Backend Environment
File: `backend/.env` (Create from `.env.example`)

```env
PORT=5000
NODE_ENV=development

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=contact@bitsandatoms.com

APPS_SCRIPT_WEBAPP_URL=https://script.google.com/macros/d/YOUR_SCRIPT_ID/userweb?v=1

FRONTEND_URL=http://localhost:5173
```

---

## 📦 Dependencies

### Frontend
- **React** - UI Library
- **Vite** - Build Tool
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Sonner** - Toast Notifications
- **Lucide React** - Icons

### Backend
- **Express.js** - Web Framework
- **Multer** - File Upload Handling
- **Nodemailer** - Email Service
- **CORS** - Cross-Origin Support
- **Dotenv** - Environment Variables

---

## 🔐 Security Notes

- Never commit `.env` files to Git
- Use `.env.example` as a template
- Email credentials should be app-specific passwords
- Keep API endpoints documented for team coordination

---

## 📊 Build & Deployment

### Build Frontend
```bash
npm run build:frontend
```
Output: `frontend/dist/`

### Run Production Build Locally
```bash
npm run preview --workspace frontend
```

---

## 🤝 Contributing

When adding new routes or changing API structure:

1. **Coordinate with the team** about route changes
2. **Update both** frontend and backend simultaneously
3. **Document** the changes in this README
4. **Test** locally before pushing changes

---

## 📞 Support

For questions about the structure or routes, check:
- `frontend/src/config/api.ts` - Frontend endpoints
- `backend/src/server.js` - Route registrations
- Individual route files in `backend/src/routes/`

---

**Last Updated:** December 10, 2025
