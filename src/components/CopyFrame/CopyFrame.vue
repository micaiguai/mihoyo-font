<template>
  <div class="flex flex-col">
    <div class="flex justify-end mb-2">
      <Button class="" @click="copy">
        <div v-if="copyStatus === 'none'" class="i-material-symbols:content-copy-outline-rounded"></div>
        <div v-else-if="copyStatus === 'success'" class="i-material-symbols:check"></div>
        <div v-else class="i-material-symbols:close"></div>
      </Button>
      <!-- <Button>
        <div class="i-material-symbols:download"></div>
      </Button> -->
    </div>
    <slot></slot>
    <!-- <div class="ring ring-gray-300 min-h-30 flex-1 rounded p-2">
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../Button/Button.vue';
import Textarea from '../Textarea/Textarea.vue';

const input = defineModel<string>()

const copyStatus = ref<'none' | 'success' | 'failed'>('none')

function copy() {
  try {
    const inputDom = document.createElement('input')
    inputDom.value = input.value || ''
    document.body.appendChild(inputDom)
    inputDom.select()
    document.execCommand('copy')
    document.body.removeChild(inputDom)
    copyStatus.value = 'success'
    setTimeout(() => {
      copyStatus.value = 'none'
    }, 1000)
  } catch (error) {
    copyStatus.value = 'failed'
  }
}
</script>
