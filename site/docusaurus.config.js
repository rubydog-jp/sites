// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rubydog",
  tagline: "🐶ホームページへようこそ！",
  url: "https://rubydog.jp",
  baseUrl: "/",

  // GitHub pages deploy
  organizationName: "rubydog-jp",
  projectName: "home",

  onBrokenLinks: "ignore",
  staticDirectories: ["public", "static"],

  favicon: "/img/favicon.png",

  i18n: {
    defaultLocale: "ja",
    locales: ["en", "ja"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
      ja: {
        label: "日本語",
        direction: "ltr",
        htmlLang: "ja-JA",
        calendar: "gregory",
        path: "ja",
      },
    },
  },

  // 最初から入っている docs blog 機能の編集はここでする
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // docs: {
        //   path: "tab_about", // フォルダ上のパス
        //   routeBasePath: "about", // URL上のパス
        //   sidebarPath: require.resolve("./tab_about/sidebars.js"),
        // },
        blog: {
          blogTitle: "ニュース",
          path: "tab_news",
          routeBasePath: "news",
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve("./src/css/rubydog.css"),
        },
      }),
    ],
  ],

  // サイドバー付きのタブはここで追加

  // plugins: [
  //   [
  //     "@docusaurus/plugin-content-docs",
  //     {
  //       id: "tab_recruit",
  //       path: "tab_recruit",
  //       routeBasePath: "recruit",
  //       sidebarPath: require.resolve("./tab_recruit/sidebars.js"),
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "twitter:card", content: "summary" }],
      image: "img/ogp.png",
      navbar: {
        title: "Rubydog",
        logo: {
          alt: "Logo",
          src: "img/rubydog-home.png",
          height: 150,
        },
        items: [
          {
            label: "活動",
            to: "/works",
            position: "left",
            activeBaseRegex: "/works", // URLがこれを含むときにアクティブ表示
          },
          {
            label: "共同開発",
            to: "/projects",
            position: "left",
            activeBaseRegex: "/projects",
          },
          {
            label: "ニュース",
            to: "/news",
            position: "left",
            activeBaseRegex: "/news",
          },
          {
            label: "お問い合わせ",
            to: "/contact",
            position: "left",
            activeBaseRegex: "/contact",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Rubydog",
            items: [
              {
                label: "コミュニティ概要",
                to: "/about",
              },
              {
                label: "個人プロフィール",
                to: "/profile",
              },
            ],
          },
          {
            title: "採用情報",
            items: [
              {
                label: "採用ページ",
                href: "/recruit",
              },
            ],
          },
          {
            title: "外部リンク",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/rubydog-jp",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@rbdog",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 Rubydog. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
