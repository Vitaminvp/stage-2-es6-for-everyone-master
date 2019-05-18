/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/javascript/app */ "./src/javascript/app.js");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);


new _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#root {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.fighters {\r\n    display: flex;\r\n    min-width: 80%;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex: 1;\r\n    flex-wrap: wrap;\r\n    padding: 0 15px;\r\n}\r\n\r\n.fighter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.fighter:hover {\r\n    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.06);\r\n    cursor: pointer;\r\n}\r\n\r\n.name {\r\n    align-self: center;\r\n    font-size: 21px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.fighter-image {\r\n    height: 260px;\r\n}\r\n\r\n#loading-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 18px;\r\n    background: rgba(255, 255, 255, 0.7);\r\n    visibility: hidden;\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    z-index: 1;\r\n    padding-top: 100px;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0, 0, 0);\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    max-width: 320px;\r\n}\r\n\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\ninput {\r\n    width: 300px;\r\n    font-size: 13px;\r\n    padding: 6px 0 4px 10px;\r\n    border: 1px solid #cecece;\r\n    background: #f6f6f6;\r\n    border-radius: 0;\r\n}\r\n\r\nbutton {\r\n    margin-top: 20px;\r\n    width: 90px;\r\n    height: 28px;\r\n    border: 1px solid #ccc;\r\n    background: #fff;\r\n    color: #666;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 2px #ccc;\r\n}\r\n\r\nbutton:active {\r\n    box-shadow: inset 0 2px 2px #ccc;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: inset 0 0px 2px #9c9c9c;\r\n}\r\n\r\nprogress {\r\n    display: block;\r\n    margin: 5px auto;\r\n    padding: 2px;\r\n    border: 0 none;\r\n    background: #444;\r\n    border-radius: 14px;\r\n}\r\n\r\nprogress.progress-health::-moz-progress-bar {\r\n    border-radius: 12px;\r\n    background: green;\r\n}\r\n\r\nprogress.progress-attack::-moz-progress-bar {\r\n    border-radius: 12px;\r\n    background: red;\r\n}\r\n\r\nprogress.progress-defense::-moz-progress-bar {\r\n    border-radius: 12px;\r\n    background: blue;\r\n}\r\n\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n    progress {\r\n        height: 10px;\r\n    }\r\n}\r\n\r\nprogress::-webkit-progress-bar {\r\n    background: transparent;\r\n}\r\n\r\nprogress.progress-health::-webkit-progress-value {\r\n    border-radius: 12px;\r\n    background: green;\r\n}\r\n\r\nprogress.progress-attack::-webkit-progress-value {\r\n    border-radius: 12px;\r\n    background: red;\r\n}\r\n\r\nprogress.progress-defense::-webkit-progress-value {\r\n    border-radius: 12px;\r\n    background: blue;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.rotate {\r\n    transform: rotateY(180deg);\r\n}\r\n.defence {\r\n    background-color: red;\r\n    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));\r\n    background-position: center;\r\n    -webkit-filter: blur(3px);\r\n    -moz-filter: blur(3px);\r\n    -o-filter: blur(3px);\r\n    -ms-filter: blur(3px);\r\n    filter: blur(3px);\r\n    filter: blur(3px);\r\n}\r\n.attackLeft{\r\n    position: relative;\r\n    transform: scale(1.2)  translateX(-60vw);\r\n}\r\n.attackRight{\r\n    position: relative;\r\n    transform: scale(1.2)  translateX(60vw);\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/javascript/app.js":
/*!*******************************!*\
  !*** ./src/javascript/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fightersView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fightersView */ "./src/javascript/fightersView.js");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/fightersService */ "./src/javascript/services/fightersService.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class App {
  constructor() {
    this.startApp();
  }

  async startApp() {
    try {
      App.loadingElement.style.visibility = 'visible';
      const fighters = await _services_fightersService__WEBPACK_IMPORTED_MODULE_1__["fighterService"].getFighters();
      console.log(fighters);
      const fightersView = new _fightersView__WEBPACK_IMPORTED_MODULE_0__["default"](fighters);
      const fightersElement = fightersView.element;
      App.rootElement.appendChild(fightersElement);
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      App.loadingElement.style.visibility = 'hidden';
    }
  }

}

_defineProperty(App, "rootElement", document.getElementById('root'));

_defineProperty(App, "loadingElement", document.getElementById('loading-overlay'));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/javascript/fighter.js":
/*!***********************************!*\
  !*** ./src/javascript/fighter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/apiHelper */ "./src/javascript/helpers/apiHelper.js");


class Fighter {
  constructor(name, health, attack, defense, progressBar) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.getHitPower = this.getHitPower.bind(this);
    this.getBlockPower = this.getBlockPower.bind(this);
    this.progressBar = progressBar;
  }

  getHitPower() {
    const criticalHitChance = Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["random"])();
    return this.attack * criticalHitChance;
  }

  getBlockPower() {
    const dodgeChance = Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["random"])();
    return this.defense * dodgeChance;
  }

  getHealth() {
    return this.health;
  }

  setHealth(defense) {
    this.health = defense;
  }

  setProgressBar() {
    const {
      health = 0,
      attack = 0,
      defense = 0
    } = this;
    this.progressBar({
      health,
      attack,
      defense
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Fighter);

/***/ }),

/***/ "./src/javascript/fighterView.js":
/*!***************************************!*\
  !*** ./src/javascript/fighterView.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/view.js");


class FighterView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighter, handleClick) {
    super();
    this.createFighter(fighter, handleClick);
    this.createProgressBar = this.createProgressBar.bind(this);
  }

  createFighter(fighter, handleClick) {
    const {
      name,
      source
    } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);
    this.progressElement = this.createElement({
      tagName: "div",
      className: "progress-wrapper"
    });
    this.element = this.createElement({
      tagName: "div",
      className: "fighter"
    });
    this.element.id = fighter._id;
    this.element.append(imageElement, nameElement, this.progressElement);
    this.element.addEventListener("click", event => handleClick(event, fighter, this.createProgressBar), false);
  }

  createName(name) {
    const nameElement = this.createElement({
      tagName: "span",
      className: "name"
    });
    nameElement.innerText = name;
    return nameElement;
  }

  createProgressBar(attributes) {
    const progressWrapper = document.createDocumentFragment();
    Object.keys(attributes).forEach(key => {
      const element = this.createElement({
        tagName: "progress",
        className: `progress-${key}`
      });
      element.value = attributes[key];
      element.max = 100;
      progressWrapper.appendChild(element);
    });
    this.progressElement.innerHTML = "";
    this.progressElement.appendChild(progressWrapper);
  }

  createImage(source) {
    const attributes = {
      src: source
    };
    const imgElement = this.createElement({
      tagName: "img",
      className: "fighter-image",
      attributes
    });
    return imgElement;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FighterView);

/***/ }),

/***/ "./src/javascript/fightersView.js":
/*!****************************************!*\
  !*** ./src/javascript/fightersView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/view.js");
/* harmony import */ var _fighterView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fighterView */ "./src/javascript/fighterView.js");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/fightersService */ "./src/javascript/services/fightersService.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/javascript/modal.js");
/* harmony import */ var _fighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fighter */ "./src/javascript/fighter.js");
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/apiHelper */ "./src/javascript/helpers/apiHelper.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class FightersView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighters) {
    super();

    _defineProperty(this, "fightersDetailsMap", new Map());

    _defineProperty(this, "fightersMap", new Map());

    this.handleFighterClick = this.handleFighterClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.createFighters = this.createFighters.bind(this);
    this.createFighters(fighters, this.handleFighterClick);
  }

  createFighters(fighters, handleFighterClick) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new _fighterView__WEBPACK_IMPORTED_MODULE_1__["default"](fighter, handleFighterClick);
      return fighterView.element;
    });
    this.element = this.createElement({
      tagName: "div",
      className: "fighters"
    });
    this.element.append(...fighterElements);
  }

  async handleFighterClick(event, fighter, progressBar) {
    this.progressBar = progressBar;
    const firstFighterId = fighter._id;

    if (!this.fightersDetailsMap.has(firstFighterId)) {
      const fighterDetails = await _services_fightersService__WEBPACK_IMPORTED_MODULE_2__["fighterService"].getFighterDetails(firstFighterId);
      this.fightersDetailsMap.set(firstFighterId, fighterDetails);
    }

    if (this.fightersMap.size >= 2) {
      const secondFighterId = Array.from(this.fightersMap.keys()).filter(id => +id !== +firstFighterId)[0];
      const firstFighterElement = this.element.querySelector(`[id="${firstFighterId}"]`);
      const secondFighterElement = this.element.querySelector(`[id="${secondFighterId}"]`);
      secondFighterElement.classList.add("defence");
      const coords = firstFighterElement.getBoundingClientRect();

      if (document.documentElement.clientWidth < coords.left + coords.right) {
        firstFighterElement.classList.add("attackLeft");
      } else {
        firstFighterElement.classList.add("attackRight");
      }

      setTimeout(() => {
        firstFighterElement.classList.remove("attackLeft", 'attackRight');
      }, 200);
      setTimeout(() => {
        secondFighterElement.classList.remove("defence");
      }, 100);

      if (this.fightersMap.has(firstFighterId)) {
        const demage = Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_5__["fight"])(this.fightersMap.get(firstFighterId), this.fightersMap.get(secondFighterId));
      }
    } else {
      const modal = new _modal__WEBPACK_IMPORTED_MODULE_3__["default"](this.fightersDetailsMap.get(firstFighterId), this.handleModalClick);
      this.element.appendChild(modal.element);
    }
  }

  handleModalClick(event, fighter) {
    const {
      _id,
      name,
      health,
      attack,
      defense
    } = fighter;
    this.fightersDetailsMap.set(_id, fighter);
    this.progressBar({
      health,
      attack,
      defense
    });
    this.fighter = new _fighter__WEBPACK_IMPORTED_MODULE_4__["default"](name, health, attack, defense, this.progressBar);
    this.fightersMap.set(_id, this.fighter);

    if (this.fightersMap.size >= 2) {
      const fighterElements = this.element.querySelectorAll(".fighter");

      if (fighterElements.length > 2) {
        const fightersArray = Array.from(this.fightersMap.keys());
        const [firstFighterId, secondFighterId] = fightersArray;
        fighterElements.forEach(item => {
          if (+item.id !== +firstFighterId && +item.id !== +secondFighterId) {
            item.classList.add("hidden");
          }
        });

        if (!this.element.querySelector(".rotate")) {
          firstFighterId > secondFighterId ? this.element.querySelector(`[id="${firstFighterId}"] .fighter-image`).classList.add("rotate") : this.element.querySelector(`[id="${secondFighterId}"] .fighter-image`).classList.add("rotate");
        }
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FightersView);

/***/ }),

/***/ "./src/javascript/helpers/apiHelper.js":
/*!*********************************************!*\
  !*** ./src/javascript/helpers/apiHelper.js ***!
  \*********************************************/
/*! exports provided: callApi, random, fight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApi", function() { return callApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fight", function() { return fight; });
const API_URL = "https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/";

function callApi(endpoind, method = "GET") {
  const url = API_URL + endpoind;
  const options = {
    method
  };
  return fetch(url, options).then(response => response.ok ? response.json() : Promise.reject(Error("Failed to load"))).catch(error => {
    throw error;
  });
}

function fight(first, second) {
  const firstFighter = first;
  const secondFighter = second;
  const hitPower = firstFighter.getHitPower();
  const blockPower = secondFighter.getBlockPower();
  const damage = +Math.abs(hitPower - blockPower);
  const healthLeft = secondFighter.getHealth() - damage > 0 ? secondFighter.getHealth() - damage : 0;

  if (healthLeft === 0) {
    alert(`${secondFighter.name} lost!`);
    window.location.reload();
  } else {
    secondFighter.setHealth(healthLeft);
    secondFighter.setProgressBar();
    return healthLeft;
  }
}

const random = () => Math.random() * 2;



/***/ }),

/***/ "./src/javascript/modal.js":
/*!*********************************!*\
  !*** ./src/javascript/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/view.js");


class Modal extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighter, handleClick) {
    super();
    this.createModal(fighter, handleClick);
    this.closeWrapper = this.closeWrapper.bind(this);
  }

  createModal(fighter, handleClick) {
    const {
      _id,
      name,
      health,
      attack,
      defense
    } = fighter;
    const nameElement = this.createName(name);
    const buttonElement = this.createButton('Choose');
    this.element = this.createElement({
      tagName: 'div',
      className: 'modal'
    });
    const modalContent = this.createElement({
      tagName: 'div',
      className: 'modal-content'
    });
    const closeModal = this.createElement({
      tagName: 'div',
      className: 'close'
    });
    closeModal.innerHTML = '&times;';
    const healthElement = this.createInput('Health', _id, health);
    const attackElement = this.createInput('Attack', _id, attack);
    const defenseElement = this.createInput('Defense', _id, defense);
    modalContent.append(closeModal, nameElement, healthElement, attackElement, defenseElement, buttonElement);
    this.element.append(modalContent);
    let buttonListener;
    let closeListener;
    buttonListener = buttonElement.addEventListener('click', event => {
      buttonElement.removeEventListener('click', buttonListener);
      closeModal.removeEventListener('click', closeListener);
      handleClick(event, { ...fighter,
        health: healthElement.input.value,
        attack: attackElement.input.value,
        defense: defenseElement.input.value
      }, false);
      this.closeWrapper();
    });
    closeListener = closeModal.addEventListener('click', event => {
      buttonElement.removeEventListener('click', buttonListener);
      closeModal.removeEventListener('click', closeListener);
      this.closeWrapper(event);
    }, false);
  }

  closeWrapper() {
    if (this.element.parentNode) this.element.parentNode.removeChild(this.element);
  }

  createName(name) {
    const nameElement = this.createElement({
      tagName: 'span',
      className: 'name'
    });
    nameElement.innerText = name;
    return nameElement;
  }

  createInput(name, id, value) {
    const inputAttributes = {
      id,
      type: 'number',
      maxlength: '3'
    };
    const labelAttributes = {
      for: id
    };
    const wrapperElement = this.createElement({
      tagName: 'div',
      className: 'input-wrapper'
    });
    const inputElement = this.createElement({
      tagName: 'input',
      className: 'input-origin',
      inputAttributes
    });
    const labelElement = this.createElement({
      tagName: 'label',
      className: 'input-label',
      labelAttributes
    });
    inputElement.value = value;
    labelElement.innerText = `${name}: `;
    wrapperElement.append(labelElement, inputElement);
    wrapperElement.input = inputElement;
    return wrapperElement;
  }

  createButton(name) {
    const buttonElement = this.createElement({
      tagName: 'button',
      className: 'button'
    });
    buttonElement.innerText = name;
    return buttonElement;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/javascript/services/fightersService.js":
/*!****************************************************!*\
  !*** ./src/javascript/services/fightersService.js ***!
  \****************************************************/
/*! exports provided: fighterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fighterService", function() { return fighterService; });
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiHelper */ "./src/javascript/helpers/apiHelper.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class FighterService {
  async getFighters() {
    try {
      const endpoint = "fighters.json";
      const apiResult = await Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, "GET");
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id) {
    try {
      const endpoint = `details/fighter/${_id}.json`;
      const apiResult = await Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, "GET");
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

}

_defineProperty(FighterService, "modal", document.getElementById("myModal"));

const fighterService = new FighterService();

/***/ }),

/***/ "./src/javascript/view.js":
/*!********************************!*\
  !*** ./src/javascript/view.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class View {
  constructor() {
    _defineProperty(this, "element", void 0);
  }

  createElement({
    tagName,
    className = "",
    attributes = {}
  }) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map