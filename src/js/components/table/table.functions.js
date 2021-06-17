import { $ } from '../../core/dom';
import { range } from '../../core/utils';

export function shouldResize(event){
	return event.target.dataset.resize;
};

export function isCell(event){
	return event.target.dataset.type === "cell";
};


export function matrix($target, $current){
	const target = $target.id(true);
	const current = $current.id(true);

	const cols = range(current.col, target.col);
				const rows = range(current.row, target.row);

				const ids = rows.reduce( (acc, currentRow) => {
					cols.forEach( (currentCol) => {
						acc.push(`${currentRow}:${currentCol}`)
					});

					return acc;

				}, [])
	return ids;
};

export function idNextSelection(key, {col, row}) {
	switch (key) {
		case 'Enter' :
		case 'ArrowDown' :
			row++
			break

		case 'Tab' :
		case 'ArrowRight' :
			col++
			break

		case 'ArrowLeft' :
			!col ? col : col--
			break

		case 'ArrowUp' :
			!row ? row : row--
			break
	}

	return `[data-id="${row}:${col}"]`
}