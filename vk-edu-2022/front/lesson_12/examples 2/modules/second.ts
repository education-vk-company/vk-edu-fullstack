import someFunc, { IMartin } from './first';

someFunc();




class Martin implements IMartin {
    constructor(public name: string, public status: string) {}

    isTop() {
        return true;
    }

    public sayCool(): void {
        console.log(`Shimba limba?`);
    }
}

const martin = new Martin('martin', 'active');

console.log(martin.isTop());
martin.sayCool();



export { Martin as Person };

import SomeType from 'myThirdPartyLib';

.ts
.tsx
.d.ts