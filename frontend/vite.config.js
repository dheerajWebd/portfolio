import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'
// https://vite.dev/config/ 
export default defineConfig({
  plugins: [react(), tailwindcss(), viteCompression()],
  // 🔁 यहाँ अपनी GitHub repo का नाम दो
  optimizeDeps: {
    include: ["react", "react-dom"]
  }, 
  
  base: '/',
  server: {
    host: "0.0.0.0",
    port: 3000
  }
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//    // 🔁 यहाँ अपनी GitHub repo का नाम दो
// })