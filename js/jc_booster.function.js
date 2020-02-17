function JcApp() {
	this.init 	= function(Doc) {
		let reStrucLayout = function() {
			const 	header 		= Doc.get('.header'),
					sidebar 	= Doc.get('.sidebar'),
					container 	= Doc.get('.container');
			let iW 			 	= window.innerWidth;
			
			if (header !== null) {
				let mode = header.getAttribute('mode');
				if (mode !== null) {
					if (iW >= 767.98) {
						if (mode == 'fixed') {
							let hH = header.clientHeight;
							header.classList.add('header-fixed');
							container.style.cssText = `margin-top: ${hH}px`;
						};
					}
					else {
						container.removeAttribute('style');
					}
				};
			};
			if (sidebar !== null) {
				let mode = sidebar.getAttribute('mode');
				if (mode !== null) {
					if (mode == "fixed") {
						let nv 	= Doc.get('.nav');
						let nvR = Doc.get('.nav-right');
						let hH 	= header.clientHeight;
						if (iW >= 767.98) {
							let	fs = sidebar.parentElement.clientWidth;
							sidebar.classList.add('sidebar-fixed');

							let bA 			= 0;
							let	baSelect 	= sidebar.get('.bar-account');

							if (baSelect !== null) {
								bA = sidebar.get('.bar-account').clientHeight;
								baSelect .style.cssText = `top: ${hH}px; max-width: ${nv.parentElement.clientWidth}px`;
							}
							nv.style.cssText = `top: ${hH + bA}px; max-width: ${nv.parentElement.clientWidth}px;`;

							if (nvR !== null) {
								nvR.style.cssText = `top: ${hH + bA}px; max-width: ${nvR.parentElement.clientWidth}px;`;
							}
						}
						else {
							nv.removeAttribute('style');
							if (nvR !== null) {
								nvR.removeAttribute('style');
							}
						}
					}
				}
			}	
		}
		reStrucLayout();
		jcEvent(window, 'resize', function() {reStrucLayout()});

		this.sidebarToggle = function() {
			Doc.getAll('.sidebar-show').forEach(function(el) {
				el.classList.toggle('sidebar-show');
			})
		}

		Doc.getAll('.btn-sidebar').forEach(function(el) {
			let target = el.getAttribute("expand-target");
			if (target !== null) {
				jcEvent(el, 'click', function() {
					Doc.get(target).classList.toggle('sidebar-show');
				});
			}
		});

		this.navbarToggle = function() {
			Doc.getAll('.navbar-show').forEach(function(el) {
				el.classList.toggle('navbar-show');
			})
		}

		Doc.getAll('.btn-navbar').forEach(function(el) {
			let target = el.getAttribute("expand-target");
			if (target !== null) {
				jcEvent(el, 'click', function() {
					Doc.get(target).classList.toggle('navbar-show');
				});
			}
		})

		let reqFullSC 	= query("#btn-full-sc"),
			exitFullSC 	= query("#btn-exit-full-sc");
		if (exitFullSC !== null) {
			reqFullSC.onclick = function() {
				getFullScreen(query("html"));
				reqFullSC.classList.toggle('hide-btn-full-sc');
				exitFullSC.classList.toggle('hide-btn-full-sc');
			}
			exitFullSC.onclick = function() {
				closeFullScreen();
				reqFullSC.classList.toggle('hide-btn-full-sc');
				exitFullSC.classList.toggle('hide-btn-full-sc');
			}
		}

		let expandRoll = function(groupRoll) {
			let expandAct = Doc.getAll('.expanded');
			if (expandAct !== null) {
				expandAct.forEach(function(el) {
					let roll = el.getAttribute("roll");
					if (roll !== null) {
						if (roll == groupRoll) {
							heightNode 			= 0;
							el.style.cssText 	= `height: ${heightNode.toString()}px;`;
							el.classList.remove('expanded');	
						}
					}
				});
			}
		}

		Doc.getAll('.expand').forEach(function(el) {
			let target 		= el.getAttribute('expand-target'),
				groupRoll 	= el.getAttribute('group-roll');
			if (target !== null) {
				jcEvent(el, 'click', function() {
					let heightNode 	= 0,
						tg 			= Doc.get(target),
						node 		= tg.children,
						exAct 		= tg.classList.contains('expanded');
					if (exAct == false) {
						for (let i = 0; i < node.length; i++) {
							heightNode += node[i].offsetHeight;
						}
						if (groupRoll !== null) {
							expandRoll(groupRoll);
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
				});
			}
		});

		Doc.getAll('.table-striped').forEach(function(el) {
			let row = el.getAll('tr');
			row.forEach(function(elRow, num) {
				if (num % 2 == 0) {
					elRow.style.cssText = 'background: #efefef;';
				}
			});
		});

		Doc.getAll('.tooltips').forEach(function(el, indk) {
			let atb 	= el.attributes;
			let place 	= atb.place.nodeValue,
				tips 	= atb.tips.nodeValue,
				mode 	= atb.mode.nodeValue;

			if (place == null || place == undefined) {
				place = "right";
			}
			if (tips == null || tips == undefined) {
				tips = "tooltips active";
			}
			if (mode == null || mode == undefined) {
				mode = "normal";
			}

			let elem 	= newTag('div'),
				txt 	= newText(tips);

			elem.classList.add('tips-active');
			elem.appendChild(txt);
			elem.classList.add('actTip-' + indk.toString());

			let postTips = function(clX, clY, elem, place, callback) {
				let	elH 	= elem.offsetHeight,
					elW 	= elem.offsetWidth,
					elPd 	= 10;

				let elX, elY;
				if (place == "top") {
					elY = (clY - elH) - elPd;
					elX = clX - (elW/2); 
				}
				else if (place == "right") {
					elY = clY - (elH/2);
					elX = clX + (elPd * 2);
				}
				else if (place == "bottom") {
					elY = (clY + elH);
					elX = clX - (elW/2) + 10; 
				}
				else if (place == "left") {
					elY = clY - (elH/2);
					elX = (clX - elW) - elPd;
				}
				if (typeof callback == "function") {
					callback({x: elX, y: elY});
				}
			}

			jcEvent(el, 'mousemove', function(e) {
				let clY 	= e.clientY,
					clX 	= e.clientX;
				let elX, elY;
				if (Doc.get('.actTip-' + indk.toString()) == null) {
					el.appendChild(elem);

					postTips(clX, clY, elem, place, function(res) {
						elX = res.x; elY = res.y;
					});
					elem.classList.add('tips-'+mode);
					elem.style.cssText = `padding: 5px 10px; top: ${elY}px; left: ${elX}px; z-index:99999999;`;
				}
				else {
					postTips(clX, clY, elem, place, function(res) {
						elX = res.x; elY = res.y;
					});
					elem.style.cssText = `padding: 5px 10px; top: ${elY}px; left: ${elX}px; z-index:99999999;`;
				}
				jcEvent(el, 'mouseleave', function() {
					elem.remove();
				});
			});
		});

		let toggler_hideDropdown = function (drMn) {
			document.body.onclick = function(ev) {
				if (drMn.classList.contains('show') === true) {
					let atbRoll = drMn.getAttribute("roll");
					if (atbRoll !== null) {
						if (atbRoll == "active") {
							drMn.classList.toggle('show');
						}
					}
				}
			}
		}

		Doc.getAll('.dropdown').forEach(function(eldr) {
			let btnTgl 	= eldr.get('.dropdown-toggle'),
				drMn 	= eldr.get('.dropdown-menu'),
				drCls 	= eldr.get('.dropdown-close');

			jcEvent(btnTgl, 'click', function(ev) {
				if (drMn.classList.contains('show') === true) {
					drMn.classList.toggle('show');
				}
				else {
					setTimeout(function() {
						drMn.classList.toggle('show');
					}, 10);
					toggler_hideDropdown(drMn);	
				}
			});
			if (drCls !== null) {
				jcEvent(drCls, 'click', function() {
					drMn.classList.toggle('show');
				});	
			}
		});
		Doc.getAll('.dropright').forEach(function(eldr) {
			let btnTgl 	= eldr.get('.dropdown-toggle'),
				drMn 	= eldr.get('.dropdown-menu'),
				drCls 	= eldr.get('.dropdown-close');

			jcEvent(btnTgl, 'click', function() {
				if (drMn.classList.contains('show') === true) {
					drMn.classList.toggle('show');
				}
				else {
					setTimeout(function() {
						drMn.classList.toggle('show');
					}, 10);
					toggler_hideDropdown(drMn);	
				}
				let cW = btnTgl.clientWidth,
					cH = btnTgl.clientHeight;
				drMn.style.cssText = `top: 0; left: ${cW}px`;
			});
			if (drCls !== null) {
				jcEvent(drCls, 'click', function() {
					drMn.classList.toggle('show');
				});	
			}
		});

		Doc.getAll('.dropleft').forEach(function(eldr) {
			let btnTgl 	= eldr.get('.dropdown-toggle'),
				drMn 	= eldr.get('.dropdown-menu'),
				drCls 	= eldr.get('.dropdown-close');

			jcEvent(btnTgl, 'click', function() {
				if (drMn.classList.contains('show') === true) {
					drMn.classList.toggle('show');
				}
				else {
					setTimeout(function() {
						drMn.classList.toggle('show');
					}, 10);
					toggler_hideDropdown(drMn);	
				}
				let cW = btnTgl.clientWidth,
					cH = btnTgl.clientHeight;
				drMn.style.cssText = `top: 0; right: ${cW}px`;
			});
			if (drCls !== null) {
				jcEvent(drCls, 'click', function() {
					drMn.classList.toggle('show');
				});	
			}
		});

		Doc.getAll('.droptop').forEach(function(eldr) {
			let btnTgl 	= eldr.get('.dropdown-toggle'),
				drMn 	= eldr.get('.dropdown-menu'),
				drCls 	= eldr.get('.dropdown-close');

			jcEvent(btnTgl, 'click', function() {
				if (drMn.classList.contains('show') === true) {
					drMn.classList.toggle('show');
				}
				else {
					setTimeout(function() {
						drMn.classList.toggle('show');
					}, 10);
					toggler_hideDropdown(drMn);	
				}
				let cW = btnTgl.clientWidth,
					cH = btnTgl.clientHeight;
				drMn.style.cssText = `bottom: ${cH}px; left: 0`;
			});
			if (drCls !== null) {
				jcEvent(drCls, 'click', function() {
					drMn.classList.toggle('show');
				});	
			}
		});

		Doc.getAll('.modal-toggle').forEach(function(el) {
			jcEvent(el, 'click', function() {
				let target 	= el.attributes.target.nodeValue,
					modal 	= Doc.get(target),
					modalW 	= modal.getAttribute('modal-width');
				modal.classList.toggle('modal-show');
				modal.get('.modal-block').style.cssText = `max-width: ${modalW}`;	
			});
		});

		// carousel -----------------------------------------------------
		Doc.getAll('.slide-pack').forEach(function(el) {
			let frmImage 		= el.get(".slide-image"),
				nodeListSlide 	= frmImage.getAll("li"),
				imgWd 			= frmImage.getAll("li img"),
				invSlide 		= 0;
				
			if ( el.getAttribute("interval") !== null ) {
				invSlide 	= el.getAttribute("interval");
			}
			else {
				invSlide 	= 5000;
			}

			imgWd.forEach(function(elImg) {
				elImg.style.width =(frmImage.clientWidth).toString() + "px";
			});

			let rollslide = 1;
			setInterval(function() {
				let wd 		= nodeListSlide[rollslide - 1].clientWidth,
					transX 	= wd * rollslide;

				if ( rollslide == nodeListSlide.length ) {
					frmImage.style.cssText = `transform: translateX(${0}px); transition: 0.5s ease-in-out`;
					rollslide = 1;
				}
				else {
					frmImage.style.cssText = `transform: translateX(-${transX}px); transition: 0.5s ease-in-out`;
					rollslide += 1;
				}
				
			}, invSlide);
		});
		
		let getOffset =  function(el) {
			let rect 		= el.getBoundingClientRect(),
				scrollLeft 	= window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop 	= window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		let scroller = function(postElement) {
			window.scroll({
				top 	: postElement.top,
				left 	: 0
			});
		}

		let scrollerUp = function(actPostTop, topEl, navH) {
			let postRoll 	= actPostTop;

			let inv = setInterval(function() {
				postRoll -= 15;
				if ( postRoll <= topEl.top - navH) {
					postRoll = topEl.top - navH;
					clearInterval(inv);
				}
				
				scroller({top: postRoll, left: 0});
			}, 1);
		}

		let scrollerDown = function(actPostTop, topEl, navH) {
			let postRoll 	= actPostTop;

			let inv = setInterval(function() {
				postRoll += 15;
				if ( postRoll >= topEl.top - navH)  {
					postRoll = topEl.top - navH;
					clearInterval(inv);
				}
				scroller({top: postRoll, left: 0});
			}, 1);
		}

		Doc.getAll(".scroll-switch").forEach(function(el) {
			jcEvent(el, 'click', function() {
				let target 		= el.getAttribute('target-scroll'),
					actPostTop 	= window.pageYOffset,
					postRoll 	= actPostTop;
					topEl 		= getOffset( query(target) );
				let fixedNavbar = query('.header-fixed'),
					navH 		= 0;

				if (fixedNavbar !== null) {
					navH 	= fixedNavbar.clientHeight;
				}

				if (actPostTop - navH >= topEl.top) {
					scrollerUp(actPostTop, topEl, navH);
				}

				if (actPostTop - navH <= topEl.top) {
					scrollerDown(actPostTop, topEl, navH);
				}
			});
		});

		let frkey = "__form_reporter", frls = localStorage.getItem(frkey);
		if ( frls !== null ) {
			eval(frls); localStorage.removeItem(frkey);
		};

		Doc.getAll('.spa-model').forEach(function(el) {
			let mode 		= el.getAttribute('mode'),
				uriLoad 	= el.getAttribute('load'),
				inPage 		= el.getAttribute('active-page'),
				inner_id 	= el.getAttribute('inner-id');

			jcEvent(el, 'click', function() {

				if (uriLoad !== null) {
					if (mode !== null) {
						if (mode == "roll-back") {
							let pathURL 	= window.location.href;
								getPath 	= pathURL.split("/");
							uriLoad 		= getPath[getPath.length - 1];
						}

						let	splSn 		= uriLoad.split('?'),
							load 		= splSn[0],
							sendData 	= splSn[1];

						if (mode == "sync") {
							window.location.href = load;
						}
						else {
							ajax.GET({
								url 	: load,
								send 	: sendData
							}, function(res) {
								let innerData = res;
								if ( mode == "roll-back" ) {
									let ndiv = newTag('div');
										ndiv.innerHTML 	= innerData;
									let dataResBack 	= ndiv.get(inner_id).innerHTML;
									innerData 			= `<div class='animated fadeInLeft'>${dataResBack}</div>`;
								}
								let innerTarget = query(inner_id);
									innerTarget.innerHTML = innerData;
								jcApp.init(innerTarget);
								jcApp.sidebarToggle();
							});
						}
					};		
				}
			});
		});

	}


}

window.addEventListener('load', e => {
	Booster(); this.jcApp 	= new JcApp(); BoosterProto(); jcApp.init(e.target); 
	let apps 	= document.createEvent("Event");
		apps.initEvent("readyApps", true, true);
		apps.jcApp 	= jcApp;
	document.dispatchEvent(apps);
});