var ShopifyToken = require('shopify-token');
require('dotenv').config();

var {
    SHOPIFY_APP_API_KEY,
    SHOPIFY_APP_SHARED_SECRET,
} = process.env;

exports.handler = function (event, context, callback) {
    var { shop } = event.queryStringParameters;

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

    var shopifyToken = new ShopifyToken({
        "redirectUri": `https://${event.headers.host}/.netlify/functions/callback`,
        "sharedSecret": SHOPIFY_APP_SHARED_SECRET,
        "apiKey": SHOPIFY_APP_API_KEY,
        "scopes": "read_orders,write_orders"
    });
    shopifyToken.shop = shop.replace('.myshopify.com', '');

    var nonce = shopifyToken.generateNonce();
    var uri = shopifyToken.generateAuthUrl(shopifyToken.shop, undefined, nonce);

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