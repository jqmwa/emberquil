# EmberQuill Studios

A Black-owned manga studio website with NERV-inspired cyberpunk aesthetic. Providing equity, housing, and opportunities for creative professionals.

## 🎨 Design Theme

**NERV Aesthetic** - Dark cyberpunk inspired by 80s/90s interfaces, Evangelion's NERV headquarters, and Wong Kar-wai's green-tinted cinematography. Industrial control terminals meet melancholic warmth.

### Color Palette

```
Deep Void:       #0a1612  (Background)
Muted Sage:      #8fb3a5  (Foreground)
Signal Orange:   #e85d04  (Accent)
Industrial Teal: #3a7a8c  (Primary)
Organic Green:   #4a8c5c  (Secondary)
Subdued Purple:  #8a5a8a  (Muted)
```

### Typography

- **Primary**: Share Tech Mono (terminal aesthetic)
- **Display**: Orbitron (headers, emphasis)
- **System**: 8px base grid spacing

## 📐 Information Hierarchy (60/30/10)

### 60% - Manga Studio & Artists
- Hero introduction
- About Studio (5-year contracts, housing)
- Featured Artists (crew bios)
- Book One: The Last War
- Origin story

### 30% - Artist Assets & Community
- Plush Collection
- Level Up System
- Community engagement

### 10% - Crypto & Rewards
- Shiba Inu currency
- NFT minting
- Weekly airdrops

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx           # Root layout with UnifiedNavbar
│   ├── page.tsx             # Home page with all sections
│   └── globals.css          # NERV theme styles
├── components/
│   ├── UnifiedNavbar.tsx    # Mobile-first navigation
│   ├── kit/                 # Design system components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── Container.tsx
│   │   ├── Badge.tsx
│   │   └── Divider.tsx
│   └── sections/            # Page sections
│       ├── HeroSection.tsx
│       ├── AboutStudioSection.tsx
│       ├── ArtistsSection.tsx
│       ├── BookOneSection.tsx
│       ├── StorySection.tsx
│       ├── PlushSection.tsx
│       ├── LevelUpSection.tsx
│       ├── CryptoSection.tsx
│       └── FooterSection.tsx
├── contexts/
│   └── HomeStateContext.tsx
├── public/
│   └── icons/
│       ├── logo.webp
│       └── shiba.svg
├── DESIGN_SYSTEM.md         # Complete design documentation
└── tailwind.config.js       # NERV color system
```

## 🎯 Key Features

- **Mobile-First Design**: Unified navbar with responsive menu
- **Kit Component System**: Reusable design components
- **NERV Aesthetic**: Cyberpunk terminal styling with CRT effects
- **60/30/10 Content Hierarchy**: Balanced information architecture
- **Terminal Typography**: Monospace fonts with phosphor glow
- **Glassmorphism**: Subtle backdrop blur effects
- **Smooth Animations**: Terminal-style transitions

## 🛠 Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Share Tech Mono & Orbitron fonts

## 📖 Documentation

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete design guidelines, color philosophy, spacing system, and component specifications.

## 🎨 Brand

**EmberQuill Studios** - Black-owned manga studio  
Terminal ID: EQS-NERV-2026  
Status: ONLINE

---

*"Welcome to the underground facility. Here in the clouds, everything's brighter."*
