// Pure functions

export function capitalize(string){
	if(typeof string !== 'string'){
		return '';
	}

	return string.charAt(0).toUpperCase() + string.slice(1);
}


export function range(start, end){
	if(start > end){
		return range(end, start);
	} else {
		let colArr = new Array( Math.abs(end - start) + 1 )
			.fill('')
			.map( ( _, index) => start + index );

		return colArr;
	}


}


