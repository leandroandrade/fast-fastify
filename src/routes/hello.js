'use strict';

const { hello } = require('../controllers/hello-controller');

module.exports = async (fastify, options) => {

    fastify.get('/', async (req, res) => hello(res, res));
};