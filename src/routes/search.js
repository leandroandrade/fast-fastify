'use strict';

const { search } = require('../controllers/search-controller');

module.exports = async (fastify, options) => {

    fastify.get('/search/:id', async (req, res) => search(req, res, options))
};