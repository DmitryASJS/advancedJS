import DomListener from './DomListener';

export default class ExcelComponent extends DomListener {
	static $layout = `<div></div>`;
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || 'defaultExcelComponentName';
	}

	// Возвращает шаблон компонента
	toHTML($layout) {
		return $layout;
	}

	// onInput(event) {

	// }

	init() {
		this.initDomListeners();
	}

	destroy() {
		this.removeDomListeners()
	};

	get[Symbol.toStringTag]() {
		return 'ExcelComponent';
	}

}