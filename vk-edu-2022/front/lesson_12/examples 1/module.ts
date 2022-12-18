import * as T from './types';

type TЧитайВЗадании = any;

const API = '';

// const someFunction = () => {};

export function translate(text: string, someParam: TЧитайВЗадании /* еще параметры по желанию*/) {
	return fetch(`${API}/что-то еще из документации`)
		.then(response => response.json())
		.then((data: T.IApiResponse) => {
			// тут какой-то ваш код
			// someFunction(blablabla);
			console.log(data);
		});
};
