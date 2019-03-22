const moment = require('moment');
const mongoose = require('mongoose');

const getMongooseConnection = require('./utilities/getMongooseConnection');
const populateTable = require('../server/populateDB/moduletable/populateTable');
const dropTable = require('../server/populateDB/moduletable/dropTable');

const { Types: { ObjectId } } = mongoose;

const TABLE = {
    id: new ObjectId(),
    name: 'feedbacks',
    title: 'Отзывы',
    uiConfig: {},
    adminConfig: {}
};

const TABLE_COLUMNS = [
    {
        _id: new ObjectId(),
        type: 'DATE',
        internalName: 'date',
        name: 'Дата отзыва',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'personName',
        name: 'Имя, фамилия',
        order: 2
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        internalName: 'image',
        name: 'Фото',
        properties: {
            aspect: 1,
            maxWidth: 100
        },
        order: 3
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        internalName: 'feedback',
        name: 'Текст отзыва',
        order: 4
    }
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
                value: 'Елена'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: 'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553261543/t0it9seesadm1bomoice.jpg'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[3]._id,
                table: TABLE.id,
                value: `
                    Наша семья очень благодарна Леониду и его команде в стройке дома. С самого начала знакомства расположил к себе, консультировал и 
                    советовал по делу. С минимальными затратами в короткие сроки его команда осуществила нашу мечту. 
                    Спасибо Вам большое и обязательно к Вам обратимся по строительству бани.
                `
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
                value: moment().format()
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'Александр'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: 'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553261617/cieim7bqjb6pgrsgjhmw.jpg'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[3]._id,
                table: TABLE.id,
                value: `
                    С благодарностью к Леониду и ребятам, которые строили. Долго выбирали фирмы, чтобы построить 
                    каркасный дом в 2 этажа, семья большая, решили расширяться. Наш знакомый посоветовал Леонида. 
                    Цены очень отличались, гораздо дешевле, что было ещё одним плюсом. Встретились, быстро нашли 
                    общий язык, я выбрал проект и работа началась. Закуп делал Леонид, всё чеки были предоставлены. 
                    Ребята без вредных привычек, работали профессионально, не затягивая с сроками. Будем всем 
                    рекомендовать только Удачный дом и Леонида.
                `
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
                value: moment().format()
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'Алексей и Анна Рощины'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: 'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553262509/c7zljfavn3xemgkwbbmb.jpg'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[3]._id,
                table: TABLE.id,
                value: `
                    Огромное спасибо Леонид! Очень довольны! Раздаем твои визитки знакомым.
                `
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
                value: moment().format()
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[1]._id,
                table: TABLE.id,
                value: 'Алексей'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[2]._id,
                table: TABLE.id,
                value: 'http://res.cloudinary.com/dix3v9vzg/image/upload/v1553262560/jfec2diaw4qpjm9drfhr.jpg'
            },
            {
                _id: new ObjectId(),
                type: TABLE_COLUMNS[3]._id,
                table: TABLE.id,
                value: `
                    Леонид спасибо! Дом держит тепло! Баня работает!
                `
            }
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
                return dropTable('feedbacks');
            })
    },
};