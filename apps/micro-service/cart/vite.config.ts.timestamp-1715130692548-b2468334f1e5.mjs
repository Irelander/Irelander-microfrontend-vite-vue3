// vite.config.ts
import { defineConfig } from "file:///Users/irelander/Desktop/Works/Minisoft/Irelander-microfrontend-vite-vue3/node_modules/.pnpm/vite@5.0.11/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/irelander/Desktop/Works/Minisoft/Irelander-microfrontend-vite-vue3/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.11_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///Users/irelander/Desktop/Works/Minisoft/Irelander-microfrontend-vite-vue3/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.4/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "cart-mfe-entry.js",
      name: "cart-mfe",
      shared: ["vue", "vue-router", "pinia"],
      exposes: {
        "./Pages/Cart": "./src/pages/cart/Index.vue",
        "./Store": "./src/stores"
      }
    })
  ],
  server: {
    port: 5001
  },
  preview: {
    port: 5101
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaXJlbGFuZGVyL0Rlc2t0b3AvV29ya3MvTWluaXNvZnQvSXJlbGFuZGVyLW1pY3JvZnJvbnRlbmQtdml0ZS12dWUzL2FwcHMvbWljcm8tc2VydmljZS9jYXJ0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaXJlbGFuZGVyL0Rlc2t0b3AvV29ya3MvTWluaXNvZnQvSXJlbGFuZGVyLW1pY3JvZnJvbnRlbmQtdml0ZS12dWUzL2FwcHMvbWljcm8tc2VydmljZS9jYXJ0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9pcmVsYW5kZXIvRGVza3RvcC9Xb3Jrcy9NaW5pc29mdC9JcmVsYW5kZXItbWljcm9mcm9udGVuZC12aXRlLXZ1ZTMvYXBwcy9taWNyby1zZXJ2aWNlL2NhcnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tIFwiQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb25cIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIGZpbGVuYW1lOiBcImNhcnQtbWZlLWVudHJ5LmpzXCIsXG4gICAgICBuYW1lOiBcImNhcnQtbWZlXCIsXG4gICAgICBzaGFyZWQ6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIiwgXCJwaW5pYVwiXSxcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgXCIuL1BhZ2VzL0NhcnRcIiA6IFwiLi9zcmMvcGFnZXMvY2FydC9JbmRleC52dWVcIixcbiAgICAgICAgXCIuL1N0b3JlXCI6IFwiLi9zcmMvc3RvcmVzXCJcbiAgICAgIH1cbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNTAwMSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDUxMDEsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbW9kdWxlUHJlbG9hZDogZmFsc2UsXG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFkLFNBQVMsb0JBQW9CO0FBQ2xmLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUd2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixRQUFRLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQSxNQUNyQyxTQUFTO0FBQUEsUUFDUCxnQkFBaUI7QUFBQSxRQUNqQixXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
