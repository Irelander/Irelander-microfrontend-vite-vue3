<script setup lang="ts">
  import { defineProps } from 'vue'
  import { useCartStore } from 'cafe-mfe/Store';
  import { Button } from 'irelander-ui-components/src/components';
  
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
        <Button @click='addToCart(product)'>담기</Button>
      </div>
    </div>
  </div>
</template>