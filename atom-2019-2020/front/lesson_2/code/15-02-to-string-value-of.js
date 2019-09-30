var user = {
    name: "John",
    money: 1000,

    // для хинта равного "string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // для хинта равного "number" или "default"
    valueOf() {
        return this.money;
    },
};

console.log(String(user));
console.log(+user);
console.log(user + 500);
