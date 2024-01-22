// vite.config.ts
import { defineConfig } from "file:///Users/irelander/Desktop/TechStudy/mircrofront-with-vue3/node_modules/.pnpm/vite@5.0.11/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/irelander/Desktop/TechStudy/mircrofront-with-vue3/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.11_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///Users/irelander/Desktop/TechStudy/mircrofront-with-vue3/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.4/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "cart-mfe-entry.js",
      name: "cart-mfe",
      shared: ["vue", "vue-router", "pinia"],
      exposes: {
        "./Pages/Cart": "./src/pages/cart/Index.vue",
        "./Store": "./src/store"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaXJlbGFuZGVyL0Rlc2t0b3AvVGVjaFN0dWR5L21pcmNyb2Zyb250LXdpdGgtdnVlMy9hcHBzL21pY3JvLXNlcnZpY2UvY2FydFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2lyZWxhbmRlci9EZXNrdG9wL1RlY2hTdHVkeS9taXJjcm9mcm9udC13aXRoLXZ1ZTMvYXBwcy9taWNyby1zZXJ2aWNlL2NhcnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2lyZWxhbmRlci9EZXNrdG9wL1RlY2hTdHVkeS9taXJjcm9mcm9udC13aXRoLXZ1ZTMvYXBwcy9taWNyby1zZXJ2aWNlL2NhcnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tIFwiQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb25cIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIGZpbGVuYW1lOiBcImNhcnQtbWZlLWVudHJ5LmpzXCIsXG4gICAgICBuYW1lOiBcImNhcnQtbWZlXCIsXG4gICAgICBzaGFyZWQ6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIiwgXCJwaW5pYVwiXSxcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgXCIuL1BhZ2VzL0NhcnRcIiA6IFwiLi9zcmMvcGFnZXMvY2FydC9JbmRleC52dWVcIixcbiAgICAgICAgXCIuL1N0b3JlXCI6IFwiLi9zcmMvc3RvcmVcIlxuICAgICAgfVxuICAgIH0pLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA1MDAxLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNTEwMSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtb2R1bGVQcmVsb2FkOiBmYWxzZSxcbiAgICB0YXJnZXQ6IFwiZXNuZXh0XCIsXG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa2EsU0FBUyxvQkFBb0I7QUFDL2IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBR3ZCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFFBQVEsQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBLE1BQ3JDLFNBQVM7QUFBQSxRQUNQLGdCQUFpQjtBQUFBLFFBQ2pCLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
