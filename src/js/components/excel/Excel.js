'use strict';
import {$} from '../../core/dom'; 

export default class Excel {

	constructor(selector, options){
		this.$el = $(selector).cssText('container test');
		this.components = options.components || [];
	}

	getRoot(){
		const $root = $.create('div', 'excel light');
		$root.cssText('margin-top: 2rem');
		
		this.components = this.components.map( (Component) => {

			const $elItemRoot = $.create('div', `excel__${Component.classNameTag}`);
			// const component = new Component($elItemRoot.nativeEl);
			const component = new Component($elItemRoot);
			//DEBUG
			if(component.name){
				window['c' + component.name] = component;
			}

			$elItemRoot.html(component.toHTML(Component.$layout));
			$root.append($elItemRoot);

			return component;
		})
		// console.log('aaa', $root);
		return $root;
	}

	render() {
		this.$el.append(this.getRoot());
		this.components.forEach((component) => {
			component.init();
		});
	}

}