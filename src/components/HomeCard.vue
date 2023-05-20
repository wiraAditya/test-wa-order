<template>
  <div class="rounded p-1 shadow-lg">
    <img
      src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="foods"
    />
    <div class="p-5 flex flex-col">
      <h1 class="font-bold text-xl mt-3">{{ title }}</h1>
      <p class="text-sm my-4">
        {{ body }}
      </p>
      <button class="bg-red-500 rounded px-4 py-2 self-end">
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
}>()
</script>
