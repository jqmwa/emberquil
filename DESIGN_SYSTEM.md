# EmberQuill Studios - Design System

**EmberQuill Studios** - A Black-owned manga studio with NERV-inspired design theme. Dark cyberpunk aesthetic inspired by 80s/90s interfaces, Evangelion's NERV headquarters, and Wong Kar-wai's green-tinted cinematography.

---

## 🎨 NERV Design Theme - The Aesthetic

Deep oceanic greens meet warning-sign orange. Phosphor glow on aging CRT monitors. The quiet hum of a command terminal in an underground facility. Film grain over midnight corridors. Industrial control terminals meet the melancholic warmth of In the Mood for Love.

*Note: NERV is the design aesthetic, EmberQuill Studios remains the studio name.*

---

## Color Philosophy

### Core Colors
```
Background:  #0a1612  (Deep sea darkness - the void behind the glass)
Foreground:  #8fb3a5  (Muted sage - easy on eyes during extended operations)
Accent:      #e85d04  (Signal orange - urgent, alive, impossible to ignore)
Functions:   #8a5a8a  (Subdued purple - mysterious systems at work)
Types:       #3a7a8c  (Industrial teal - structural, foundational)
Strings:     #4a8c5c  (Organic green - data in motion)
```

### Semantic Colors
```
Primary:     #3a7a8c  (Industrial teal)
Secondary:   #4a8c5c  (Organic green)
Warning:     #e85d04  (Signal orange)
Dark:        #0a1612  (Deep void)
Text:        #8fb3a5  (Muted sage)
Muted:       #8a5a8a  (Subdued purple)
```

---

## Typography System

### Font Stack
```css
Primary:   'Share Tech Mono', 'Roboto Mono', monospace  /* Terminal aesthetic */
Display:   'Orbitron', sans-serif                       /* Headers, emphasis */
Body:      'Share Tech Mono', monospace                 /* All text content */
```

### Type Scale (Mobile-First)
```
xs:    12px / 16px  line-height
sm:    14px / 20px  line-height
base:  16px / 24px  line-height
lg:    18px / 28px  line-height
xl:    20px / 32px  line-height
2xl:   24px / 36px  line-height
3xl:   30px / 40px  line-height
4xl:   36px / 44px  line-height
5xl:   48px / 56px  line-height
6xl:   60px / 68px  line-height
```

---

## Spacing System (8px Base Grid)

```
0:    0px
1:    4px    (0.25rem)
2:    8px    (0.5rem)
3:    12px   (0.75rem)
4:    16px   (1rem)
6:    24px   (1.5rem)
8:    32px   (2rem)
12:   48px   (3rem)
16:   64px   (4rem)
20:   80px   (5rem)
24:   96px   (6rem)
32:   128px  (8rem)
```

### Component Spacing
```
Section Padding:     py-12 md:py-16 lg:py-24
Container Max:       max-w-7xl
Card Padding:        p-4 md:p-6 lg:p-8
Button Padding:      px-4 py-2 md:px-6 md:py-3
Input Padding:       px-4 py-3
Gap (Flex/Grid):     gap-4 md:gap-6 lg:gap-8
```

---

## Component Kit Structure

### Core Components
1. **Button** - Primary, Secondary, Outline, Ghost variants
2. **Card** - Terminal-style glassmorphic cards
3. **Section** - Page section wrapper with consistent spacing
4. **Container** - Content width container
5. **Badge** - Status indicators, labels
6. **NavLink** - Unified navigation links
7. **Divider** - Horizontal/vertical separators with NERV styling

### Design Tokens
```javascript
border-radius:  2px (sharp, terminal aesthetic)
border-width:   1px (thin, precise)
box-shadow:     subtle glow effects
backdrop-blur:  8px (CRT screen effect)
opacity:        hover: 0.8, disabled: 0.5
transitions:    150ms ease-in-out
```

---

## Information Architecture (60/30/10)

### 60% - Manga Studio & Artists
- **Hero Section**: Studio introduction, NERV identity
- **About Studio**: Black-owned manga studio mission, 5-year contracts, housing
- **Artists/Creators**: Team bios (Blue Takatsuki, KittyWitxh, Artist Kai, Suppoku)
- **Studio Facilities**: Workspace, amenities, creative environment
- **Book One: The Last War**: Featured manga project
- **The Story**: Origin story, creator economy, equitable design

### 30% - Artist Assets & Community
- **Plush Collection**: 6 exclusive designs
- **Level Up System**: 6-tier badge progression
- **Benefits**: What EmberQuill provides
- **Community**: Artist collaboration, rewards
- **NFT Gallery**: Digital collectibles (secondary focus)

### 10% - Crypto & Shiba Inu
- **Shiba Inu Currency**: Studio currency system
- **Minting**: Founder's Badge, Book NFTs
- **Weekly Airdrops**: Community rewards
- **Crypto Integration**: Subtle, not dominant

---

## Layout Structure

### Mobile-First Unified Navbar
```
┌─────────────────────────────────────────────┐
│  [LOGO] EmberQuill Studios    [MENU BTN]    │
│                                              │
│  Mobile Menu (Overlay):                     │
│  - About Studio                             │
│  - Artists                                  │
│  - Studio Facilities                        │
│  - Plush Collection                         │
│  - Level Up                                 │
│  - Community                                │
│  - [Apply Now CTA]                          │
└─────────────────────────────────────────────┘
```

### Desktop Navbar
```
┌──────────────────────────────────────────────────────────────┐
│  [LOGO] EmberQuill  Studio | Artists | Plush | Community [CTA]│
└──────────────────────────────────────────────────────────────┘
```

---

## Page Sections (Priority Order)

1. **Hero** - EmberQuill Studios introduction with NERV aesthetic
2. **About Studio** - Mission, 5-year contracts, housing (60%)
3. **Featured Artists** - 4 creator bios with work (60%)
4. **Book One** - The Last War showcase (60%)
5. **Studio Facilities** - Amenities, workspace (60%)
6. **Plush Collection** - Product showcase (30%)
7. **Level Up System** - Community progression (30%)
8. **Benefits** - What we provide (30%)
9. **Shiba Inu & NFTs** - Crypto integration (10%)
10. **Footer** - Links, social, newsletter

---

## Implementation Checklist

- [ ] Remove LeftSideNav component
- [ ] Create unified Navbar with mobile menu
- [ ] Build kit component library
- [ ] Apply NERV color palette throughout
- [ ] Implement 8px spacing system
- [ ] Set up terminal typography
- [ ] Restructure landing page (60/30/10)
- [ ] Add CRT/phosphor glow effects
- [ ] Mobile-first responsive design
- [ ] Terminal-style animations

---

## Brand Voice

**Tone**: Technical, precise, warm melancholy, cyberpunk poetry
**Style**: Command terminal meets artist studio
**Copy**: Short, impactful, monospace aesthetic
**Feeling**: Underground facility, quiet revolution, creator empowerment

---

**Last Updated**: 2026-01-11
**Version**: 2.0 - NERV Theme
