import { Person } from "./second";

const alena = new Person('alena', 'super active');

console.log(alena.isTop());

alena.sayCool = (): void => {console.log('Backend power!')};

alena.sayCool();




// types

import type { TOrder } from "./types";

const firstOrder: TOrder = {
    id: 1,
    timestamp: 111111111,
    name: 'anton',
    addr: {
        city: 'moscow',
        index: 111111,
        street: 'Leningradskii pr-t',
        building: '39s79',
    },
    comment: 'FASTA!!!',
}

console.log(firstOrder.comment);
