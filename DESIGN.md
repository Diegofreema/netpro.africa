# Design

## Overview

Netpro uses a dark, high-contrast landing-page system with soft black surfaces, restrained blue actions, chrome-like texture, and centered section rhythm. The design should feel quiet, premium, and technically assured.

## Tokens

Source of truth: `src/shared/design/tokens.css`.

- Colors use OKLCH CSS variables under `--np-*`.
- Shadcn/Tailwind semantic colors map to the same variables.
- Typography, radii, shadows, spacing, focus rings, and motion durations are tokenized.

## Color

- Background: near-black `--np-bg`.
- Surface: layered black `--np-surface`, `--np-surface-2`, `--np-surface-3`.
- Text: white `--np-text`, muted gray `--np-muted`, softer `--np-subtle`.
- Action: blue `--np-blue`, stronger hover `--np-blue-strong`.
- Borders: low-contrast white alpha via OKLCH tokens.

## Typography

Single family: Geist Variable. Headings use strong weight and balanced wrapping. Body copy stays moderate, with comfortable line height on dark backgrounds.

## Layout

Use `--np-container` for max width and `--np-section-y` for vertical rhythm. Cards never nest inside cards. Grids use responsive `auto-fit` where possible.

## Components

- Brand logo
- Pill buttons
- Section headings
- Icon badges
- Feature tiles
- Service cards
- Project cards
- Testimonial cards
- FAQ rows
- CTA panel
- Footer columns

## Motion

Use subtle transform/opacity transitions. No `transition: all`. Reduced motion disables animation.
