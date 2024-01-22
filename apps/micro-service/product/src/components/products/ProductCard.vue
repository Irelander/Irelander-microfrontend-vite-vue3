<script setup lang="ts">
  import { defineProps } from 'vue'
  import { useCartStore } from 'cart-mfe/Store';
  
  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }

  const cartStore = useCartStore();

  async function addToCart(product: Product){
    cartStore.addCart(product);
  }

  function formatPrice(val:number){
    return val.toLocaleString('ko-KR');
  }
  
  defineProps<{
    product: Product
  }>()
</script>

<template>
  <div class="rounded-lg border bg-card text-card-foreground h-full shadow-lg" data-v0-t="card">
    <div class="p-6">
      <img
        :src=product.image
        alt="Product Image"
        class="aspect-square object-cover w-full rounded-lg mb-4"
        width="200"
        height="200"
      />
      <h2 class="text-lg font-semibold mb-2">{{ product.name }}</h2>
      <p class="text-gray-500 mb-4">{{ product.description }}</p>
      <div class="flex items-center justify-between">
        <span class="text-lg font-bold">{{ formatPrice(product.price) }}원</span>
        <button 
          @click='addToCart(product)'
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          담기
        </button>
      </div>
    </div>
  </div>
</template>