import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with the Framework
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Complete Charter Business Framework documentation">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl text--center">
          <h2>Build a successful yacht charter business with Tilda</h2>
          <p>Comprehensive documentation and tools for charter businesses</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg margin-right--md"
              to="/docs/website-architecture/tilda-integration">
              Tilda Integration
            </Link>
            <Link
              className="button button--primary button--lg margin-right--md"
              to="/docs/client-funnel/overview">
              Client Funnel
            </Link>
            <Link
              className="button button--primary button--lg"
              to="/docs/development/cursor-integration">
              Cursor Integration
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
} 