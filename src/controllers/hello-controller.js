'use strict';

exports.hello = async (request, reply, options) => {
    const { commons } = options;

    const upper = commons.myUpperCase('world');
    const lower = commons.myLowerCase('LOWER');

    reply.send({ hello: upper, lower });
};