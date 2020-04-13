"use strict";
var sum;
var noisy = function (func) {
    var wrapper = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('ppphhhhffffchfiu');
        var res = func.apply(void 0, args);
        console.log(res);
        console.log('khhhhheeeeeefffph');
        return res;
    };
    return wrapper;
};
sum = function (a, b) { return (a + b); };
var noisySum = noisy(sum);
noisySum(1, 15);
var First = /** @class */ (function () {
    function First() {
        this.name = 'sss';
    }
    return First;
}());
var Second = /** @class */ (function () {
    function Second() {
        this.secondName = 'fff';
    }
    return Second;
}());
var ActiveMixin = /** @class */ (function () {
    function ActiveMixin() {
    }
    ActiveMixin.prototype.isActive = function () { return true; };
    return ActiveMixin;
}());
var Union = /** @class */ (function () {
    function Union() {
    }
    return Union;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
