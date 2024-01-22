<script setup lang="ts">
</script>

<template>
  <div class='flex justify-center items-center min-h-svh'>
    <div class="mx-auto max-w-sm space-y-6 min-w-[400px] border p-5 rounded shadow-sm">
      <div class="space-y-2 text-center">
        <h1 class="text-3xl font-bold">회원가입</h1>
        <p class="text-gray-500 dark:text-gray-400">회원가입 페이지에 오신것을 환영합니다.</p>
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
          />
        </div>
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="password-confirm"
          >
            비밀번호 확인
          </label>
          <input
            type="password"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="password-confirm"
          />
        </div>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full text-white"
          type="submit"
        >
          회원가입
        </button>
        <div class="mt-4 flex items-center space-x-2">
          <button
            type="button"
            role="checkbox"
            aria-checked="false"
            aria-required="true"
            data-state="unchecked"
            value="on"
            class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            id="terms"
          ></button>
          <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" for="terms">
            이용약관에 동의합니다.
          </label>
        </div>
        <div class="mt-4 flex items-center space-x-2">
          <button
            type="button"
            role="checkbox"
            aria-checked="false"
            aria-required="true"
            data-state="unchecked"
            value="on"
            class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            id="privacy"
          ></button>
          <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" for="privacy">
            개인정보 처리방침에 동의합니다.
          </label>
        </div>
      </div>
    </div>
  </div>
</template>