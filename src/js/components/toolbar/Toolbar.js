'use strict';

import ExcelComponent from '../../core/ExcelComponent';

export default class Toolbar extends ExcelComponent {
	static classNameTag = 'toolbar';
	static $layout = `
		<div draggable="true" class="button">
			<span class="material-icons">format_bold</span>
		</div>
		<div draggable="true" class="button">
			<span class="material-icons">format_italic</span>
		</div>
		<div draggable="true" class="button">
			<span class="material-icons">format_underline</span>
		</div>
		<div draggable="true" class="button">
			<span class="material-icons">align_horizontal_left</span>
		</div>
		<div draggable="true" class="button">
			<span class="material-icons">align_horizontal_center</span>
		</div>
		<div draggable="true" class="button">
			<span class="material-icons">align_horizontal_right</span>
		</div>
	`;

	constructor($root, options){
		super($root, {
			name: 'Toolbar',
			listeners: ['click'],
			...options,
		})
	}

	toHTML(){
		return Toolbar.$layout;
	}


	onClick(event){
		console.log('onClick on Toolbar. eventTarget → ', event.target);
	}
	
	get [Symbol.toStringTag]() {
		return 'Toolbar';
	}

};