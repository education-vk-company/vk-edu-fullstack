"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var first_1 = __importDefault(require("./first"));
first_1.default();
var Martin = /** @class */ (function () {
    function Martin(name, status) {
        this.name = name;
        this.status = status;
    }
    Martin.prototype.isTop = function () {
        return true;
    };
    Martin.prototype.sayCool = function () {
        console.log("Shimba limba?");
    };
    return Martin;
}());
exports.Person = Martin;
var martin = new Martin('martin', 'active');
console.log(martin.isTop());
martin.sayCool();
ts
    .tsx
    .d.ts;
