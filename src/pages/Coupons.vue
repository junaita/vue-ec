<template>
  <div class="page">
    <section class="page-hero">
      <div>
        <p class="eyebrow">Coupons</p>
        <h1>クーポン一覧</h1>
        <p>最新のクーポンを確認して、注文時にコードを入力してください。</p>
      </div>
    </section>

    <section class="coupon-grid">
      <a
        v-for="coupon in coupons"
        :key="coupon.id"
        :href="`/coupons/${coupon.id}`"
        class="coupon-card"
      >
        <div class="coupon-icon">{{ coupon.icon }}</div>
        <span class="coupon-badge">{{ coupon.discount }}</span>
        <h3 class="coupon-title">{{ coupon.title }}</h3>
        <p>{{ coupon.description }}</p>
        <div class="coupon-meta">
          <span>有効期限: {{ coupon.expires }}</span>
          <span>コード: {{ coupon.code }}</span>
        </div>
      </a>
    </section>
  </div>
</template>

<script setup>
import coupons from '../data/coupons.json'
</script>
