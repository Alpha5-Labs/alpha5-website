# Alpha5 Labs - Innovation Platform

A modern web application for Alpha5 Labs innovation platform built with Next.js frontend and NestJS backend in a Turborepo monorepo structure.

## 🚀 Project Structure

```
alpha5-website/
├── apps/
│   ├── frontend/          # Next.js frontend application
│   └── backend/           # NestJS backend application
├── packages/              # Shared packages (future use)
├── .husky/                # Git hooks configuration
├── turbo.json            # Turborepo configuration
└── package.json          # Root package.json
```

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, App Router
- **Backend**: NestJS with TypeScript
- **Monorepo**: Turborepo for build orchestration
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm 9.8.1 or higher

## 🚀 Getting Started

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd apps/frontend && npm install

# Install backend dependencies
cd ../backend && npm install
```

### 2. Development Mode

```bash
# Run both frontend and backend in development mode
npm run dev
```

This will start:

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### 3. Individual App Development

```bash
# Run only frontend
cd apps/frontend && npm run dev

# Run only backend
cd apps/backend && npm run start:dev
```

## 🌐 API Endpoints

### Backend (Port 3001)

- `GET /health` - Health check endpoint
- `GET /home-message` - Returns the home page message

Example responses:

```json
// GET /health
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}

// GET /home-message
{
  "message": "Something Amazing is Coming Soon",
  "company": "Alpha5 Labs",
  "tagline": "🚀 Turning bold ideas into everyday solutions.",
  "year": 2025
}
```

## 🎨 Frontend Features

- Beautiful minimal black & white design with Alpha5 logo
- Responsive design for mobile and desktop
- Loading states and error handling
- Fetches content dynamically from backend API
- Modern animations with Tailwind CSS

## 📝 Available Scripts

From the root directory:

- `npm run dev` - Start both apps in development mode
- `npm run build` - Build all apps for production
- `npm run lint` - Run linting across all apps
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run clean` - Clean build artifacts

## 🔧 Code Quality & Git Hooks

### Automatic Formatting

This project uses **Husky** and **lint-staged** for automatic code formatting on commit:

- **Pre-commit hooks**: Automatically format and lint staged files
- **Prettier**: Consistent code formatting across the entire codebase
- **ESLint**: Code quality and style enforcement

### Manual Formatting

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

### Git Hooks

- **Pre-commit**: Runs Prettier and ESLint on staged files
- **Automatic setup**: Hooks are installed automatically with `npm install`

## 🔧 Configuration

### Environment Variables

Create `.env.local` files in the respective app directories if needed:

**Frontend** (`apps/frontend/.env.local`):

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**Backend** (`apps/backend/.env`):

```env
PORT=3001
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Backend Deployment

The backend can be deployed to any Node.js hosting platform:

```bash
cd apps/backend
npm run build
npm run start:prod
```

### Frontend Deployment

The frontend can be deployed to Vercel, Netlify, or any static hosting platform:

```bash
cd apps/frontend
npm run build
```

## 📞 Support

For questions or support, please contact the Alpha5 Labs team.

---

**Alpha5 Labs** - Building the future of innovation.
