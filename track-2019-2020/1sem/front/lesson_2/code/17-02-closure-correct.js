var i = 10;
var array = [];

while (i--) {
    array.push(
        (function (k) {
            return function() {
                return k + k;
            }
        })(i)
    );
}

console.log([
    array[0](),
    array[1](),
]);
