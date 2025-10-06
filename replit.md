# Overview

This project is a React-based web application designed to present "The History of UX/UI Design: A Treatise on Professional Claims." Its primary purpose is to mathematically debunk inflated UX/UI experience claims through a data-driven long-form article. The application features a single-page, content-focused website with a sophisticated editorial aesthetic inspired by 18theses.com, incorporating advanced timeline visualizations, stacked area charts, proportional comparison bars, and interactive data visualizations. The technical stack comprises a Vite-powered React frontend with an Express backend, all implemented with TypeScript. The business vision is to provide a compelling, evidence-based narrative that challenges prevailing industry misconceptions about UX/UI expertise.

## Recent Updates (October 6, 2025)

### Industry Timeline Scatter Plot Added
- Created scatter plot visualization "Industry Timeline: The Evolution of Design as a Business Function (1993-2025)"
- Shows 6 major industry milestones: First UX Title (1993), Web Agencies (2000), iPhone Era (2007), Design Systems (2014), DesignOps (2020), AI Integration (2025)
- Implemented three-era color coding: Foundation Era (purple #9f7aea), Digital Era (blue #4299e1), Modern Era (green #48bb78)
- Y-axis categories: AI Augmentation, Operations, Systematization, Platform Shift, Service Business, Role Creation
- Icons from Lucide React: Building2, Globe, Smartphone, Layers, GitBranch, Sparkles
- Icon styling: 36x36px rounded squares with era-colored backgrounds, scale on hover
- Hover tooltips show milestone name, year, and detail description
- Replaced horizontal timeline with scatter plot in Industry & Economics section
- Maintained light cream background (#f5f2ed) consistent with other visualizations

### Professional Formalization Section - Pioneer Images Added
- Added professional headshot images to "The Pioneers Who Defined the Field" section (5 pioneers)
- Images imported from attached_assets/Visionaries/ folder:
  - Don Norman (Don-Norman_headshot.jpg) - The Godfather of UX
  - Jakob Nielsen (jakob-nielsen.webp) - The Usability Guru
  - Alan Cooper (AlanCooper.jpg) - Father of Visual Basic
  - Jesse James Garrett (Jesse-James-Garrett.jpg) - The Information Architect
  - Steve Krug (Steve_Krug.png) - The Common Sense Advocate
- Images display as square aspect-ratio photos with rounded borders and accent border styling
- Layout: Left column shows image and basic info, right columns show contributions and impact
- Fixed image import path for Ivan Sutherland in Origins section (corrected filename to 300px-Ivan_Sutherland_1592.jpg)

### Professional Claims Section Enhancement
- Replaced Professional Claims section content with original UX/UI thesis data (10 theses covering timeline impossibilities, tool availability, role creation, education, adoption curves, geography, technology prerequisites, methodologies, company hiring records, and community size statistics)
- Enhanced typography with bold font weights for mathematical calculations and key values (53+ instances)
- Implemented 32 interactive hover tooltips on mathematical values showing proof explanations using Radix UI Tooltip component
- Fixed DOM nesting validation by wrapping component in single TooltipProvider
- Maintained card-based editorial design with circled numbers (01-10), justified text, and light cream background (#f5f2ed)
- Visual indicators: dotted underlines on hoverable values, cursor help icon, smooth tooltip animations

### Tools & Methodology Section Redesign
- Redesigned section UI to match editorial aesthetic with dark sage green header (#6b7a5d) and light cream content area
- Created scatter plot visualization "Design Tools Evolution (1977-2019)" showing 19 real design tools with brand icons
- Upgraded scatter plot with real tool brand icons from react-icons/si:
  - Print Era: Apple II, Illustrator, PageMaker, Photoshop, HTML, CSS
  - Web Era: Flash, Dreamweaver, Fireworks, Axure, OmniGraffle, Balsamiq
  - Modern Era: Sketch, InVision, Framer, Figma, Adobe XD, Abstract, Storybook
- Implemented three-era color coding: Print to Digital Era (cyan #4fd1c5), Web Revolution Era (red #f56565), Modern Design Tools Era (green #48bb78)
- Organized content into 5 insights with circled numbers (01-05) matching theses section style
- Scatter plot features: Y-axis tool categories (18 unique categories), X-axis years (1970-2020), animated icon appearances, hover tooltips with tool name and year
- Icon styling: 28x28px rounded squares with era-colored backgrounds, scale on hover, white icon color
- Fixed React duplicate key warnings by ensuring unique category names
- Maintained justified text alignment and editorial typography throughout

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe development.
- Vite for fast builds and development, serving the React app from the `client` directory.
- Wouter for lightweight client-side routing.
- TanStack Query (React Query) for server state management with infinite stale time.

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives for accessibility.
- Tailwind CSS for styling, utilizing custom design tokens (dark theme focused).
- Custom fonts: Inter, Space Grotesk, JetBrains Mono.
- Atomic design principles for UI components (`client/src/components/ui/`) and page-specific components (`client/src/components/`).

**Design Decisions**
- Default dark theme with extensive CSS custom properties.
- Single-page application structure for long-form content.
- Visual hierarchy achieved through content section dividers.
- Responsive design following a mobile-first approach.
- Editorial design inspiration from 18theses.com, using distinct visual identities for sections (e.g., light cream for introduction, dark sage for origins) and justified text alignment.
- Card-based layouts for sections like "Professional Claims," maintaining a clean, content-focused aesthetic.

## Backend Architecture

**Server Framework**
- Express.js server with TypeScript.
- Vite integration for HMR during development.
- Middleware for JSON parsing and request/response logging for API routes.

**Data Layer**
- Drizzle ORM for PostgreSQL.
- Shared schema (`shared/schema.ts`) for type safety across frontend and backend.
- Zod schemas for runtime validation.
- `IStorage` interface pattern for flexible storage implementations, with `MemStorage` as a fallback.

**Server Architecture Decisions**
- Module-based routing system (`server/routes.ts`).
- API routes are prefixed with `/api`.
- HTTP server wraps Express, allowing for future WebSocket integration.

## System Design Choices & Features

**Data Visualizations**
- **TimelineTrack**: Horizontal timeline with interactive events, detail panels, era groupings, and background shading.
- **StackedAreaChart**: Recharts-based area charts with gradient fills and custom tooltips for market share.
- **ProportionalBarGroup**: Horizontal stacked bars with smooth animations and hover tooltips for comparative data.
- **CurvedToolTimeline**: SVG-based curved timeline showing design tool evolution, relationships, and category filtering with interactive elements.

**Navigation & Interactivity**
- **Timeline Mini-Map Navigation**: Compact, sticky bottom timeline for quick navigation and progress tracking.
- **Dynamic Navigation Header**: Header that hides and reappears as a sticky navigation with active section highlighting.
- **Animations**: Extensive use of Framer Motion for smooth spring animations, fade-in effects, and transitions.

**Color System**
- Muted editorial color palette with CSS variables for sage, cream, charcoal, and terracotta accents.

**Accessibility & Testing**
- Comprehensive `data-testid` attributes for automated testing.

## Build & Deployment
- Vite outputs static assets to `dist/public`.
- ESBuild bundles the server to `dist/index.js`.
- Production mode serves static files via Express; development mode uses Vite middleware.
- Consistent path aliases across TypeScript and Vite.
- Environment-based configuration (NODE_ENV).

# External Dependencies

**Database**
- PostgreSQL via Neon serverless driver (`@neondatabase/serverless`).
- Drizzle Kit for schema migrations.

**UI Libraries**
- Radix UI component primitives.
- Embla Carousel for carousels.
- Lucide React for iconography.
- Date-fns for date manipulation.
- Class Variance Authority (CVA) for variant-based component styling.
- Recharts for charting.
- Framer Motion for animations.
- Wouter for routing.
- TanStack Query (React Query) for data fetching.

**Development Tools**
- Replit-specific plugins (cartographer, dev banner, runtime error overlay).
- TSX for TypeScript execution in development.
- ESBuild for production builds.

**Session Management**
- Connect-pg-simple (installed, but implementation pending).
```