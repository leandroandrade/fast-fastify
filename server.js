'use strict';

const fastify = require('./src/app');

fastify.listen(8080, '0.0.0.0', ((err, address) => {
    if (err) throw err;

    fastify.log.info(`server listening on ${ address }`);
}));
