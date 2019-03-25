const moment = require('moment');
const mongoose = require('mongoose');

const getMongooseConnection = require('./utilities/getMongooseConnection');
const populateTable = require('../server/populateDB/moduletable/populateTable');
const dropTable = require('../server/populateDB/moduletable/dropTable');

const { Types: { ObjectId } } = mongoose;

const TABLE = {
    id: new ObjectId(),
    name: 'projects',
    title: 'Проекты',
    uiConfig: {},
    adminConfig: {}
};

const TABLE_COLUMNS = [
    {
        _id: new ObjectId(),
        type: 'DATE',
        internalName: 'date',
        name: 'Дата создания',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'name',
        name: 'Название проекта',
        order: 2
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        internalName: 'description',
        name: 'Описание',
        order: 3
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        internalName: 'image',
        name: 'Фото',
        properties: {
            aspect: 1.3,
            maxWidth: 100
        },
        order: 4
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE_GALLERY',
        internalName: 'imageGallery',
        name: 'Фото галлерея',
        previewHidden: true,
        properties: {
            aspect: 1,
            maxWidth: 100
        },
        order: 5
    },
];

const TABLE_ROWS = [
    {
        _id: new ObjectId(),
        table: TABLE.id,
        cells: [
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[0]._id,
                table: TABLE.id,
                value: moment().format()
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'Каркасный дом'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: `
                    Наша семья очень благодарна Леониду и его команде в стройке дома. С самого начала знакомства расположил к себе, консультировал и 
                    советовал по делу. С минимальными затратами в короткие сроки его команда осуществила нашу мечту. 
                    Спасибо Вам большое и обязательно к Вам обратимся по строительству бани.
                `
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[3]._id,
                table: TABLE.id,
                value: 'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553456495/uksvu7jkoczqzyvli8is.jpg'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[4]._id,
                table: TABLE.id,
                value: [
                    'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553261543/t0it9seesadm1bomoice.jpg'
                ]
            },
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
                value: moment().format()
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'Каркасный дом'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: `
                    Наша семья очень благодарна Леониду и его команде в стройке дома. С самого начала знакомства расположил к себе, консультировал и 
                    советовал по делу. С минимальными затратами в короткие сроки его команда осуществила нашу мечту. 
                    Спасибо Вам большое и обязательно к Вам обратимся по строительству бани.
                `
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[3]._id,
                table: TABLE.id,
                value: 'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553515095/j8uqvt8ug7ga8edm9zrl.jpg'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[4]._id,
                table: TABLE.id,
                value: [
                    'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553261543/t0it9seesadm1bomoice.jpg'
                ]
            },
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
                value: moment().format()
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'Каркасный дом'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: `
                    Наша семья очень благодарна Леониду и его команде в стройке дома. С самого начала знакомства расположил к себе, консультировал и 
                    советовал по делу. С минимальными затратами в короткие сроки его команда осуществила нашу мечту. 
                    Спасибо Вам большое и обязательно к Вам обратимся по строительству бани.
                `
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[3]._id,
                table: TABLE.id,
                value: 'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553515156/jpotcgmgsvww4ufylrzw.jpg'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[4]._id,
                table: TABLE.id,
                value: [
                    'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553261543/t0it9seesadm1bomoice.jpg'
                ]
            },
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
                value: moment().format()
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'Каркасный дом'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: `
                    Наша семья очень благодарна Леониду и его команде в стройке дома. С самого начала знакомства расположил к себе, консультировал и 
                    советовал по делу. С минимальными затратами в короткие сроки его команда осуществила нашу мечту. 
                    Спасибо Вам большое и обязательно к Вам обратимся по строительству бани.
                `
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[3]._id,
                table: TABLE.id,
                value: 'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553515193/cibhgpluzjmmxml56l8m.jpg'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[4]._id,
                table: TABLE.id,
                value: [
                    'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553261543/t0it9seesadm1bomoice.jpg'
                ]
            },
        ]
    }
];

module.exports = {
    async up(db) {
        await getMongooseConnection()
            .then((config) => {
                console.log(`Migration script connect to DB: ${config.url}`);
                return populateTable({TABLE, TABLE_COLUMNS, TABLE_ROWS})
            })

    },

    async down(db) {
        await getMongooseConnection()
            .then(() => {
                return dropTable('projects');
            })
    },
};