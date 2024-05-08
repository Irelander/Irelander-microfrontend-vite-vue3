// vite.config.ts
import { defineConfig } from "file:///Users/irelander/Desktop/Works/Minisoft/Irelander-microfrontend-vite-vue3/node_modules/.pnpm/vite@5.0.11/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/irelander/Desktop/Works/Minisoft/Irelander-microfrontend-vite-vue3/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.11_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///Users/irelander/Desktop/Works/Minisoft/Irelander-microfrontend-vite-vue3/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.4/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "product-mfe-entry.js",
      name: "product-mfe",
      shared: ["vue", "vue-router", "pinia"],
      exposes: {
        "./Pages": "./src/pages/index.ts"
      },
      remotes: {
        "cart-mfe": "http://localhost:5101/assets/cart-mfe-entry.js"
      }
    })
  ],
  server: {
    port: 5002
  },
  preview: {
    port: 5102
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaXJlbGFuZGVyL0Rlc2t0b3AvV29ya3MvTWluaXNvZnQvSXJlbGFuZGVyLW1pY3JvZnJvbnRlbmQtdml0ZS12dWUzL2FwcHMvbWljcm8tc2VydmljZS9wcm9kdWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaXJlbGFuZGVyL0Rlc2t0b3AvV29ya3MvTWluaXNvZnQvSXJlbGFuZGVyLW1pY3JvZnJvbnRlbmQtdml0ZS12dWUzL2FwcHMvbWljcm8tc2VydmljZS9wcm9kdWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9pcmVsYW5kZXIvRGVza3RvcC9Xb3Jrcy9NaW5pc29mdC9JcmVsYW5kZXItbWljcm9mcm9udGVuZC12aXRlLXZ1ZTMvYXBwcy9taWNyby1zZXJ2aWNlL3Byb2R1Y3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tIFwiQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb25cIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIGZpbGVuYW1lOiBcInByb2R1Y3QtbWZlLWVudHJ5LmpzXCIsXG4gICAgICBuYW1lOiBcInByb2R1Y3QtbWZlXCIsXG4gICAgICBzaGFyZWQ6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIiwgXCJwaW5pYVwiXSxcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgXCIuL1BhZ2VzXCI6IFwiLi9zcmMvcGFnZXMvaW5kZXgudHNcIixcbiAgICAgIH0sXG4gICAgICByZW1vdGVzOiB7XG4gICAgICAgIFwiY2FydC1tZmVcIjogXCJodHRwOi8vbG9jYWxob3N0OjUxMDEvYXNzZXRzL2NhcnQtbWZlLWVudHJ5LmpzXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA1MDAyLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNTEwMixcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtb2R1bGVQcmVsb2FkOiBmYWxzZSxcbiAgICB0YXJnZXQ6IFwiZXNuZXh0XCIsXG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOGQsU0FBUyxvQkFBb0I7QUFDM2YsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBR3ZCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFFBQVEsQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBLE1BQ3JDLFNBQVM7QUFBQSxRQUNQLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
