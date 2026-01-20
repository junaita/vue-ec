<template>
  <div class="page">
    <section class="page-hero">
      <div>
        <p class="eyebrow">Menu</p>
        <h1>メニュー一覧</h1>
        <p>朝・昼・夜に合わせたラインナップ。カスタムも楽しめます。</p>
      </div>
      <div class="pill-group">
        <button
          v-for="category in categories"
          :key="category"
          class="pill"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <section class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import products from '../data/products.json'

const categories = ['すべて', ...new Set(products.map((item) => item.category))]
const selectedCategory = ref('すべて')

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'すべて') return products
  return products.filter((item) => item.category === selectedCategory.value)
})
</script>
