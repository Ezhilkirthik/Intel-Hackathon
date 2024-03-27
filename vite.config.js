import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
// const root = resolve(__dirname,'src')
// const outDir = resolve(__dirname,'dist')
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: import.meta.env.VITE_FLASK_API_RENDER,
        // changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    cors: false,
    headers: {},
  },
  build: {
    rollupOptions: {},
  },
});
