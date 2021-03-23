const CODES = {
	A: 65,
	Z: 90
};

function createRow(content) {
	return `<div class='row'><div class="row-info"></div><div class="row-data">${content}</div></div>`;
}

function createRowCell(index, content) {
	return `<div class="row"><div class="row-info">${index}</div><div class="row-data">${content}</div></div>`;
}

function createCol(el) {
	return `<div class="column">${el}</div>`;
};


function createCell(el) {
	return `<div class="cell" contenteditable="true">${el}</div>`;
};

function toChar(_, index) {
	return String.fromCharCode(CODES.A + index)
};

export function createTable(rowsCount = 50, columnCount = 100) {
	const colsCount = CODES.Z - CODES.A + 1;
	const rows = [];

	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(createCol)
		.join('\n');
	rows.push(createRow(cols));

	for (let rowItem = 1; rowItem < rowsCount + 1; rowItem++) {
		let row = Array(colsCount)
			.fill('')
			.map(createCell)
			.join('\n');

		rows.push(createRowCell(rowItem, row));
	}
	return `${rows.join('\n')}`;
};