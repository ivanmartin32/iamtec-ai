import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/iamtec-ai/', 
  
  server: {
    port: 3000,
    open: true
  },

  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      input: {
        // rutas para que Vite las encuentre al compilar
        main: resolve(__dirname, 'index.html'),
        impresion: resolve(__dirname, 'impresion-3d/index.html'),
        desarrollo: resolve(__dirname, 'desarrollo-web/index.html'),
        cursos: resolve(__dirname, 'cursos/index.html')
      }
    }
  }
})