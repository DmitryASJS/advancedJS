'use strict';
import { $ } from '../../core/dom';
import ExcelComponent from '../../core/ExcelComponent';
import { createTable } from './table.template';
import { resizeHandler } from './table.resize';
import { matrix, isCell, idNextSelection, shouldResize} from './table.functions';
import TableSelection from './TableSelection';

export default class Table extends ExcelComponent {
	static classNameTag = 'table';
	static $layout = createTable();
	constructor($root, options) {
		super($root, {
			name: 'Table',
			listeners: ['mousedown', 'click', 'keydown', 'input'],
			...options
		});
	}

	prepare() {
		this.selection = new TableSelection('selected');
	}

	toHTML() {
		return createTable();
	}

	init() {
		super.init();
		const $cell = this.$root.findEl('[data-id="0:0"]');
		this.selection.select($cell);
		this.$emit('table:select', $cell);

		this.$on('formula:input', (content) => {
			this.selection.current.text(content);
		});

		this.$on('formula:enterKey', () => {
			this.selection.current.focusin()
		})
	}


	onMousedown(event) {
		if (shouldResize(event)) {
			resizeHandler(this.$root, event);
		} else if (isCell(event)) {
			const $target = $(event.target);

			if (event.shiftKey) {
				const $current = this.selection.current;

				const $cells = matrix($target, this.selection.current)
					.map(id => this.$root.findEl(`[data-id="${id}"]`));
				this.selection.selectGroup($cells);

			} else {
				this.selection.select($target);
			}

		}
	}

	onKeydown(event) {
		const keys = [
			'Enter',
			'Tab',
			'ArrowLeft',
			'ArrowRight',
			'ArrowUp',
			'ArrowDown'
		];

		const { key, shiftKey } = event;

		if (keys.includes(key) && !shiftKey) {
			event.preventDefault();
			const id = this.selection.current.id(true);
			const $next = this.$root.findEl(idNextSelection(key, id));
			this.selection.select($next);
			this.$emit('table:select', $next);
		}

	}

	onClick(event) {
		function trackMutationDom(MutationRecord) {
			console.log(MutationRecord[0]);
		}

		const observer = new MutationObserver(trackMutationDom);
		observer.observe(document, {
			childList: true,
			subtree: true,
			characterDataOldValue: true,
		});
	}

	onInput(event){
		this.$emit('table:input', $(event.target));
	}

	get[Symbol.toStringTag]() {
		return 'Table';
	}
};


// function idNextSelection(key, {col, row}) {
// 	switch (key) {
// 		case 'Enter' :
// 		case 'ArrowDown' :
// 			row++
// 			break

// 		case 'Tab' :
// 		case 'ArrowRight' :
// 			col++
// 			break

// 		case 'ArrowLeft' :
// 			!col ? col : col--
// 			break

// 		case 'ArrowUp' :
// 			!row ? row : row--
// 			break
// 	}

// 	return `[data-id="${row}:${col}"]`
// }