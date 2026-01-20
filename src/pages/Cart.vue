<template>
  <div class="page">
    <section class="page-hero">
      <div>
        <p class="eyebrow">Cart</p>
        <h1>カート</h1>
        <p>ここで注文内容を確認できます。</p>
      </div>
    </section>

    <section v-if="cart.items.length" class="cart-grid">
      <div class="cart-items">
        <article v-for="item in cart.items" :key="item.key" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-thumb" />
          <div class="cart-info">
            <h3>{{ item.name }}</h3>
            <p class="cart-option">サイズ: {{ item.options.size }}</p>
            <p class="cart-option">トッピング: {{ item.options.topping }}</p>
            <p class="cart-price">{{ formatPrice(item.price) }}</p>
          </div>
          <div class="cart-actions">
            <label>
              数量
              <input
                type="number"
                min="1"
                :value="item.quantity"
                @input="updateQuantity(item.key, $event.target.value)"
              />
            </label>
            <button class="button button--ghost" @click="cart.removeItem(item.key)">削除</button>
          </div>
        </article>
      </div>

      <aside class="cart-summary">
        <h2>合計</h2>
        <div class="summary-row">
          <span>小計</span>
          <span>{{ formatPrice(cart.subtotal) }}</span>
        </div>
        <div class="summary-row">
          <span>配送料</span>
          <span>{{ cart.items.length ? '¥500' : '¥0' }}</span>
        </div>
        <div class="summary-row summary-total">
          <span>合計</span>
          <span>{{ formatPrice(cart.total) }}</span>
        </div>
        <button class="button button--primary">チェックアウト</button>
        <p class="summary-note">※決済機能はデモ用のため実装していません。</p>
      </aside>
    </section>

    <section v-else class="empty-state">
      <h2>カートは空です</h2>
      <p>気になる商品を追加してみましょう。</p>
      <router-link to="/menu" class="button button--primary">メニューを見る</router-link>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'

const cart = useCartStore()

const updateQuantity = (key, value) => {
  const next = Number(value)
  if (Number.isNaN(next)) return
  cart.updateQuantity(key, next)
}

const formatPrice = (value) => `¥${value.toLocaleString('ja-JP')}`
</script>
