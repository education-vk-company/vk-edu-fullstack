var user = new Object();
var user = {};

var user = {
    name: "John",
    age: 30,
};

console.log(user.name);
console.log(user.age);

user.isAdmin = true;

delete user.age;

user = {
    name: "John",
    age: 30,
    'likes birds': true,
};

user['likes birds'] = false;

console.log(user['likes birds']);

var key = 'likes birds';
console.log(user[key]);

delete user[key];

user = {
    [key]: true,
};

user = {
    [key + 'and animals']: true,
};

user = {
    key,
}

console.log(user.noSuchProperty !== undefined);
console.log('noSuchProperty' in user);

user = {
    noSuchProperty: undefined,
}
