@echo off
REM BitsAndAtoms Setup & Development Guide (Windows)

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║     BITS AND ATOMS - Setup ^& Development Guide            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

echo [INFO] PROJECT STRUCTURE
echo ====================================
echo frontend/                  = React + Vite Application
echo   - src/components/        = All React Components
echo   - src/config/api.ts      = API Endpoints (CENTRAL)
echo   - public/                = Static Assets
echo.
echo backend/                   = Express.js API Server
echo   - src/routes/            = API Route Implementations
echo   - src/utils/             = Utilities (Email, etc.)
echo   - src/server.js          = Route Registration (CENTRAL)
echo   - uploads/               = User Files Storage
echo.
echo package.json               = Root Monorepo Config
echo.

echo [INFO] QUICK START
echo ====================================
echo.
echo 1. Install all dependencies:
echo    npm install:all
echo.
echo 2. Setup environment variables:
echo    copy backend\.env.example backend\.env
echo    (Edit backend\.env with your values)
echo.
echo 3. Start development (open 2 PowerShell terminals):
echo.
echo    Terminal 1 - Frontend:
echo    npm run dev:frontend
echo.
echo    Terminal 2 - Backend:
echo    npm run dev:backend
echo.
echo    Frontend: http://localhost:5173
echo    Backend:  http://localhost:5000
echo.

echo [INFO] API ROUTE MANAGEMENT
echo ====================================
echo.
echo When routes change or new routes are added:
echo.
echo 1. BACKEND - Implement route:
echo    backend\src\routes\contact.js
echo.
echo 2. BACKEND - Register route:
echo    backend\src\server.js
echo    app.use('/api/contact', contactRoutes);
echo.
echo 3. FRONTEND - Add endpoint:
echo    frontend\src\config\api.ts
echo    CONTACT: ^`^${API_BASE_URL}/contact^`
echo.
echo 4. FRONTEND - Use in components:
echo    import { API_ENDPOINTS } from '../config/api';
echo    fetch(API_ENDPOINTS.CONTACT)
echo.

echo [INFO] KEY FILES
echo ====================================
echo.
echo API Endpoints (Frontend):
echo   frontend\src\config\api.ts [STAR]
echo.
echo Route Registration (Backend):
echo   backend\src\server.js [STAR]
echo.
echo Environment Setup:
echo   backend\.env (from .env.example)
echo   frontend\.env
echo.
echo Documentation:
echo   STRUCTURE.md (Detailed structure guide)
echo   REORGANIZATION.md (What changed)
echo.

echo ✅ Setup Complete!
echo ====================================
echo Your project is now organized with clear separation
echo between frontend and backend, with centralized API
echo endpoint management for easy maintenance.
echo.

pause
