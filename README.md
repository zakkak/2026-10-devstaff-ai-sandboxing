# AI agent sandboxing: incus-spawn vs OpenShell

Slides for the October 2026 devstaff session comparing two ways of giving AI
coding agents an isolated environment:

- [incus-spawn (`isx`)](https://github.com/Sanne/incus-spawn): disposable Incus system containers/VMs with copy-on-write branching and a host-side credential-injecting proxy.
- [NVIDIA OpenShell](https://docs.nvidia.com/openshell/home): policy-driven agent sandboxes with Landlock and network-proxy enforcement.

The deck covers a side-by-side overview, limitations, setup and usage, then
features unique to each tool. It is written with [Slidev](https://sli.dev) in
`slides.md`.

## Prerequisites

- [Node.js](https://nodejs.org) 20.12 or newer (developed with Node 22)
- npm (bundled with Node.js)
- A modern browser to view the slides
- For PDF/PNG export only: Playwright's Chromium (`npm i -D playwright-chromium`)

## Install

```bash
npm install
```

## Present / edit (dev server)

```bash
npm run dev
```

Opens the deck at <http://localhost:3030> with hot reload. Press `o` for the
slide overview and `f` for fullscreen.

## Build a static site

```bash
npm run build
```

The output goes to `dist/` and can be served by any static web server, e.g.
`npx serve dist`.

> `vite.config.ts` disables CSS minification as a workaround for a
> lightningcss error that otherwise breaks the production build with
> Slidev 52–53 / Vite 8. It can be removed once that is fixed upstream.

## Export to PDF

```bash
npm run export
```

Creates `slides-export.pdf` (requires the Playwright prerequisite above).

## Layout

| File | Purpose |
|------|---------|
| `slides.md` | The presentation |
| `vite.config.ts` | Build workaround (see above) |
| `package.json` | Slidev dependencies and scripts |
