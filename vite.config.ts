import { defineConfig } from 'vite'

// Work around a lightningcss minify error on Slidev's default theme CSS (Vite 8).
export default defineConfig({
  build: { cssMinify: false },
})
