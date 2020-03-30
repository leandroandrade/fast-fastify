'use strict';

async function routes(fastify, options) {
    const { mongo, commons } = fastify;

    const database = mongo.client.db('db');

    fastify.register(require('./version'), { prefix: 'version' });
    fastify.register(require('./hello'), { prefix: 'hello', commons });
    fastify.register(require('./post'));
    fastify.register(require('./search'), { db: database });
}

module.exports = routes;