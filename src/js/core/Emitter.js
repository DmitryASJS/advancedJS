'use strict';

export default class Emitter {
	constructor() {
		this.listeners = {}
	}

	// метод уведомления слушателей
	// exapmple: eventName = 'componentA:focus'
	//table.emit('table:emit', {a: 1})
	emit(eventName, ...args){

		if( !Array.isArray(this.listeners[eventName]) ){
			return false;
		}

		this.listeners[eventName].forEach( listener => {
				listener(...args);
			});

		return true;
	}


	// подписка на уведомления
	// Добавляем нового слушателя
	// formula.subscribe('table:select', () => {})
	subscribe(eventName, fn){
		this.listeners[eventName] = this.listeners[eventName] || [];
		this.listeners[eventName].push(fn);

		return () => {
			this.listeners[eventName] = 
			this.listeners[eventName].filter(listener => listener !== fn);
		};
	}
}


// Example
// const emitter = new Emitter();

// emitter.subscribe('table:focus', data => console.log('Sub: ', data));
// emitter.emit('table:focus', 'emit event → table:focus');