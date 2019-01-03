import React from 'react'
import { Button, Card, Heading} from '@shopify/polaris';

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import AuthWrapper from '../components/auth'

const IndexPage = () => (
  <AuthWrapper>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Card sectioned>
        <Heading>Welcome!</Heading>
        <p>Shopify app homepage.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Button primary url="/page-2/">Go to page 2</Button>
      </Card>
    </Layout>
  </AuthWrapper>
)

export default IndexPage
