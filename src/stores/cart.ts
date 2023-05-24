import { defineStore } from 'pinia'
import { ICart } from '../utils/type'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as ICart[]
  }),
  actions: {
    deleteAllValue() {
      this.cart = []
    },
    appendCart(data: ICart) {
      this.cart.push(data)
    },
    deleteOne(id: string) {
      this.cart = this.cart.filter((row) => row.id != id)
    }
  }
})
