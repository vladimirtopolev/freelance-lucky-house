const async = require('async');

const populateTable = require('./moduletable/populate');
const populateProperties = require('./properties/populate');
const populateUsers = require('./users/populate');

module.exports = (endCallback) => {
    return new Promise((resolve, reject) => {
        async.series([
            cb => populateTable(cb),
            cb => populateProperties(cb),
            cb => populateUsers(cb),

        ], (err, res) => {
            if (endCallback) {
                endCallback(err, res);
            }

            if (err) {
                reject(err);
            } else {
                console.log('Script applied succesfully');
                resolve(res);
            }
        })
    });

};
