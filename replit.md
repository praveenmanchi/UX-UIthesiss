# Overview

This is a React-based web application that presents "The History of UX/UI Design: A Treatise on Professional Claims" - a data-driven long-form article that mathematically debunks inflated UX/UI experience claims. The application is built as a single-page, content-focused website with a dark theme aesthetic, featuring historical timelines, interactive data visualizations, and evidence-based thesis statements proving that 24+ year UX/UI experience claims are often chronologically impossible. The tech stack combines a Vite-powered React frontend with an Express backend, using TypeScript throughout.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, configured to serve the React app from the `client` directory
- Wouter for lightweight client-side routing (single route to home page currently)
- TanStack Query (React Query) for server state management with infinite stale time configured

**UI Component System**
- Shadcn/ui component library using Radix UI primitives for accessible, unstyled components
- Tailwind CSS for styling with custom design tokens (dark theme focused)
- Custom fonts: Inter (sans), Space Grotesk (display), JetBrains Mono (monospace)
- Component structure follows atomic design with reusable UI components in `client/src/components/ui/`
- Custom page-specific components in `client/src/components/` for the defense article content

**Design Decisions**
- Dark theme as default with extensive CSS custom properties for theming
- Single-page application structure presenting long-form content
- Content sections separated by dividers for visual hierarchy
- Responsive design using Tailwind's mobile-first approach

## Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Custom Vite integration for development with HMR (Hot Module Replacement)
- Middleware for JSON parsing with raw body capture for potential webhook handling
- Request/response logging middleware for API routes (paths starting with `/api`)

**Data Layer**
- Drizzle ORM configured for PostgreSQL dialect
- Schema defined in `shared/schema.ts` for code sharing between frontend and backend
- Current schema includes a users table with username/password fields
- Zod schemas generated from Drizzle for runtime validation
- In-memory storage implementation (`MemStorage`) as fallback/development option
- Storage interface pattern (`IStorage`) allows swapping between different storage implementations

**Server Architecture Decisions**
- Module-based routing system with routes registered in `server/routes.ts`
- API routes prefixed with `/api` convention
- HTTP server wraps Express for WebSocket potential (server returned from `registerRoutes`)
- Separation of concerns: routes, storage layer, and server setup are distinct modules

## External Dependencies

**Database**
- PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)
- Connection configured through `DATABASE_URL` environment variable
- Drizzle Kit for migrations (output to `./migrations` directory)

**UI Libraries**
- Comprehensive Radix UI component primitives for accessible UI elements
- Embla Carousel for carousel functionality
- Lucide React for iconography
- Date-fns for date manipulation
- Class Variance Authority (CVA) for variant-based component styling

**Development Tools**
- Replit-specific plugins for development (cartographer, dev banner, runtime error overlay)
- TSX for running TypeScript in development
- ESBuild for production builds

**Session Management**
- Connect-pg-simple for PostgreSQL-backed session storage (installed but not yet implemented)

**Build & Deployment**
- Vite build outputs to `dist/public` for static assets
- Server bundle outputs to `dist/index.js` via ESBuild
- Production mode serves built static files from Express
- Development mode uses Vite middleware for HMR

**Configuration Approach**
- Path aliases configured consistently across TypeScript and Vite (`@/`, `@shared/`, `@assets/`)
- Environment-based configuration (NODE_ENV for dev/production switching)
- Shared schema between client and server promotes type safety across the stack