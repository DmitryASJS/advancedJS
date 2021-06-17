'use strict';
import {$} from '../../core/dom'; 
import Emitter from '../../core/Emitter';

export default class Excel {

	constructor(selector, options){
		this.$el = $(selector).cssText('container test');
		this.components = options.components || [];
		this.emitter = new Emitter();
	}

	getRoot(){
		const $root = $.create('div', 'excel light');
		$root.cssText('margin-top: 2rem');
		console.log(this.emitter);
		window['cEm'] = this.emitter;
		
		this.components = this.components.map( (Component) => {

			const $elItemRoot = $.create('div', `excel__${Component.classNameTag}`);
			// const component = new Component($elItemRoot.nativeEl);
			const component = new Component($elItemRoot, {
				emitter: this.emitter,
			});

			if(component.name){
				window['c' + component.name] = component;
			}

			// $elItemRoot.html(component.toHTML(Component.$layout));
			$elItemRoot.html(component.toHTML());
			$root.append($elItemRoot);

			return component;
		});
		// console.log('aaa', $root);
		return $root;
	}

	render() {
		this.$el.append(this.getRoot());
		this.components.forEach((component) => {
			component.init();
		});
	}

	destroy(){
		this.components.forEach( component => {
			component.destroy();
		});
	}

}