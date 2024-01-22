<script setup lang="ts">
  import { useCartStore } from 'cart-mfe/Store';

  const cartStore = useCartStore();

</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 bg-gray-800 border-gray-700">
    <div class="flex items-center space-x-2">
      <h1 class="text-lg font-semibold text-gray-200">Micro Frontend Apps</h1>
    </div>
    <nav class="flex items-center space-x-4">
      <router-link class="text-gray-400 hover:text-gray-200" to="/">
        홈
      </router-link>
      <router-link class="text-gray-400 hover:text-gray-200" to="/micro-frontend">
        Micro Frontend?
      </router-link>
      <router-link class="text-gray-400 hover:text-gray-200" to="/products">
        Products
      </router-link>
      <router-link class="text-gray-400 hover:text-gray-200" to="/cart">
        <div class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6 text-gray-200 ml-4"
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
          <span class="absolute top-0 right-0 inline-block w-4 h-4 -mt-1 -mr-2 text-xs font-bold text-center text-white bg-red-600 rounded-full">
            {{ cartStore.cartList.length }}
          </span>
        </div>
      </router-link>
    </nav>
  </header>
</template>