import { defineStore } from 'pinia'
import { ICart } from '../utils/type'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as ICart[]
  })
})
