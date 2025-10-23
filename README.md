# GSAP MacBook Product Showcase

Interactive 3D MacBook product page built with React, Vite, GSAP, and React Three Fiber. Scroll-triggered animations, a 3D model viewer with color/size switching, and section reveals recreate a premium product landing experience.

## Features

- 3D MacBook viewer powered by React Three Fiber and Drei
  - Toggle color (Silver / Space Gray) and size (14" / 16")
  - Smooth cross-fade and slide animation between models
  - Studio lighting environment for realistic reflections
- Scroll-driven storytelling with GSAP
  - Pinned showcase section with masked video reveal
  - Performance section with layered images repositioning on scroll
  - Features section: model rotates while the MacBook screen swaps through videos as you scroll
  - Highlights section with staggered masonry reveal
- Global state management via Zustand for model color/scale and active video texture
- Tailwind CSS v4 for styling with custom fonts and utilities
- Vite for fast dev, build, and HMR

## Tech stack

- React 19 + Vite 7
- GSAP (ScrollTrigger, SplitText via `gsap/all`)
- @react-three/fiber + @react-three/drei + three
- Zustand
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- ESLint (React Hooks, React Refresh)

## Getting started

Prerequisites:

- Node.js 18+ (recommended)
- pnpm (preferred) or npm/yarn

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

Lint:

```bash
pnpm lint
```

## App structure

```
src/
	App.jsx                # Page composition (navbar, hero, 3D viewer, sections, footer)
	index.css              # Tailwind setup, custom fonts, utilities, section styles
	main.jsx               # App bootstrap
	components/
		navbar.jsx           # Top navigation
		hero.jsx             # Title, hero video, CTA
		product-viewer.jsx   # 3D viewer UI (color/size), Canvas setup
		showcase.jsx         # Masked video reveal + content pinned by ScrollTrigger
		performance.jsx      # Layered images animated by scroll
		features.jsx         # Scroll-driven model rotation + screen video sequence
		highlights.jsx       # Masonry-style content with staggered reveal
		footer.jsx           # Footer links and info
		three/
			studio-lights.jsx  # Environment and spot lights
			model-switcher.jsx # Toggles between 14" and 16" models with GSAP fades/moves
		models/
			Macbook.jsx        # Single model using a video texture on screen
			Macbook14.jsx      # 14" model with static texture screen
			Macbook16.jsx      # 16" model with static texture screen
	constants/
		index.js             # UI copy, features, image positions, footer/nav links, exclusions
	store/
		index.js             # Zustand store: color, scale, texture
public/
	fonts/                 # Custom font files (otf)
	models/                # GLB files (macbook-transformed.glb, 14/16 variants)
	videos/                # MP4 assets for hero and feature transitions
	images, icons, svgs    # Misc UI assets referenced in components
```

## How it works

- State: `src/store/index.js` exposes `color`, `scale`, and `texture` with setters and a `reset` action. Components read/modify via the hook `useMacbookStore()`.
- 3D viewer: `product-viewer.jsx` renders a `<Canvas>` with `StudioLights` and `ModelSwitcher`.
  - `model-switcher.jsx` holds two groups (14" and 16") and animates opacity/position with GSAP to switch models based on `scale`.
  - The 16"/14" implementations (`Macbook16.jsx`, `Macbook14.jsx`) color most meshes by traversing the GLTF scene and skipping IDs listed in `noChangeParts`. The screen uses a static texture (`/screen.png`).
  - `components/models/Macbook.jsx` demonstrates using a video texture for the screen, driven by the store’s `texture`.
- Scroll animations: GSAP `ScrollTrigger` timelines are registered in `App.jsx` and used inside sections.
  - `showcase.jsx` pins the section and reveals content while scaling a mask image over a background video.
  - `performance.jsx` animates layered images to target positions defined in `constants.performanceImgPositions`.
  - `features.jsx` uses two timelines: one to rotate the model as the canvas is pinned, and another to sequentially call `setTexture()` to swap the video on the screen while revealing copy boxes.
- Styling: Tailwind v4 with custom theme tokens and utility classes in `index.css`.

## Configuration and customization

- Add/replace feature videos by updating `public/videos/feature-*.mp4` and the `featureSequence`/`features` arrays in `src/constants/index.js`.
- Update the GLB models by replacing the files in `public/models/` and adjusting mesh name exclusions in `noChangeParts` if needed.
- Tweak lighting in `components/three/studio-lights.jsx` (Environment Lightformers and SpotLights).
- Modify default color/scale/video in `src/store/index.js` (e.g., `DEFAULT_COLOR`, `DEFAULT_SCALE`, `DEFAULT_TEXTURE`).

## Accessibility

- Images and videos include descriptive `alt`/`title`/`aria-label` where appropriate.
- Keyboard interaction in the 3D viewer is handled by the Drei `PresentationControls`; additional keyboard/ARIA affordances can be layered if required.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — create a production build
- `pnpm preview` — preview the production build
- `pnpm lint` — run ESLint

## Notes

- This project uses Tailwind CSS v4 via the official Vite plugin; there is no standalone Tailwind config file.
- Vite requires Node.js 18+. If you see issues starting the dev server, verify your Node version.
