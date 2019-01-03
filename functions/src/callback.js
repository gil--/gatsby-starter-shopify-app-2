import ShopifyToken from 'shopify-token';
require('dotenv').config();

const {
    SHOPIFY_APP_API_KEY,
    SHOPIFY_APP_SHARED_SECRET,
} = process.env;

exports.handler = function (event, context, callback) {
    const { code, shop } = event.queryStringParameters;

    const shopifyToken = new ShopifyToken({
        "redirectUri": `${SHOPIFY_APP_URL}/.netlify/functions/callback`,
        "sharedSecret": SHOPIFY_APP_SHARED_SECRET,
        "apiKey": SHOPIFY_APP_API_KEY,
        "scopes": "read_orders,write_orders"
    });
    
    if (shopifyToken.verifyHmac(event.queryStringParameters)) {
        // Get permanent access token that will be used in the future to make API calls
        shopifyToken.getAccessToken(shop, code).then((token) => {

            console.log(`Generated token ${token} for shop ${shop}`);
            //createApplicationCharge(req.query.shop, token, res);
            callback(null, {
                statusCode: 302,
                headers: {
                    Location: `/?token=${token}&shop=${shop}`,
                    'Cache-Control': 'no-cache' // Disable caching of this response
                },
                body: '' // return body for local dev
            })

        }).catch((err) => {
            //console.error(err.stack);

            callback(null, {
                statusCode: 500,
                body: 'Oops, something went wrong',
            });
        });
    } else {
        console.error('Error validating hmac');
        
        callback(null, {
            statusCode: 500,
            body: 'Error validating hmac',
        });
    }
}