exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            text: 'Hello, World! I’m some text sent from a Lambda function.',
        }),
    })
}