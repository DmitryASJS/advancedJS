const CODES = {
	A: 65,
	Z: 90
};

// function createCell(itemCol, itemRow) {
// 	return `<div class="cell" contenteditable="true" data-col="${itemCol}" data-row="${itemRow}"></div>`;
// };

function createCell(itemRow){
	return function(_, itemCol){
		return `<div 	class="cell" 
							contenteditable="true" 
							data-col="${itemCol}" 
							data-id="${itemRow - 1}:${itemCol}"
							data-type="cell">
					</div>`;
	}
};

function createCol(el, index) {
	return `
		<div class="column" data-type="resizable" data-col="${index}">
			${el}
			<div class="col-resize" data-resize="col"></div>
		</div>
	`;
};

function createRow(index, content) {
	const resize = index ? `<div class="row-resize" data-resize="row"></div>` : '';

	return ` 
		<div class="row" ${index ? 'data-type="resizable"' : ''} data-row="${index}">
			<div class="row-info">
				${index ? index : ''}
				${resize}
			</div>
			<div class="row-data">${content}</div>
		</div>
	`
}

function toChar(_, index) {
	return String.fromCharCode(CODES.A + index)
};

export function createTable(rowsCount = 20) {
	const colsCount = CODES.Z - CODES.A + 1;
	const rows = [];

	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(createCol)
		.join('\n');
	rows.push(createRow(null, cols));

	for (let rowItem = 1; rowItem < rowsCount + 1; rowItem++) {
		let row = Array(colsCount)
			.fill('')
			// .map((_, index) => createCell(index, rowItem))
			.map( createCell(rowItem) )
			.join('\n');

		rows.push(createRow(rowItem, row));
	}
	return `${rows.join('\n')}`;
};