"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var second_1 = require("./second");
var alena = new second_1.Person('alena', 'super active');
console.log(alena.isTop());
alena.sayCool = function () { console.log('Backend power!'); };
alena.sayCool();
var firstOrder = {
    id: 1,
    timestamp: 111111111,
    name: 'anton',
    addr: {
        city: 'moscow',
        index: 111111,
        street: 'Leningradskii pr-t',
        building: '39s79',
    },
    comment: 'FASTA!!!',
};
console.log(firstOrder.comment);
