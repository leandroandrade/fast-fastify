'use strict';

const fastify = require('./src/app');

fastify.listen(3000, '0.0.0.0', ((err, address) => {
    if (err) throw err;

    fastify.log.info(`server listening on ${ address }`);
}));
