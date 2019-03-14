import mongoose from 'mongoose';

const { Types: { ObjectId } } = mongoose;

export const NAVIGATIONS = [
    {
        _id: new ObjectId(),
        level: 0,
        leftKey: 1,
        rightKey: 12,
        name: 'Root',
        url: '/'
    },
    {
        _id: new ObjectId(),
        level: 1,
        leftKey: 2,
        rightKey: 7,
        name: 'О нас',
        url: '/'
    },
    {
        _id: new ObjectId(),
        level: 2,
        leftKey: 3,
        rightKey: 4,
        name: 'Контакты',
        url: '/'
    },
    {
        _id: new ObjectId(),
        level: 2,
        leftKey: 5,
        rightKey: 6,
        name: 'Вакансии',
        url: '/'
    },
    {
        _id: new ObjectId(),
        level: 1,
        leftKey: 8,
        rightKey: 9,
        name: 'Информация',
        url: '/'
    },
    {
        _id: new ObjectId(),
        level: 1,
        leftKey: 10,
        rightKey: 11,
        name: 'Инфо2',
        url: '/'
    }
];
