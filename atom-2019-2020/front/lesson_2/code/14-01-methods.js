var user = {
    name: "Джон",
    age: 30,
};

user.sayHi = function() {
    console.log("Привет!");
};

user.sayHi();

function sayHi() {
    alert("Hi!");
};

user.sayHi = sayHi;

user.sayHi();

user = {
    name: "Джон",
    age: 30,

    sayHi() {
        console.log("Привет!");
    },
};
