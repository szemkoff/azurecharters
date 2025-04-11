import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx('buttons')}>
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
      description="Complete Charter Business Framework">
      <HomepageHeader />
      <main>
        <section className={clsx('padding-vert--xl')}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2 className="text--center">Build a successful yacht charter business with Tilda</h2>
                <p className="text--center margin-bottom--lg">
                  Comprehensive documentation and tools for charter businesses
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 