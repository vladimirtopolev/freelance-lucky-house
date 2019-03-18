const getMongooseConnection = require('./utilities/getMongooseConnection');
const populateInitDB = require('../server/populateDB');
const dropTables = require('../server/populateDB/dropTables');
module.exports = {
    async up(db) {
        await getMongooseConnection()
            .then(() => {
                return populateInitDB()
            })

    },

    async down(db) {
        await getMongooseConnection()
            .then(() => {
                return dropTables();
            })
    },
};