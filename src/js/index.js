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
});


// window.scrollTo({
// 	top: 1000,
// 	behavior: "smooth"
// });


excel.render();

// window.artur = {
// 	name: 'Artur',
// 	lastName: 'Pomidirov',
// 	fullName() {
// 		let fullName = `${this.name} ${this.lastName}`;
// 		console.log('fullName → ', fullName);
// 		return fullName;
// 	}
// }

// window.peter = {
// 	name: 'Peter',
// 	lastName: 'Kamenev',
// }


// function decoratorTest(func) {
// 	return function() {
// 		console.log('test decorator');
// 		console.log(this);
// 		// debugger
// 		return func.call(this);
// 	}
// }

// window.artur.fullName = decoratorTest(window.artur.fullName);

// window.user = {
// 	firstName: "Вася",
// 	sayHi() {
// 		console.log(`this.FirstName → ${this.FirstName}`);
// 	}
// }

// setTimeout(() => window.user.sayHi(), 1000);


// window.user = {
// 	sayHi() {
// 		console.log(`Что то пошло не так`);
// 	}
// }


// window.arrtest = new Array(10).fill(5);
// function indexTest(el, index){
// 	return el*index;
// }

// window.mutationArr = window.arrtest.map(indexTest);

