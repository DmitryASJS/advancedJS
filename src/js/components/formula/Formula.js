'use strict';

import ExcelComponent from '../../core/ExcelComponent';

export default class Formula extends ExcelComponent {
	static classNameTag = 'formula';
	static $layout = `
		<div class="info">
			<span class="material-icons">functions</span>
		</div>
		<div 	id="formula" class="input" 
				contenteditable="true" 
				spellcheck="true">
		</div>
	`;

	constructor($root, options) {
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click', 'keydown'],
			...options,
		})
	}

	toHTML() {
		return Formula.$layout;
	}

	init() {
		super.init();
		this.$formula = this.$root.findEl('#formula');

		this.$on('table:select', ($cell) => {
			this.$formula.text($cell.text());
		});

		this.$on('table:input', ($cell) => {
			this.$formula.text($cell.text());
		})


	}

	get[Symbol.toStringTag]() {
		return 'Formula';
	}

	onInput(event) {
		const contentCell = event.target.textContent.trim();
		this.$emit('formula:input', contentCell);

	}

	onClick(event) {
		console.log('onClick method')
	}

	onKeydown(event) {
		const keys = ['Enter', 'Tab'];
		if (keys.includes(event.key)) {
			event.preventDefault();

			this.$emit('formula:enterKey');

		}
	}
};