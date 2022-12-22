// objects

interface ICustomResponse {
    apiVersion: string;
    prevResponse?: number;
    [propName: string]: any;
}

const stubResponse: ICustomResponse = {
    apiVersion: 'v3',
    who: 'are',
    you: [1, 23, 'stt'],
}

console.log(stubResponse)


// functions

interface ImakeBig {
    (text: string, times?: number): string
}

let makeBig: ImakeBig

makeBig = (text, times=1) => (
    `${"I".repeat(times)} * ${text} * ${"I".repeat(times)}`
)

console.log(makeBig('martin', 7))

interface Car {
    manufacturer: string;
    name: string;
    vehicleInfo: string;
}

interface Car {
    horsePower: number;
    torque: number;
    stickers: string[];
}

const realCar: Car = {
    manufacturer: 'VAZ',
    name: 'Granta',
    vehicleInfo: 'Realnii avtomobil dlya realnoi jizni',
    horsePower: 98,
    torque: 145,
    stickers: ['my life - my rules', 'dolbit normalno'],
}

console.log(realCar);