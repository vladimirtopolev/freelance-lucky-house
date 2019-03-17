import async from "async";
import { dropTables, saveItems } from "../../utilities/db";
import Property from "../../models/properties/property";
import {
    PROPERTIES
} from "./constants";

export default (endCallback) => {
    async.series([
        cb => dropTables([Property], cb),
        cb => saveItems(Property, PROPERTIES, cb),
    ], (err, res) => {
        console.log('save propeties', err, res);
        endCallback(err);
    });
}