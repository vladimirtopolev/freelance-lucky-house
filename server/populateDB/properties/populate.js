const async = require('async');
const { dropTables, saveItems } = require('../../utilities/db');
const Property = require('../../models/properties/property');
const PROPERTIES = require('./constants');

module.exports = (endCallback) => {
    async.series([
        cb => dropTables([Property], cb),
        cb => saveItems(Property, PROPERTIES, cb),
    ], (err, res) => {
        endCallback(err);
    });
};
