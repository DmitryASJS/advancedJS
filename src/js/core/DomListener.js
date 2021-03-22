import {capitalize} from './utils';

export default class DomListener {
	constructor($root, listeners = []){
		if(!$root){
			throw new Error(`No $root provided for DoomListener`);
		}
		this.$root = $root;
		this.listeners = listeners;
	}

	initDomListeners(){
		// console.log('DomListeners → ', this.toString(), this.$root, this.listeners);
		this.listeners.forEach(listener => {
			const callbackName = getMethodName(listener);
			if(!this[callbackName]){
				throw new Error(`callback ${callbackName} is not implemented in ${this.name} Component`);
			}
			this[callbackName] = this[callbackName].bind(this);
			this.$root.on(listener, this[callbackName]);
		})

	}

	removeDomListeners(){
		this.listeners.forEach(listener => {
			const callbackName = getMethodName(listener);
			this.$root.off(listener, this[callbackName]);
		});
	}
};



function getMethodName(evantName){
	return 'on' + capitalize(evantName);
}


