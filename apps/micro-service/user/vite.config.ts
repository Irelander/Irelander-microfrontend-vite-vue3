import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "user-mfe-entry.js",
      name: "user-mfe",
      shared: ["vue", "vue-router", "pinia", "lodash"],
      exposes: {
        "./Pages": "./src/pages/index.ts",
        "./Stores": "./src/stores/index.ts",
      }
    }),
  ],
  server: {
    port: 5003,
  },
  preview: {
    port: 5103,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
