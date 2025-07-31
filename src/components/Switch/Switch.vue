<template>
  <div class="flex items-center">
    <Button
      class="mr-2"
      :class="[
        model === item.value ? 'bg-blue-200! hover:bg-blue-200!' : ''
      ]"
      v-for="item in props.options" 
      :key="item.value" 
      :label="item.label" 
      :value="item.value" 
      :modelValue="model" 
      @click="() => model = item.value"
    >{{ item.label }}</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '../Button/Button.vue';

const props = defineProps<{
  options: {
    label: string,
    value: string
  }[]
}>()
const model = defineModel<string>()
</script>
