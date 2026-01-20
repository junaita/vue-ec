<template>
  <article class="product-card">
    <router-link :to="`/menu/${product.id}`" class="product-link">
      <img :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
      <div class="product-body">
        <p class="product-category">{{ product.category }}</p>
        <h3 class="product-title">{{ product.name }}</h3>
        <p class="product-desc">{{ product.description }}</p>
      </div>
    </router-link>
    <div class="product-footer">
      <span class="product-price">{{ formatPrice(product.price) }}</span>
      <button class="button button--primary" @click="addToCart">カートに追加</button>
    </div>
  </article>
</template>

<script setup>
import { useCartStore } from '../store/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cart = useCartStore()

const addToCart = () => {
  cart.addItem(props.product, { size: 'regular', topping: 'none' })
}

const formatPrice = (value) => `¥${value.toLocaleString('ja-JP')}`
</script>
