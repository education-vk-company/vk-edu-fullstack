interface ILabeledObj {
	label: string;
	size: number;
	weight?: number;
	method?: (a: string) => void;
	readonly b?: string;
	a?: string;
}

function printLabel(labeledObj: ILabeledObj) {
	console.log(labeledObj.weight);
	// labeledObj.b = '1';
	labeledObj['a'] = "5";

	if (typeof labeledObj.method === 'function') {
		labeledObj.method("");
	}
}

type TTest = string | number;

const a = (a: string = 'test') => {
	alert(5)
};

let myObj = { size: 10, label: "Size 10 Object", method: a};
printLabel(myObj);


interface IObj {
	[индексация: string]: string;
}

interface IObj2 {
	method: (a: string) => void;
}

const obj: IObj | IObj2 = {
 "0": "",
 "1": "",
 "2": "",
 method: a,
};
obj['method'];

const переменная = 'привет;';


interface IObj3 {
	a: string;
}
interface IObj4 {
	b: string;
}
interface IObj5 {
	c?: string;
}

interface IObj6 extends IObj3, IObj4, IObj5 {

}

const superObj: IObj6 = {
	a: "",
	b: "",
};
