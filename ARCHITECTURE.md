# 🏗️ Architecture Diagram

## Project Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     USER BROWSER (Frontend)                      │
│                   http://localhost:5173                          │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ React Components
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                  FRONTEND (React + Vite)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  src/components/                                                │
│  ├── Hero.tsx          }                                        │
│  ├── Contact.tsx       } ← All Page Components                  │
│  ├── About.tsx         }                                        │
│  ├── ... (23 files)                                             │
│  │                                                              │
│  └── config/           ⭐ CENTRAL MANAGEMENT                    │
│      └── api.ts        ← All API Endpoints Defined Here        │
│         - CONTACT: 'http://localhost:5000/api/contact'         │
│         - (Add more endpoints here)                            │
│                                                                 │
│  Contact.tsx uses:                                              │
│  → import { API_ENDPOINTS } from '../config/api'               │
│  → fetch(API_ENDPOINTS.CONTACT)                                │
│                                                                 │
└──────────────┬────────────────────────────────────────────────┘
               │
               │ HTTP Requests
               │ (POST /api/contact with form data)
               ▼
┌─────────────────────────────────────────────────────────────────┐
│               BACKEND API (Express.js)                          │
│               http://localhost:5000                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  src/server.js         ⭐ ROUTE REGISTRATION HUB               │
│  ├── const app = express()                                     │
│  ├── app.use(cors({...}))                                      │
│  ├── app.use('/api/contact', contactRoutes)  ← Register       │
│  ├── // Add more routes here                                   │
│  └── app.listen(5000)                                          │
│                                                                 │
│  src/routes/                                                    │
│  └── contact.js                                                │
│      ├── router.post("/", upload, async (req, res) => {       │
│      │   // Handle contact form                               │
│      │   // Upload files                                      │
│      │   // Send email                                        │
│      │   // Send to Google Apps Script                        │
│      │   res.json({ success: true })                          │
│      └── })                                                    │
│                                                                 │
│  src/utils/                                                     │
│  └── mailer.js         ← Email Service                         │
│      └── sendEmail({subject, text, attachments})              │
│                                                                 │
└────────────────┬──────────────────────────────────────────────┘
                 │
        ┌────────┴────────┬──────────────┐
        │                 │              │
        ▼                 ▼              ▼
   [Gmail SMTP]    [Google Apps     [File Storage]
                    Script]          backend/uploads/
```

---

## Route Management Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│         WHEN YOU NEED TO ADD/CHANGE AN API ROUTE                │
└─────────────────────────────────────────────────────────────────┘

Step 1: Create/Modify Route
───────────────────────────────────────────────────────────────────
  Location: backend/src/routes/users.js
  
  import express from 'express';
  const router = express.Router();
  
  router.get('/', async (req, res) => {
    res.json({ users: [...] });
  });
  
  export default router;

Step 2: Register Route
───────────────────────────────────────────────────────────────────
  Location: backend/src/server.js
  
  import usersRoutes from './routes/users.js';
  
  app.use('/api/users', usersRoutes);  ← Add this line

Step 3: Add to Frontend Config
───────────────────────────────────────────────────────────────────
  Location: frontend/src/config/api.ts
  
  export const API_ENDPOINTS = {
    CONTACT: `${API_BASE_URL}/contact`,
    USERS: `${API_BASE_URL}/users`,     ← Add this
  };

Step 4: Use in Components
───────────────────────────────────────────────────────────────────
  Location: Any React component
  
  import { API_ENDPOINTS } from '../config/api';
  
  fetch(API_ENDPOINTS.USERS)
    .then(res => res.json())
    .then(data => setUsers(data.users));

                           ✅ DONE!
```

---

## File Modification Reference

### When Routes Change

| Scenario | Files to Update |
|----------|-----------------|
| **Add new endpoint** | 1. Create `backend/src/routes/*.js` <br> 2. Update `backend/src/server.js` <br> 3. Update `frontend/src/config/api.ts` |
| **Change endpoint path** | 1. Update `backend/src/server.js` <br> 2. Update `frontend/src/config/api.ts` |
| **Modify route logic** | 1. Edit corresponding file in `backend/src/routes/` |
| **Add request validation** | 1. Create middleware in `backend/src/middleware/` <br> 2. Use in route handler |
| **Add authentication** | 1. Create auth middleware <br> 2. Apply to protected routes |

---

## Directory Purposes

```
frontend/
├── src/
│   ├── components/      ← UI Components
│   │   ├── ui/         ← Reusable UI Elements
│   │   ├── figma/      ← Figma Components
│   │   └── *.tsx       ← Page Components (Hero, Contact, etc.)
│   ├── config/         ← Configuration (API endpoints, etc.)
│   ├── App.tsx         ← Main App Component
│   └── index.tsx       ← Entry Point
├── public/             ← Static Files
├── .env                ← Frontend Environment
├── package.json        ← Dependencies
├── vite.config.ts      ← Build Config
└── index.html          ← HTML Template

backend/
├── src/
│   ├── routes/         ← API Route Implementations
│   ├── utils/          ← Helper Functions (Email, etc.)
│   ├── middleware/     ← Custom Middleware (Auth, Logging, etc.)
│   └── server.js       ← Express Setup & Route Registration
├── uploads/            ← User Uploaded Files
├── config/             ← App Configuration
├── .env                ← Secrets (NEVER commit!)
├── .env.example        ← Env Template (commit this!)
└── package.json        ← Dependencies

root/
├── package.json        ← Monorepo Config
├── MIGRATION.md        ← This migration guide
├── STRUCTURE.md        ← Detailed structure docs
├── REORGANIZATION.md   ← What changed summary
├── SETUP.sh            ← Linux/Mac setup
└── SETUP.bat           ← Windows setup
```

---

## Common Tasks

### Add New API Endpoint
1. Create `backend/src/routes/newfeature.js`
2. Add route handler: `router.post('/', async (req, res) => {...})`
3. Register in `backend/src/server.js`: `app.use('/api/newfeature', newfeatureRoutes)`
4. Add to `frontend/src/config/api.ts`: `NEWFEATURE: API_BASE_URL + '/newfeature'`
5. Import and use in components: `fetch(API_ENDPOINTS.NEWFEATURE)`

### Change API Base URL
1. Edit `frontend/.env`: `VITE_API_URL=new-url`
2. OR Edit `frontend/src/config/api.ts`: change `API_BASE_URL`
3. All endpoints automatically update!

### Add Request Validation
1. Create `backend/src/middleware/validateContact.js`
2. Import in route: `import validateContact from '../middleware/validateContact'`
3. Use in route: `router.post('/', validateContact, upload, async (req, res) => {...})`

### Debug Route Issues
1. Check `backend/src/server.js` - is route registered?
2. Check `frontend/src/config/api.ts` - correct URL?
3. Check network tab in browser DevTools - what's the actual request?
4. Check backend console - any error logs?

---

## ✨ Key Principles

```
┌─────────────────────────────────────────┐
│ SINGLE SOURCE OF TRUTH (SSOT) APPROACH │
├─────────────────────────────────────────┤
│                                         │
│ 🎯 Frontend API Endpoints               │
│    → All in: frontend/src/config/api.ts │
│    → Import from: everywhere needed    │
│    → Change once, update everywhere    │
│                                         │
│ 🎯 Backend Routes                       │
│    → All registered in: server.js       │
│    → Implementations in: routes/*.js    │
│    → Easy to see all endpoints          │
│                                         │
│ 🎯 Environment Variables                │
│    → .env files (git ignored)           │
│    → .env.example as template           │
│    → Different per environment          │
│                                         │
└─────────────────────────────────────────┘
```

---

## Troubleshooting

**Q: API call returns 404**
A: Check `backend/src/server.js` - is the route registered? Check console for exact path being hit.

**Q: Cannot find module in frontend**
A: Check imports are relative: `../config/api` not just `config/api`

**Q: Changes not showing up**
A: Restart dev servers (frontend and backend)

**Q: 'API_ENDPOINTS is not defined'**
A: Did you import it? `import { API_ENDPOINTS } from '../config/api'`

**Q: CORS errors**
A: Check `backend/src/server.js` - CORS origin must match frontend URL

---

**Architecture Version:** 1.0  
**Last Updated:** December 10, 2025
