interface ISum {
    (...args: number[]): number
}

let sum: ISum

const noisy = (func: ISum): ISum => {
    const wrapper = (...args: number[]) => {
        console.log('ppphhhhffffchfiu')
        const res = func(...args)
        console.log(res)
        console.log('khhhhheeeeeefffph')
        return res
    }
return wrapper
}


sum = (a, b) => (a + b)
const noisySum: ISum = noisy(sum)

noisySum(1, 15)


class First {
    name: string = 'sss';
}

class Second {
    secondName: string = 'fff';
}

class ActiveMixin {
    isActive() {return true}
}

interface ActiveMixin {

}

interface Second {

}

class Union implements ActiveMixin, Second {

}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}