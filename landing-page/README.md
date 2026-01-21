# ランディングページ - GitHub Pages用

## 📁 ファイル構成

```
landing-page/
├── index.html          # メインHTMLファイル
├── css/
│   └── style.css       # スタイル（グラデーション、アニメーション）
├── js/
│   └── main.js         # JavaScript（インタラクション）
└── assets/             # 画像・フォント用（後から追加）
```

## 🚀 GitHub Pagesで公開する方法

### 1. リポジトリ設定
```bash
git add landing-page/
git commit -m "Add landing page"
git push origin main
```

### 2. GitHub Pages設定
- リポジトリ → Settings → Pages
- Branch: `main`
- Folder: `/landing-page` を選択
- 保存

### 3. アクセス
`https://yourusername.github.io/P-Me/landing-page/`

## 🎨 カスタマイズポイント

### タイトルを変更
`index.html` 内の以下を編集：
```html
<h1 class="title" data-text="Welcome">Welcome</h1>
<p class="subtitle">新しい体験へようこそ</p>
```

### グラデーション色を変更
`css/style.css` 内：
```css
background: linear-gradient(
    135deg,
    #1a1f3a 0%,   /* 色1 */
    #0f3460 50%,   /* 色2 */
    ...
);
```

### ボタン色を変更
```css
.btn-primary {
    background: linear-gradient(135deg, #00d4ff, #00ff88);
    /* 色を変更 */
}
```

### スクロール後のコンテンツを追加
`index.html` 内の以下を拡張：
```html
<section class="info-section" id="infoSection">
    <h2>Experience</h2>
    <!-- ここにコンテンツ追加 -->
</section>
```

## 📱 特徴

- ✨ グラデーション＆アニメーション
- 🎯 レスポンシブデザイン
- 🖱️ マウスインタラクション
- ⚡ VanillaJS（依存なし）
- 🔧 拡張性の高い構成
- 📦 軽量（HTML/CSS/JSのみ）

## 🔄 拡張例

### 背景色を変更したい場合
```css
.background {
    background: #000000; /* 任意の色 */
}
```

### フローティング要素を追加
```html
<div class="floating-element floating-4"></div>
```

```css
.floating-4 {
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, #fff000, transparent);
    top: 30%;
    left: 50%;
    animation-delay: 15s;
}
```

### JavaScriptで外部URLに遷移
`js/main.js` 内の `handleEnterClick()` 関数を編集：
```javascript
function handleEnterClick() {
    window.location.href = 'https://example.com';
}
```
