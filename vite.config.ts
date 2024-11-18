import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Plugin React pour gérer les fichiers React
    viteCompression({
      algorithm: 'brotliCompress', // Utiliser Brotli pour une meilleure compression (ou 'gzip')
      ext: '.br',                  // Extension pour Brotli ('.gz' pour gzip)
      threshold: 1024,             // Seulement compresser les fichiers > 1 KB
      verbose: true,               // Log des fichiers compressés
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Option SCSS si vous utilisez Sass
      },
    },
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild', // Répertoire de sortie pour la construction
  },
  
});
