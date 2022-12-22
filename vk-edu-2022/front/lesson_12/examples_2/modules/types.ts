export type TOrder = {
    id: number,
    timestamp: number,
    name: string,
    addr: {
        city: string,
        index: number,
        street: string,
        building: string,
    },
    comment: string,
}


interface IEsheInt {
    d: string,
    e: string,
    f: string,  // move to d
}

interface IKakoiNibud {
    a: string,
    b: string,
    c: {
        e: string,  // bad
        d: string,  // bad
        f: string,  // bad
    },
    d: IEsheInt["f"], // good
}



interface IKakoiNibudGood {
    a: string,
    b: string,
    c: {
        e: IEsheInt["e"],  // bad
        d: IEsheInt["d"],  // bad
        f: IEsheInt["f"],  // bad
    },
    d: IEsheInt["f"], // good
}

const g = {
    a: 'hey',
    b: 'hey',
    c: 'hey',
}

type TG = typeof g

type KG = keyof TG // a, b, c

type valueof<T> = T[keyof T];

type VG = valueof<IEsheInt>
