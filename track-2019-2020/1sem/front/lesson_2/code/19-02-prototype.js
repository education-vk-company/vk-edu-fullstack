var animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

var rabbit = new Rabbit("White Rabbit");

alert(rabbit.eats);

function Rabbit() {}
console.log(Rabbit.prototype);
console.log(Rabbit.prototype.constructor == Rabbit);

function Rabbit(name) {
    this.name = name;
    console.log(name);
}

var rabbit = new Rabbit("White Rabbit");
var rabbit2 = new rabbit.constructor("Black Rabbit");

function Rabbit() {}

Rabbit.prototype.jumps = true;


function Animal() {}
function Rabbit() {}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;
