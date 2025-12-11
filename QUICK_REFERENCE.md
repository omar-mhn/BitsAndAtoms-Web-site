# 🎯 Quick Reference Card

## Project Overview

**Frontend:** React + Vite (TypeScript)  
**Backend:** Express.js (JavaScript)  
**Structure:** Monorepo with workspaces  
**Status:** ✅ Ready to use!

---

## Directory Structure

```
BitsAndAtoms-Perfect/
├── frontend/                          # React Application
│   ├── src/components/               # 23 React Components
│   ├── src/config/api.ts             # ⭐ API ENDPOINTS
│   ├── src/App.tsx
│   └── src/index.tsx
├── backend/                          # Express Server
│   ├── src/routes/contact.js         # Contact Endpoint
│   ├── src/server.js                 # ⭐ ROUTE HUB
│   └── uploads/                      # User Files
└── [Documentation Files]
```

---

## Development Workflow

### Setup (First Time Only)
```bash
npm install:all                        # Install all dependencies
cp backend/.env.example backend/.env   # Create env file
# Edit backend/.env with your values
```

### Development (Every Session)
```bash
# Terminal 1
npm run dev:frontend                   # http://localhost:5173

# Terminal 2
npm run dev:backend                    # http://localhost:5000
```

### Production
```bash
npm run build:frontend                 # Build React app
npm start:backend                      # Run Express server
```

---

## Key Files Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| `frontend/src/config/api.ts` | API Endpoints | Adding/changing routes |
| `backend/src/server.js` | Route Registration | Adding/changing routes |
| `backend/src/routes/*.js` | Route Logic | Implementing endpoints |
| `frontend/src/components/` | UI | Building features |
| `backend/.env` | Secrets/Config | Setup/configuration |
| `frontend/.env` | Frontend Config | Setup |

---

## API Management

### Adding a New Endpoint

**1. Backend - Create route file:**
```javascript
// backend/src/routes/users.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ users: [] });
});

export default router;
```

**2. Backend - Register in server:**
```javascript
// backend/src/server.js
import usersRoutes from './routes/users.js';
app.use('/api/users', usersRoutes);  // ← Add this
```

**3. Frontend - Add to config:**
```typescript
// frontend/src/config/api.ts
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
  USERS: `${API_BASE_URL}/users`,     // ← Add this
};
```

**4. Frontend - Use in component:**
```typescript
import { API_ENDPOINTS } from '../config/api';
fetch(API_ENDPOINTS.USERS);
```

---

## Port References

| Service | Port | URL |
|---------|------|-----|
| Frontend | 5173 | http://localhost:5173 |
| Backend | 5000 | http://localhost:5000 |

---

## Environment Variables

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

### Backend (`backend/.env`)
```env
PORT=5000
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=contact@bitsandatoms.com
APPS_SCRIPT_WEBAPP_URL=https://script.google.com/...
FRONTEND_URL=http://localhost:5173
```

---

## Useful Commands

```bash
# Installation
npm install:all                  # Install all dependencies
npm install --workspace frontend # Install frontend only
npm install --workspace backend  # Install backend only

# Development
npm run dev:frontend             # Frontend dev server
npm run dev:backend              # Backend dev server

# Build
npm run build:frontend           # Build for production
npm run preview --workspace frontend # Preview production build

# Production
npm start:backend                # Run backend in production

# From Workspaces
cd frontend && npm run dev       # Same as npm run dev:frontend
cd backend && npm start          # Same as npm run dev:backend
```

---

## File Locations Quick Look

Need to find something? Check here:

**Frontend:**
- Components: `frontend/src/components/`
- Pages: `frontend/src/components/*.tsx`
- UI Components: `frontend/src/components/ui/`
- Config: `frontend/src/config/`
- Entry: `frontend/src/index.tsx`
- Build Config: `frontend/vite.config.ts`

**Backend:**
- Routes: `backend/src/routes/`
- Utils: `backend/src/utils/`
- Server: `backend/src/server.js`
- Config: `backend/config/`
- Uploads: `backend/uploads/`

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port already in use | Kill process or change port |
| Dependencies not found | Run `npm install:all` |
| API not responding | Check backend running on 5000 |
| Routes not working | Check `backend/src/server.js` and `frontend/src/config/api.ts` |
| Frontend shows 404 | Check component imports and path aliases |
| Email not sending | Check `backend/.env` credentials |

---

## Git Workflow

### Files to Commit
```
✅ Code files (*.ts, *.tsx, *.js)
✅ Config files (vite.config.ts, tsconfig.json)
✅ package.json and package-lock.json
✅ Documentation (*.md)
✅ .env.example
```

### Files to NEVER Commit
```
❌ node_modules/
❌ .env (secrets)
❌ dist/ (build output)
❌ .DS_Store (Mac)
```

---

## Documentation Guide

| File | Purpose | Read Time |
|------|---------|-----------|
| **INDEX.md** | Start here - Navigation | 3 min |
| **REORGANIZATION.md** | What changed | 5 min |
| **STRUCTURE.md** | Detailed structure | 10 min |
| **ARCHITECTURE.md** | Visual diagrams | 5 min |
| **MIGRATION.md** | Complete guide | 15 min |
| **CHECKLIST.md** | Setup checklist | 3 min |
| **COMPLETION.md** | Project summary | 5 min |

---

## Team Sharing

Share with your team:
- `STRUCTURE.md` - How the project is organized
- `ARCHITECTURE.md` - Visual understanding
- Key principles:
  - API endpoints: `frontend/src/config/api.ts`
  - Never hardcode URLs
  - Always update frontend config when changing routes

---

## Troubleshooting Flowchart

```
Something not working?
│
├─ Port conflict?
│  └─ Kill process or change port
│
├─ Module not found?
│  └─ npm install:all
│
├─ API not responding?
│  └─ Check backend running on 5000
│
├─ Route not found?
│  └─ Check server.js registration + frontend/src/config/api.ts
│
├─ Environment issue?
│  └─ Check backend/.env file exists and has values
│
└─ Still stuck?
   └─ Check relevant documentation file
```

---

## Performance Tips

- Keep frontend and backend servers running during development
- Frontend hot-reloads automatically (no restart needed)
- Backend changes require restart (or use nodemon)
- Use `npm run build:frontend` to check for build errors

---

## Security Reminders

⚠️ **ALWAYS:**
- Keep `.env` files git-ignored
- Use `.env.example` as template
- Never commit secrets
- Use app-specific passwords for email
- Update CORS origin if deploying

---

## Next Steps

1. ✅ Understand the structure
2. ✅ Install dependencies: `npm install:all`
3. ✅ Setup environment: `cp backend/.env.example backend/.env`
4. ✅ Start development: `npm run dev:frontend` + `npm run dev:backend`
5. ✅ Test the application
6. ✅ Read documentation
7. ✅ Start developing!

---

## Quick Links

- **API Config:** `frontend/src/config/api.ts` ⭐
- **Route Hub:** `backend/src/server.js` ⭐
- **Start Here:** `INDEX.md` ⭐
- **Setup:** `CHECKLIST.md`
- **Details:** `STRUCTURE.md`

---

**Version:** 1.0  
**Last Updated:** December 10, 2025  
**Status:** ✅ Production Ready
