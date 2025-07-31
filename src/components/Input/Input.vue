<template>
  <input v-model="model" class="ring ring-gray-300 outline-none"></input>
</template>

<script setup lang="ts">
const model = defineModel<string>()
</script>
