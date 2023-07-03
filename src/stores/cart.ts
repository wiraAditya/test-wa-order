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
      const filteredIndex = this.cart.findIndex((row) => row.id === data.id)
      if (filteredIndex > -1) {
        this.cart[filteredIndex].qty = this.cart[filteredIndex].qty + data.qty
      } else {
        this.cart.push(data)
      }
    },
    deleteOne(id: string) {
      this.cart = this.cart.filter((row) => row.id != id)
    }
  }
})
