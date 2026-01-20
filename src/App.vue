<template>
  <div class="app">
    <header class="site-header">
      <router-link to="/" class="logo">Fresh Brew Market</router-link>
      <nav class="site-nav">
        <router-link to="/menu">メニュー</router-link>
        <router-link to="/news">ニュース</router-link>
        <router-link to="/about">ブランド</router-link>
        <router-link to="/cart" class="cart-link">
          カート
          <span v-if="cartCount" class="cart-badge">{{ cartCount }}</span>
        </router-link>
      </nav>
    </header>

    <main class="site-main">
      <router-view />
    </main>

    <footer class="site-footer">
      <div>
        <p class="logo">Fresh Brew Market</p>
        <p>Tokyo / Online Store</p>
      </div>
      <div class="footer-links">
        <router-link to="/news">キャンペーン</router-link>
        <router-link to="/about">ブランド紹介</router-link>
        <router-link to="/menu">メニュー</router-link>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from './store/cart'

const cart = useCartStore()

const cartCount = computed(() => cart.items.reduce((sum, item) => sum + item.quantity, 0))
</script>
