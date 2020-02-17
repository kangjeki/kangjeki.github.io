(function() { 
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
		return this.querySelector(tg);
	}
	Object.prototype.getAll = function(tg) {
		return this.querySelectorAll(tg);
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
		if ( data[0] === "{" || data[0] === "[" ) {
			return true;	
		}
		if ( data[0] !== "{" || data[0] !== "[" ) {
			return false;
		}
		if (data === null) {
			return null;
		}
	}
	this.ajax = {
		GET : (cf, res) => {const xhr = new XMLHttpRequest(); xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					res(xhr.responseText);
				}
				else if (xhr.status == 404) {
					res(false);
				}
			};
			let sn = ""; if (cf.send){sn = "?" + cf.send};
			xhr.open('GET', cf.url + sn, true);
			xhr.send();
		},
		POST : (cf, res) => {
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					res(xhr.responseText);
				}
				else if (xhr.status == 404) {
					res(false);
				};
			};
			xhr.open('POST', cf.url, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(cf.send);
		},
		UPLOAD : (cf, res) => {
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					res(xhr.responseText);
				};
			};
			const form 	= new FormData();
			const input = cf.send;
			const file 	= input.files[0];
			const index = cf.send.getAttribute('name');

			form.append(index, file);

			xhr.open('POST', cf.url, true);
			xhr.send(form);
		}
	}

	Window.prototype.jc_alert = function(txt, mode) {
		let wk = 2000;
		let el = doc.createElement('div');
			el.innerHTML = txt;
			el.style.cssText = `
				margin: auto; padding: 0px;
				position: fixed;
				top: 0; right: 0; left: 0; bottom: 0;
				width: 30%;
				align-items: center;
				border: 1px #ddd solid;
				border-radius: 5px;
				text-align: center;
				overflow: hidden;
				z-index: 55555555;
				max-height: 40px;
				line-height: 40px;
				white-space: nowrap;
				text-overflow: ellipsis;
			`;
		doc.body.appendChild(el);

		if (mode == undefined) {
			el.style.background = "#008000";
			el.style.color 		= "#fff";
			wk = 2000;
		}
		else if (mode == true) {
			el.style.background = "#008000";
			el.style.color 		= "#fff";
			wk = 2000;
		}
		else if (mode == false) {
			el.style.background = "#D31919";
			el.style.color 		= "#fff";
			wk = 3000;
		}

		setTimeout(function() {
			el.remove();
		}, wk);	
	}

	Window.prototype.jc_alertMobile = function(txt, mode) {
		let wk = 2000;
		let el = doc.createElement('div');
			el.innerHTML = txt;
			el.style.cssText = `
				margin: auto; padding: 5px;
				position: fixed;
				top: 0; right: 0; left: 0; bottom: 0;
				width: 65%;
				line-height: 30px;
				max-height: 40px;
				align-items: center;
				border: 1px #ddd solid;
				border-radius: 5px;
				text-align: center;
				overflow: hidden;
				z-index: 55555555;
				white-space: nowrap;
				text-overflow: ellipsis;
			`;
		doc.body.appendChild(el);

		if (mode == undefined) {
			el.style.background = "#008000";
			el.style.color 		= "#fff";
			wk = 2000;
		}
		else if (mode == true) {
			el.style.background = "#008000";
			el.style.color 		= "#fff";
			wk = 2000;
		}
		else if (mode == false) {
			el.style.background = "#D31919";
			el.style.color 		= "#fff";
			wk = 3000;
		}

		setTimeout(function() {
			el.remove();
		}, wk);	
	}
	Window.prototype.jc_alertDialog = function(txt, mode) {
		let wk = 2000;
		let ie = "";
		if( mode == undefined ) { ie = "success" };
		mode == false ? ie = "danger" : ie = "success";
		let fD = doc.createElement('div');
			fD.classList.add('box-dialog');
			fD.setAttribute('alert', ie);

		let iH = window.innerHeight,
			iW = window.innerWidth,
			iY = (iH - 60) / 2,
			iX = (iW - 390) / 2;

			console.log(iX);

		fD.style.cssText = `
			position: fixed;
			z-index: 555555;
			top: ${(iY-10).toString()}px; 
			right: ${iX.toString()}px; 
			left: ${iX.toString()}px; 
			bottom: ${iY.toString()}px;
		`;
		let jns;
		ie == "danger" ? jns = 'times' : jns = 'check';

		let fI = doc.createElement('div');
			fI.classList.add('icon-dialog');
			fI.innerHTML = `<i class="fas fa-${jns}"></i>`;

		let fT = doc.createElement('div');
			fT.classList.add('text-dialog');
			fT.innerHTML = txt;

		fD.appendChild(fI);
		fD.appendChild(fT);
		doc.body.appendChild(fD);

		setTimeout(function() {
			fD.remove();
		}, wk);	
	}
	Window.prototype.jc_import = function(uri, cb) {
		fetch(uri).then(function(r) { 
			r.text().then(function(res) {
				if (typeof cb == "function") { cb(res) }
			}).catch(function(er) { console.log(er) })
		}).catch(function(e) {console.log(e)})
	}
	
	// close modal
	Window.prototype.closeModal = function(targetId) {
		query(targetId).classList.toggle('modal-show');
	}

	Window.prototype.getFullScreen = function(elem) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} 
		else if (elem.mozRequestFullScreen) { /* Firefox */
			elem.mozRequestFullScreen();
		} 
		else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
			elem.webkitRequestFullscreen();
		} 
		else if (elem.msRequestFullscreen) { /* IE/Edge */
			elem.msRequestFullscreen();
		}
	}

	Window.prototype.closeFullScreen = function() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} 
		else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} 
		else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} 
		else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}

	Window.prototype.restring_code = function(tar) {
		let valueRe 	= tar.replace(/&/g, '*a#;')
			.replace(/\?/g, '*b#;')
			.replace(/\./g, '*c#;')
			.replace(/:/g, 	'*d#;')
			.replace(/</g, 	'*e#;')
			.replace(/>/g, 	'*f#;')
			.replace(/%/g, 	'*g#;')
			.replace(/-/g, 	'*h#;')
			.replace(/_/g, 	'*i#;')
			.replace(/\+/g, '*j#;')
			.replace(/=/g, 	'*k#;')
			.replace(/\//g, '*l#;');

		return valueRe;
	}

	Window.prototype.hargaRp = function(harga) {
		let hrg 	= String(harga),
			hrgLen 	= hrg.length,
			fsh 	= hrgLen % 3;

		let hasil;

		if (fsh % 3 !== 0) {
			let strFrs = hrg.slice(0, fsh),
				strEnd = hrg.slice(fsh, hrg.length);
			let reStrEnd = "";
			for (let i = 0; i < strEnd.length; i++) {
				i % 3 === 0 ? reStrEnd += "." + strEnd[i] : reStrEnd += strEnd[i];
			}
			hasil = strFrs + reStrEnd;
		}
		else {
			let reStr_len = "";
			for (let i = 0; i < hrgLen; i++) {
				i % 3 === 0 ? reStr_len += "." + hrg[i] : reStr_len += hrg[i];
			}
			hasil = reStr_len.slice(1, reStr_len.length);
		}

		return "Rp." + hasil + ",-";
	}
		
	Window.prototype.LOG = function(any) {
		console.log(any);
	}
	
	Window.prototype.jc_touchBind = function(target, callback) {
		let noTime 	= 0;
		jcEvent(target, 'touchstart', function() {
			this.invTouch 	= setInterval(function() {
				if ( noTime >= 1 ) {
					if (typeof callback == 'function') {
						callback();
					}
					noTime = 0;
					clearInterval(this.invTouch);
				}
				noTime += 1;
			}, 500);
		});
		jcEvent(target, 'touchend', function() {
			clearInterval(this.invTouch);
		});	
	}

	Object.prototype.parseReporter = function(cb) {
		let docer = newTag('div');
			docer.innerHTML = this;
		let res = docer.querySelector('reporter').innerHTML;
		( JSON.identify(res) == true ) ? cb(res, docer) : cb(false);
	}

	Window.prototype.array_unique = function(array) {
		if ( typeof array == "object" ) {
			return [... new Set(array)];
		}
		else {
			LOG("Error!, typeof not object");
		}
	}

	this.setExpander = function(tg) {
		let heightNode 	= 0,
			node 		= tg.children,
			exAct 		= tg.classList.contains('expanded');
		if (exAct == false) {
			for (let i = 0; i < node.length; i++) {
				heightNode += node[i].offsetHeight;
			}
			tg.setAttribute('style', `height: ${heightNode.toString()}px;`);
			setTimeout( function() {
				tg.classList.add('expanded');
			}, 500);
		}
		else {
			heightNode 			= 0;
			tg.style.cssText 	= `height: ${heightNode.toString()}px;`;
			tg.classList.remove('expanded');
		}
	}

	Window.prototype.formReporter = function(msg) {
		localStorage.setItem("__form_reporter", msg);
	}
	jcEvent(window, 'load', e => {
		let key = "__form_reporter";
		let ls 	= localStorage.getItem(key);
		if ( ls !== null ) {
			let fn = eval(ls);
			localStorage.removeItem(key);
		};
	});

	Object.prototype.existClass = function(cls) {
		return ( this.classList.contains(cls) ) ? true : false;
	}

	Object.prototype.removeClass = function(cls) {
		( this.classList.contains(cls) ) ? this.classList.remove(cls) : LOG('Class Not Exist!');
	}

	Object.prototype.addClass = function(cls) {
		( this.classList.contains(cls) ) ? LOG('Class is Exist!') : this.classList.add(cls);
	}

	Object.prototype.toggleClass = function(cls) {
		this.classList.toggle(cls);
	}

}());