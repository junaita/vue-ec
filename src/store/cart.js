import { defineStore } from 'pinia'

const buildKey = (productId, options) => {
  const parts = [productId, options.size || 'regular', options.topping || 'none']
  return parts.join(':')
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    subtotal(state) {
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    total(state) {
      const shipping = state.items.length > 0 ? 500 : 0
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0) + shipping
    }
  },
  actions: {
    addItem(product, options = {}) {
      const key = buildKey(product.id, options)
      const existing = this.items.find((item) => item.key === key)
      if (existing) {
        existing.quantity += 1
        return
      }
      this.items.push({
        key,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        options: {
          size: options.size || 'regular',
          topping: options.topping || 'none'
        },
        quantity: 1
      })
    },
    removeItem(key) {
      this.items = this.items.filter((item) => item.key !== key)
    },
    updateQuantity(key, quantity) {
      const target = this.items.find((item) => item.key === key)
      if (!target) return
      target.quantity = Math.max(1, quantity)
    },
    clear() {
      this.items = []
    }
  }
})
