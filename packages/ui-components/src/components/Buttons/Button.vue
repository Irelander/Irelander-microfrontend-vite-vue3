<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  design: {
    type: String,
    default: 'default'
  }
})

</script>

<template>
  <button :class="[$attrs.class, props.design]"><slot/></button>
</template>

<style scoped lang="postcss">
  .default {
    @apply inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border h-10 px-4 py-2;
  }

  .primary {
    @apply bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded;
  }

  .danger {
    @apply bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded;
  }
</style>