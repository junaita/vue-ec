# デプロイ手順メモ（Cloudflare Pages + GitHub）

## まず仕組みを理解（超重要）
このプロジェクトは **Cloudflare Pages** と **GitHub ブランチ**で動きます。

### ブランチとデプロイの関係
- `main` ブランチ = **本番サイト**（Production）
- `main` 以外のブランチ = **プレビューサイト**（Preview）

### どうしてそうなるのか
- Cloudflare Pages は「どのブランチが本番か」を設定で持っています。
- そのブランチ（今回は `main`）は **本番 URL** に自動デプロイ。
- それ以外は **プレビュー URL** に自動デプロイ。

### 何が便利？
- 本番を壊さずに、まずプレビューで動作確認できる。
- PR（プルリク）画面に **プレビュー URL** が自動で表示される。

---

## 1. 変更を加えたら必ずこの流れ（プレビュー → 本番）
以下は **コピペだけで進む** 手順です。

### 1-1. 作業用ブランチを作る
```sh
git checkout -b feature/short-description
```
やっていること: 新しい作業用ブランチを作って、そこに移動します。

### 1-2. 変更をコミットする
```sh
git add .
git commit -m "your message"
```
やっていること: 変更したファイルをまとめて記録し、コミットとして保存します。

### 1-3. GitHub に送る（push）
```sh
git push -u origin feature/short-description
```
やっていること: 作成したブランチを GitHub に送信し、次回から同じブランチ名で push できるようにします。

---

## 2. プレビューを確認する（本番に反映する前の安全確認）
1) GitHub で PR を作成  
   base: `main` / compare: `feature/short-description`
2) PR 画面に表示される **Preview URL** を開いて確認

やっていること: 本番を触らずに、変更の結果を別URLで安全に確認しています。

---

## 3. 本番に反映する（マージ）
PR 画面で **Merge pull request** を押すだけ。  
`main` にマージされると、Cloudflare Pages が **自動で本番デプロイ** します。

やっていること: 変更内容を `main` に取り込み、本番URLに反映します。

---

## 4. Pages のビルド設定（参考）
```
Build command: npm run build
Build output directory: dist
Deploy command: (空欄)
Root directory: /
```
やっていること: `npm run build` で `dist` を作り、Pages がそれを公開します。

---

## 5. SPA リダイレクト
`public/_redirects` を必ず残すこと:
```
/* /index.html 200
```
やっていること: どのURLにアクセスしても SPA の `index.html` に戻すための設定です。

---

## ベストプラクティス（失敗しにくい運用）
- 変更は必ず feature ブランチで行い、直接 `main` を触らない
- PR のプレビューURLで必ず動作確認してからマージ
- 1つのPRは小さくまとめる（差分が大きいとミスしやすい）
- PR タイトルは「何をしたか」が一目で分かるようにする
- 画像やデータを変えたら、画面で実際に表示確認する

---

## 書き方の例（初心者用テンプレ）

### ブランチ名の例
```
feature/update-home-hero
feature/add-product-card
feature/fix-cart-total
```

### コミットメッセージ（your message）の例
```
update home hero copy
add new product card layout
fix cart total calculation
```

### PR タイトルの例
```
Update home hero copy
Add product card layout
Fix cart total calculation
```

### PR の説明（description）の例
```
## Summary
- Update hero headline text
- Adjust CTA button label

## Check
- [x] Preview URL checked on mobile
- [x] /menu/latte opens without 404
```
