import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../pages/cart/Index.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/cart',
      component: CartPage
    }
  ]
})
