class Dom {
	constructor(selector){
		//#app
		this.$nativeEl = typeof selector === 'string' ? document.querySelector(selector) : selector;
	}

	html(html){
		if(typeof html === 'string'){
			this.$nativeEl.innerHTML = html;
			return this;
		}

		return this.$nativeEl.outerHTML.trim();
	}

	clear(){
		this.html('');
		return this;
	}

	cssText(cssstring){
		this.$nativeEl.style.cssText = cssstring;
		return this;
	}

	on(eventType, callback){
		this.$nativeEl.addEventListener(eventType, callback);
	}

	off(eventType, callback){
		// console.log('this in collback → ', this);
		this.$nativeEl.removeEventListener(eventType, callback);
	}

	// node - это элемент в js
	append(node){
		if(node instanceof Element){
			node = $(node);
		}

		if(Element.prototype.append){
			this.$nativeEl.append(node.$nativeEl);
		} else {
			this.$nativeEl.appendChild(node.$nativeEl);
		}

		return this;
	}

	get[Symbol.toStringTag]() {
		return 'Dom$';
	}
}


export function $(selector){
	return new Dom(selector);
}


$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName);

	if(classes) {
		el.className = classes;
	}

	return $(el);
};