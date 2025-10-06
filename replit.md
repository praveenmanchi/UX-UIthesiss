# Overview

This is a React-based web application that presents "The History of UX/UI Design: A Treatise on Professional Claims" - a data-driven long-form article that mathematically debunks inflated UX/UI experience claims. The application is built as a single-page, content-focused website with a sophisticated editorial aesthetic inspired by https://18theses.com/, featuring advanced timeline visualizations, stacked area charts, proportional comparison bars, and interactive data visualizations. The tech stack combines a Vite-powered React frontend with an Express backend, using TypeScript throughout.

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

# Recent Changes

## Timeline Visualization Enhancements (October 2025)

**Design Inspiration**
- Redesigned timeline visualizations based on reference images from https://18theses.com/
- Implemented editorial aesthetic with muted color palette and sophisticated interactions
- Dark backgrounds with sage greens, warm creams, and deep charcoal tones
- Added terracotta highlights for accent elements

**New Timeline Components**

1. **TimelineTrack** (`client/src/components/timeline-track.tsx`)
   - Horizontal timeline with large dots (16px) and glow effects
   - Vertical marker lines extending from each event
   - Expandable detail panels with rich descriptions and impact statements
   - Framer-motion spring animations for smooth interactions
   - Integrated in GUI Revolution and Tools & Methodology sections

2. **StackedAreaChart** (`client/src/components/stacked-area-chart.tsx`)
   - Area chart visualization using Recharts
   - Gradient fills with muted color palette
   - Dark background matching editorial theme
   - Custom tooltips showing market share evolution
   - Used for Mac vs Windows market visualization

3. **ProportionalBarGroup** (`client/src/components/proportional-bar-group.tsx`)
   - Horizontal stacked bars for proportional comparisons
   - Smooth width animations with framer-motion
   - Hover tooltips for detailed breakdowns
   - Market share comparison visualizations

4. **CurvedToolTimeline** (`client/src/components/curved-tool-timeline.tsx`)
   - SVG-based curved timeline using quadratic bezier paths
   - 14 design tools (Sketch, Figma, Adobe XD, InVision, etc.) plotted from 1990-2023
   - Curved dashed path connecting tool dots along smooth trajectory
   - Interactive hover/click states showing tool details in expandable card
   - Tool icons from react-icons/si for brand logos and lucide-react for generic icons
   - AnimatePresence wrapper for smooth exit animations
   - Comprehensive data-testid attributes including legend items
   - Integrated in Tools & Methodology section for Design Tool Evolution

**Color System Updates**
- Added timeline-specific CSS variables in `client/src/index.css`:
  - `--timeline-sage`: Muted sage green (hsl 88, 16%, 55%)
  - `--timeline-cream`: Warm cream (hsl 56, 24%, 82%)
  - `--timeline-charcoal`: Deep charcoal (hsl 120, 5%, 8%)
  - `--timeline-terracotta`: Terracotta highlight (hsl 15, 65%, 55%)
  - Timeline utility classes for dots, markers, and containers

**Component Integration**
- Replaced basic InteractiveTimeline with TimelineTrack in GUI Revolution section
- Added StackedAreaChart for market share evolution visualization
- Integrated ProportionalBarGroup for horizontal comparison bars
- Added TimelineTrack to Tools & Methodology section for UX tool evolution
- All timeline components feature fade-in animations using FadeInSection wrapper

**Design Patterns**
- Editorial typography with generous spacing
- Monospace fonts for years and numerical data
- Spring animations (not linear) for natural motion
- Glassmorphism effects on expandable cards
- Responsive behavior with Tailwind breakpoints

**Accessibility & Testing**
- Comprehensive data-testid attributes added to all timeline components
- Test IDs follow pattern: {type}-{target}-{id} for unique identification
- All interactive elements and meaningful display content are testable
- IDs are stable across renders for reliable automated testing

## Advanced Timeline Features (October 2025)

**Era Groupings & Background Shading**
- TimelineTrack now displays historical eras with subtle gradient backgrounds
- Defined 5 UX/UI history eras: Early Computing (1960-1984), GUI Revolution (1984-1995), Web Era (1995-2010), Modern Era (2010-2020), AI Era (2020+)
- Era backgrounds use low-opacity gradients (0.08-0.15) to avoid interfering with interactive elements
- Era labels show name and year range positioned above timeline
- Backgrounds automatically calculate positions based on visible events

**Connection Lines & Tool Relationships**
- CurvedToolTimeline shows evolution relationships between 14 design tools
- 11 tool relationships defined (e.g., Photoshop → Flash → Fireworks for graphics, Sketch → Figma for UI design)
- Curved connection lines using quadratic bezier paths between related tools
- Color-coded by relationship type with lighter opacity (0.15 default, 0.5 on hover)
- Connections become more visible when hovering over related tools to reduce visual noise
- Only visible when both connected tools pass category filters

**Timeline Mini-Map Navigation** (`client/src/components/timeline-minimap.tsx`)
- Compact overview timeline showing all events as interactive dots
- Positioned sticky at bottom with glassmorphic backdrop blur styling
- Clickable dots to jump to specific years/events with smooth scroll behavior
- Current scroll position indicator (terracotta colored active dot)
- Progress bar showing position through timeline
- Hover tooltips showing year labels
- Integrated in GUI Revolution section

**Category Filtering**
- Filter controls added to CurvedToolTimeline for tool categories
- Categories extracted dynamically: Graphics, UI Design, Prototyping, Animation, Development, etc.
- Toggle buttons with active/inactive states using timeline colors
- Smooth fade animations (opacity transitions) for tools when filters change
- Path curve automatically updates to connect only visible tools
- "Clear Filters" button appears when any filters are active
- All filter controls have proper data-testid attributes (filter-{category}, filter-clear)
- Non-visible tools fade to 15% opacity instead of hiding completely

**Navigation Improvements**
- NavigationHeader now hides automatically when scrolling past hero section
- StickyNavigation appears after hero with section links (Origins, Revolution, Formalization, Tools, Economics, Claims)
- Smooth transitions between the two navigation states prevent overlap
- Active section highlighting as user scrolls through content

**Technical Implementation**
- All enhancements use framer-motion for smooth spring animations
- Comprehensive data-testid attributes on all interactive elements
- Responsive design with mobile considerations (floating indicator hidden on mobile)
- Maintains editorial aesthetic with muted sage/cream/charcoal/terracotta color palette
- IntersectionObserver API for efficient scroll tracking
- Fixed framer-motion opacity warnings by adding explicit initial values