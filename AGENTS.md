# Edulogia Project Guidelines

Welcome to the Edulogia codebase! This document provides persistent instructions for any AI agents (or developers) working on this project.

## Project Architecture
- **Framework:** React 18+ with Vite (TypeScript).
- **Styling:** Tailwind CSS with a custom "brutalist/playful" design system.
- **Routing:** React Router (`react-router-dom`).
- **Internationalization (i18n):** `react-i18next` with translation files located in `src/locales/`.

## Design System & UI Conventions
- **Colors:** Primary brand colors are defined in `tailwind.config.js`: `brand-pink`, `brand-yellow`, `brand-blue`.
- **Custom Classes:** Use `.chunky-box` (for card/container borders and dropping shadows) and `.chunky-btn` (for buttons) to maintain the bold, friendly visual style.
- **Typography:** Display fonts for headers (`font-display`), Sans for body text (`font-sans`).
- **Icons:** Use `lucide-react`.

## Content Management (Blog & Resources)
- **Blog Posts (Markdown):** Blog posts are managed as Markdown files located in `src/content/blog/`. Each Markdown file contains YAML frontmatter (with properties like `title`, `excerpt`, `date`, `category`, `imageUrl`, `draft`, `published`) and body content. Only posts without `draft: true` and `published: false` are displayed.
- **Resources Store:** Edit `src/data/content.ts` to add or modify static resources and featured items.
- **UI Translations:** For static UI text (headers, buttons, navigation), always use the `t()` function and update the respective JSON files in `src/locales/en.json` and `src/locales/it.json`.

## Guidelines for Making Changes
1. **Adding a Blog Post:** Create a new `.md` file in `src/content/blog/`. Add the required YAML frontmatter (title, excerpt, date, category, readTime, imageUrl). Set `draft: true` if you want it hidden from production builds while working on it.
2. **Styling Components:** Do not use default or generic soft styles. Stick to the distinct high-contrast, thick border (`border-3 border-slate-900`) and solid shadow patterns seen across the app.
4. **Agent Updates:** Always ensure this `AGENTS.md` file reflects the current design constraints, page structure (e.g., preserving the layout of the Home, Blog, Resources, and About pages), and roadmap features.
