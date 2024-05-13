import { defineStore } from 'pinia';
import Router from '../router';
import { ref } from 'vue';
import { navigateTo } from 'utils';
import lodash from 'lodash';

export const useAuthStore = defineStore('auth', () => {

  // 리모트 어플리케이션간의 공유 의존성이 설정되어 있을 경우 해당 의존성 패키지가 서로 영향을 주는지 확인을 위한 코드 입니다.
  // lodash는 product-mfe에 사용되고 있으며 lodash.map을 재정의하여 product의 lodash에서는 어떤 값이 나오는지 확인합니다.
  lodash.map = ()=>{return []};
  console.log(lodash.map, 'user-mfe')

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