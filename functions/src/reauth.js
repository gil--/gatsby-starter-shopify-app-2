import ShopifyToken from 'shopify-token';
require('dotenv').config();

const {
    SHOPIFY_APP_API_KEY,
    SHOPIFY_APP_SHARED_SECRET,
    SHOPIFY_APP_URL
} = process.env;

exports.handler = function (event, context, callback) {
    const { shop } = event.queryStringParameters;
    let token = null;

    const shopifyToken = new ShopifyToken({
        "redirectUri": `${SHOPIFY_APP_URL}/.netlify/functions/callback`,
        "sharedSecret": SHOPIFY_APP_SHARED_SECRET,
        "apiKey": SHOPIFY_APP_API_KEY,
        "scopes": "read_orders,write_orders"
    });

    if (shopifyToken.verifyHmac(event.queryStringParameters)) {
        // TODO: Get token from DB and use here
        // for now, return callback which will redirect to install...
        token = '';
        
        callback(null, {
            statusCode: 302,
            headers: {
                Location: `/?token=${token}&shop=${shop}`,
                'Cache-Control': 'no-cache' // Disable caching of this response
            },
            body: '' // return body for local dev
        });
    } else {
        console.error('Error validating hmac');

        callback(null, {
            statusCode: 500,
            body: 'Error validating hmac',
        });
    }
}