import Items from './components/Items.js';
export default class App {
	constructor() {
		const $app = document.querySelector('#app');
		new Items($app);
	}
}
