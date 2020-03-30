'use strict';

const fastifyPlugin = require('fastify-plugin');

const myUpperCase = (data) => data.toUpperCase();
const myLowerCase = (data) => data.toLowerCase();

async function commons(fastify, options) {
    fastify.decorate('commons', {
        myUpperCase,
        myLowerCase
    })
}

module.exports = fastifyPlugin(commons);
