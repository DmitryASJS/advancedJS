'use strict';

import ExcelComponent from '../../core/ExcelComponent';
import {createTable} from './table.template';

export default class Table extends ExcelComponent {
	static classNameTag = 'table';
	static $layout = createTable();

	// `
	// 	<div class="row">
	// 		<div class="row-info"></div>
	// 		<div class="row-data">
	// 			<div class="column">A</div>
	// 			<div class="column">B</div>
	// 			<div class="column">C</div>
	// 			<div class="column">D</div>
	// 			<div class="column">E</div>
	// 			<div class="column">F</div>
	// 			<div class="column">G</div>
	// 			<div class="column">H</div>
	// 			<div class="column">C</div>
	// 			<div class="column">A</div>
	// 			<div class="column">B</div>
	// 			<div class="column">C</div>
	// 			<div class="column">D</div>
	// 			<div class="column">E</div>
	// 			<div class="column">F</div>
	// 			<div class="column">G</div>
	// 			<div class="column">H</div>
	// 			<div class="column">C</div>
	// 			<div class="column">A</div>
	// 			<div class="column">B</div>
	// 			<div class="column">C</div>
	// 			<div class="column">D</div>
	// 			<div class="column">E</div>
	// 			<div class="column">F</div>
	// 			<div class="column">G</div>
	// 			<div class="column">H</div>
	// 			<div class="column">C</div>
	// 			<div class="column">A</div>
	// 			<div class="column">B</div>
	// 			<div class="column">C</div>
	// 			<div class="column">D</div>
	// 			<div class="column">E</div>
	// 			<div class="column">F</div>
	// 			<div class="column">G</div>
	// 			<div class="column">H</div>
	// 			<div class="column">C</div>
	// 			<div class="column">A</div>
	// 			<div class="column">B</div>
	// 			<div class="column">C</div>
	// 			<div class="column">D</div>
	// 			<div class="column">E</div>
	// 			<div class="column">F</div>
	// 			<div class="column">G</div>
	// 			<div class="column">H</div>
	// 			<div class="column">C</div>
	// 			<div class="column">A</div>
	// 			<div class="column">B</div>
	// 			<div class="column">C</div>
	// 			<div class="column">D</div>
	// 			<div class="column">E</div>
	// 			<div class="column">F</div>
	// 			<div class="column">G</div>
	// 			<div class="column">H</div>
	// 			<div class="column">C</div>
	// 		</div>
	// 	</div>

	// 	<div class="row">
	// 		<div class="row-info">1</div>
	// 		<div class="row-data">
	// 			<div class="cell selected" contenteditable="true">1a</div>
	// 			<div class="cell" contenteditable="true">1b</div>
	// 			<div class="cell" contenteditable="true">1c</div>
	// 		</div>
	// 	</div>

	// 	<div class="row">
	// 		<div class="row-info">2</div>
	// 		<div class="row-data">
	// 			<div class="cell" contenteditable="true">2a</div>
	// 			<div class="cell" contenteditable="true">2b</div>
	// 			<div class="cell" contenteditable="true">2c</div>
	// 		</div>
	// 	</div>

	// 	<div class="row">
	// 		<div class="row-info">3</div>
	// 		<div class="row-data">
	// 			<div class="cell" contenteditable="true">3a</div>
	// 			<div class="cell" contenteditable="true">3b</div>
	// 			<div class="cell" contenteditable="true">3c</div>
	// 		</div>
	// 	</div>
	// 	<div class="row">
	// 		<div class="row-info">3</div>
	// 		<div class="row-data">
	// 			<div class="cell" contenteditable="true">3a</div>
	// 			<div class="cell" contenteditable="true">3b</div>
	// 			<div class="cell" contenteditable="true">3c</div>
	// 		</div>
	// 	</div>
	// 	<div class="row">
	// 		<div class="row-info">3</div>
	// 		<div class="row-data">
	// 			<div class="cell" contenteditable="true">3a</div>
	// 			<div class="cell" contenteditable="true">3b</div>
	// 			<div class="cell" contenteditable="true">3c</div>
	// 		</div>
	// 	</div>
	// 	<div class="row">
	// 		<div class="row-info">3</div>
	// 		<div class="row-data">
	// 			<div class="cell" contenteditable="true">3a</div>
	// 			<div class="cell" contenteditable="true">3b</div>
	// 			<div class="cell" contenteditable="true">3c</div>
	// 		</div>
	// 	</div>
	// 	<div class="row">
	// 		<div class="row-info">3</div>
	// 		<div class="row-data">
	// 			<div class="cell" contenteditable="true">3a</div>
	// 			<div class="cell" contenteditable="true">3b</div>
	// 			<div class="cell" contenteditable="true">3c</div>
	// 		</div>
	// 	</div>
	// 	<div class="row">
	// 		<div class="row-info">3</div>
	// 		<div class="row-data">
	// 			<div class="cell" contenteditable="true">3a</div>
	// 			<div class="cell" contenteditable="true">3b</div>
	// 			<div class="cell" contenteditable="true">3c</div>
	// 		</div>
	// 	</div>
	// `

	get [Symbol.toStringTag]() {
		return 'Table';
	}
};