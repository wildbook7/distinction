# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React + TypeScript application built with Vite, using Biome for linting/formatting and Tailwind CSS v4 for styling. ESLint has been explicitly removed in favor of Biome.

## Development Commands

```bash
# Start development server with HMR
pnpm dev

# Type-check and build for production
pnpm build

# Preview production build locally
pnpm preview
```

## Code Quality Tools

**Biome** is used for linting and formatting (ESLint has been removed).

Configuration in `biome.json`:
- Indentation: Tabs
- Quote style: Double quotes
- Import organization: Enabled on save
- VCS integration: Git-aware

To check/format code:
```bash
pnpm biome check .
pnpm biome format .
```

## Build Configuration

- **TypeScript**: Strict mode enabled with references architecture
  - `tsconfig.app.json` - Application code in `src/`
  - `tsconfig.node.json` - Vite configuration
  - Bundler module resolution
  - No unused locals/parameters allowed

- **Vite**: Uses React plugin with Tailwind CSS v4 plugin integration

## Project Structure

- `src/main.tsx` - Application entry point with React 19 StrictMode
- `src/App.tsx` - Root application component
- `src/index.css` - Global styles with Tailwind directives

## Package Manager

This project uses **pnpm** exclusively. Volta is used for Node.js/pnpm version management.
