import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // dist/.vite/manifest.json: prerender betiği, reklam sayfalarının parçalarını
    // (LandingPage + içerik modülü) HTML başına modulepreload olarak yazmak için
    // parça adlarını (hash'li) buradan okur.
    manifest: true,
  },
})
