# 720Tech

Marketing site for **720Tech** — AI-powered freight intelligence platforms.
Dark navy + warm amber aesthetic, Satoshi/Hanken Grotesk type, glowing 3D imagery and glass UI.

Live: https://www.720tech.ai/

## Stack
- Static HTML / CSS / JS (no framework), hosted on GitHub Pages
- `index.html` — landing page · `contact.html` — contact page
- `site.css` — design system / all styles
- `app.js` — nav, mobile menu, scroll reveals, contact form
- `assets/light/` — generated 3D imagery (KIE / Flux)
- `tools/` — KIE image generation + upscale helpers

## Local dev
```bash
python3 -m http.server 8765
# open http://localhost:8765/index.html
```
