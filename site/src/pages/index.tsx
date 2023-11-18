import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import PRList from "@site/src/components";
import pageStyles from "../css/pages.module.css";

function Header() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", pageStyles.heroBanner)}
      style={{ backgroundColor: "var(--home-header)" }}
    >
      <div className="container">
        <h1 className="hero__title">
          <img src="img/rubydog-logo.png" width="400px" />
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={pageStyles.buttons}>
          <Link className="button button--secondary button--lg" to="/works">
            詳しく見る
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description="Home Page<head />">
      <Header />
      <main>
        <PRList />
      </main>
    </Layout>
  );
}
