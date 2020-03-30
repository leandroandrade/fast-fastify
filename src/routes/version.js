'use strict';

const { version } = require('../../package');

module.exports = async (fastify, options) => {
    fastify.get('/', (req, res) => res.send({ description: 'fast-fastfy working!!!', version }))
};