import mongoose from 'mongoose';
const { Types: { ObjectId } } = mongoose;


export const PROPERTIES = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Телефон',
        internalName: 'phone',
        order: 1,
        value: '+7 981 400 74 03',

    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Email',
        internalName: 'mail',
        order: 2,
        value: 'nyppeli@mail.ru',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Работаем с',
        internalName: 'workFromYear',
        order: 2,
        value: '2007',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Кол-во реализованных проектов',
        internalName: 'completedProjects',
        order: 2,
        value: 80,
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Копирайт',
        internalName: 'copyright',
        order: 2,
        value: '2019, Умный дом',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Ссылка на группу в Vkontacte',
        internalName: 'link_vk',
        order: 2,
        value: 'https://vk.com/club50042773',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Ссылка на группу в Facebook',
        internalName: 'link_fb',
        order: 2,
        value: 'https://vk.com/club50042773',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Ссылка на группу в Instagram',
        internalName: 'link_instagram',
        order: 2,
        value: 'https://vk.com/club50042773',
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        name: 'О нас',
        internalName: 'aboutUs',
        order: 2,
        value: `
        <p>
            Здравствуйте, меня зовут Леонид.
        </p> 
        <p>
            Живу и работаю в Республике Карелия. Начинал трудовую деятельность с плотника, работал прорабом. 
            Более 10 лет назад, объединив команду опытных людей,предлагаем свои услуги по загородному строительству.
        </p>      
        <p>
            Наша философия это открытость и индивидуальный подход к Заказчику.
            Строим в соответствии с Вашими пожеланиями. Если Вы просто хотите получить комфортный для проживания дом, то можете выбрать один из наших типовых проектов. 
            Используем только качественный хвойный лес, произрастающий в лесах республики Карелия, который перерабатывается на собственном лесопильном производстве. 
            Не стоит забывать, что стоимость работ стройки или ремонта по низким ценам не бывает и напрямую зависит от материалов, качественного производства работ и сроки выполнения. Мы поможем в выборе строительного материала, предлагаем разумные расценки и выгодную систему бонусов за дополнительные работы.
        </p>
        `,
    }
];
