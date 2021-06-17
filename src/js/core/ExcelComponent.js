import DomListener from './DomListener';

export default class ExcelComponent extends DomListener {
	static $layout = `<div></div>`;
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || 'defaultExcelComponentName';
		this.emitter = options.emitter;
		this.unsubscribers = [];
		console.log(options);
		this.prepare();
	}
	// настраиваем наш компонент до init
	prepare() {
		
	}

	// Возвращает шаблон компонента
	toHTML($layout) {
		return $layout;
	}

	// уведомляем подписчиков про натупившее событие eventName
	$emit(eventName, ...args){
		this.emitter.emit(eventName, ...args);
	}

	// подписываемся на событие evenName
	$on(eventName, fn){
		const unsub = this.emitter.subscribe(eventName, fn);
		this.unsubscribers.push(unsub);
	}
	// onInput(event) {

	// }

	// инициализуируем компонент
	// Добавляем DOM слушателей
	init() {
		this.initDomListeners();
	}

	//удаляем компонент
	//xbcnbv ckeifntktq
	destroy() {
		this.removeDomListeners();
		this.unsubscribers.forEach( unsubscribe => unsubscribe());
	};

	get[Symbol.toStringTag]() {
		return 'ExcelComponent';
	}

}