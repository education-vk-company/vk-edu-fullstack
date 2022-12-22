const sym = Symbol();

let obj = {
    [sym]: "martin is here"
};

console.log(obj[sym]);
