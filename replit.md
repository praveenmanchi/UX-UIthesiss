# Overview

This project is a React-based web application presenting "The History of UX/UI Design: A Treatise on Professional Claims." Its core purpose is to mathematically debunk inflated UX/UI experience claims through a data-driven long-form article. The application features a single-page, content-focused website with a sophisticated editorial aesthetic inspired by 18theses.com, incorporating advanced timeline visualizations, stacked area charts, proportional comparison bars, and interactive data visualizations. The technical stack comprises a Vite-powered React frontend with an Express backend, all implemented with TypeScript. The business vision is to provide a compelling, evidence-based narrative that challenges prevailing industry misconceptions about UX/UI expertise.

# Recent Changes (October 2025)

## Codebase Cleanup
- Removed duplicate reading progress implementations (kept context version)
- Deleted 29 unused UI components (accordion, alert-dialog, carousel, menubar, etc.)
- Removed 21 unused npm dependencies
- Cleaned up unused hooks and utilities

## Design System Implementation
Established comprehensive design system with CSS custom properties in `client/src/index.css`:
- **Color System**: Editorial palette with sage, terracotta, cream, charcoal
- **Typography Scale**: Fluid responsive typography with 10 size levels
- **Spacing System**: Base-8 scale from 0 to 128px
- **Shadows**: 7-level shadow system
- **Transitions**: Standardized durations and easing functions
- **Breakpoints**: Defined for sm, md, lg, xl, 2xl
- **Z-index Scale**: Organized layering system

# User Preferences

Preferred communication style: Simple, everyday language.

# Design System

## Color Tokens

**Base Colors**
- `--background`: hsl(0, 0%, 4%) - Dark background
- `--foreground`: hsl(60, 25%, 94%) - Cream text
- `--accent`: hsl(88, 16%, 53%) - Sage accent

**Editorial Palette**
- `--sage-teal`: hsl(165, 16%, 55%)
- `--terracotta`: hsl(24, 30%, 58%)
- `--sage`: hsl(88, 16%, 55%)
- `--cream`: hsl(56, 24%, 82%)
- `--charcoal`: hsl(120, 5%, 8%)

**Chart Colors**
- `--chart-1` through `--chart-5`: Coordinated visualization palette
- `--chart-dark-bg`: hsl(120, 5%, 3%)

## Typography

**Font Families**
- `--font-sans`: Inter (body text)
- `--font-display`: Space Grotesk (headings)
- `--font-mono`: JetBrains Mono (code/data)
- `--font-serif`: Georgia (quotes/accents)

**Size Scale** (fluid/responsive)
- `--text-xs` to `--text-6xl`: 10 size levels
- Uses clamp() for responsive scaling

**Font Weights**
- `--font-light`: 300
- `--font-normal`: 400
- `--font-medium`: 500
- `--font-semibold`: 600
- `--font-bold`: 700

**Line Heights**
- `--leading-none`: 1.0
- `--leading-tight`: 1.15
- `--leading-normal`: 1.5
- `--leading-relaxed`: 1.6

## Spacing

Base-8 scale with CSS custom properties:
- `--space-1` (4px) through `--space-32` (128px)
- Additional fractional sizes: `--space-0-5`, `--space-1-5`, etc.
- Section padding responsive tokens: mobile, tablet, desktop

## Layout

**Content Widths**
- `--content-max-width`: 1200px
- `--content-narrow`: 800px
- `--content-wide`: 1400px

**Breakpoints** (for reference)
- `--breakpoint-sm`: 640px
- `--breakpoint-md`: 768px
- `--breakpoint-lg`: 1024px
- `--breakpoint-xl`: 1280px
- `--breakpoint-2xl`: 1536px

## Borders & Shadows

**Border Radius**
- `--radius-sm` through `--radius-2xl`
- `--radius-full`: 9999px (pills)

**Shadow System**
- `--shadow-sm` through `--shadow-2xl`
- `--shadow-inner`: inset shadow

## Transitions

**Durations**
- `--duration-75` through `--duration-1000`

**Easing Functions**
- `--ease-linear`, `--ease-in`, `--ease-out`, `--ease-in-out`

**Combined Presets**
- `--transition-fast`: 150ms ease-out
- `--transition-base`: 200ms ease-out
- `--transition-slow`: 300ms ease-in-out

## Z-index Scale

Organized layering from `--z-base` (0) to `--z-tooltip` (70):
- dropdown: 10
- sticky: 20
- fixed: 30
- modal-backdrop: 40
- modal: 50
- popover: 60
- tooltip: 70

## Utility Classes

**Layout**
- `.container-custom`: Max-width container with padding
- `.section-padding`: Responsive section spacing
- `.grid-12`: 12-column grid system

**Effects**
- `.glass`: Glassmorphism effect
- `.glass-card`: Card with glass effect
- `.hover-lift`: Lift on hover
- `.hover-scale`: Scale on hover
- `.button-hover`: Button ripple effect
- `.link-underline`: Animated underline

**Timeline Specific**
- `.timeline-container`, `.timeline-line`, `.timeline-dot`
- `.chart-dark-container`: Dark background for charts

# System Architecture

## Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript
- Vite for fast development and builds
- Wouter for client-side routing
- TanStack Query (React Query) for server state management

**UI Component System**
- Minimal Shadcn/ui components (button, card, dropdown-menu, form, progress, separator, toast, tooltip, toggle-group)
- Tailwind CSS with comprehensive design tokens
- Custom fonts: Inter, Space Grotesk, JetBrains Mono
- Atomic design principles

**Design Decisions**
- Default dark theme with extensive CSS custom properties
- Single-page application structure for long-form content
- Visual hierarchy through content section dividers
- Mobile-first responsive design
- Editorial design inspired by 18theses.com, utilizing distinct visual identities for sections
- Card-based layouts for content sections
- Comprehensive mobile responsiveness across all components
- Standardized UI across all visualizations with muted editorial color palette

## Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Vite integration for HMR during development
- Middleware for JSON parsing and request/response logging

**Data Layer**
- Drizzle ORM for PostgreSQL
- Shared schema for type safety across frontend and backend
- Zod schemas for runtime validation
- `IStorage` interface pattern with `MemStorage` fallback

**Server Architecture Decisions**
- Module-based routing system (`server/routes.ts`)
- API routes are prefixed with `/api`
- HTTP server wraps Express

## System Design Choices & Features

**Data Visualizations**
- **Scatter Plots**: Dynamic scatter plots for timelines like "Critical Moments in Pre-Digital Interface History," "The Race to Democratize Computing," "Industry Timeline: The Evolution of Design as a Business Function," and "Design Tools Evolution," featuring era-based color coding, interactive icons, and hover tooltips
- **TimelineTrack**: Horizontal timeline with interactive events, detail panels, and era groupings
- **StackedAreaChart**: Recharts-based area charts with gradient fills and custom tooltips
- **ProportionalBarGroup**: Horizontal stacked bars with animations and hover tooltips
- **CurvedToolTimeline**: SVG-based curved timeline showing design tool evolution and relationships

**Navigation & Interactivity**
- **Timeline Mini-Map Navigation**: Compact, sticky bottom timeline for quick navigation
- **Dynamic Navigation Header**: Header that hides and reappears with active section highlighting
- **Animations**: Framer Motion for smooth spring animations, fade-in effects, and transitions
- **Reading Progress**: Context-based reading progress tracking with localStorage persistence

**Accessibility & Testing**
- Comprehensive `data-testid` attributes for automated testing
- Reduced motion support
- Focus-visible indicators
- Print styles

## Build & Deployment
- Vite outputs static assets to `dist/public`
- ESBuild bundles the server to `dist/index.js`
- Production mode serves static files via Express; development mode uses Vite middleware
- Consistent path aliases across TypeScript and Vite
- Environment-based configuration (NODE_ENV)

# External Dependencies

**Core Dependencies**
- React 18 & React DOM
- TypeScript 5.6
- Vite 5.4

**UI & Styling**
- Tailwind CSS with plugins (@tailwindcss/typography, @tailwindcss/vite)
- Radix UI primitives (dialog, dropdown-menu, label, popover, progress, scroll-area, select, separator, slot, toast, tooltip, toggle, toggle-group)
- Lucide React for iconography
- React Icons (SI) for brand icons
- Class Variance Authority (CVA) for component variants
- Framer Motion for animations

**Data & Forms**
- TanStack Query (React Query) for data fetching
- React Hook Form for form management
- Zod for schema validation
- @hookform/resolvers for Zod integration

**Utilities**
- date-fns for date formatting
- clsx & tailwind-merge for className management
- Wouter for routing
- Recharts for data visualization

**Development Tools**
- Replit Vite plugins (cartographer, dev-banner, runtime-error-modal)
- @types packages for TypeScript
- PostCSS & Autoprefixer
