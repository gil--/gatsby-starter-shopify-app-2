exports.handler = function (event, context, callback) {
    const { shop } = event.queryStringParameters;
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            text: 'Auth function',
            shop,
        }),
    })
}