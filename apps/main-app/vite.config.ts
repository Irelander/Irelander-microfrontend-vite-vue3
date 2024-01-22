import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    federation({
      name: "main-app",
      filename: "main-app-entry.js",
      shared: ["vue", "vue-router", "pinia"],
      remotes: {
        "cart-mfe": "http://localhost:5101/assets/cart-mfe-entry.js",
        "product-mfe": "http://localhost:5102/assets/product-mfe-entry.js",
        "user-mfe": "http://localhost:5103/assets/user-mfe-entry.js",
      },
    }),
  ],
  server: {
    port: 5000,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
