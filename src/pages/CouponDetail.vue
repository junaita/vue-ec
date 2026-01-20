<template>
  <div class="page" v-if="coupon">
    <section class="coupon-detail">
      <a href="/coupons" class="coupon-close" aria-label="クーポン一覧に戻る">×</a>
      <p class="eyebrow">Coupon</p>
      <h1>{{ coupon.title }}</h1>
      <div class="coupon-icon">{{ coupon.icon }}</div>
      <p>{{ coupon.description }}</p>
      <span class="coupon-badge">{{ coupon.discount }}</span>

      <div>
        <p>クーポンコード</p>
        <div class="coupon-code">{{ coupon.code }}</div>
      </div>

      <div class="coupon-meta">
        <span>有効期限: {{ coupon.expires }}</span>
        <span>利用条件: {{ coupon.conditions }}</span>
      </div>

      <a href="/coupons" class="button button--ghost">一覧に戻る</a>
    </section>
  </div>
  <div class="page" v-else>
    <section class="section">
      <h1>クーポンが見つかりません</h1>
      <a href="/coupons" class="button button--primary">一覧へ戻る</a>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import coupons from '../data/coupons.json'

const route = useRoute()
const coupon = computed(() => coupons.find((item) => item.id === route.params.id))
</script>
