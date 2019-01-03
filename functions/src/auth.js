import ShopifyToken from 'shopify-token';
require('dotenv').config();

const {
    SHOPIFY_APP_API_KEY,
    SHOPIFY_APP_SHARED_SECRET,
    SHOPIFY_APP_URL
} = process.env;

exports.handler = function (event, context, callback) {
    const { shop } = event.queryStringParameters;

    if (!shop) {
        callback(null, {
            statusCode: 302,
            headers: {
                Location: '/install',
                'Cache-Control': 'no-cache' // Disable caching of this response
            },
            body: '' // return body for local dev
        })
    }

    let shopifyToken = new ShopifyToken({
        "redirectUri": `${SHOPIFY_APP_URL}/.netlify/functions/callback`,
        "sharedSecret": SHOPIFY_APP_SHARED_SECRET,
        "apiKey": SHOPIFY_APP_API_KEY,
        "scopes": "read_orders,write_orders"
    });
    shopifyToken.shop = shop.replace('.myshopify.com', '');

    const nonce = shopifyToken.generateNonce();
    const uri = shopifyToken.generateAuthUrl(shopifyToken.shop, undefined, nonce);

    console.log('Redirecting to ' + uri);

    callback(null, {
        statusCode: 302,
        headers: {
            Location: uri,
            'Cache-Control': 'no-cache' // Disable caching of this response
        },
        body: '' // return body for local dev
    })
}