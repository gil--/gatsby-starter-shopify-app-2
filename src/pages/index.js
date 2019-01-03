import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import AuthWrapper from '../components/auth'

const IndexPage = () => (
  <AuthWrapper>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <h1>Welcome!</h1>
        <p>Shopify app homepage.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Layout>
  </AuthWrapper>
)

export default IndexPage
