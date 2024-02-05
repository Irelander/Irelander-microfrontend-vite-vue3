import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Microfrontend from '../pages/micro-frontend/Index.vue'
import { useAuthStore } from 'user-mfe/Stores';
import { Signin } from 'user-mfe/Pages';
import { listenRemoteRoutes } from './remoteRouter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/micro-frontend',
      component: Microfrontend
    },
    {
      path: '/signin',
      component: Signin,
      meta: { layout: 'BlinkLayout' }
    },
    {
      path: '/cart',
      component: ()=> import('cart-mfe/Pages/Cart')
    },
    {
      path: '/products',
      component: async () => {
        /**
         * Dynamic Import를 통해 사용되는 순간 해당 모듈을 로딩하도록 처리
         */ 
        const { ProductPage } = (await import('product-mfe/Pages')).default;
        return ProductPage;
      },
      /**
       * Dynamic Import를 사용하지 않은경우, 호스트 어플리케이션의 로딩과 동시에 아래 모듈을 불러온다.
       */
      // component: ProductPage
    }
  ]
});

router.beforeEach((to) => {
  
  const authPages = ['/cart'];
  const authRequired = authPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
      authStore.returnUrl = to.fullPath;
      return '/signin';
  }
})

listenRemoteRoutes(router);

export default router;