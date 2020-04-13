console.log('----------------')
console.log('METHOD DECORATOR')
console.log('----------------')
// method decorator
function log(target: Function, key: string, value: any) {
    return {
        value: function (...args: any[]) {
            const a = args.map(a => JSON.stringify(a)).join();
            console.log('ppphhhhkkkkkhheee')
            const result = value.value.apply(this, args);
            console.log('ppphhhhkkkkkhheee')
            const r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    };
}

class C {
    @log
    public foo(n: number) {
        return n * 2;
    }
}

const c = new C()
// c.foo(2)



// descriptor

console.log(Object.getOwnPropertyDescriptor(C.prototype, 'foo'))

// value: ƒ foo(a)
// arguments: (...)
// caller: (...)
// length: 1
// name: "foo"


 // target === C.prototype
 // key === "foo"
 // value === Object.getOwnPropertyDescriptor(C.prototype, "foo")



 // class decorator
 console.log('---------------')
 console.log('CLASS DECORATOR')
 console.log('---------------')

 function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log('Sealed!')
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

console.log(new Greeter('hey ho!').greet())



console.log('---------------------')
console.log('CONSTRUCTOR ENCHANSER')
console.log('---------------------')
// constructor enchanser

function classEnchanser<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "hey ho";
    }
}

@classEnchanser
class HeyHoyer {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new HeyHoyer("world"));
