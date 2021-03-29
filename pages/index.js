import React from 'react';
import Head from 'next/head';

import { Layout } from '@/components/Layout/Layout';
import { ProductsList } from '@/components/ProductsList/ProductsList';

import styles from '@/styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping APP - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProductsList />
      </Layout>
    </div>
  );
}
