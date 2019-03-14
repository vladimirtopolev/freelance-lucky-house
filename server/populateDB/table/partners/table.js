import mongoose from 'mongoose';

const { Types: { ObjectId } } = mongoose;

export const TABLE = {
    id: new ObjectId(),
    name:  'partners',
    title: 'Партнеры',
    uiConfig: {},
    adminConfig: {}
};

export const TABLE_COLUMNS = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'title',
        name: 'Наименование партнера',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'url',
        name: 'Ссылка на сайт',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        internalName: 'logo',
        name: 'Логотип',
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
                value: 'Экспофорум'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'https://expoforum.by/'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: 'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548404498/exposervice/expoforum.png'
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
                value: 'STS design'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'https://expoforum.by/'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: 'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548404498/exposervice/sts-design.png'
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
                value: 'Инфофорум'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'https://expoforum.by/'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: 'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548404498/exposervice/infoforum.png'
            }
        ]
    }
];
