'use strict';

exports.post = async (request, reply, options) => {
    const { body } = request;

    body['time'] = Date.now();

    reply.send(body);
};