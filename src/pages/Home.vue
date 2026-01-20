<template>
  <div class="page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Seasonal Drop</p>
        <h1>Fresh Brew Market</h1>
        <p class="hero-copy">
          こだわりのクラフトドリンクとフードを、あなたの毎日に。限定ブレンドが今週登場。
        </p>
        <div class="hero-actions">
          <router-link to="/menu" class="button button--primary">メニューを見る</router-link>
          <router-link to="/news" class="button button--ghost">キャンペーンを見る</router-link>
        </div>
      </div>
      <div class="hero-card">
        <img src="/images/latte.svg" alt="Salted Caramel Latte" />
        <div>
          <p class="hero-card-title">Salted Caramel Latte</p>
          <p class="hero-card-sub">今週限定のバリスタセレクト</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>カテゴリ</h2>
        <p>気分で選べる3つのシーン</p>
      </div>
      <div class="category-grid">
        <router-link to="/menu" class="category-card">
          <h3>ドリンク</h3>
          <p>バリスタ監修の限定ブレンド</p>
        </router-link>
        <router-link to="/menu" class="category-card">
          <h3>フード</h3>
          <p>朝から夜まで相性の良い軽食</p>
        </router-link>
        <router-link to="/menu" class="category-card">
          <h3>ギフト</h3>
          <p>贈り物に映えるパッケージ</p>
        </router-link>
      </div>
    </section>

    <section class="section campaign">
      <div class="campaign-content">
        <h2>週末限定キャンペーン</h2>
        <p>
          2点以上購入でシェイカーセットをプレゼント。アプリ会員ならポイント2倍。
        </p>
        <router-link to="/news" class="button button--primary">詳細を見る</router-link>
      </div>
      <div class="campaign-badge">
        <p>Weekend</p>
        <span>Bonus</span>
      </div>
    </section>
  </div>
</template>
