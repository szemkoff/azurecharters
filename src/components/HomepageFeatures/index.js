import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tilda Website Architecture',
    description: (
      <>
        Comprehensive guide for building charter websites with Tilda, including custom components, integrations, and best practices.
      </>
    ),
  },
  {
    title: 'Client Acquisition Funnel',
    description: (
      <>
        End-to-end client journey from awareness to advocacy, with detailed implementation steps for each stage of the funnel.
      </>
    ),
  },
  {
    title: 'Development Workflow',
    description: (
      <>
        Technical processes and tools like Cursor IDE to accelerate development, implement integrations, and optimize performance.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 