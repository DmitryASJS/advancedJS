'use strict';
import { $ } from '../../core/dom';
import ExcelComponent from '../../core/ExcelComponent';
import { createTable } from './table.template';
import { resizeHandler } from './table.resize';
import { shouldResize } from './table.functions';

export default class Table extends ExcelComponent {
	static classNameTag = 'table';
	static $layout = createTable();
	constructor($root, options) {
		super($root, {
			name: 'Table',
			listeners: ['mousedown', 'click'],
		})
	}

	onMousedown(event) {

		if (shouldResize(event)) {
			resizeHandler(this.$root, event);
		}

		
	}

	onClick(event) {
		function trackMutationDom(MutationRecord) {
			console.log(MutationRecord[0])
		}

		const observer = new MutationObserver(trackMutationDom);
		observer.observe(document, {
			childList: true,
			subtree: true,
			characterDataOldValue: true,
		});
	}


	// onHover(event){
	// 	console.log('onHover on Toolbar. eventTarget → ', event.target);
	// }

	// onMousemove(event){
	// 	console.log('ononMousemove on Toolbar. eventTarget → ', event.clientX);
	// }

	// onMouseup(event){
	// 	console.log('ononMouseup on Toolbar. eventTarget → ', event.clientX);
	// }

	get[Symbol.toStringTag]() {
		return 'Table';
	}
};