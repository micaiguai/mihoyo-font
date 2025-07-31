<script setup lang="ts">
import CopyFrame from './components/CopyFrame/CopyFrame.vue'
import Switch from './components/Switch/Switch.vue'
import Textarea from './components/Textarea/Textarea.vue'
import { computed, ref, watch } from 'vue'
import Thanks from './components/Thanks/Thanks.vue'

const input = ref('')
const model = ref('Zenless-Zone-Zero')
const options = ref([
  {
    label: 'Zenless-Zone-Zero',
    value: 'Zenless-Zone-Zero',
    meta: {
      font: 'Zenless-Zone-Zero',
      fontClass: 'font-["Zenless-Zone-Zero"]'
    }
  },
  {
    label: 'Genshin-Impact',
    value: 'Genshin-Impact',
    meta: {
      font: 'Genshin-Impact',
      fontClass: 'font-["Genshin-Impact"]'
    }
  },
])

const curOption = computed(() => {
  return options.value.find((item) => item.value === model.value)
})

watch(model, () => {
  input.value = `Hello ${curOption.value?.meta.font}`
}, {
  immediate: true
})
</script>

<template>
  <div class="p-2 h-screen w-screen flex flex-col text-black/80">
    <Switch v-model="model" class="mb-2" :options="options"></Switch>
    <div class="flex-grow-1 flex gap-2 items-center">
      <Textarea 
        class="w-[30%] flex-grow-1 h-full flex-shrink-0 break-all"
        v-model="input" ref="inputRef" 
      />  
      <div class="flex-shrink-0">
        <div class="flex-shrink-0 text-12 i-material-symbols:arrow-left-alt-rounded"></div>
        <div class="flex-shrink-0 text-12 i-material-symbols:arrow-right-alt-rounded"></div>
      </div>
      <CopyFrame class="w-[30%] flex-grow-1 h-full flex-shrink-0" v-model="input">
        <Textarea
          :class="[
            curOption?.meta.fontClass
          ]" 
          class="flex-grow-1 flex-shrink-0 break-all"  
          v-model="input"
        ></Textarea>
      </CopyFrame>
    </div>
    <Thanks></Thanks>
  </div>
</template>
