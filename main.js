/** CentryPlan Jamaica V8 Server API */

const fast = require('fastify')({
    logger: true
})

const port = process.env.port || 8500,
    host = '0.0.0.0',
    name = 'CentryPlan V8 Server';

fast.register(require('./src/routes'))

fast.listen(port, host, function (err, address) {
    if (err) {
        fast.log.error(err)
        process.exit(1)
    }
    fast.log.info(`${name} Listening on ${address}`)
})