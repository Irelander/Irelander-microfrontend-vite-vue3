<script setup lang="ts">
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
</script>


<template>
  <Header/>
  <main class='min-h-[calc(100vh-118px)]'>
    <router-view/>
  </main>
  <Footer/>
</template>