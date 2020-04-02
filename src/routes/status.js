'use strict';

const numeral = require('numeral');

module.exports = async (fastify, options) => {

    fastify.get('/', async (req, res) => {
        const { rss, heapTotal, heapUsed } = process.memoryUsage();

        console.log('rss', numeral(rss).format('0.0 ib'), 'heapTotal', numeral(heapTotal).format('0.0 ib'),
            'heapUsed', numeral(heapUsed).format('0.0 ib'));

        res.send({
            'rss': numeral(rss).format('0.0 ib'),
            'heapTotal': numeral(heapTotal).format('0.0 ib'),
            'heapUsed': numeral(heapUsed).format('0.0 ib')
        })
    });
};