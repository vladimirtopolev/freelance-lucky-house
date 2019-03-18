import mongoose from 'mongoose';
import config from 'config';

import { DEFAULT_CONFIG_NAME, AVAILABLE_ENVIROMENTS } from '../constants';
import populateDB from '../populateDB';


const dbConfig = config.get('dbConfig');

function open() {
    return new Promise((resolve, reject) => {
        mongoose.connect(dbConfig.host, { dbName: dbConfig.dbName }, (err, res) => {
            if (err) return reject(err);
            if (process.env.NODE_ENV === AVAILABLE_ENVIROMENTS.DEVELOPMENT) {
                populateDB(() => resolve());
            } else {
                resolve();
            }
        })
    })
}

module.exports.open = open;
