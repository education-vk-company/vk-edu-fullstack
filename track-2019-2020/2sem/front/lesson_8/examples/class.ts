
class Animal {
	readonly nickname: string = 'Tuzik';
	protected name: string;
	constructor(theName: string) { this.name = theName; }
	move(distanceInMeters: number) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class AnotherAnimal extends Animal {
	anotherName: string;
	constructor(anotherName: string) {
		super(anotherName);
		this.anotherName = anotherName;
		console.log(this.name);
	}
	static help: string = 'Help!!!'
	static help2: () => void = () => {
		console.log("asdasdasdas");
	}
}


const dog = new Animal('dog');
dog.move(5);
// dog.nickname = 'Barsik';
// dog.name;

const anotherDog = new AnotherAnimal('dog');
// anotherDog.

// anotherDog.name;

console.log(AnotherAnimal.help);
AnotherAnimal.help2();


abstract class BaseAnimal {
	abstract makeSound(): void;
	abstract soundText: string;
	move(): void {
		console.log("roaming the earth...");
	}
}

class AnotherOneAnimal2 extends BaseAnimal {
	soundText = 'AAAA';
	makeSound () {
		console.log('SOUND!!!');
	}
}

const newAnimal = new AnotherOneAnimal2();
newAnimal.makeSound();
newAnimal.soundText = 'aasaddsa';
