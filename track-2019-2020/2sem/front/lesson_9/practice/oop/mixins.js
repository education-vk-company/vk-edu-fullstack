"use strict";
console.log('------------');
console.log('APPLY MIXINS');
console.log('------------');
// helper function
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
console.log('------------');
console.log('DISPOSABLE MIXIN');
console.log('------------');
// Disposable Mixin
var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
console.log('-----------------');
console.log('ACTIVATABLE MIXIN');
console.log('-----------------');
// Activatable Mixin
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
}());
console.log('---------------------');
console.log('THE CLASS TO MIX WITH');
console.log('---------------------');
var MixableObj = /** @class */ (function () {
    function MixableObj() {
        var _this = this;
        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
    }
    MixableObj.prototype.interact = function () {
        this.dispose();
        this.activate();
    };
    return MixableObj;
}());
applyMixins(MixableObj, [Disposable, Activatable]);
var obj = new MixableObj();
obj.interact();
setTimeout(function () { return obj.interact(); }, 1000);
