'use strict';

exports.search = async (request, reply, options) => {
    const { log } = request;
    const { db } = options;
    const { id } = request.params;

    log.info(`> SEARCH_CONTROLLER: searching ${ id }`);

    const result = await db.collection('test').findOne({ id }, { projection: { _id: 0 } });
    if (!result) {
        throw new Error('Invalid value')
    }
    reply.send(result);
};