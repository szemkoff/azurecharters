import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

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
      description="Complete Charter Business Framework">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--12 text--center">
              <h2>Build a successful yacht charter business with Tilda</h2>
              <p className="padding-bottom--md">Comprehensive documentation and tools for charter businesses</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>Business Foundation</h3>
                </div>
                <div className="card__body">
                  <p>Understand the core business model and technology requirements for a successful charter operation.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/business-model">Business Model</Link>
                  <Link className="button button--secondary button--block" to="/docs/technology-stack">Technology Stack</Link>
                </div>
              </div>
            </div>
            
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>Website Architecture</h3>
                </div>
                <div className="card__body">
                  <p>Build a conversion-focused charter website with Tilda integration and optimized structure.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/website-architecture/overview">Architecture Overview</Link>
                  <Link className="button button--secondary button--block" to="/docs/website-architecture/tilda-integration">Tilda Integration</Link>
                </div>
              </div>
            </div>
            
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>Client Funnel</h3>
                </div>
                <div className="card__body">
                  <p>Implement effective client acquisition, nurturing, and conversion processes.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/client-funnel/overview">Funnel Overview</Link>
                  <Link className="button button--secondary button--block" to="/docs/client-funnel/acquisition-strategies">Acquisition Strategies</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>Development Resources</h3>
                </div>
                <div className="card__body">
                  <p>Development tools and code samples for implementing technical solutions.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/development/cursor-integration">Cursor Integration</Link>
                  <Link className="button button--secondary button--block" to="/docs/development/code-samples">Code Samples</Link>
                </div>
              </div>
            </div>
            
            <div className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>Templates & Resources</h3>
                </div>
                <div className="card__body">
                  <p>Ready-to-use templates and resources for charter website development.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/resources/templates">Website Templates</Link>
                  <Link className="button button--secondary button--block" to="/docs/getting-started">Getting Started Guide</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col--12 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>Tilda API Integration</h3>
                </div>
                <div className="card__body">
                  <p>Connect your charter business systems with Tilda using our API integration tools and documentation.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary" to="/docs/website-architecture/tilda-integration">Tilda Integration Guide</Link>
                  <Link className="button button--secondary margin-left--md" to="/tilda-api/docs/API_SETUP_GUIDE.md">API Setup Guide</Link>
                  <Link className="button button--secondary margin-left--md" to="/tilda-api/docs/IMPLEMENTATION_GUIDE.md">Implementation Guide</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 