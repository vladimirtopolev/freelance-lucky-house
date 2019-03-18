import { schema } from 'normalizr';

export const header = new schema.Entity('headers', {}, { idAttribute: '_id' });
export const headers = new schema.Array(header);


export const cell = new schema.Entity('cells', {type: header}, { idAttribute: '_id' });
export const cells = new schema.Array(cell);

export const row = new schema.Entity('rows', {cells: cells}, { idAttribute: '_id' })
export const rows = new schema.Array(row);

export const table = new schema.Entity('table', {
    rows: rows,
    cells: cells,
    headers: headers
}, {idAttribute: '_id'});