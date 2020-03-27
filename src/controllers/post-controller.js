'use strict';

exports.post = async (req, res, options) => {
    const { body } = req;

    body['time'] = Date.now();

    res.send(body);
};