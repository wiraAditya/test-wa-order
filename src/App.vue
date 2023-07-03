<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import { useCartStore } from './stores/cart'
</script>

<template>
  <header class="h-14 flex items-center ml-4">
    <h2 class="text-xl font-bold">Company</h2>
    <div class="absolute right-10 w-10">
      <ShoppingCartIcon class="h-6 w-6 text-slate-400" />
      <span
        class="text-white font-bold button-pils text-center border-white border-2 px-1 absolute -top-1.5 right-0 bg-red-500 rounded-full flex items-center text-xs"
        >{{ useCartStore().$state.cart.length }}</span
      >
    </div>
  </header>
  <RouterView />
</template>

<style scoped lang="scss">
.button-pils {
  min-width: 20px;
  min-height: 20px;
}
</style>
