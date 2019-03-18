const mongoose = require('mongoose');
const async = require('async');

const { Types: { ObjectId } } = mongoose;

const populateTable = require('./populateTable');

const bestWorkTable = require('./bestwork/table');

module.exports = (endCallback) => {
    async.series([
        // custom tables
        cb => populateTable(bestWorkTable, cb)
    ], (err, res) => {
        endCallback(err);
    });
};
