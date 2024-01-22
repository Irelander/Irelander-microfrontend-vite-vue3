import { ref } from 'vue';
import { defineStore } from 'pinia';

function getUUID(length:number = 10) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const useCartStore = defineStore('cart', () => {
  const cartList = ref<any[]>([])
  
  function addCart(product: Record<string, any>) {
    cartList.value.push({cartId : getUUID() ,...product});
  }

  function removeCart(product:Record<string, any>) {
    cartList.value = cartList.value.filter((item) => item.cartId !== product.cartId);
  }

  return { cartList, addCart, removeCart }
})