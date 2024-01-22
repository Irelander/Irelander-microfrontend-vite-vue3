import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "product-mfe-entry.js",
      name: "product-mfe",
      shared: ["vue", "vue-router", "pinia"],
      exposes: {
        "./Pages": "./src/pages/index.ts",
      },
      remotes: {
        "cart-mfe": "http://localhost:5101/assets/cart-mfe-entry.js",
      },
    }),
  ],
  server: {
    port: 5002,
  },
  preview: {
    port: 5102,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
