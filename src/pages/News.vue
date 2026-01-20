<template>
  <div class="page">
    <section class="page-hero">
      <div>
        <p class="eyebrow">News</p>
        <h1>ニュース・キャンペーン</h1>
        <p>最新情報をお届けします。</p>
      </div>
    </section>

    <section class="news-list">
      <article v-for="item in news" :key="item.id" class="news-card">
        <div class="news-date">{{ item.date }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
        <span class="news-tag">{{ item.tag }}</span>
      </article>
    </section>
  </div>
</template>

<script setup>
const news = [
  {
    id: 1,
    date: '2024.10.05',
    title: 'Autumn Blend 予約開始',
    body: '深みのあるカカオと柑橘を合わせた限定ブレンドが登場。',
    tag: 'キャンペーン'
  },
  {
    id: 2,
    date: '2024.09.20',
    title: '週末ポイント2倍キャンペーン',
    body: '土日限定で全商品ポイント2倍。アプリ会員限定です。',
    tag: 'お知らせ'
  },
  {
    id: 3,
    date: '2024.09.01',
    title: '新作トースト販売開始',
    body: 'ベリーとリコッタの新作トーストが登場しました。',
    tag: '新商品'
  }
]
</script>
