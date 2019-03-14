import mongoose from 'mongoose';

const { Types: { ObjectId } } = mongoose;

export const TABLE = {
    id: new ObjectId(),
    name:  'static',
    title: 'Статические страницы',
    uiConfig: {},
    adminConfig: {}
};

export const TABLE_COLUMNS = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'url',
        name: 'URL NAME',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        internalName: 'content',
        name: 'Содеражание',
        order: 1
    }
];

export const TABLE_ROWS = [
    {
        _id: new ObjectId(),
        table: TABLE.id,
        cells: [
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[0]._id,
                table: TABLE.id,
                value: 'test'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'Содеражание'
            }
        ]
    }
];
