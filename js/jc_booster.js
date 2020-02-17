function Booster() {
	const doc 	= document; 
	Window.prototype.query = function(tg) {
		return doc.querySelector(tg); 
	}
	Window.prototype.queryAll = function(tg) {
		return doc.querySelectorAll(tg); 
	}
	Window.prototype.jcEvent = function(el, eventName, callback) {
		el.addEventListener(eventName, function(ev) {
			callback(ev);
		});
	}
	Object.prototype.get = function(tg) {
		return (this).querySelector(tg);
	}
	Object.prototype.getAll = function(tg) {
		return (this).querySelectorAll(tg);
	}
	Window.prototype.newTag = function(el) {
		return doc.createElement(el);
	}
	Window.prototype.newText = function(tx) {
		return doc.createTextNode(tx);
	}
	Window.prototype.refreshPage = function() {
		let loc = window.location;
		window.location.href = loc;
	}
	Window.prototype.backPage = function() {
		window.history.back();
	}
	Window.prototype.forwardPage = function() {
		window.history.forward();
	}
	JSON.identify = function(data) {
		return ( data[0] === "{" || data[0] === "[" ) ? true : false;
	}
	let __ajaxSet = (ajax, response, prg) => {
		const xhr = new XMLHttpRequest(); 
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				response(xhr.responseText, xhr);
			}
			else if ( xhr.status == 404 ) {
				response(false, xhr);
			}
		};
		jcEvent(xhr.upload, 'progress', e => {
			let load 	= e.loaded,
				total 	= e.total;
			let percent = (load / total) * 100;
			prg(Math.floor(percent), e);
		});

		ajax(xhr);
	}
	let __xInit = tg => {
		return ( tg !== null && tg !== false && tg !== undefined ) ? true : false;
	}
	this.ajax = {
		GET : (cf, res, prg) => {
			let xhr = __ajaxSet( xhr => { 
				let sn = ( __xInit(cf.send) ) ? sn = "?" + cf.send : ""; 
				xhr.open('GET', cf.url + sn, true);
				xhr.send();	
			}, (r, ra) => {
				res(r, ra);
			}, (pr, ev) => {
				(typeof prg == "function") ? ( __xInit(prg) ) ? prg(pr, ev) : prg(false, false) : false;
			});
		},
		POST : (cf, res, prg) => {
			__ajaxSet( xhr => {
				xhr.open('POST', cf.url, true);
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.send(cf.send);	
			}, (r, ra) => {
				res(r, ra);
			}, (pr, ev) => {
				(typeof prg == "function") ? ( __xInit(prg) ) ? prg(pr, ev) : prg(false, false) : false;
			});
		},
		UPLOAD : (cf, res, prg) => {
			__ajaxSet( xhr => {
				xhr.open('POST', cf.url, true);
				xhr.send(cf.send);	
			}, (r, ra) => {
				res(r, ra);
			}, (pr, ev) => {
				(typeof prg == "function") ? ( __xInit(prg) ) ? prg(pr, ev) : prg(false, false) : false;
			});
		}
	}

	Window.prototype.getFullScreen = function(elem) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} 
		else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} 
		else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen();
		} 
		else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		}
	}

	Window.prototype.closeFullScreen = function() {
		if (doc.exitFullscreen) {
			doc.exitFullscreen();
		} 
		else if (doc.mozCancelFullScreen) {
			doc.mozCancelFullScreen();
		} 
		else if (doc.webkitExitFullscreen) {
			doc.webkitExitFullscreen();
		} 
		else if (doc.msExitFullscreen) {
			doc.msExitFullscreen();
		}
	}
	
	Window.prototype.LOG = function(any) {
		console.log(any);
	}
	
	Object.prototype.parseReporter = function(cb) {
		let docer = newTag('div');
			docer.innerHTML = (this);
		let res = docer.get('reporter').innerHTML;
		( JSON.identify(res) ) ? cb(res, docer) : cb(false);
	}

	Window.prototype.array_unique = function(array) {
		if ( typeof array == "object" ) {
			return [... new Set(array)];
		}
		else {
			LOG("Error!, typeof not object");
		}
	}

	Window.prototype.formReporter = function(msg) {
		localStorage.setItem("__form_reporter", msg);
	}

	Object.prototype.existClass = function(cls) {
		return ( (this).classList.contains(cls) ) ? true : false;
	}

	Object.prototype.removeClass = function(cls) {
		( (this).classList.contains(cls) ) ? (this).classList.remove(cls) : LOG('Class Not Exist!');
	}

	Object.prototype.addClass = function(cls) {
		( (this).classList.contains(cls) ) ? LOG('Class is Exist!') : (this).classList.add(cls);
	}

	Object.prototype.toggleClass = function(cls) {
		(this).classList.toggle(cls);
	}
};
