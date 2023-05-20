import type { ICart } from '@/utils/type'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as ICart[]
  })
})
