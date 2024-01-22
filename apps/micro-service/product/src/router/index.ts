import { createRouter, createWebHistory } from 'vue-router'
import Products from '../pages/products/Index.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/products',
      component: Products
    }
  ]
})
