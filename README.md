# EmberQuill Studios - Artist Hub Website

A futuristic glassmorphism website for EmberQuill Studios, an artist hub providing equity, housing, and opportunities for creative professionals.

## Design System

- **Colors**: #C1B2FF (Primary), #54A388 (Secondary), #161316 (Dark), #43256E (Purple), #FFFFFF (White)
- **Font**: SF UI Display
- **Style**: Black futuristic glassmorphism

## Features

- **Hero Section**: Studio information and mission statement
- **Plush Collection**: Showcase of 6 exclusive plush doll designs
- **Level Up System**: 6-level badge progression system
- **Benefits Section**: Comprehensive overview of what EmberQuill Studios provides
- **Mobile-First**: Fully responsive design optimized for all devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── PlushDolls.tsx  # Plush collection
│   ├── Badges.tsx      # Level system
│   └── Benefits.tsx    # Benefits section
└── public/
    ├── icons/
    │   ├── logo.webp
    │   └── badges/     # 6 badge images
    └── dolls/          # 6 plush doll images
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
