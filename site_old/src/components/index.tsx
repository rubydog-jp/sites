import React from "react";
import clsx from "clsx";
import styles from "../css/components.module.css";

type PR = {
  title: string;
  image: string;
  description: JSX.Element;
};

const prs: PR[] = [
  {
    title: "解説動画",
    image: "pr-movies.png",
    description: (
      <>
        Youtubeでアプリ開発の講座を公開しています。
        その他IT技術の歴史シリーズも人気です。
      </>
    ),
  },
  {
    title: "アプリ開発",
    image: "pr-apps.png",
    description: (
      <>
        スマホアプリはiOSとAndroid両方, Webアプリの開発もしています。
        バックエンドからフロントエンドまで、ネイティブからクロスプラットフォームまで開発可能です。
      </>
    ),
  },
  {
    title: "明るいコミュニティ",
    image: "pr-community.png",
    description: (
      <>
        知り合いだけの閉じた空間にならないように注意を払います。
        誰でも気軽に声をかけてください。
      </>
    ),
  },
];

function PRItem({ title, image, description }: PR) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className="img--center">
          <img src={"img/" + image} width="40%" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function PRList(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {prs.map((props, idx) => (
            <PRItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
