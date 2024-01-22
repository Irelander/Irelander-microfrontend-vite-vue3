import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../pages/signup/Index.vue';
import Signin from '../pages/signin/Index.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/signup',
      component: Signup
    }
  ]
})
