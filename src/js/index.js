'use strict';

import '../css/index.scss';

import DomListener from './core/DomListener';
import Excel from './components/excel/excel';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Formula from './components/formula/Formula';
import Table from './components/table/Table';


const excel = new Excel('#app', {
	components: [Header, Toolbar, Formula, Table],
	// components: [Table],
});


// window.scrollTo({
// 	top: 1000,
// 	behavior: "smooth"
// });


excel.render();

// class SetterTest {
// 	constructor(props) {
// 		this.name = props.name;
// 		// this.greeting = '';
// 	}

// 	get greeting(){
// 		return this.greeting;
// 	}

// 	set greeting(value) {
// 		console.log(`${value} ${this.name}`);
// 		this.greeting = `${value} ${this.name}`;
// 	}
// }


// window.person = new SetterTest({
// 	name: 'Olo',
// });