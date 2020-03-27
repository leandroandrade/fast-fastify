'use strict';

const { post } = require('../controllers/post-controller');

const opts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' },
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    time: { type: 'integer' }
                }
            }
        }
    }
};

module.exports = async (fastify, options) => {

    fastify.post('/', opts, async (req, res) => post(req, res));
};