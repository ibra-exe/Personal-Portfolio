# Ibrahim Shaheen - Personal Portfolio

## Overview
A responsive personal portfolio website with a cyberpunk/space-themed aesthetic, built using HTML, CSS, and vanilla JavaScript. Originally hosted on GitHub Pages.

## Project Architecture
- **Type**: Static HTML/CSS/JS website
- **Structure**: Multi-page site using iframe-based navigation
  - `index.html` - Main shell with header, nav bar, audio player, and footer
  - `home.html` - Home page content (loaded via iframe)
  - `about.html` - About page with profile info
  - `experience.html` / `experience2.html` - Experience/timeline pages
  - `projects.html` - Projects showcase
  - `contact.html` - Contact information
  - `styles.css` - All styling (space theme, animations, responsive design)
  - `typewriter.js` - Typewriter text animation effect
  - `files/` - Assets (profile image, background gif, audio)

## Technologies
- HTML5, CSS3 (with CSS variables, animations, gradients)
- Vanilla JavaScript
- Google Fonts (Orbitron)
- Font Awesome icons

## Running Locally
- Served via `npx serve` on port 5000
- Deployed as a static site with `.` as the public directory

## Design Notes
- **Layout**: Flexbox column layout on body with footer fixed at bottom; iframe takes `flex: 1` to fill remaining space
- **Footer spacing**: Uses `--footer-height` CSS custom property for padding-bottom, adjusted per breakpoint
- **Breakpoints**: Three responsive breakpoints at 900px (tablet), 600px (phone), 380px (small phone)
- **Iframe pattern**: Content pages scroll within the iframe for long content; embedded pages use `body.transparent-bg` to avoid inheriting flex layout
- **Touch targets**: All interactive elements (nav links, buttons, cards) have min-height 44px on mobile
- **Touch support**: Uses `@media (hover: none)` to disable hover transforms on touch devices, adds `:active` feedback
- **Accessibility**: Supports `prefers-reduced-motion` to disable animations
- **Mobile performance**: Shooting stars, star clusters hidden on screens <600px; nebula opacity reduced
- **iOS fixes**: `-webkit-text-size-adjust: 100%`, `-webkit-overflow-scrolling: touch` on embedded pages
- **Future plans**: User wants to convert to a web app with editable sections

## Recent Changes
- 2026-02-06: Mobile phone optimization - increased touch targets to 44px, tightened spacing for phone widths, added touch/hover media queries, iOS scrolling fixes, reduced animations on mobile for performance, added prefers-reduced-motion support
- 2026-02-06: Comprehensive responsive design overhaul - fixed content clipping, flexible iframe height, rewrote media queries with 3 breakpoints, responsive navbar/grids/typography
- 2026-02-06: Initial Replit setup - configured static file server and deployment
