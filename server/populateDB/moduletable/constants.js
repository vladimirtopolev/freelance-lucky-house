import mongoose from 'mongoose';

const { Types: { ObjectId } } = mongoose;

export const TABLE_NAME = 'test';
export const TABLE_TITLE = 'Test table';
export const TABLE_ID = new ObjectId();

export const TABLE_COLUMNS = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Name1',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Name2',
        order: 2
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        name: 'Logo',
        order: 3
    }
];

export const TABLE_CELLS_FIRST_RAW = [
    {
        _id: new ObjectId(),
        type: TABLE_COLUMNS[0]._id,
        table: TABLE_ID,
        value: 'input1'
    },
    {
        _id: new ObjectId(),
        type: TABLE_COLUMNS[1]._id,
        table: TABLE_ID,
        value: 'input2'
    },
    {
        _id: new ObjectId(),
        type: TABLE_COLUMNS[2]._id,
        table: TABLE_ID,
        value: ''
    }
];

export const TABLE_CELLS_SECOND_RAW = [
    {
        _id: new ObjectId(),
        type: TABLE_COLUMNS[0]._id,
        table: TABLE_ID,
        value: 'input3'
    },
    {
        _id: new ObjectId(),
        type: TABLE_COLUMNS[1]._id,
        table: TABLE_ID,
        value: 'input4'
    },
    {
        _id: new ObjectId(),
        type: TABLE_COLUMNS[2]._id,
        table: TABLE_ID,
        value: ''
    }
];

export const TABLE_ROWS = [
    {
        _id: new ObjectId(),
        cells: TABLE_CELLS_FIRST_RAW,
        table: TABLE_ID
    },
    {
        _id: new ObjectId(),
        cells: TABLE_CELLS_SECOND_RAW,
        table: TABLE_ID
    }
];
