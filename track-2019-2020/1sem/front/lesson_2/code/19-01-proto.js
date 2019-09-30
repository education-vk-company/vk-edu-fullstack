var animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    },
};

var rabbit = {
    jumps: true,
    __proto__: animal,
};

let longEar = {
    earLength: 10,
    __proto__: rabbit,
};

longEar.walk();
console.log(longEar.jumps);
