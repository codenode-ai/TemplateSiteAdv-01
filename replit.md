# Overview

This is a professional law firm website for "Vilmondes José da Rosa – Advocacia Empresarial," a Brazilian corporate law practice specializing in business and labor law. The site is designed as a modern, sophisticated institutional presence that emphasizes credibility and trust while providing easy client contact mechanisms. Built as a full-stack web application, it features a React-based frontend with shadcn/ui components and an Express.js backend, designed to showcase the firm's expertise and facilitate client inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with **React 18** and **TypeScript**, utilizing a component-based architecture with modern hooks and context patterns. The application uses **Wouter** for lightweight client-side routing and **TanStack Query** for efficient server state management and API caching. The UI layer leverages **shadcn/ui** components built on top of **Radix UI** primitives, providing accessible and customizable interface elements.

The styling approach combines **Tailwind CSS** for utility-first styling with custom CSS variables for theming. The design system implements a sophisticated dark theme with golden accents (--primary: hsl(51, 100%, 50%)) and uses premium typography with Merriweather serif font for headings and Roboto sans-serif for body text.

The frontend architecture follows a single-page application (SPA) pattern with all content loaded on the home route, utilizing smooth scrolling navigation between sections instead of traditional page routing.

## Backend Architecture
The backend implements a minimal **Express.js** server with **TypeScript** support, focusing primarily on handling contact form submissions. The server architecture includes middleware for request logging, JSON parsing, and error handling. 

The application uses a development-focused setup with **Vite** integration for hot module replacement and optimized builds. The server implements CORS handling and serves static assets in production while providing API endpoints under the `/api` namespace.

## Data Storage Solutions
The project includes **Drizzle ORM** configuration with PostgreSQL dialect support, though the current implementation uses in-memory storage via a custom `MemStorage` class for user data. The database schema defines basic user entities with UUID primary keys. The Drizzle setup is configured for migrations and includes Zod schema validation for type-safe database operations.

## API Structure
The REST API follows a simple structure with a primary `/api/contact` endpoint for handling contact form submissions. The API implements request validation for required fields (name, email, message) and email format validation. Response handling includes appropriate HTTP status codes and JSON error messages.

The contact form API currently logs submissions to the console and would typically integrate with email services like Nodemailer, SendGrid, or AWS SES in production environments.

## Authentication and Authorization
The current implementation includes a basic user schema and storage interface but no active authentication system. The architecture provides a foundation for future authentication implementation with user creation and retrieval methods in the storage layer.

# External Dependencies

## UI and Styling Dependencies
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives for building the component library
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: For managing component variants and conditional styling
- **lucide-react**: Icon library providing consistent iconography throughout the application

## State Management and Data Fetching
- **@tanstack/react-query**: Server state management, caching, and synchronization
- **wouter**: Lightweight client-side routing library

## Form Handling and Validation
- **@hookform/resolvers**: Form validation resolvers for React Hook Form integration
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod for database schema validation

## Database and ORM
- **drizzle-orm**: TypeScript ORM for database operations
- **@neondatabase/serverless**: Neon database adapter for serverless PostgreSQL
- **drizzle-kit**: Database migration and schema management tools

## Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **typescript**: Static type checking and enhanced developer experience
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tools for Replit integration

## Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured but not actively used)

## Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **embla-carousel-react**: Carousel/slider functionality for testimonials section
- **clsx**: Utility for constructing className strings conditionally