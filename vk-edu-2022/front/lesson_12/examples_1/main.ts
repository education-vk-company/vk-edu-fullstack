// console.log('Hello world!');

export function echo<T>(arg: T): T {
	return arg;
}

export const test = echo(null);
export const testNumber = echo<number>(5);

// const [state, useState] = React.useState<number>();

enum Direction {
	Diagonal = 0,
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

export const test2 = Direction.Right;

export default Direction;
