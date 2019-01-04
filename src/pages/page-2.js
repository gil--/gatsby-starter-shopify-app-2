import React from 'react'
import { EmptyState } from '@shopify/polaris';

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout title="Page two">
    <SEO title="Page two" />
    <EmptyState
      heading="Page two"
      action={{ content: 'Settings' }}
      secondaryAction={{ content: 'Go back to the homepage', url: '/' }}
      image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
    >
      <p>Showing a secondary page example...</p>
    </EmptyState>
  </Layout>
)

export default SecondPage
