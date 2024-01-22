<script setup lang="ts">
  import { useAuthStore } from '../../stores';

  const authStore = useAuthStore();

  let username = '';
  let password = '';

  function login(){
    authStore.login(username, password);
  }

</script>

<template>
  <div class='flex justify-center items-center min-h-svh'>
    <div class="mx-auto max-w-sm space-y-6 min-w-[400px] border p-5 rounded shadow-sm">
      <div class="space-y-2 text-center">
        <h1 class="text-3xl font-bold">Microfrontend App</h1>
      </div>
      <div class="space-y-4">
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="email"
          >
            이메일
          </label>
          <input
            type="email"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="email"
            placeholder="m@example.com"
            v-bind:value="username"
          />
        </div>
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="password"
          >
            비밀번호
          </label>
          <input
            type="password"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="password"
            placeholder="********"
            v-bind:value="password"
          />
        </div>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  h-10 px-4 py-2 w-full text-white bg-black"
          @click='login'
        >
          로그인
        </button>
        <p class='text-gray-400 text-[10px] text-center'>로그인 후 장바구니 이용가능 & 로그인 버튼만 눌러도 동작합니다.</p>
      </div>
    </div>
  </div>
</template>../../stores