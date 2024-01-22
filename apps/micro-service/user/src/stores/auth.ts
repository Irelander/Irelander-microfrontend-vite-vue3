import { defineStore } from 'pinia';
import Router from '../router';
import { ref } from 'vue';
import { navigateTo } from 'utils';

export const useAuthStore = defineStore('auth', () => {

  const sessionUser = localStorage.getItem('user');
  const initialUser = sessionUser ? JSON.parse(sessionUser) : null;
  const user = ref<Record<string, any> | null>(initialUser)

  async function login(username:string, password:string) {
    try {

        const currentUser = {
          name: '홍길동',
          username,
        }
        // update pinia state
        user.value = currentUser;
        localStorage.setItem('user', JSON.stringify(currentUser));

        username;
        password;

        navigateTo({
          path: '/',
        });

    } catch (error) {}
  }

  async function logout(){
    user.value = null;
    localStorage.removeItem('user');
    Router.push('/account/login');
  }

  return { user, login, logout }
})