'use strict';

exports.hello = async (req, res, options) => {
    const { commons } = options;

    const upper = commons.myUpperCase('world');
    const lower = commons.myLowerCase('LOWER');

    return { hello: upper, lower }
};