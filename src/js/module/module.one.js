'use strict';
console.log("I'm modulee.one");
let a;


async function start(){
	let promise = new Promise((resolve) => {
		setTimeout(() => { resolve('Промис сработал') }, 5000);
	});

	let res = await promise;
	console.log(res);
}

start();


