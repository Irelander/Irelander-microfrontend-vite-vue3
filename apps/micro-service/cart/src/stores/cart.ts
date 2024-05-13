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

  // DB 연동 처리 로직
  // 샘플 레포에서는 간단하게 처리하기 위해 로컬스토리지를 사용
  const initialCartList: Record<string, any>[] = JSON.parse(localStorage.getItem('carts') || '[]');

  const cartList = ref<Record<string, any>[]>(initialCartList);
  
  function addCart(product: Record<string, any>) {
    cartList.value.push({cartId : getUUID() ,...product});
    localStorage.setItem('carts', JSON.stringify(cartList.value));
  }

  function removeCart(product:Record<string, any>) {
    cartList.value = cartList.value.filter((item) => item.cartId !== product.cartId);
    localStorage.setItem('carts', JSON.stringify(cartList.value));
  }

  return { cartList, addCart, removeCart }
})