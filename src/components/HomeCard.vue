<template>
  <div class="rounded p-1 shadow-lg">
    <img :src="image" alt="foods" />
    <div class="p-5 flex flex-col">
      <h1 class="font-bold text-xl mt-3">{{ title }}</h1>
      <p class="text-sm my-4">
        {{ body }}
      </p>
      <button
        @click="$emit('cardClick', { title: title, body: body, image: image, id: id })"
        class="bg-red-500 rounded px-4 py-2 self-end"
      >
        <ShoppingCartIcon class="h-6 w-6 text-white" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'

defineProps<{
  title: string
  body: string
  image: string
  id?: string
}>()
</script>
