# 720tech

Website for **720tech** — built on the "Light" design system (warm amber sunrise on black,
bold Hanken Grotesk type, orbiting 3D worlds, AC-style app-icon centerpiece).

Carried over from the prior build as the starting point; being rebranded and developed for 720tech.

## Stack
- Static HTML / CSS / JS (no framework)
- `light.css` — active design system
- `app.js` — nav, mobile menu, scroll reveals
- `assets/light/` — generated 3D imagery (KIE / Flux)
- `tools/` — KIE image generation helpers

## Local dev
```bash
python3 -m http.server 8765
# open http://localhost:8765/index.html
```
