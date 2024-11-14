# Embrace Community App

A modern cross-platform application built with Tauri v2 and React, featuring both desktop and mobile capabilities.

## Tech Stack

### Frontend Core

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Router** - Type-safe routing with dev tools
- **Tailwind CSS** - Utility-first CSS framework

### State & Data Management

- **Apollo Client** - GraphQL client with caching
- **Zustand** - Lightweight state management
- **GraphQL** - Type-safe API queries

### Cross-Platform

- **Tauri v2** - Desktop and mobile framework
  - Desktop: Windows, macOS, Linux
  - Mobile: iOS, Android

## Prerequisites

- Node.js 18+
- Yarn package manager
- Rust (for Tauri)
- Platform-specific requirements:
  - iOS: Xcode
  - Android: Android Studio
  - Windows: VS Build Tools
  - Linux: Required system libraries

## Development Setup

1. Install dependencies:

```bash
yarn install
```

2. Set up environment:

```bash
cp .env.example .env
```

3. Start development:

For web development:

```bash
yarn dev
```

For iOS development:

```bash
yarn dev:ios
```

## Available Scripts

```bash
# Development
yarn dev        # Run all services
yarn dev:fe     # Frontend only
yarn dev:api    # API server only
yarn dev:ios    # iOS development

# Building
yarn build      # Production build
yarn preview    # Preview build

# Code Quality
yarn format     # Format code
yarn format:check # Check formatting
```

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── contexts/       # React contexts
│   ├── hooks/         # Custom hooks
│   ├── stores/        # Zustand stores
│   ├── pages/         # Route pages
│   └── styles/        # Global styles
├── src-tauri/         # Tauri native code
├── apps/
│   └── api/           # GraphQL API server
└── public/            # Static assets
```

## Features

- **Cross-Platform Support**

  - Desktop apps via Tauri
  - Mobile apps (iOS/Android)
  - Web browser version

- **Modern Architecture**

  - Type-safe throughout
  - GraphQL API integration
  - State management with Zustand
  - Responsive UI with Tailwind

- **Developer Experience**
  - Hot reload
  - Type checking
  - Code formatting
  - VS Code integration
