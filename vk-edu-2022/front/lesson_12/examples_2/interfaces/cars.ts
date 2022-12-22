interface IUnrealCar {
    horsePower: number;
    torque: number;
    stickers: string[];
}

interface Car {
    manufacturer: string;
    name: string;
    vehicleInfo: string;
}

const unrealCar: Car & IUnrealCar = {
    horsePower: 111,
    torque: 80,
    stickers: ['s', 's'],
}

type SuperCar = IUnrealCar & Car;

class BigCar implements  SuperCar {
    horsePower = 111
    torque = 80
    stickers = ['s', 's']
};