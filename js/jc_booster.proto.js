function BoosterProto() {
	let __confirmDialog = function(cf, cb) {
		let title 	= ( cf.title ) ? cf.title : "Message!",
			message = ( cf.message ) ? cf.message : "Confirm Your Action!",
			type 	= ( cf.type ) ? cf.type : "secondary";

		let fm_opt 	= query("body");
		let fmDl 	= newTag('div');
			fmDl.style.cssText = `
				position: fixed; top:0; right:0; left:0; bottom:0;
				background: rgba(0,0,0,.5);
				z-index: 1140;
			`;

		let dv 		= newTag('div');
			dv.addClass('jcApp-confirm');
			dv.addClass('app-box');
			dv.addClass('animated');
			dv.addClass('zoomIn');
			dv.addClass('faster');
			dv.style.cssText = `
				padding: 0px; background: #fff;
				box-shadow: var(--box-shadow);
				border: 0px solid;
				position: fixed;
				top: 0;
				width: 300px;
				right: 0;
				left: 0;
				overflow: hidden;
				z-index: 1150;
			`;

		let log = `
			<div>
				<div style="padding: 10px">
					<b>${title}</b>
				</div>
				<div class="garis"></div>
				<div style="text-align: center; padding: 10px;">
					${message}
				</div>
				<div class="garis"></div>
				<div style="padding: 10px; background: #f9f9f9">
					<button class="btn btn-${type}" onclick="__setResolve()">Confirm</button>
					<button class="btn btn-out-info" onclick="__setRejected()">Cancle</button>	
				</div>
			</div>
		`;
		dv.innerHTML = log;
		fmDl.appendChild(dv);
		fm_opt.appendChild(fmDl);

		let mg 	= ( ( window.innerHeight - dv.offsetHeight) / 2 );
		dv.style.margin = mg.toString() + "px auto";

		( typeof cb == "function" ) ? cb(fmDl) : cb(false);
	}

	let setWait = function(resolve, rejected) {
		this.__setResolve = function() { resolve() }
		this.__setRejected = function() { rejected() }
	}

	let closeConfirm = function(elem) {
		let anim = ( elem.get('.jcApp-confirm') !== null ) ? elem.get('.jcApp-confirm') : elem;
			anim.removeClass('zoomIn');
			anim.addClass('zoomOut');
		setTimeout( e => { elem.remove() }, 300);	
	}

	JcApp.prototype.confirm = async function(msg, cb) {
		__confirmDialog(msg, elem => {
			new Promise( setWait )
			.then( _ => {
				cb(true);
				closeConfirm(elem);
			})
			.catch( _ => {
				cb(false);
				closeConfirm(elem);
			});	
		});
	}

	JcApp.prototype.alert = function(txt, mode) {
		let wk = 1500,
			wd = ( window.innerWidth < 767.98 ) ? '65%' : "30%";
		let el = newTag('div');
			el.addClass('app-box');
			el.addClass('animated');
			el.addClass('zoomIn');
			el.addClass('faster');
			el.innerHTML = txt;
			el.style.cssText = `
				margin: auto; padding: 0px;
				position: fixed;
				top: 0; right: 0; left: 0; bottom: 0;
				align-items: center;
				width: ${wd};
				border: 0px #ddd solid;
				text-align: center;
				overflow: hidden;
				z-index: 1200;
				max-height: 40px;
				line-height: 40px;
				white-space: nowrap;
				text-overflow: ellipsis;
			`;
		document.body.appendChild(el);

		if (mode == undefined) {
			el.style.background = "#008000";
			el.style.color 		= "#fff";
			wk = 1500;
		}
		else if (mode == true) {
			el.style.background = "#008000";
			el.style.color 		= "#fff";
			wk = 1500;
		}
		else if (mode == false) {
			el.style.background = "#D31919";
			el.style.color 		= "#fff";
			wk = 2000;
		}

		setTimeout(function() {
			el.removeClass('zoomIn');
			el.addClass('zoomOut');
			setTimeout( e => { el.remove();}, 500);
		}, wk);	
	}

	JcApp.prototype.alertDialog = function(txt, mode) {
		let wk = 2000;
		let ie = "";
		if( mode == undefined ) { ie = "success" };
		( mode == false ? ie = "danger" : ie = "success" );
		let fD = newTag('div');
			fD.addClass('box-dialog');
			fD.addClass('app-box')
			fD.setAttribute('alert', ie);

		let iH = window.innerHeight,
			iW = window.innerWidth,
			iY = (iH - 60) / 2,
			iX = (iW - 390) / 2;

		fD.style.cssText = `
			position: fixed;
			margin: auto;
			z-index: 1200;
			top: 0; 
			right: 0;
			left: 0; 
			bottom: 0;
		`;
		let jns = ( (ie == "danger") ? 'times' : 'check' );

		let fI = newTag('div');
			fI.classList.add('icon-dialog');
			fI.innerHTML = `<i class="fas fa-${jns}"></i>`;

		let fT = newTag('div');
			fT.classList.add('text-dialog');
			fT.innerHTML = txt;

		fD.appendChild(fI);
		fD.appendChild(fT);
		document.body.appendChild(fD);

		setTimeout(function() {
			fD.remove();
		}, wk);	
	}

	JcApp.prototype.include = function(uri, cb) {
		fetch(uri).then( r => { 
			r.text()
			.then( res => {
				if (typeof cb == "function") { cb(res) }
			})
			.catch( er => { console.log(er) })
		})
		.catch(e => {console.log(e)});
	}

	JcApp.prototype.closeModal = function(targetId) {
		query(targetId).classList.toggle('modal-show');
	}

	JcApp.prototype.restring_code = function(tar) {
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

	JcApp.prototype.hargaRp = function(harga) {
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

	JcApp.prototype.touchBind = function(target, callback) {
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

	JcApp.prototype.setExpander = function(tg) {
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

	JcApp.prototype.removeCookies = function() {
		let cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			let cookie 	= cookies[i],
				eqPos 	= cookie.indexOf("="),
				name 	= eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}
	}

};
