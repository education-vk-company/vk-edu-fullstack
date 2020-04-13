"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Monty", lastName: "Python" };
console.log(greeter(user));
