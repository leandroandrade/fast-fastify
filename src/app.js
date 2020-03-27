'use strict';

const fastify = require('fastify')({
    logger: true
});

// fastify.register(require('./db/mongodb'), {
//     url: 'mongodb://localhost:27017/',
//     useUnifiedTopology: true
// });

fastify.register(require('fastify-mongodb'), { url: 'mongodb://localhost:27017/', name: 'mongo', forceClose: true });
fastify.register(require('./routes'), { prefix: 'api' });

module.exports = fastify;