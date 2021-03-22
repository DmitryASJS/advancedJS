'use strict';

import ExcelComponent from '../../core/ExcelComponent';

export default class Formula extends ExcelComponent {
	static classNameTag = 'formula';
	static $layout = `
		<div class="info">
			<span class="material-icons">functions</span>
		</div>
		<div 	class="input" 
				contenteditable="true" 
				spellcheck="true">
		</div>
	`;

	constructor($root, options) {
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click'],
		})
	}


	get[Symbol.toStringTag]() {
		return 'Formula';
	}

	onInput(event){
		// console.log('Formula → onInput '. event);
		// console.log('this → ', this);
		console.log('onInput method → ', event.target.textContent.trim());
	}

	onClick(event){
		console.log('onClick method')
	}
};