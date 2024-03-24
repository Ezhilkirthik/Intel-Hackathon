import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
// const root = resolve(__dirname,'src')
// const outDir = resolve(__dirname,'dist')
export default defineConfig({
  plugins: [react()],
  server: {
    cors: false,
    proxy: {},
  },
  build: {
    rollupOptions: {},
  },
});
