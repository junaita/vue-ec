<template>
  <div class="page" v-if="product">
    <section class="detail">
      <div class="detail-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="detail-content">
        <p class="eyebrow">{{ product.category }}</p>
        <h1>{{ product.name }}</h1>
        <p class="detail-desc">{{ product.description }}</p>
        <p class="detail-price">{{ formatPrice(product.price) }}</p>

        <div class="option-group">
          <h3>サイズ</h3>
          <div class="pill-group">
            <button
              v-for="size in sizes"
              :key="size"
              class="pill"
              :class="{ active: selectedSize === size }"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <div class="option-group">
          <h3>トッピング</h3>
          <div class="pill-group">
            <button
              v-for="topping in toppings"
              :key="topping"
              class="pill"
              :class="{ active: selectedTopping === topping }"
              @click="selectedTopping = topping"
            >
              {{ topping }}
            </button>
          </div>
        </div>

        <button class="button button--primary" @click="addToCart">
          カートに追加
        </button>
      </div>
    </section>
  </div>
  <div class="page" v-else>
    <section class="section">
      <h1>商品が見つかりません</h1>
      <router-link to="/menu" class="button button--primary">メニューへ戻る</router-link>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../store/cart'
import products from '../data/products.json'

const route = useRoute()
const cart = useCartStore()

const product = computed(() => products.find((item) => item.id === route.params.id))

const sizes = ['regular', 'large', 'iced']
const toppings = ['none', 'whipped', 'caramel', 'nutty']

const selectedSize = ref('regular')
const selectedTopping = ref('none')

const addToCart = () => {
  if (!product.value) return
  cart.addItem(product.value, { size: selectedSize.value, topping: selectedTopping.value })
}

const formatPrice = (value) => `¥${value.toLocaleString('ja-JP')}`
</script>
