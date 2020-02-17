let JC_Construct = function() {
	if (query("#content") !== null) {
		jcEvent(query("#content"), 'DOMNodeInserted', function(ev) {
			let ctn 			= ev.relatedNode,
				sidebarRight 	= query("#sidebar-right"),
				navRight 		= query("#nav-right");

			if (sidebarRight !== null) {
				navRight.innerHTML = "";
				let scrollID 	= ctn.querySelectorAll(".scroller-id");
				if (scrollID !== null) {
					scrollID.forEach(function(el) {
						let textNode 	= el.innerHTML,
							dvg 		= newTag('div'),
							na 			= newTag('a'),
							txa 		= newText(textNode);

						dvg.classList.add('__groupScrollSwitch');
						na.classList.add("scroll-switch");
						na.classList.add("nav-link");
						na.setAttribute("target-scroll", "#" + el.id);

						na.appendChild(txa);
						dvg.appendChild(na);
						navRight.appendChild(dvg);

						new jc_app(sidebarRight);
					});		
				}
			}
		});	
	}

	queryAll('.code-copy').forEach(function(el) {
		jcEvent(el, 'click', function() {
			let slc 		= (el.parentNode).querySelector('code'),
				elCop 		= document.createElement('textarea');
				elCop.value = slc.innerText.replace(/ /g, '	');
				document.body.appendChild(elCop);
				elCop.select();
			document.execCommand('copy');
			elCop.remove();
			jc_alert('Code Copied', true);
		});
	});
	const hexaToRGB = function(inhex) {
		let hex 	= inhex.toLowerCase();
			hex 	= /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return hex ? {
			r: parseInt(hex[1], 16),
			g: parseInt(hex[2], 16),
			b: parseInt(hex[3], 16)
		} : null;
	}
	const rgbToHex = function(r,g,b) {
		let rh = function(dt) {
			let hex = dt.toString(16);
			return hex.length == 1 ? "0" + hex : hex;
		};
		return "#" + rh(r) + rh(g) + rh(b);
	}

	if (query('#color-reference')) {
		let inColor = query('#input-color');
		jcEvent(inColor, 'change', function() {
			let c = hexaToRGB(inColor.value),
				r = c.r, g = c.g, b = c.b, min= 15;

			query('#preview-gen').querySelectorAll('.col-1').forEach(function(e) {
				e.style.cssText = `height: 20px; margin-right: 1px; padding: 2px; background: rgb(${r}, ${g}, ${b})`;
				r > 255 ? r = 255 : r += min;
				g > 255 ? g = 255 : g += min;
				b > 255 ? b = 255 : b += min;
			});
			console.log(rgbToHex(10, 51, 255));
		});	
		
		let red = function() {
			let r = 150, g = 0, b = 0, min= 15;
			query('#preview-red').querySelectorAll('.col-1').forEach(function(e) {
				e.style.cssText = `height: 45px; margin-right: 1px; background: rgb(${r}, ${g}, ${b})`;
				r > 255 ? r = 255 : r += min;
				g > 255 ? g = 255 : g += min;
				b > 255 ? b = 255 : b += min;
			});	
		}();
		let green = function() {
			let r = 0, g = 150, b = 0, min= 15;
			query('#preview-green').querySelectorAll('.col-1').forEach(function(e) {
				e.style.cssText = `height: 45px; margin-right: 1px; background: rgb(${r}, ${g}, ${b})`;
				r > 255 ? r = 255 : r += min;
				g > 255 ? g = 255 : g += min;
				b > 255 ? b = 255 : b += min;
			});	
		}();
		let blue = function() {
			let r = 0, g = 0, b = 150, min= 15;
			query('#preview-blue').querySelectorAll('.col-1').forEach(function(e) {
				e.style.cssText = `height: 45px; margin-right: 1px; background: rgb(${r}, ${g}, ${b})`;
				r > 255 ? r = 255 : r += min;
				g > 255 ? g = 255 : g += min;
				b > 255 ? b = 255 : b += min;
			});	
		}();
		let ungu = function() {
			let r = 101, g = 50, b = 118, min= 15;
			query('#preview-ungu').querySelectorAll('.col-1').forEach(function(e) {
				e.style.cssText = `height: 45px; margin-right: 1px; background: rgb(${r}, ${g}, ${b})`;
				r > 255 ? r = 255 : r += min;
				g > 255 ? g = 255 : g += min;
				b > 255 ? b = 255 : b += min;
			});	
		}();
		let yellow = function() {
			let r = 220, g = 220, b = 0, min= 15;
			query('#preview-yellow').querySelectorAll('.col-1').forEach(function(e) {
				e.style.cssText = `height: 45px; margin-right: 1px; background: rgb(${r}, ${g}, ${b})`;
				r > 255 ? r = 255 : r += min;
				g > 255 ? g = 255 : g += min;
				b > 255 ? b = 255 : b += min;
			});
		}();
		//--------------------------------------------------------------------------
		let sl_r = 0,
			sl_g = 0,
			sl_b = 0;
		let range_r = query('#range-r'),
			range_g = query('#range-g'),
			range_b = query('#range-b');
		let range_num_r = query('#range-num-r'),
			range_num_g = query('#range-num-g'),
			range_num_b = query('#range-num-b');
		let setPrevRGBHex 	= function(r,g,b) {
			let outHex 		= query("#out-hex"),
				outRgb 		= query("#out-rgb");

			outRgb.value = "rgb" + `(${r}, ${g}, ${b})`;
			outHex.value = rgbToHex(parseInt(r), parseInt(g), parseInt(b));
		}
		let setPrevColor 	= function() {
			let prevColor	= query('#show-preview-color');
				
			prevColor.style.cssText = `background: rgb(${sl_r}, ${sl_g}, ${sl_b})`;
			setPrevRGBHex(sl_r,sl_g,sl_b);
		}

		jcEvent(range_r, 'input', function(e) {
			range_num_r.value 	= e.target.value;
			sl_r				= e.target.value;
			setPrevColor();
		});
		jcEvent(range_g, 'input', function(e) {
			range_num_g.value 	= e.target.value;
			sl_g				= e.target.value;
			setPrevColor();
		});
		jcEvent(range_b, 'input', function(e) {
			range_num_b.value 	= e.target.value;
			sl_b				= e.target.value;
			setPrevColor();
		});
		queryAll('#color-reference .color-preview .col-1').forEach(function(el) {
			jcEvent(el, 'click', function() {
				let bg 	= el.style.background.replace('rgb(','').replace(')','');
				let sg 	= bg.split(',');
				let r 	= sg[0], g = sg[1], b = sg[2];

				setPrevRGBHex(r,g,b);
			})
		});
		queryAll('.copy-color').forEach(function(el) {
			jcEvent(el, 'click', function() {
				let at = el.getAttribute('target-copy'),
					cp = query(at);
				if (cp !== '') {
					cp.select();
					document.execCommand('copy');
				}
			})
		});
	}
}

function activeConstruct() {
	JC_Construct();
}


window.onload = function() {
	let loadPage 	= new XMLHttpRequest();
	loadPage.onload = function() {
		JC_Construct();
	}
	loadPage.open('GET', window.location, true);
	loadPage.send();
};



