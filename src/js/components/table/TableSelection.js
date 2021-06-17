'use strict';
import { $ } from '../../core/dom';

export default class TableSelection{
	constructor(selectedClass){
		this.className = selectedClass;
		this.group = [];
		this.current = null;
	}

	// $el instance of DOM === true
	select($el){
		this.clear();
		$el.focusin().addClass(this.className);
		this.current = $el;
		this.group.push($el);
	}

	selectGroup($group = []){
		this.clear();
		this.group = $group;
		this.group.forEach ( $el => $el.addClass(this.className))

	}

	clear(){
		this.group = this.group
			.map( $item => { $item.removaClass(this.className)});

		this.group = [];
	}


}