# Rubydog Website

Rubydogのオフィシャルウェブサイトです。Astroで構築されています。

## 開発

### 必要な環境

- Node.js 18以上
- npm

### セットアップ

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが http://localhost:4321 で起動します。

### ビルド

```bash
npm run build
```

ビルド成果物は `dist/` ディレクトリに生成されます。

### プレビュー

ビルド後のサイトをローカルでプレビューします：

```bash
npm run preview
```

## デプロイ

このサイトはGitHub Pagesに自動デプロイされます。`main`ブランチにプッシュすると、GitHub Actionsが自動的にビルドとデプロイを実行します。

## 技術スタック

- [Astro](https://astro.build/) - 静的サイトジェネレーター
- TypeScript
- Markdown/MDX

## ライセンス

© 2023 Rubydog
