import async from "async";
import { dropTables, saveItem, saveItems } from "../../utilities/db";
import Navigation from "../../models/navigation";
import {
    NAVIGATIONS
} from "./constants";

export default (endCallback) => {
    async.series([
        cb => dropTables([Navigation], cb),
        cb => saveItems(Navigation, NAVIGATIONS, cb),
    ], (err, res) => {
        console.log('save navigation', err, res);
        endCallback(err);
    });
}