'use strict';

exports.search = async (req, res, options) => {
    const { log } = req;
    const { db } = options;
    const { id } = req.params;

    log.info(`> SEARCH_CONTROLLER: searching ${ id }`);

    const result = await db.collection('test').findOne({ id }, { projection: { _id: 0 } });
    if (!result) {
        throw new Error('Invalid value')
    }
    return result
};