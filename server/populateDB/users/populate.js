import async from "async";
import { dropTables, saveItem, saveItems } from "../../utilities/db";
import User from "../../models/user";
import {
    USERS
} from "../users/constants";

export default (endCallback) => {
    async.series([
        cb => dropTables([User], cb),
        cb => saveItems(User, USERS, cb),
    ], (err, res) => {
        console.log('save users', err, res)
        endCallback(err);
    });
}