class Dom {
	constructor(selector) {
		//#app
		this.$nativeEl = typeof selector === 'string' ? document.querySelector(selector) : selector;
	}

	html(html) {
		if (typeof html === 'string') {
			this.$nativeEl.innerHTML = html;
			return this;
		}

		return this.$nativeEl.outerHTML.trim();
	}

	clear() {
		this.html('');
		return this;
	}

	cssText(cssstring) {
		this.$nativeEl.style.cssText = cssstring;
		return this;
	}

	on(eventType, callback) {
		this.$nativeEl.addEventListener(eventType, callback);
	}

	off(eventType, callback) {
		// console.log('this in collback → ', this);
		this.$nativeEl.removeEventListener(eventType, callback);
	}

	// node - это элемент в js
	append(node) {
		if (node instanceof Element) {
			node = $(node);
		}

		if (Element.prototype.append) {
			this.$nativeEl.append(node.$nativeEl);
		} else {
			this.$nativeEl.appendChild(node.$nativeEl);
		}

		return this;
	}

	closest(selector) {
		return $(this.$nativeEl.closest(selector));
	}

	// dataset(attr){
	// 	return this.$nativeEl.dataset[attr];
	// }

	get data() {
		return this.$nativeEl.dataset;
	}

	getCoords() {
		return this.$nativeEl.getBoundingClientRect();
	}


	/*
	styleObj = {
		width: '24px',
		height: '42px',
		backgroundColor: 'red',
	}
	*/
	css(styleObj = {}) {
		// устаревший
		// for (let key in styleObj) {
		// 	if(styleObj.hasOwnProperty(key)){
		// 		console.log(`${key} → ${styleObj[key]}`);
		// 	}
		// }

		Object
			.keys(styleObj)
			.forEach( 
				(key) => {this.$nativeEl.style[key] = styleObj[key]});
		
		return this;
	}

	findAllEl(selector) {
		return this.$nativeEl.querySelectorAll(selector);
	}

	get[Symbol.toStringTag]() {
		return 'Dom$';
	}
}


export function $(selector) {
	return new Dom(selector);
}


$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName);

	if (classes) {
		el.className = classes;
	}

	return $(el);
};