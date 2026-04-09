
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  
  export default defineConfig({
    plugins: [react()],
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    }
  })
  createRoot(document.getElementById("root")!).render(<App />);