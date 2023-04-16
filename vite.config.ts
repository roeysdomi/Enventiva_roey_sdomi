import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  },
  server: {
    host: true,
  },
  plugins: [react()],
  mode: process.env.NODE_ENV || 'development',
});
