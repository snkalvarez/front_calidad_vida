import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Añade esta sección
    allowedHosts: [
      '76c1-45-167-124-198.ngrok-free.app', // <--- Asegúrate de reemplazar esto con tu URL actual de ngrok
      // Puedes añadir más hosts si es necesario, por ejemplo:
      // '.ngrok-free.app', // Para permitir todos los subdominios de ngrok-free.app (menos específico pero útil si tu URL cambia)
      // 'localhost', // Ya permitido por defecto, pero puedes añadirlo si lo necesitas explícitamente
      // '127.0.0.1' // Ya permitido por defecto
    ]
  }
})