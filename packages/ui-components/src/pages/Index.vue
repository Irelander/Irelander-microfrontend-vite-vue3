<script setup lang="ts">
import { Button } from '../components';

</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Design System</h1>
    <fieldset class='border p-3'>
      <legend>Button</legend>
      <div class='flex gap-2'>
        <Button>Default</Button>
        <Button design="primary">Primary</Button>
        <Button design="danger">Danger</Button>
      </div>
    </fieldset>
  </div>
</template>