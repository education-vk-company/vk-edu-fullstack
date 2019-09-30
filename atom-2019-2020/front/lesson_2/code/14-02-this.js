var user = {
    name: "Джон",
    age: 30,

    sayHi() {
        console.log(`Привет, ${this.name}!`);
    },
};

user.sayHi();

function sayHi() {
    console.log(`Привет, ${this.name}!`);
}

var user1 = { name: "Люк" };
var user2 = { name: "Лея" };

user1.f = sayHi;
user2.f = sayHi;

user1.f();
user2.f();

// Reference Type

user = {
    name: "Джон",
    hi() { console.log(`Привет, ${this.name}!`); },
    bye() { console.log("Пока"); }
};

user.hi();

(user.name == "Джон" ? user.hi : user.bye)();

hi = user.hi;

hi();

hi.bind(user)();

hi.call(user);
