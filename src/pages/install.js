import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LoginPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div class="container">
            <header>
                <h1>Shopify Node App – Installation</h1>
                <p class="subhead">
                    <label for="shop">Enter your shop domain to log in or install this app.</label>
                </p>
            </header>

            <div class="container__form">
                <form method="GET" action="/.netlify/functions/auth">
                    <input type="text" name="shop" id="shop" placeholder="example.myshopify.com" />
                    <button type="submit">Install</button>
                </form>
            </div>
        </div>
    </Layout>
)

export default LoginPage
