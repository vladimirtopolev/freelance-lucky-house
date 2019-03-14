import async from 'async';

export function saveItem(SchemaConstructor, item, cb) {
    const newItem = new SchemaConstructor(item);
    newItem.save((err, savedItem) => cb(err, savedItem));
}

export function saveItems(SchemaConstructor, items, endCallback) {
    async.map(
        items,
        (item, cb) => saveItem(SchemaConstructor, item, cb),
        (err, results) => endCallback(err, results)
    )
}

export function dropTable(SchemaConstructor, endCallback) {
    SchemaConstructor.deleteMany({}, (err) => endCallback(err));
}

export function dropTables(SchemaConstructors, endCallback) {
    async.each(
        SchemaConstructors,
        (SchemaConstructor, cb) => dropTable(SchemaConstructor, cb),
        (err) => {
            endCallback(err);
        }
    )
}