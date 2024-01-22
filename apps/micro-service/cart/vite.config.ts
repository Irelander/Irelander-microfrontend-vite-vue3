import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "cart-mfe-entry.js",
      name: "cart-mfe",
      shared: ["vue", "vue-router", "pinia"],
      exposes: {
        "./Pages/Cart" : "./src/pages/cart/Index.vue",
        "./Store": "./src/stores"
      }
    }),
  ],
  server: {
    port: 5001,
  },
  preview: {
    port: 5101,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
