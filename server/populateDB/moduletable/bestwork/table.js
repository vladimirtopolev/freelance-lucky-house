import mongoose from 'mongoose';

const { Types: { ObjectId } } = mongoose;

export const TABLE = {
    id: new ObjectId(),
    name:  'bestwork',
    title: 'Лучшие работы',
    uiConfig: {},
    adminConfig: {}
};

export const TABLE_COLUMNS = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'title',
        name: 'Заголовок',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        internalName: 'image',
        name: 'Фото стенда',
        order: 2
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
                value: 'Стенд Ferolli'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg'
            }
        ]
    },
    {
        _id: new ObjectId(),
        table: TABLE.id,
        cells: [
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[0]._id,
                table: TABLE.id,
                value: 'Стенд Ferolli'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/002.jpg'
            }
        ]
    },
    {
        _id: new ObjectId(),
        table: TABLE.id,
        cells: [
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[0]._id,
                table: TABLE.id,
                value: 'Стенд Ferolli'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/003.jpg'
            }
        ]
    },
    {
        _id: new ObjectId(),
        table: TABLE.id,
        cells: [
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[0]._id,
                table: TABLE.id,
                value: 'Стенд Ferolli'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/004.jpg'
            }
        ]
    },
    {
        _id: new ObjectId(),
        table: TABLE.id,
        cells: [
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[0]._id,
                table: TABLE.id,
                value: 'Стенд Ferolli'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/005.jpg'
            }
        ]
    },
    {
        _id: new ObjectId(),
        table: TABLE.id,
        cells: [
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[0]._id,
                table: TABLE.id,
                value: 'Стенд Ferolli'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/006.jpg'
            }
        ]
    },
];
