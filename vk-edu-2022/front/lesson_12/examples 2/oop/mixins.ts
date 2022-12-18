
console.log('------------')
console.log('APPLY MIXINS')
console.log('------------')

// helper function
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}

console.log('------------')
console.log('DISPOSABLE MIXIN')
console.log('------------')

// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}

console.log('-----------------')
console.log('ACTIVATABLE MIXIN')
console.log('-----------------')

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

console.log('---------------------')
console.log('THE CLASS TO MIX WITH')
console.log('---------------------')

class MixableObj {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }

    interact() {
        this.dispose();
        this.activate();
    }
}

interface MixableObj extends Disposable, Activatable {}
applyMixins(MixableObj, [Disposable, Activatable]);

let obj = new MixableObj();
obj.interact();
setTimeout(() => obj.interact(), 1000);
