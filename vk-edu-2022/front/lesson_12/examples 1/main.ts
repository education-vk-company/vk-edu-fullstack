// console.log('Hello world!');

export function identity<T>(arg: T): T {
	return arg;
}

export const test = identity(null);

enum Direction {
	Diagonal = 0,
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

export const test2 = Direction.Right;

export default Direction;
