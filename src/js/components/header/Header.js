'use strict';

import ExcelComponent from '../../core/ExcelComponent';

export default class Header extends ExcelComponent {

	static classNameTag = 'header';
	static $layout = `
		<input type="text" class="input" value="Новая таблица">
				<div>
					<div class="button">
						<span class="material-icons">exit_to_app</span>
					</div>
					<div class="button">
						<span class="material-icons">delete_outline</span>
					</div>
				</div>
	`;

	get[Symbol.toStringTag]() {
		return 'Header';
	}

};