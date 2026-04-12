# Ocean Air Express Inc. — Website

> **"Delivering Excellence"**  
> A modern, multi-page marketing and information website for Ocean Air Express Inc., a USA-based global transport and logistics company.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Components](#components)
- [Routing](#routing)
- [Getting Started](#getting-started)
- [Company Details](#company-details)
- [Certifications](#certifications)
- [Services Offered](#services-offered)
- [Suggested Next Steps](#suggested-next-steps)

---

## Overview

This is a fully responsive, production-ready static website for **Ocean Air Express Inc.** It is built with React, TypeScript, React Router, and Tailwind CSS v4. The site spans 7 pages with a shared Navbar and Footer, consistent design tokens, reusable UI components, and a dedicated Component Library page for design reference.

---

## Tech Stack

| Layer            | Technology                              |
|------------------|-----------------------------------------|
| Framework        | React 18 + TypeScript                   |
| Routing          | React Router v7 (Data mode)             |
| Styling          | Tailwind CSS v4                         |
| Build Tool       | Vite 6                                  |
| UI Primitives    | Radix UI                                |
| Icons            | Lucide React                            |
| Animation        | Motion (formerly Framer Motion)         |
| Forms            | React Hook Form 7                       |
| Charts           | Recharts                                |
| Notifications    | Sonner                                  |
| Material UI      | @mui/material + @emotion/react          |
| Font Delivery    | Google Fonts (via `fonts.css`)          |

---

## Design System

### Color Palette

| Role              | Color Name     | Hex Code  |
|-------------------|----------------|-----------|
| Primary           | Deep Navy Blue | `#1A2B5F` |
| Accent            | Gold / Amber   | `#C8972B` |
| Card / Surface    | White          | `#FFFFFF` |
| Body Text         | Dark           | `#1E1E1E` |
| Page Background   | Soft Light     | `#F5F7FA` |

### Typography

| Usage     | Font Family | Weights Used          |
|-----------|-------------|-----------------------|
| Headings  | **Sora**    | 300, 400, 500, 600, 700, 800 |
| Body Text | **Inter**   | 300, 400, 500, 600, 700      |

Fonts are imported via Google Fonts in `/src/styles/fonts.css`.

---

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                     # Root application entry point
│   │   ├── routes.tsx                  # React Router browser router config
│   │   ├── layout/
│   │   │   └── Root.tsx                # Shared layout (Navbar + Outlet + Footer)
│   │   ├── pages/
│   │   │   ├── Home.tsx                # Landing / Homepage
│   │   │   ├── About.tsx               # About Us
│   │   │   ├── Services.tsx            # Services overview
│   │   │   ├── Contact.tsx             # Contact form & info
│   │   │   ├── Careers.tsx             # Job listings & culture
│   │   │   ├── Licence.tsx             # Licensing & compliance
│   │   │   └── ComponentLibrary.tsx    # Internal design/component reference
│   │   └── components/
│   │       ├── Navbar.tsx              # Site-wide navigation bar
│   │       ├── Footer.tsx              # Site-wide footer
│   │       ├── figma/
│   │       │   └── ImageWithFallback.tsx
│   │       └── ui/                     # Radix-based UI component library
│   │           ├── button.tsx
│   │           ├── card.tsx
│   │           ├── badge.tsx
│   │           ├── input.tsx
│   │           ├── textarea.tsx
│   │           ├── select.tsx
│   │           ├── dialog.tsx
│   │           ├── tabs.tsx
│   │           ├── accordion.tsx
│   │           ├── table.tsx
│   │           ├── tooltip.tsx
│   │           ├── carousel.tsx
│   │           ├── chart.tsx
│   │           └── ... (30+ components)
│   └── styles/
│       ├── fonts.css                   # Google Fonts imports (Sora + Inter)
│       ├── index.css                   # Global styles
│       ├── tailwind.css                # Tailwind entry
│       └── theme.css                   # Design tokens & CSS variables
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

---

## Pages

| Route          | Component           | Description                                                                 |
|----------------|---------------------|-----------------------------------------------------------------------------|
| `/`            | `Home.tsx`          | Hero banner, service highlights, stats, testimonials, CTA sections          |
| `/about`       | `About.tsx`         | Company story, mission, team, timeline, values                              |
| `/services`    | `Services.tsx`      | Detailed breakdown of all 8 service offerings                               |
| `/contact`     | `Contact.tsx`       | Contact form, office address, phone/email, map placeholder                  |
| `/careers`     | `Careers.tsx`       | Open positions, company culture, benefits, application form                 |
| `/licence`     | `Licence.tsx`       | Regulatory licenses, certifications, compliance information                  |
| `/components`  | `ComponentLibrary.tsx` | Internal reference page showcasing all reusable UI components            |

---

## Components

### Shared Layout

- **`Navbar.tsx`** — Responsive navigation bar with logo, page links, and mobile hamburger menu. Uses the deep navy primary color with gold hover accents.
- **`Footer.tsx`** — Full-width footer with company info, quick links, services list, contact details, and copyright notice.
- **`Root.tsx`** — Layout wrapper rendering `<Navbar />`, `<Outlet />`, and `<Footer />` for all routes.

### UI Component Library (`/src/app/components/ui/`)

Built on top of **Radix UI** primitives and styled with Tailwind CSS. Includes:

`accordion` · `alert` · `alert-dialog` · `aspect-ratio` · `avatar` · `badge` · `breadcrumb` · `button` · `calendar` · `card` · `carousel` · `chart` · `checkbox` · `collapsible` · `command` · `context-menu` · `dialog` · `drawer` · `dropdown-menu` · `form` · `hover-card` · `input` · `input-otp` · `label` · `menubar` · `navigation-menu` · `pagination` · `popover` · `progress` · `radio-group` · `resizable` · `scroll-area` · `select` · `separator` · `sheet` · `sidebar` · `skeleton` · `slider` · `sonner` · `switch` · `table` · `tabs` · `textarea` · `toggle` · `toggle-group` · `tooltip`

---

## Routing

Routing is configured in `/src/app/routes.tsx` using **React Router v7 Data mode** with `createBrowserRouter`:

```tsx
import { createBrowserRouter } from "react-router";
import { Root } from "./layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,          Component: Home },
      { path: "about",        Component: About },
      { path: "services",     Component: Services },
      { path: "contact",      Component: Contact },
      { path: "careers",      Component: Careers },
      { path: "licence",      Component: Licence },
      { path: "components",   Component: ComponentLibrary },
    ],
  },
]);
```

The router is consumed in `App.tsx` via `<RouterProvider router={router} />`.

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ocean-air-express

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
pnpm build
```

Build output will be in the `/dist` directory.

---

## Company Details

| Detail         | Value                          |
|----------------|--------------------------------|
| Company Name   | Ocean Air Express Inc.         |
| Tagline        | *"Delivering Excellence"*      |
| Country        | United States of America       |
| Phone          | (+1) 470-909-0419              |
| Industry       | Global Transport & Logistics   |

---

## Certifications

Ocean Air Express Inc. holds the following regulatory certifications and licenses:

| Certification | Full Name                                            |
|---------------|------------------------------------------------------|
| **FMCSA**     | Federal Motor Carrier Safety Administration          |
| **IATA**      | International Air Transport Association              |
| **FMC**       | Federal Maritime Commission                          |
| **DOT**       | U.S. Department of Transportation                    |

Detailed compliance information is available on the [Licence page](/licence).

---

## Services Offered

Ocean Air Express provides **8 core logistics services**:

| #  | Service                       | Description                                                                 |
|----|-------------------------------|-----------------------------------------------------------------------------|
| 1  | ✈️ Air Freight                | Express air cargo solutions connecting major global hubs                    |
| 2  | 🚢 Sea Freight                | Full container (FCL) and LCL ocean shipping across all major trade lanes    |
| 3  | 🚚 Road Transport             | Door-to-door trucking across the continental US and North America           |
| 4  | 🚂 Rail Freight               | Cost-effective rail cargo for heavy and bulk shipments                      |
| 5  | 🏗️ Special Project Transport  | Oversized, overweight, and complex cargo logistics                          |
| 6  | 📦 Courier Services           | Fast, reliable parcel and document delivery worldwide                       |
| 7  | 🏠 Last Mile Delivery         | Final leg delivery solutions direct to end customers                        |
| 8  | 📋 Contract Logistics         | Long-term dedicated logistics partnerships and supply chain management      |

---

## Suggested Next Steps

Here are recommended features and enhancements to build on top of the current static site:

1. **Live Shipment Tracking Page** — Add a `/tracking` route with a tracking number input that queries a logistics API (e.g., ShipEngine, EasyPost) or a Supabase-backed tracking database and displays real-time shipment status.

2. **Interactive Route Map** — Integrate Leaflet.js or Google Maps to display Ocean Air Express's global service corridors and port connections on the Services page.

3. **Scroll-Triggered Animations** — Use the already-installed `motion` library to add entrance animations (fade-in, slide-up) to page sections as users scroll, improving visual polish and engagement.

4. **Supabase Backend** — Connect a Supabase project to persist contact form submissions, job applications from the Careers page, and enable a simple CMS for managing job listings and news updates.

5. **Quote Request Form** — Add an interactive freight quote calculator on the Services or Contact page where users can input shipment details (weight, dimensions, origin, destination) and receive an estimated rate.

6. **Blog / News Section** — Add a `/news` route featuring company announcements, industry news, and logistics insights to improve SEO and brand authority.

---

*Built with React, TypeScript, Tailwind CSS v4, and React Router v7.*  
*© 2026 Ocean Air Express Inc. All rights reserved.*
