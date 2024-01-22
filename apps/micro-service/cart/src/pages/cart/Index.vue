<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia'
import { useCartStore } from '../../stores'

const cartStore = useCartStore();
const { cartList } = storeToRefs(cartStore)

const totalPrice = computed(() => {
  return cartList.value.reduce((acc, cur) => acc + cur.price, 0);
});

function formatPrice(val: number) {
  return val.toLocaleString('ko-KR');
}

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
      <h1 class="text-2xl font-bold my-4">장바구니</h1>
      <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        구매
      </button>
    </div>
    <div class="mt-8">
      <div v-if='cartList.length > 0' v-for='cart in cartList' :key='cart.id'
        class="flex flex-col md:flex-row border-b border-gray-400 py-4 justify-between items-center">
        <div class='flex flex-col md:flex-row'>
          <div class="flex-shrink-0">
            <img :src="cart.image" alt="Product image" class="w-32 h-32 object-cover">
          </div>
          <div class="mt-4 md:mt-0 md:ml-6">
            <h2 class="text-lg font-bold">{{ cart.name }}</h2>
            <p class="mt-2 text-gray-600">{{ cart.description }}</p>
            <div class="mt-4 flex items-center">
              <span class="font-bold">{{ formatPrice(cart.price) }} 원</span>
            </div>
          </div>
        </div>
        <div>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click='cartStore.removeCart(cart)'>
            삭제
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-end items-center mt-8">
      <span class="text-gray-600 mr-4">합계</span>
      <span class="text-xl font-bold">{{ formatPrice(totalPrice) }} 원</span>
    </div>
  </div>
</template>