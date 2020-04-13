"use strict";
// objects
var stubResponse = {
    apiVersion: 'v3',
    who: 'are',
    you: [1, 23, 'stt'],
};
console.log(stubResponse);
var makeBig;
makeBig = function (text, times) {
    if (times === void 0) { times = 1; }
    return ("I".repeat(times) + " * " + text + " * " + "I".repeat(times));
};
console.log(makeBig('martin', 7));
var realCar = {
    manufacturer: 'VAZ',
    name: 'Granta',
    vehicleInfo: 'Realnii avtomobil dlya realnoi jizni',
    horsePower: 98,
    torque: 145,
    stickers: ['my life - my rules', 'dolbit normalno'],
};
console.log(realCar);
