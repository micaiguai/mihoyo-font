<template>
  <textarea v-model="model" class="ring ring-gray-300 outline-none rounded p-2 text-lg"></textarea>
</template>

<script setup lang="ts">
const model = defineModel<string>()
</script>
