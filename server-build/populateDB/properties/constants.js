"use strict";

var mongoose = require('mongoose');

var ObjectId = mongoose.Types.ObjectId;
module.exports = [{
  _id: new ObjectId(),
  type: 'INPUT',
  name: 'Телефон МТС',
  internalName: 'phone1',
  order: 1,
  value: '+7 981 400 74 03'
}, {
  _id: new ObjectId(),
  type: 'INPUT',
  name: 'Телефон Мегафон',
  internalName: 'phone2',
  order: 1,
  value: '+7 981 400 74 03'
}, {
  _id: new ObjectId(),
  type: 'INPUT',
  name: 'Email',
  internalName: 'mail',
  order: 2,
  value: 'nyppeli@mail.ru'
}, {
  _id: new ObjectId(),
  type: 'INPUT',
  name: 'Работаем с',
  internalName: 'workFromYear',
  order: 2,
  value: '2007'
}, {
  _id: new ObjectId(),
  type: 'INPUT',
  name: 'Кол-во реализованных проектов',
  internalName: 'completedProjects',
  order: 2,
  value: 80
}, {
  _id: new ObjectId(),
  type: 'INPUT',
  name: 'Копирайт',
  internalName: 'copyright',
  order: 2,
  value: '2019, Умный дом'
}, {
  _id: new ObjectId(),
  type: 'INPUT',
  name: 'Ссылка на группу в Vkontacte',
  internalName: 'link_vk',
  order: 2,
  value: 'https://vk.com/club50042773'
}, {
  _id: new ObjectId(),
  type: 'INPUT',
  name: 'Ссылка на группу в Facebook',
  internalName: 'link_fb',
  order: 2,
  value: 'https://vk.com/club50042773'
}, {
  _id: new ObjectId(),
  type: 'INPUT',
  name: 'Ссылка на группу в Instagram',
  internalName: 'link_instagram',
  order: 2,
  value: 'https://vk.com/club50042773'
}, {
  _id: new ObjectId(),
  type: 'TEXTAREA',
  name: 'О нас',
  internalName: 'aboutUs',
  order: 2,
  value: "\n        <p>\n            \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u041B\u0435\u043E\u043D\u0438\u0434.\n        </p> \n        <p>\n            \u0416\u0438\u0432\u0443 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E \u0432 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0435 \u041A\u0430\u0440\u0435\u043B\u0438\u044F. \u041D\u0430\u0447\u0438\u043D\u0430\u043B \u0442\u0440\u0443\u0434\u043E\u0432\u0443\u044E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441 \u043F\u043B\u043E\u0442\u043D\u0438\u043A\u0430, \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u043C. \n            \u0411\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442 \u043D\u0430\u0437\u0430\u0434, \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u043B\u044E\u0434\u0435\u0439,\u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0441\u0432\u043E\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u043E\u043C\u0443 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443.\n        </p>      \n        <p>\n            \u041D\u0430\u0448\u0430 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F \u044D\u0442\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0441\u0442\u044C \u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443.\n            \u0421\u0442\u0440\u043E\u0438\u043C \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0412\u0430\u0448\u0438\u043C\u0438 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C\u0438. \u0415\u0441\u043B\u0438 \u0412\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0439 \u0434\u043B\u044F \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043C, \u0442\u043E \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0434\u0438\u043D \u0438\u0437 \u043D\u0430\u0448\u0438\u0445 \u0442\u0438\u043F\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432. \n            \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0445\u0432\u043E\u0439\u043D\u044B\u0439 \u043B\u0435\u0441, \u043F\u0440\u043E\u0438\u0437\u0440\u0430\u0441\u0442\u0430\u044E\u0449\u0438\u0439 \u0432 \u043B\u0435\u0441\u0430\u0445 \u0440\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u041A\u0430\u0440\u0435\u043B\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u043B\u0435\u0441\u043E\u043F\u0438\u043B\u044C\u043D\u043E\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435. \n            \u041D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0437\u0430\u0431\u044B\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442 \u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438\u043B\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u043F\u043E \u043D\u0438\u0437\u043A\u0438\u043C \u0446\u0435\u043D\u0430\u043C \u043D\u0435 \u0431\u044B\u0432\u0430\u0435\u0442 \u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0440\u0430\u0431\u043E\u0442 \u0438 \u0441\u0440\u043E\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F. \u041C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0432 \u0432\u044B\u0431\u043E\u0440\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0440\u0430\u0437\u0443\u043C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0435\u043D\u043A\u0438 \u0438 \u0432\u044B\u0433\u043E\u0434\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0437\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B.\n        </p>\n        "
}];