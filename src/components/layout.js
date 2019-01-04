import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { AppProvider, Button, Card, FooterHelp, Page } from '@shopify/polaris';
import '@shopify/polaris/styles.css'

const CustomLinkComponent = ({ children, url, ...rest }) => {
  return (
    <Link
      to={url}
      {...rest}
    >
      {children}
    </Link>
  );
};

const Layout = ({ children, shop, apiKey }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <AppProvider shopOrigin={shop} apiKey={apiKey} linkComponent={CustomLinkComponent}>
        <Page title={data.site.siteMetadata.title}>
          {children}
        </Page>
      </AppProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
