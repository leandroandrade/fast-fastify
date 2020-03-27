'use strict';

async function routes(fastify, options) {
    const { mongo } = fastify;

    const database = mongo.client.db('db');

    fastify.register(require('./hello'));
    fastify.register(require('./post'));
    fastify.register(require('./search'), { db: database });
}

module.exports = routes;