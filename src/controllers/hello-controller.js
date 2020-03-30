'use strict';

exports.hello = async (request, reply, options) => {
    const { commons } = options;

    const world = commons.myUpperCase('world');

    reply.send({ hello: world });
};