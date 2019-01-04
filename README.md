# Gatsby Start Shopify App

Serverless Shopify App via Netlify Functions & GatsbyJS

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gil--/gatsby-starter-shopify-app)

**Demo** - [https://gatsby-starter-shopify-app.netlify.com/](https://gatsby-starter-shopify-app.netlify.com/)

## Features
- Serverless via Netlify Functions
- GatsbyJS Client
- Ability to Install App
- [Shopify Polaris](https://github.com/Shopify/polaris-react) for UI
- [Custom Link Component](https://polaris.shopify.com/components/structure/app-provider#navigation) to work with Gatsby Link (avoid page refresh and use React Router)

## Bugs
- detect if iframe in admin and no cookies set, authorize but dont require installing again

## TODO - Feel free to make PRs
- publish to npm
- Add recurring billing support for paid apps
- [Propagate url changes to browser url bar](https://github.com/Shopify/unite-react-node-app-workshop/blob/step5/bonus.md#step-8-getting-our-url-bar-to-update-mal) with `@shopify/react-shopify-app-route-propagator` or custom library.
- Add Firebase RTDB to store installed stores and billing status via Netlify Functions? Or Firebase Functions...
- Add Settings/Preferences page example and hook up to Firebase
- Add Webhook example via Netlify functions
- Needs more cross-browser testing
- Improve app security (XSS?)
