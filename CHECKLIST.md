# ✅ SETUP CHECKLIST

## Before You Start

- [ ] Close all open terminals and editors
- [ ] Make sure you have Node.js v16+ installed
- [ ] Make sure you have npm v8+ installed

---

## Step 1: Understanding the New Structure (5 min)

- [ ] Read `INDEX.md` - Quick navigation
- [ ] Read `REORGANIZATION.md` - What changed
- [ ] Understand key concepts:
  - [ ] API endpoints are in: `frontend/src/config/api.ts`
  - [ ] Routes are registered in: `backend/src/server.js`
  - [ ] Backend implementations: `backend/src/routes/*.js`

---

## Step 2: Install Dependencies (2 min)

```bash
# From root folder (BitsAndAtoms-Perfect)
npm install:all
```

- [ ] Installation completes without errors
- [ ] Both `frontend/node_modules` and `backend/node_modules` exist

---

## Step 3: Setup Environment Variables (3 min)

```bash
# Create backend .env from template
cp backend/.env.example backend/.env
```

- [ ] `backend/.env` file created
- [ ] Edit `backend/.env` with your values:
  - [ ] `EMAIL_USER` - Your email address
  - [ ] `EMAIL_PASS` - Your app password
  - [ ] `EMAIL_TO` - Contact recipient email
  - [ ] `APPS_SCRIPT_WEBAPP_URL` - Google Apps Script URL
  - [ ] `FRONTEND_URL` - Keep as `http://localhost:5173`

---

## Step 4: Start Development Servers (2 min)

**Terminal 1 - Frontend:**
```bash
npm run dev:frontend
```
- [ ] Server starts successfully
- [ ] Shows: "VITE ... ready in XXX ms"
- [ ] URL: `http://localhost:5173`
- [ ] No errors in terminal

**Terminal 2 - Backend:**
```bash
npm run dev:backend
```
- [ ] Server starts successfully
- [ ] Shows: "Server is running on port 5000"
- [ ] No errors in terminal

---

## Step 5: Test the Application (5 min)

- [ ] Frontend loads: http://localhost:5173
- [ ] Page displays correctly
- [ ] Navigate to Contact section
- [ ] Test form:
  - [ ] Fill in name and email
  - [ ] Select or upload a CV file
  - [ ] Click submit
  - [ ] Success message appears
- [ ] Check backend console for logs
- [ ] Check email inbox for confirmation

---

## Step 6: Verify Structure (3 min)

- [ ] `frontend/src/config/api.ts` exists ✅
- [ ] `backend/src/server.js` exists ✅
- [ ] `backend/src/routes/contact.js` exists ✅
- [ ] `backend/src/utils/mailer.js` exists ✅
- [ ] All 23 components in `frontend/src/components/` ✅
- [ ] `package.json` has workspaces ✅

---

## Step 7: Document Reading (10 min)

- [ ] Read `STRUCTURE.md` - Complete structure guide
- [ ] Read `ARCHITECTURE.md` - Visual diagrams
- [ ] Bookmark `frontend/src/config/api.ts`
- [ ] Save `STRUCTURE.md` to favorites

---

## Step 8: Team Communication (if applicable)

- [ ] Share `STRUCTURE.md` with team
- [ ] Share `ARCHITECTURE.md` with team
- [ ] Highlight key points:
  - [ ] API endpoints in `frontend/src/config/api.ts`
  - [ ] Routes registered in `backend/src/server.js`
  - [ ] Never hardcode API URLs
  - [ ] Always import from config

---

## Troubleshooting

**Frontend not loading?**
- [ ] Port 5173 not in use
- [ ] Check terminal for errors
- [ ] Try: `npm install --workspace frontend` then retry

**Backend not starting?**
- [ ] Port 5000 not in use
- [ ] Check `backend/.env` exists and has values
- [ ] Try: `npm install --workspace backend` then retry

**Dependencies not installing?**
- [ ] Delete `node_modules` folders: `rm -r node_modules frontend/node_modules backend/node_modules`
- [ ] Try: `npm install:all` again

**Contact form not working?**
- [ ] Backend running on port 5000? ✅
- [ ] `backend/.env` configured? ✅
- [ ] Check browser console for errors
- [ ] Check backend console for errors

---

## Optional: Deep Dive (if you want more understanding)

- [ ] Read `MIGRATION.md` - Complete walkthrough with examples
- [ ] Read `COMPLETION.md` - Full summary of changes
- [ ] Check `ARCHITECTURE.md` - Understanding the flow

---

## Post-Setup

Once everything is working:

1. **Know where to find things:**
   - [ ] API endpoints: `frontend/src/config/api.ts`
   - [ ] Backend routes: `backend/src/routes/`
   - [ ] Route registration: `backend/src/server.js`

2. **Before making changes:**
   - [ ] Check if route already exists in `frontend/src/config/api.ts`
   - [ ] If adding route: update both backend AND frontend config
   - [ ] Never hardcode API URLs

3. **Development workflow:**
   - [ ] Keep both servers running (frontend + backend)
   - [ ] Test in browser as you code
   - [ ] Check console for errors
   - [ ] Changes auto-reload in frontend, restart needed for backend

4. **Before pushing to git:**
   - [ ] Backend `.env` never committed
   - [ ] Only `.env.example` should be in git
   - [ ] Check `.gitignore` is correct
   - [ ] Test both frontend and backend

---

## Success Criteria

You're done when:

✅ Frontend loads at http://localhost:5173  
✅ Backend running on port 5000  
✅ Contact form submits successfully  
✅ Email received (if configured)  
✅ You understand the structure  
✅ You know where API endpoints are defined  
✅ You know where routes are registered  

---

## Quick Reference

| Task | Command |
|------|---------|
| Install all | `npm install:all` |
| Start frontend | `npm run dev:frontend` |
| Start backend | `npm run dev:backend` |
| Build frontend | `npm run build:frontend` |
| Run backend (prod) | `npm start:backend` |

---

## Files You'll Work With Most

| File | Purpose | How Often |
|------|---------|-----------|
| `frontend/src/config/api.ts` | API endpoints | Frequently |
| `backend/src/server.js` | Route registration | When adding routes |
| `backend/src/routes/*.js` | Route implementations | Frequently |
| `frontend/src/components/` | UI Components | Frequently |
| `backend/.env` | Secrets/config | Rarely |
| `frontend/.env` | Config | Rarely |

---

## Common Commands You'll Use

```bash
# Install dependencies (one time)
npm install:all

# Start development (every session)
npm run dev:frontend    # Terminal 1
npm run dev:backend     # Terminal 2

# Build for production (before deploy)
npm run build:frontend

# Run backend in production
npm start:backend
```

---

## Problem? Check These First

1. **Something doesn't work?**  
   → Check the relevant `.md` file
   → See TROUBLESHOOTING section above
   → Check terminal error messages

2. **Lost and don't know where to find something?**  
   → Check `INDEX.md`
   → Check `STRUCTURE.md`
   → Use Ctrl+F to search files

3. **Want to understand how something works?**  
   → Check `ARCHITECTURE.md` for diagrams
   → Check `MIGRATION.md` for examples
   → Look at actual code files

---

## You're Ready! 🚀

All that's left is to run the commands and start developing!

**Next: Run the commands in "Step 4: Start Development Servers"**

---

*Estimated total time: 30 minutes to full functionality*  
*Last updated: December 10, 2025*
