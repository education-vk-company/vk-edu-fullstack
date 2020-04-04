import * as Module from './main';


export default function translate(text: string) {
	fetch('google.translate').then(response => {
		return response;
	});
};
