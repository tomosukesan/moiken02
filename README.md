# 第2回 ものづくり医療研究会（MOICEN）公式サイト

静的HTMLサイトです。特別なツールは不要で、`index.html` をブラウザで開けばそのまま確認できます。

## ファイル構成

```
website/
├─ index.html         トップ（ヒーロー／お知らせ／コンセプト／開催概要／ポスター）
├─ about.html         研究会について（理念・開催概要・プログラム構成）
├─ greeting.html      ごあいさつ ※文面は見本。差し替えが必要
├─ program.html       プログラム・日程表（骨子）
├─ registration.html  参加登録（受付開始前の案内）
├─ social.html        懇親会のご案内
├─ access.html        会場アクセス（秋葉原）
├─ report-1st.html    第1回 開催報告 ※ひな形。実績の入力が必要
├─ contact.html       お問い合わせ・よくあるご質問
├─ assets/style.css   全ページ共通のデザイン
├─ assets/script.js   スマホメニュー開閉／開催カウントダウン
└─ images/            keyvisual.jpg（ヒーロー画像）、poster.jpg（告知ポスター）
```

## 公開までに差し替えが必要な箇所

| 場所 | 内容 |
|---|---|
| `greeting.html` | 挨拶文・代表者名・所属（現在は構成見本） |
| `report-1st.html` | 第1回の開催日・会場・参加者数・プログラム・写真・参加者の声 |
| `contact.html` | 事務局のメールアドレス・受付時間 |
| `registration.html` | 参加費、申込フォームのURL（ボタンの `href="#"` を差し替え、`aria-disabled="true"` を削除） |
| `access.html` | 会場名・住所・Googleマップの埋め込み |
| `program.html` | 登壇者・セッション内容 |
| `social.html` | 懇親会の会場・会費・定員 |

「決定次第ご案内します」と書かれている箇所が、確定情報の入力ポイントです。

## よくある編集

### お知らせを1件追加する

`index.html` の「お知らせ」ブロック内、`<ul class="news-list">` の先頭に以下を追加します。

```html
<li>
  <time datetime="2026-10-01">2026年10月1日</time>
  <span class="news-tag is-new">NEW</span>
  <span class="news-body">ここに本文を書きます。</span>
</li>
```

- `is-new` を外すと赤い NEW バッジが通常の青バッジになります。
- タグ文字（NEW / 開催概要 など）は自由に変更できます。

### 写真を追加する

画像を `images/` フォルダに入れ、本文中に次のように書きます。

```html
<img src="images/写真のファイル名.jpg" alt="写真の説明">
```

### 色を変える

`assets/style.css` の冒頭 `:root { ... }` にある色コードを変更すると、全ページに反映されます。

## 公開（アップロード）方法

`website` フォルダの中身をそのままサーバーにアップロードするだけで公開できます。

- **レンタルサーバー**：FTPで公開ディレクトリ（`public_html` など）に中身を配置
- **Netlify / Cloudflare Pages**：`website` フォルダをドラッグ＆ドロップ
- **GitHub Pages**：リポジトリに置いて Pages を有効化

独自ドメインを使う場合は、各サービスのドメイン設定に従ってください。

## 補足

- スマートフォン・タブレットに対応済みです（画面幅900px以下でメニューがハンバーガーに切り替わります）。
- 本文フォントは Google Fonts の Noto Sans JP を読み込んでいます。オフライン環境ではOS標準のゴシック体で表示されます。
