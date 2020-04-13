"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('----------------');
console.log('METHOD DECORATOR');
console.log('----------------');
// method decorator
function log(target, key, value) {
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var a = args.map(function (a) { return JSON.stringify(a); }).join();
            console.log('ppphhhhkkkkkhheee');
            var result = value.value.apply(this, args);
            console.log('ppphhhhkkkkkhheee');
            var r = JSON.stringify(result);
            console.log("Call: " + key + "(" + a + ") => " + r);
            return result;
        }
    };
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.foo = function (n) {
        return n * 2;
    };
    __decorate([
        log
    ], C.prototype, "foo", null);
    return C;
}());
var c = new C();
// c.foo(2)
// descriptor
console.log(Object.getOwnPropertyDescriptor(C.prototype, 'foo'));
// value: ƒ foo(a)
// arguments: (...)
// caller: (...)
// length: 1
// name: "foo"
// target === C.prototype
// key === "foo"
// value === Object.getOwnPropertyDescriptor(C.prototype, "foo")
// class decorator
console.log('---------------');
console.log('CLASS DECORATOR');
console.log('---------------');
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log('Sealed!');
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter = __decorate([
        sealed
    ], Greeter);
    return Greeter;
}());
console.log(new Greeter('hey ho!').greet());
console.log('---------------------');
console.log('CONSTRUCTOR ENCHANSER');
console.log('---------------------');
// constructor enchanser
function classEnchanser(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "hey ho";
            return _this;
        }
        return class_1;
    }(constructor));
}
var HeyHoyer = /** @class */ (function () {
    function HeyHoyer(m) {
        this.property = "property";
        this.hello = m;
    }
    HeyHoyer = __decorate([
        classEnchanser
    ], HeyHoyer);
    return HeyHoyer;
}());
console.log(new HeyHoyer("world"));
