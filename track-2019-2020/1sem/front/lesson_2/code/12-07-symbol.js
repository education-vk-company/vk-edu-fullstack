var id = Symbol();

var id1 = Symbol("id");
var id2 = Symbol("id");

console.log(id1 == id2);

var user = {
    name: "Вася"
};

var id = Symbol("id");

user[id] = 1;

console.log(user[id]);
