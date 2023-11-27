/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    margin: 0;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.hit {\n    background-color: red;\n    color: white;\n}\n.miss {\n    background-color: grey;\n    color: white;\n}\n\n.player-gameBoard-cells, .computer-gameBoard-cells {\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(11, 50px);\n    grid-template-rows: repeat(11, 50px);\n\n\n}\n\n.gameBoard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.gameBoard-cell, .x-coord, .y-coord {\n    display: flex;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    color: black;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.overlay {\n    position: absolute; /* Sit on top of the page content */\n    display: flex; /* Hidden by default */\n    left: 25px;\n    top: 15px;\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.0); /* Black background with opacity */\n    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n    align-items: center;\n}\n\n.computer-overlay{\n    display: none;\n}\n\n.startButton {\n    height: 50px;\n    width: 200px;\n\n}\n\n.hit {\n    background-color: red;\n    color: white;\n}\n\n.dragging {\n    background-color: #000000;\n    color: white;\n}\n\n.ship-selector-container {\n    display: flex;\n    outline: red solid 1px;\n\n    /*flex-direction: column;*/\n}\n\n.ship-cell {\n    background-color: #000000;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n\n}\n\n.topCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 1px 1px 1px;\n}\n\n.topRightCornerCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 4px 1px 1px;\n\n}\n\n.topLeftCornerCell {\n\n    border-color: black grey grey black;\n    border-width: 4px 1px 1px 4px;\n\n}\n\n.leftCell {\n\n    border-color: grey grey grey black;\n    border-width: 1px 1px 1px 4px;\n\n}\n\n.rightCell {\n\n    border-color: grey black grey grey;\n    border-width: 1px 4px 1px 1px;\n\n}\n\n.bottomCell {\n\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}\n\n.bottomLeftCornerCell {\n    border-color: grey grey black black;\n    border-width: 1px 1px 4px 4px;\n\n}\n\n.bottomRightCornerCell {\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,yCAAyC;IACzC,eAAe;IACf,SAAS;IACT,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;;AAGxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;;;AAIA;IACI,kBAAkB,EAAE,mCAAmC;IACvD,aAAa,EAAE,sBAAsB;IACrC,UAAU;IACV,SAAS;IACT,WAAW,EAAE,sCAAsC;IACnD,YAAY,EAAE,uCAAuC;IACrD,uBAAuB;IACvB,oCAAoC,EAAE,kCAAkC;IACxE,UAAU,EAAE,oFAAoF;IAChG,eAAe,EAAE,2BAA2B;IAC5C,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;;AAEhB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;IACZ,WAAW;;AAEf;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;;IAEI,kCAAkC;IAClC,6BAA6B;;AAEjC;;AAEA;;IAEI,kCAAkC;IAClC,6BAA6B;;AAEjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;IACI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;IACI,mCAAmC;IACnC,6BAA6B;;AAEjC","sourcesContent":["body {\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    margin: 0;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.hit {\n    background-color: red;\n    color: white;\n}\n.miss {\n    background-color: grey;\n    color: white;\n}\n\n.player-gameBoard-cells, .computer-gameBoard-cells {\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(11, 50px);\n    grid-template-rows: repeat(11, 50px);\n\n\n}\n\n.gameBoard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.gameBoard-cell, .x-coord, .y-coord {\n    display: flex;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    color: black;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.overlay {\n    position: absolute; /* Sit on top of the page content */\n    display: flex; /* Hidden by default */\n    left: 25px;\n    top: 15px;\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.0); /* Black background with opacity */\n    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n    align-items: center;\n}\n\n.computer-overlay{\n    display: none;\n}\n\n.startButton {\n    height: 50px;\n    width: 200px;\n\n}\n\n.hit {\n    background-color: red;\n    color: white;\n}\n\n.dragging {\n    background-color: #000000;\n    color: white;\n}\n\n.ship-selector-container {\n    display: flex;\n    outline: red solid 1px;\n\n    /*flex-direction: column;*/\n}\n\n.ship-cell {\n    background-color: #000000;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n\n}\n\n.topCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 1px 1px 1px;\n}\n\n.topRightCornerCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 4px 1px 1px;\n\n}\n\n.topLeftCornerCell {\n\n    border-color: black grey grey black;\n    border-width: 4px 1px 1px 4px;\n\n}\n\n.leftCell {\n\n    border-color: grey grey grey black;\n    border-width: 1px 1px 1px 4px;\n\n}\n\n.rightCell {\n\n    border-color: grey black grey grey;\n    border-width: 1px 4px 1px 1px;\n\n}\n\n.bottomCell {\n\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}\n\n.bottomLeftCornerCell {\n    border-color: grey grey black black;\n    border-width: 1px 1px 4px 4px;\n\n}\n\n.bottomRightCornerCell {\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* module decorator */ module = __webpack_require__.hmd(module);


class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hit = false;
        this.hasShip = false;
        this.ship = null;

    }

    setShip(ship) {
        this.hasShip = true;
        this.ship = ship;

    }

    hasShip() {
        return this.hasShip;
    }

    isHit() {
        return this.hit;
    }


}

class Ship {
    constructor(length, type, owner) {
        this.length = length;
        this.type = type;
        this.isSunk = false;
        this.numOfHits = 0;
        this.owner = owner;
        this.orientation = "Horizontal";
        this.shipCoords = []
    }

    getOrientation() {
        return this.orientation;
    }

    getShipType() {
        return this.type;
    }


    hit() {
        this.numOfHits++;
        if (this.numOfHits === this.length) {
            this.isSunk = true;
            this.owner.remainingShips -= 1
        }

    }

    isSunk() {
        return this.isSunk;
    }

    setOrientation(orientation) {
        this.orientation = orientation;
    }


    getOwner() {
        return this.owner;
    }

    getLength() {
        return this.length
    }

    getShipCoords() {
        return this.shipCoords
    }

    addShipCoords(coords) {
        this.shipCoords.push(coords)
    }
}

class Gameboard {
    constructor() {
        this.nodeList = [];
        this.shipList = [];
    }


    restartGameBoard() {
        this.nodeList = [];
        this.shipList = [];
    }

    createGameboard() {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.addNode(i + 1, alphabet[j]);
            }
        }
    }

    printShipList() {
        this.shipList.forEach((ship) => {
            console.log(`Ship ${ship.getShipType()} at ${JSON.stringify(ship.getShipCoords())} facing ${ship.getOrientation()}`)
        });
    }

    isCellValid(x, y) {
        if (this.findNodeInList(x, y) === null) {
            return false
        } else return this.findNodeInList(x, y).hasShip !== true;
    }

    isOrientationValid(x, y, ship, orientation) {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let alphabetIndex = alphabet.indexOf(y)

        if (orientation === 'Horizontal') {
            for (let i = 0; i < ship.getLength(); i++) {
                if (this.isCellValid(x, y) === false) {

                    return false
                }
                x += 1
            }
            return true
        } else if (orientation === 'Vertical') {
            for (let i = 0; i < ship.getLength(); i++) {
                if (this.isCellValid(x, y) === false) {
                    return false
                }
                alphabetIndex += 1
                y = alphabet[alphabetIndex]
            }
            return true
        }

    }

    setVerticalCoords(x, y, ship) {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let alphabetIndex = alphabet.indexOf(y)
        ship.setOrientation('Vertical')
        for (let i = 0; i < ship.getLength(); i++) {
            ship.addShipCoords({'x': x, 'y': y})
            alphabetIndex += 1
            y = alphabet[alphabetIndex]
        }

        ship.shipCoords.forEach((coord) => {
            this.addShipToNode(coord.x, coord.y, ship)
        });
        this.addShipToList(ship)

    }

    setHorizontalCoords(x, y, ship) {
        ship.setOrientation('Horizontal')

        for (let i = 0; i < ship.getLength(); i++) {
            ship.addShipCoords({'x': x, 'y': y})
            x += 1
        }
        ship.shipCoords.forEach((coord) => {
            this.addShipToNode(coord.x, coord.y, ship)


        });

        this.addShipToList(ship)

    }

    addNode(x, y) {
        let node = new Node(x, y);
        this.nodeList.push(node);
    }


    addShipToNode(x, y, ship) {

        let node = this.findNodeInList(x, y);
        node.setShip(ship);

    }

    addShipToList(ship) {
        this.shipList.push(ship)
    }

    printNodes() {
        this.nodeList.forEach((node) => {
            console.log(`Node (${node.x}, ${node.y})`);
        });
    }

    findNodeInList(x, y) {
        let node = this.nodeList.find((node) => {
            return node.x === x && node.y === y;
        });
        if (node === undefined) {
            return null;
        }

        return node;
    }

    receiveAttack(x, y) {
        let node = this.findNodeInList(x, y);
        let nodeCell = document.getElementById(`${y}${x}`)
        if (node === null) {
            return null;
        }

        if (node.hasShip && node.hit === false) {
            node.hit = true;
            node.ship.hit();
            return "Hit";
        } else if (node.hasShip === false && node.hit === false) {
            node.hit = true;
            return "Miss";
        } else if (node.hit === true) {
            return "Already Hit"

        } else {
            return null;
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
        this.remainingShips = 5;
        this.shipList = [];
    }

    resetPlayer() {
        this.gameboard.restartGameBoard()
        this.shipList = []
        this.remainingShips = 5
    }

    findShip(shipType) {
        return this.shipList.find((ship) => {
            return ship.type === shipType;
        });
    }

    findShipIndex(shipType) {
        return this.shipList.findIndex((ship) => {
            return ship.type === shipType;
        });
    }

    getPlayerName() {
        return this.name;
    }

    printShips() {
        this.shipList.forEach((ship) => {
            console.log(`Ship: ${ship.type}, Length: ${ship.length}, Owner: ${ship.getOwner().getPlayerName()}`);
        });
    }

    getRemainingShips() {
        return this.remainingShips
    }

    attack(x, y, enemyGameboard) {
        console.log(`Player ${this.name} attacked ${x},${y}`)
        return enemyGameboard.receiveAttack(x, y);
    }

    populateShipList() {
        if (this.shipList.length !== 0) {
            this.shipList = []
        } else {
            this.shipList.push(new Ship(5, 'Carrier', this));
            this.shipList.push(new Ship(4, 'Battleship', this));
            this.shipList.push(new Ship(3, 'Destroyer', this));
            this.shipList.push(new Ship(3, 'Submarine', this));
            this.shipList.push(new Ship(2, 'Patrol Boat', this));
        }
    }

    placeShip(x, y, ship, orientation) {
        if (this.gameboard.findNodeInList(x, y) === null) {
            console.log("null")
            return null;
        }
        if (this.gameboard.findNodeInList(x, y).hasShip === true) {
            console.log("has ship")
            return null;
        }

        if (this.gameboard.isOrientationValid(x, y, ship, orientation) && orientation === "Vertical") {

            this.gameboard.setVerticalCoords(x, y, ship)
            let index = this.findShipIndex(ship.type)

            this.shipList.splice(index, 1)
            console.log(`Ship ${ship.getShipType()} placed at ${x},${y}`)


        } else if (this.gameboard.isOrientationValid(x, y, ship, orientation) && orientation === "Horizontal") {
            this.gameboard.setHorizontalCoords(x, y, ship)

            let index = this.findShipIndex(ship.type)

            this.shipList.splice(index, 1)
            console.log(`Ship ${ship.getShipType()} placed at ${x},${y}`)


        } else {
            console.log("Invalid Placement")
            return null;
        }
    }

}


class Computer extends Player {
    constructor(name) {
        super();
        this.name = name;
        this.gameboard = new Gameboard();
        this.coordsAttacked = []
    }

    restartComputer() {
        this.coordsAttacked = []
    }
    createRandomCoords() {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

        let x = Math.floor(Math.random() * 10) + 1;
        let y = alphabet[Math.floor(Math.random() * 10)];

        return [x, y]
    }

    createRandomOrientation() {
        let orientations = ['Horizontal', 'Vertical'];
        return orientations[Math.floor(Math.random() * 2)]
    }

    randomShipPlacement() {
        let randomCoords = this.createRandomCoords()
        let orientation = this.createRandomOrientation()
        let x = randomCoords[0]
        let y = randomCoords[1]

        while (this.shipList.length !== 0) {
            let ship = this.shipList[0]
            this.placeShip(x, y, ship, orientation)
            randomCoords = this.createRandomCoords()
            orientation = this.createRandomOrientation()
            x = randomCoords[0]
            y = randomCoords[1]
        }
        let computerGameboardCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')
        let shipList = this.gameboard.shipList
        shipList.forEach((ship) => {
            ship.shipCoords.forEach((coord) => {
                computerGameboardCells.forEach((cell) => {
                    if (cell.id === `${coord.y}${coord.x}`) {
                        cell.classList.add('ship-cell')
                    }
                });
            })
        });

    }

    randomAttack(playerGameboard) {
        let hitValid = false
        while (hitValid === false) {
            let randomCoords = this.createRandomCoords()
            let x = randomCoords[0]
            let y = randomCoords[1]

            if (playerGameboard.findNodeInList(x, y).isHit() === false && this.coordsAttacked.includes(`${x},${y}`) === false) {
                hitValid = true
                let result = playerGameboard.receiveAttack(x, y)
                this.coordsAttacked.push(`${x},${y}`)
                console.log(`Computer attacked ${x},${y}`)
                let cell = document.getElementById(`${y}${x}`)
                if (result === "Hit") {
                    cell.classList.add('hit')
                    cell.style.backgroundColor = 'red'
                } else if (result === "Miss") {
                    cell.classList.add('miss')
                    cell.style.backgroundColor = 'grey'
                }


            } else {
                console.log(`Computer already attacked ${x},${y}`)
                console.log(playerGameboard.findNodeInList(x, y).isHit())
            }

        }


    }


}

class DomController {

    clearBoard() {
        let playerCells = document.querySelectorAll('.player-gameBoard-cells .gameBoard-cell')
        let computerCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')

        playerCells.forEach((cell) => {
            cell.classList.remove('hit')
            cell.classList.remove('miss')
            cell.classList.remove('ship-cell')
            cell.style.backgroundColor = 'white'
        });
        computerCells.forEach((cell) => {
            cell.classList.remove('hit')
            cell.classList.remove('miss')
            cell.classList.remove('ship-cell')
            cell.style.backgroundColor = 'white'
        });

    }

    addShipToSelector(ship) {

        let shipSelectorContainer = document.querySelector('.ship-selector-container')

        shipSelectorContainer.innerHTML = ''
        shipSelectorContainer.style.flexDirection = 'row'
        ship.setOrientation('Horizontal')

        for (let i = 0; i < ship.length; i++) {
            let shipCell = document.createElement('div')
            shipCell.addEventListener('click', (e) => {
                if (shipSelectorContainer.style.flexDirection === 'column') {
                    shipSelectorContainer.style.flexDirection = 'row'
                    ship.setOrientation('Horizontal')
                } else {
                    shipSelectorContainer.style.flexDirection = 'column'
                    ship.setOrientation('Vertical')
                }
            });
            shipCell.classList.add('ship-cell')
            shipCell.setAttribute('id', `${ship.type}${i}`)
            shipSelectorContainer.appendChild(shipCell)
        }
    }


    //style doesn't apply to second gameboard if player is created first
    createGameboard(user) {

        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let gameboardCellContainer = document.createElement('div')
        if (user === 'player') {
            gameboardCellContainer = document.querySelector('.player-gameBoard-cells')
        } else if (user === 'computer') {
            gameboardCellContainer = document.querySelector('.computer-gameBoard-cells')

        }

        let xCoordCell = document.createElement('div')

        gameboardCellContainer.appendChild(xCoordCell)

        for (let i = 0; i < 10; i++) {
            xCoordCell = document.createElement('div')
            xCoordCell.classList.add('x-coord')
            xCoordCell.innerHTML = (i + 1).toString();
            gameboardCellContainer.appendChild(xCoordCell)
        }

        for (let i = 0; i < 10; i++) {
            let yCoordCell = document.createElement('div')
            yCoordCell.classList.add('y-coord')
            yCoordCell.innerHTML = alphabet[i];
            gameboardCellContainer.appendChild(yCoordCell)

            for (let j = 0; j < 10; j++) {

                let cell = document.createElement('div')
                cell.classList.add('gameBoard-cell')
                cell.setAttribute('id', `${alphabet[i]}${j + 1}`)
                //todo add event listener to each cell

                gameboardCellContainer.appendChild(cell)
            }
        }


        const gameBoardCells = document.querySelectorAll('.gameBoard-cell')
        for (let i = 0; i < 100; i++) {
            if (i === 0) {
                gameBoardCells[i].classList.add('topLeftCornerCell')
            } else if (i < 9 && i > 0) {
                gameBoardCells[i].classList.add('topCell')
            } else if (i === 9) {
                gameBoardCells[i].classList.add('topRightCornerCell')
            } else if (i % 10 === 0 && i < 90) {
                gameBoardCells[i].classList.add('leftCell')
            } else if (i === 19 || i === 29 || i === 39 || i === 49 || i === 59 || i === 69 || i === 79 || i === 89) {
                gameBoardCells[i].classList.add('rightCell')

            } else if (i === 90) {
                gameBoardCells[i].classList.add('bottomLeftCornerCell')
            } else if (i === 91 || i === 92 || i === 93 || i === 94 || i === 95 || i === 96 || i === 97 || i === 98) {
                gameBoardCells[i].classList.add('bottomCell')
            } else if (i > 90 && i < 99) {
                gameBoardCells[i].classList.add('bottomCell')
            } else if (i === 99) {
                gameBoardCells[i].classList.add('bottomRightCornerCell')
            }
        }

        if (user === 'computer') {
            let computerGameBoardCells = document.querySelector('.computer-gameBoard-cells');
            let computerOverlay = document.createElement('div')
            computerOverlay.classList.add('computer-overlay')
            computerOverlay.classList.add('overlay')
            computerGameBoardCells.appendChild(computerOverlay)
        }
    }

    cellDragOver(e) {
        e.preventDefault()
        console.log(e.target.id)
        e.target.classList.add('dragging')
        // e.target.style.backgroundColor = 'red'
    }

    cellDrop(e, player) {
        e.preventDefault()
        e.target.classList.remove('dragging')
        console.log(e.target.id)
        let currentShip = document.querySelector('.ship-selector-container .ship-cell')
        let shipType = currentShip.id.slice(0, -1)
        let ship = player.findShip(shipType);
        console.log(ship)
        let x = parseInt(e.target.id.slice(1))
        console.log(x)
        let y = e.target.id.slice(0, 1)
        console.log(y)
        let orientation = ship.getOrientation()
        player.placeShip(x, y, ship, orientation)

        let shipCoords = ship.getShipCoords()
        shipCoords.forEach((coord) => {
            let cell = document.getElementById(`${coord.y}${coord.x}`)
            cell.classList.add('ship-cell')
        });
        if (player.shipList.length !== 0) {
            this.addShipToSelector(player.shipList[0])
        } else {
            let shipSelectorContainer = document.querySelector('.ship-selector-container')
            //  let computerOverlay = document.querySelector('.computer-overlay')
            // computerOverlay.style.display = 'none'
            shipSelectorContainer.innerHTML = ''
        }


    }

    dragLeave(e) {
        e.preventDefault()
        e.target.classList.remove('dragging')
        //e.target.style.backgroundColor = 'white'
    }

    addPlayerBoardListeners(player) {
        let playerGameboardCells = document.querySelectorAll('.player-gameBoard-cells .gameBoard-cell')
        console.log(playerGameboardCells)
        playerGameboardCells.forEach((cell) => {
            cell.addEventListener('dragover', (e) => {
                this.cellDragOver(e)
            })

            cell.addEventListener('drop', (e) => {
                this.cellDrop(e, player)

            })

            cell.addEventListener('dragleave', (e) => {
                this.dragLeave(e)
            });

        })
    }

    showHit(cell) {
        cell.classList.add('hit')
        cell.style.backgroundColor = 'red'
    }

    showMiss(cell) {
        cell.classList.add('miss')
        cell.style.backgroundColor = 'grey'
    }

    toggleComputerOverlayOn() {
        let computerOverlay = document.querySelector('.computer-overlay')

        computerOverlay.style.display = 'block'


    }
}

class GameLogic {

    constructor() {
        this.player = new Player('Player')
        this.computer = new Computer('Computer')
        this.domController = new DomController()
        this.setResetButton()
    }


    clearAllIntervals() {
        for (let i = 1; i < 99999; i++) {
            window.clearInterval(i);
        }
    }

    restartGame() {
        let playerGameBoardDiv = document.querySelector('.player-gameBoard-cells')
        let computerGameBoardCellsDiv = document.querySelectorAll('.computer-gameBoard-cells')
        let shipSelectorContainer = document.querySelector('.ship-selector-container')
        console.log(computerGameBoardCellsDiv[0])
        shipSelectorContainer.innerHTML = ''
        computerGameBoardCellsDiv[0].innerHTML = ''
        playerGameBoardDiv.innerHTML = ''

        this.clearAllIntervals()
        this.domController.clearBoard()
        this.player.resetPlayer()
        this.computer.resetPlayer()
        this.computer.restartComputer()
        this.gameSetup()
    }

    setResetButton() {
        let resetButton = document.querySelector('.reset-board')
        resetButton.addEventListener('click', () => {
            this.restartGame()
        });

    }

    isGameOver() {
        let gameOverInterval = setInterval(() => {
            if (this.player.getRemainingShips() === 0 || this.computer.getRemainingShips() === 0) {
                clearInterval(gameOverInterval)
                return true
            }
        }, 1000);

    }

    getWinner() {
        if (this.player.getRemainingShips() === 0) {
            return "Computer"
        } else {
            return "Player"

        }

    }

    gameSetup() {


        this.player.populateShipList()
        this.computer.populateShipList()
        this.domController.createGameboard('computer')
        this.domController.createGameboard('player')
        this.player.gameboard.createGameboard()
        this.computer.gameboard.createGameboard()
        this.domController.addPlayerBoardListeners(this.player)
        this.computer.randomShipPlacement()
        this.domController.addShipToSelector(this.player.shipList[0])

        //use this to create  regular game loop
        let gameInterval = setInterval(() => {
            if (this.player.shipList.length === 0 && this.computer.shipList.length === 0) {
                console.log("nextPhase")
                this.addComputerGameBoardListeners()
                clearInterval(gameInterval)
            }
        }, 1000)

        let gameOverInterval = setInterval(() => {
            if (this.player.getRemainingShips() === 0 || this.computer.getRemainingShips() === 0) {
                let winner = this.getWinner()
                alert(`${winner} wins!`)
                this.domController.toggleComputerOverlayOn()
                console.log("game over")
                clearInterval(gameOverInterval)

            }
        }, 1000);


    }

    clickEvent(e) {
        let x = parseInt(e.target.id.slice(1))
        let y = e.target.id.slice(0, 1)
        let result = this.player.attack(x, y, this.computer.gameboard)
        if (result === "Hit") {
            this.domController.showHit(e.target)
            this.computer.randomAttack(this.player.gameboard)
        } else if (result === "Miss") {
            this.domController.showMiss(e.target)
            this.computer.randomAttack(this.player.gameboard)
        } else if (result === "Already Hit") {
            console.log("Already Hit")
        }

    }

    addComputerGameBoardListeners() {
        let computerGameboardCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')
        computerGameboardCells.forEach((cell) => {
            cell.addEventListener('click', (e) => {
                this.clickEvent(e)
            });

        })
    }

    removeComputerListeners() {
        let computerGameboardCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')
        computerGameboardCells.forEach((cell) => {
            cell.removeEventListener('click', (e) => {
                this.clickEvent(e)
            });
            console.log("removed")
        })
    }
}

let gameLogic = new GameLogic()
gameLogic.gameSetup()


//gameLogic.playerShipPlacementPhase()


module
    .exports = {Node, Ship, Gameboard, Player, Computer};





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGF5ZXItZ2FtZUJvYXJkLWNlbGxzLCAuY29tcHV0ZXItZ2FtZUJvYXJkLWNlbGxzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCA1MHB4KTtcXG5cXG5cXG59XFxuXFxuLmdhbWVCb2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5nYW1lQm9hcmQtY2VsbCwgLngtY29vcmQsIC55LWNvb3JkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cXG4gICAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgbGVmdDogMjVweDtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjApOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xcbiAgICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItb3ZlcmxheXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN0YXJ0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuXFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRyYWdnaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2hpcC1zZWxlY3Rvci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdXRsaW5lOiByZWQgc29saWQgMXB4O1xcblxcbiAgICAvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cXG59XFxuXFxuLnNoaXAtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxufVxcblxcbi50b3BDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayBncmV5IGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDFweCAxcHggMXB4O1xcbn1cXG5cXG4udG9wUmlnaHRDb3JuZXJDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayBncmV5IGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDRweCAxcHggMXB4O1xcblxcbn1cXG5cXG4udG9wTGVmdENvcm5lckNlbGwge1xcblxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIGdyZXkgZ3JleSBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHggMXB4IDFweCA0cHg7XFxuXFxufVxcblxcbi5sZWZ0Q2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogZ3JleSBncmV5IGdyZXkgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggNHB4O1xcblxcbn1cXG5cXG4ucmlnaHRDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGJsYWNrIGdyZXkgZ3JleTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggNHB4IDFweCAxcHg7XFxuXFxufVxcblxcbi5ib3R0b21DZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGJsYWNrIGJsYWNrIGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDRweCA0cHggMXB4O1xcblxcbn1cXG5cXG4uYm90dG9tTGVmdENvcm5lckNlbGwge1xcbiAgICBib3JkZXItY29sb3I6IGdyZXkgZ3JleSBibGFjayBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDRweCA0cHg7XFxuXFxufVxcblxcbi5ib3R0b21SaWdodENvcm5lckNlbGwge1xcbiAgICBib3JkZXItY29sb3I6IGdyZXkgYmxhY2sgYmxhY2sgZ3JleTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggNHB4IDRweCAxcHg7XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DOzs7QUFHeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7Ozs7QUFJQTtJQUNJLGtCQUFrQixFQUFFLG1DQUFtQztJQUN2RCxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVyxFQUFFLHNDQUFzQztJQUNuRCxZQUFZLEVBQUUsdUNBQXVDO0lBQ3JELHVCQUF1QjtJQUN2QixvQ0FBb0MsRUFBRSxrQ0FBa0M7SUFDeEUsVUFBVSxFQUFFLG9GQUFvRjtJQUNoRyxlQUFlLEVBQUUsMkJBQTJCO0lBQzVDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLGtDQUFrQztJQUNsQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLGtDQUFrQztJQUNsQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCOztBQUVqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyLWdhbWVCb2FyZC1jZWxscywgLmNvbXB1dGVyLWdhbWVCb2FyZC1jZWxscyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDUwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgNTBweCk7XFxuXFxuXFxufVxcblxcbi5nYW1lQm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2FtZUJvYXJkLWNlbGwsIC54LWNvb3JkLCAueS1jb29yZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIHRvcDogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wKTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cXG4gICAgei1pbmRleDogMjsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyLW92ZXJsYXl7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdGFydEJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcblxcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kcmFnZ2luZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNoaXAtc2VsZWN0b3ItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3V0bGluZTogcmVkIHNvbGlkIDFweDtcXG5cXG4gICAgLypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXFxufVxcblxcbi5zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcblxcbn1cXG5cXG4udG9wQ2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgYmxhY2sgZ3JleSBncmV5O1xcbiAgICBib3JkZXItd2lkdGg6IDRweCAxcHggMXB4IDFweDtcXG59XFxuXFxuLnRvcFJpZ2h0Q29ybmVyQ2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgYmxhY2sgZ3JleSBncmV5O1xcbiAgICBib3JkZXItd2lkdGg6IDRweCA0cHggMXB4IDFweDtcXG5cXG59XFxuXFxuLnRvcExlZnRDb3JuZXJDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayBncmV5IGdyZXkgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDFweCAxcHggNHB4O1xcblxcbn1cXG5cXG4ubGVmdENlbGwge1xcblxcbiAgICBib3JkZXItY29sb3I6IGdyZXkgZ3JleSBncmV5IGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDRweDtcXG5cXG59XFxuXFxuLnJpZ2h0Q2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogZ3JleSBibGFjayBncmV5IGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDRweCAxcHggMXB4O1xcblxcbn1cXG5cXG4uYm90dG9tQ2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogZ3JleSBibGFjayBibGFjayBncmV5O1xcbiAgICBib3JkZXItd2lkdGg6IDFweCA0cHggNHB4IDFweDtcXG5cXG59XFxuXFxuLmJvdHRvbUxlZnRDb3JuZXJDZWxsIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGdyZXkgYmxhY2sgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDFweCA0cHggNHB4O1xcblxcbn1cXG5cXG4uYm90dG9tUmlnaHRDb3JuZXJDZWxsIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGJsYWNrIGJsYWNrIGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDRweCA0cHggMXB4O1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzU2hpcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoaXAgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgc2V0U2hpcChzaGlwKSB7XG4gICAgICAgIHRoaXMuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hpcCA9IHNoaXA7XG5cbiAgICB9XG5cbiAgICBoYXNTaGlwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNTaGlwO1xuICAgIH1cblxuICAgIGlzSGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXQ7XG4gICAgfVxuXG5cbn1cblxuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCB0eXBlLCBvd25lcikge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5udW1PZkhpdHMgPSAwO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBcIkhvcml6b250YWxcIjtcbiAgICAgICAgdGhpcy5zaGlwQ29vcmRzID0gW11cbiAgICB9XG5cbiAgICBnZXRPcmllbnRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb247XG4gICAgfVxuXG4gICAgZ2V0U2hpcFR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxuXG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMubnVtT2ZIaXRzKys7XG4gICAgICAgIGlmICh0aGlzLm51bU9mSGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub3duZXIucmVtYWluaW5nU2hpcHMgLT0gMVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU3VuaztcbiAgICB9XG5cbiAgICBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgfVxuXG5cbiAgICBnZXRPd25lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXI7XG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGhcbiAgICB9XG5cbiAgICBnZXRTaGlwQ29vcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwQ29vcmRzXG4gICAgfVxuXG4gICAgYWRkU2hpcENvb3Jkcyhjb29yZHMpIHtcbiAgICAgICAgdGhpcy5zaGlwQ29vcmRzLnB1c2goY29vcmRzKVxuICAgIH1cbn1cblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub2RlTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnNoaXBMaXN0ID0gW107XG4gICAgfVxuXG5cbiAgICByZXN0YXJ0R2FtZUJvYXJkKCkge1xuICAgICAgICB0aGlzLm5vZGVMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc2hpcExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gICAgICAgIGxldCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGROb2RlKGkgKyAxLCBhbHBoYWJldFtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmludFNoaXBMaXN0KCkge1xuICAgICAgICB0aGlzLnNoaXBMaXN0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaGlwICR7c2hpcC5nZXRTaGlwVHlwZSgpfSBhdCAke0pTT04uc3RyaW5naWZ5KHNoaXAuZ2V0U2hpcENvb3JkcygpKX0gZmFjaW5nICR7c2hpcC5nZXRPcmllbnRhdGlvbigpfWApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzQ2VsbFZhbGlkKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuZmluZE5vZGVJbkxpc3QoeCwgeSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2UgcmV0dXJuIHRoaXMuZmluZE5vZGVJbkxpc3QoeCwgeSkuaGFzU2hpcCAhPT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc09yaWVudGF0aW9uVmFsaWQoeCwgeSwgc2hpcCwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgbGV0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ11cbiAgICAgICAgbGV0IGFscGhhYmV0SW5kZXggPSBhbHBoYWJldC5pbmRleE9mKHkpXG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnSG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDZWxsVmFsaWQoeCwgeSkgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHggKz0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ1ZlcnRpY2FsJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NlbGxWYWxpZCh4LCB5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFscGhhYmV0SW5kZXggKz0gMVxuICAgICAgICAgICAgICAgIHkgPSBhbHBoYWJldFthbHBoYWJldEluZGV4XVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0VmVydGljYWxDb29yZHMoeCwgeSwgc2hpcCkge1xuICAgICAgICBsZXQgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuICAgICAgICBsZXQgYWxwaGFiZXRJbmRleCA9IGFscGhhYmV0LmluZGV4T2YoeSlcbiAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbignVmVydGljYWwnKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgc2hpcC5hZGRTaGlwQ29vcmRzKHsneCc6IHgsICd5JzogeX0pXG4gICAgICAgICAgICBhbHBoYWJldEluZGV4ICs9IDFcbiAgICAgICAgICAgIHkgPSBhbHBoYWJldFthbHBoYWJldEluZGV4XVxuICAgICAgICB9XG5cbiAgICAgICAgc2hpcC5zaGlwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFNoaXBUb05vZGUoY29vcmQueCwgY29vcmQueSwgc2hpcClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkU2hpcFRvTGlzdChzaGlwKVxuXG4gICAgfVxuXG4gICAgc2V0SG9yaXpvbnRhbENvb3Jkcyh4LCB5LCBzaGlwKSB7XG4gICAgICAgIHNoaXAuc2V0T3JpZW50YXRpb24oJ0hvcml6b250YWwnKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICBzaGlwLmFkZFNoaXBDb29yZHMoeyd4JzogeCwgJ3knOiB5fSlcbiAgICAgICAgICAgIHggKz0gMVxuICAgICAgICB9XG4gICAgICAgIHNoaXAuc2hpcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTaGlwVG9Ob2RlKGNvb3JkLngsIGNvb3JkLnksIHNoaXApXG5cblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZFNoaXBUb0xpc3Qoc2hpcClcblxuICAgIH1cblxuICAgIGFkZE5vZGUoeCwgeSkge1xuICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHgsIHkpO1xuICAgICAgICB0aGlzLm5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfVxuXG5cbiAgICBhZGRTaGlwVG9Ob2RlKHgsIHksIHNoaXApIHtcblxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZmluZE5vZGVJbkxpc3QoeCwgeSk7XG4gICAgICAgIG5vZGUuc2V0U2hpcChzaGlwKTtcblxuICAgIH1cblxuICAgIGFkZFNoaXBUb0xpc3Qoc2hpcCkge1xuICAgICAgICB0aGlzLnNoaXBMaXN0LnB1c2goc2hpcClcbiAgICB9XG5cbiAgICBwcmludE5vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVMaXN0LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOb2RlICgke25vZGUueH0sICR7bm9kZS55fSlgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZE5vZGVJbkxpc3QoeCwgeSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZUxpc3QuZmluZCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUueCA9PT0geCAmJiBub2RlLnkgPT09IHk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZmluZE5vZGVJbkxpc3QoeCwgeSk7XG4gICAgICAgIGxldCBub2RlQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3l9JHt4fWApXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmhhc1NoaXAgJiYgbm9kZS5oaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBub2RlLmhpdCA9IHRydWU7XG4gICAgICAgICAgICBub2RlLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gXCJIaXRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLmhhc1NoaXAgPT09IGZhbHNlICYmIG5vZGUuaGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbm9kZS5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIFwiTWlzc1wiO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJBbHJlYWR5IEhpdFwiXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMucmVtYWluaW5nU2hpcHMgPSA1O1xuICAgICAgICB0aGlzLnNoaXBMaXN0ID0gW107XG4gICAgfVxuXG4gICAgcmVzZXRQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnJlc3RhcnRHYW1lQm9hcmQoKVxuICAgICAgICB0aGlzLnNoaXBMaXN0ID0gW11cbiAgICAgICAgdGhpcy5yZW1haW5pbmdTaGlwcyA9IDVcbiAgICB9XG5cbiAgICBmaW5kU2hpcChzaGlwVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwTGlzdC5maW5kKChzaGlwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcC50eXBlID09PSBzaGlwVHlwZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZFNoaXBJbmRleChzaGlwVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwTGlzdC5maW5kSW5kZXgoKHNoaXApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwLnR5cGUgPT09IHNoaXBUeXBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHByaW50U2hpcHMoKSB7XG4gICAgICAgIHRoaXMuc2hpcExpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNoaXA6ICR7c2hpcC50eXBlfSwgTGVuZ3RoOiAke3NoaXAubGVuZ3RofSwgT3duZXI6ICR7c2hpcC5nZXRPd25lcigpLmdldFBsYXllck5hbWUoKX1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UmVtYWluaW5nU2hpcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1NoaXBzXG4gICAgfVxuXG4gICAgYXR0YWNrKHgsIHksIGVuZW15R2FtZWJvYXJkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQbGF5ZXIgJHt0aGlzLm5hbWV9IGF0dGFja2VkICR7eH0sJHt5fWApXG4gICAgICAgIHJldHVybiBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIHBvcHVsYXRlU2hpcExpc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwTGlzdCA9IFtdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBMaXN0LnB1c2gobmV3IFNoaXAoNSwgJ0NhcnJpZXInLCB0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBMaXN0LnB1c2gobmV3IFNoaXAoNCwgJ0JhdHRsZXNoaXAnLCB0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBMaXN0LnB1c2gobmV3IFNoaXAoMywgJ0Rlc3Ryb3llcicsIHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcExpc3QucHVzaChuZXcgU2hpcCgzLCAnU3VibWFyaW5lJywgdGhpcykpO1xuICAgICAgICAgICAgdGhpcy5zaGlwTGlzdC5wdXNoKG5ldyBTaGlwKDIsICdQYXRyb2wgQm9hdCcsIHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlU2hpcCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuZmluZE5vZGVJbkxpc3QoeCwgeSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibnVsbFwiKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLmZpbmROb2RlSW5MaXN0KHgsIHkpLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHNoaXBcIilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLmlzT3JpZW50YXRpb25WYWxpZCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikgJiYgb3JpZW50YXRpb24gPT09IFwiVmVydGljYWxcIikge1xuXG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5zZXRWZXJ0aWNhbENvb3Jkcyh4LCB5LCBzaGlwKVxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maW5kU2hpcEluZGV4KHNoaXAudHlwZSlcblxuICAgICAgICAgICAgdGhpcy5zaGlwTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2hpcCAke3NoaXAuZ2V0U2hpcFR5cGUoKX0gcGxhY2VkIGF0ICR7eH0sJHt5fWApXG5cblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZWJvYXJkLmlzT3JpZW50YXRpb25WYWxpZCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikgJiYgb3JpZW50YXRpb24gPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5zZXRIb3Jpem9udGFsQ29vcmRzKHgsIHksIHNoaXApXG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmluZFNoaXBJbmRleChzaGlwLnR5cGUpXG5cbiAgICAgICAgICAgIHRoaXMuc2hpcExpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYFNoaXAgJHtzaGlwLmdldFNoaXBUeXBlKCl9IHBsYWNlZCBhdCAke3h9LCR7eX1gKVxuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBQbGFjZW1lbnRcIilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMuY29vcmRzQXR0YWNrZWQgPSBbXVxuICAgIH1cblxuICAgIHJlc3RhcnRDb21wdXRlcigpIHtcbiAgICAgICAgdGhpcy5jb29yZHNBdHRhY2tlZCA9IFtdXG4gICAgfVxuICAgIGNyZWF0ZVJhbmRvbUNvb3JkcygpIHtcbiAgICAgICAgbGV0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ11cblxuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICAgIGxldCB5ID0gYWxwaGFiZXRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcblxuICAgICAgICByZXR1cm4gW3gsIHldXG4gICAgfVxuXG4gICAgY3JlYXRlUmFuZG9tT3JpZW50YXRpb24oKSB7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbnMgPSBbJ0hvcml6b250YWwnLCAnVmVydGljYWwnXTtcbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV1cbiAgICB9XG5cbiAgICByYW5kb21TaGlwUGxhY2VtZW50KCkge1xuICAgICAgICBsZXQgcmFuZG9tQ29vcmRzID0gdGhpcy5jcmVhdGVSYW5kb21Db29yZHMoKVxuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSB0aGlzLmNyZWF0ZVJhbmRvbU9yaWVudGF0aW9uKClcbiAgICAgICAgbGV0IHggPSByYW5kb21Db29yZHNbMF1cbiAgICAgICAgbGV0IHkgPSByYW5kb21Db29yZHNbMV1cblxuICAgICAgICB3aGlsZSAodGhpcy5zaGlwTGlzdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGxldCBzaGlwID0gdGhpcy5zaGlwTGlzdFswXVxuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAoeCwgeSwgc2hpcCwgb3JpZW50YXRpb24pXG4gICAgICAgICAgICByYW5kb21Db29yZHMgPSB0aGlzLmNyZWF0ZVJhbmRvbUNvb3JkcygpXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IHRoaXMuY3JlYXRlUmFuZG9tT3JpZW50YXRpb24oKVxuICAgICAgICAgICAgeCA9IHJhbmRvbUNvb3Jkc1swXVxuICAgICAgICAgICAgeSA9IHJhbmRvbUNvb3Jkc1sxXVxuICAgICAgICB9XG4gICAgICAgIGxldCBjb21wdXRlckdhbWVib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdhbWVCb2FyZC1jZWxscyAuZ2FtZUJvYXJkLWNlbGwnKVxuICAgICAgICBsZXQgc2hpcExpc3QgPSB0aGlzLmdhbWVib2FyZC5zaGlwTGlzdFxuICAgICAgICBzaGlwTGlzdC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLnNoaXBDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBjb21wdXRlckdhbWVib2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuaWQgPT09IGAke2Nvb3JkLnl9JHtjb29yZC54fWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1jZWxsJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByYW5kb21BdHRhY2socGxheWVyR2FtZWJvYXJkKSB7XG4gICAgICAgIGxldCBoaXRWYWxpZCA9IGZhbHNlXG4gICAgICAgIHdoaWxlIChoaXRWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCByYW5kb21Db29yZHMgPSB0aGlzLmNyZWF0ZVJhbmRvbUNvb3JkcygpXG4gICAgICAgICAgICBsZXQgeCA9IHJhbmRvbUNvb3Jkc1swXVxuICAgICAgICAgICAgbGV0IHkgPSByYW5kb21Db29yZHNbMV1cblxuICAgICAgICAgICAgaWYgKHBsYXllckdhbWVib2FyZC5maW5kTm9kZUluTGlzdCh4LCB5KS5pc0hpdCgpID09PSBmYWxzZSAmJiB0aGlzLmNvb3Jkc0F0dGFja2VkLmluY2x1ZGVzKGAke3h9LCR7eX1gKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBoaXRWYWxpZCA9IHRydWVcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc0F0dGFja2VkLnB1c2goYCR7eH0sJHt5fWApXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENvbXB1dGVyIGF0dGFja2VkICR7eH0sJHt5fWApXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt5fSR7eH1gKVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENvbXB1dGVyIGFscmVhZHkgYXR0YWNrZWQgJHt4fSwke3l9YClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJHYW1lYm9hcmQuZmluZE5vZGVJbkxpc3QoeCwgeSkuaXNIaXQoKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG59XG5cbmNsYXNzIERvbUNvbnRyb2xsZXIge1xuXG4gICAgY2xlYXJCb2FyZCgpIHtcbiAgICAgICAgbGV0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1nYW1lQm9hcmQtY2VsbHMgLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgbGV0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItZ2FtZUJvYXJkLWNlbGxzIC5nYW1lQm9hcmQtY2VsbCcpXG5cbiAgICAgICAgcGxheWVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzJylcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1jZWxsJylcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLWNlbGwnKVxuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYWRkU2hpcFRvU2VsZWN0b3Ioc2hpcCkge1xuXG4gICAgICAgIGxldCBzaGlwU2VsZWN0b3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1zZWxlY3Rvci1jb250YWluZXInKVxuXG4gICAgICAgIHNoaXBTZWxlY3RvckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBzaGlwU2VsZWN0b3JDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnXG4gICAgICAgIHNoaXAuc2V0T3JpZW50YXRpb24oJ0hvcml6b250YWwnKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHNoaXBDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcFNlbGVjdG9yQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTZWxlY3RvckNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3JvdydcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbignSG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNlbGVjdG9yQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJ1xuICAgICAgICAgICAgICAgICAgICBzaGlwLnNldE9yaWVudGF0aW9uKCdWZXJ0aWNhbCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWNlbGwnKVxuICAgICAgICAgICAgc2hpcENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGAke3NoaXAudHlwZX0ke2l9YClcbiAgICAgICAgICAgIHNoaXBTZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ2VsbClcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy9zdHlsZSBkb2Vzbid0IGFwcGx5IHRvIHNlY29uZCBnYW1lYm9hcmQgaWYgcGxheWVyIGlzIGNyZWF0ZWQgZmlyc3RcbiAgICBjcmVhdGVHYW1lYm9hcmQodXNlcikge1xuXG4gICAgICAgIGxldCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXG4gICAgICAgIGxldCBnYW1lYm9hcmRDZWxsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaWYgKHVzZXIgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmRDZWxsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1nYW1lQm9hcmQtY2VsbHMnKVxuICAgICAgICB9IGVsc2UgaWYgKHVzZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZENlbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItZ2FtZUJvYXJkLWNlbGxzJylcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHhDb29yZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIGdhbWVib2FyZENlbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkQ2VsbClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHhDb29yZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgeENvb3JkQ2VsbC5jbGFzc0xpc3QuYWRkKCd4LWNvb3JkJylcbiAgICAgICAgICAgIHhDb29yZENlbGwuaW5uZXJIVE1MID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgZ2FtZWJvYXJkQ2VsbENvbnRhaW5lci5hcHBlbmRDaGlsZCh4Q29vcmRDZWxsKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgeUNvb3JkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB5Q29vcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ3ktY29vcmQnKVxuICAgICAgICAgICAgeUNvb3JkQ2VsbC5pbm5lckhUTUwgPSBhbHBoYWJldFtpXTtcbiAgICAgICAgICAgIGdhbWVib2FyZENlbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoeUNvb3JkQ2VsbClcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdnYW1lQm9hcmQtY2VsbCcpXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7YWxwaGFiZXRbaV19JHtqICsgMX1gKVxuICAgICAgICAgICAgICAgIC8vdG9kbyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBjZWxsXG5cbiAgICAgICAgICAgICAgICBnYW1lYm9hcmRDZWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGdhbWVCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCd0b3BMZWZ0Q29ybmVyQ2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA5ICYmIGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgndG9wQ2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDkpIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCd0b3BSaWdodENvcm5lckNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpICUgMTAgPT09IDAgJiYgaSA8IDkwKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgnbGVmdENlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAxOSB8fCBpID09PSAyOSB8fCBpID09PSAzOSB8fCBpID09PSA0OSB8fCBpID09PSA1OSB8fCBpID09PSA2OSB8fCBpID09PSA3OSB8fCBpID09PSA4OSkge1xuICAgICAgICAgICAgICAgIGdhbWVCb2FyZENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Q2VsbCcpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gOTApIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCdib3R0b21MZWZ0Q29ybmVyQ2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDkxIHx8IGkgPT09IDkyIHx8IGkgPT09IDkzIHx8IGkgPT09IDk0IHx8IGkgPT09IDk1IHx8IGkgPT09IDk2IHx8IGkgPT09IDk3IHx8IGkgPT09IDk4KSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgnYm90dG9tQ2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiA5MCAmJiBpIDwgOTkpIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCdib3R0b21DZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gOTkpIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCdib3R0b21SaWdodENvcm5lckNlbGwnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgIGxldCBjb21wdXRlckdhbWVCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWdhbWVCb2FyZC1jZWxscycpO1xuICAgICAgICAgICAgbGV0IGNvbXB1dGVyT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjb21wdXRlck92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItb3ZlcmxheScpXG4gICAgICAgICAgICBjb21wdXRlck92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpXG4gICAgICAgICAgICBjb21wdXRlckdhbWVCb2FyZENlbGxzLmFwcGVuZENoaWxkKGNvbXB1dGVyT3ZlcmxheSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNlbGxEcmFnT3ZlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKVxuICAgICAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgIH1cblxuICAgIGNlbGxEcm9wKGUsIHBsYXllcikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKVxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtc2VsZWN0b3ItY29udGFpbmVyIC5zaGlwLWNlbGwnKVxuICAgICAgICBsZXQgc2hpcFR5cGUgPSBjdXJyZW50U2hpcC5pZC5zbGljZSgwLCAtMSlcbiAgICAgICAgbGV0IHNoaXAgPSBwbGF5ZXIuZmluZFNoaXAoc2hpcFR5cGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwKVxuICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNsaWNlKDEpKVxuICAgICAgICBjb25zb2xlLmxvZyh4KVxuICAgICAgICBsZXQgeSA9IGUudGFyZ2V0LmlkLnNsaWNlKDAsIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKHkpXG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IHNoaXAuZ2V0T3JpZW50YXRpb24oKVxuICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKVxuXG4gICAgICAgIGxldCBzaGlwQ29vcmRzID0gc2hpcC5nZXRTaGlwQ29vcmRzKClcbiAgICAgICAgc2hpcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjb29yZC55fSR7Y29vcmQueH1gKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWNlbGwnKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHBsYXllci5zaGlwTGlzdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkU2hpcFRvU2VsZWN0b3IocGxheWVyLnNoaXBMaXN0WzBdKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNoaXBTZWxlY3RvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXNlbGVjdG9yLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAvLyAgbGV0IGNvbXB1dGVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1vdmVybGF5JylcbiAgICAgICAgICAgIC8vIGNvbXB1dGVyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICBzaGlwU2VsZWN0b3JDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBkcmFnTGVhdmUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKVxuICAgICAgICAvL2UudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcbiAgICB9XG5cbiAgICBhZGRQbGF5ZXJCb2FyZExpc3RlbmVycyhwbGF5ZXIpIHtcbiAgICAgICAgbGV0IHBsYXllckdhbWVib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1nYW1lQm9hcmQtY2VsbHMgLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyR2FtZWJvYXJkQ2VsbHMpXG4gICAgICAgIHBsYXllckdhbWVib2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbERyYWdPdmVyKGUpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbERyb3AoZSwgcGxheWVyKVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnTGVhdmUoZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2hvd0hpdChjZWxsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgIH1cblxuICAgIHNob3dNaXNzKGNlbGwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSdcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wdXRlck92ZXJsYXlPbigpIHtcbiAgICAgICAgbGV0IGNvbXB1dGVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1vdmVybGF5JylcblxuICAgICAgICBjb21wdXRlck92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuXG4gICAgfVxufVxuXG5jbGFzcyBHYW1lTG9naWMge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcignUGxheWVyJylcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBDb21wdXRlcignQ29tcHV0ZXInKVxuICAgICAgICB0aGlzLmRvbUNvbnRyb2xsZXIgPSBuZXcgRG9tQ29udHJvbGxlcigpXG4gICAgICAgIHRoaXMuc2V0UmVzZXRCdXR0b24oKVxuICAgIH1cblxuXG4gICAgY2xlYXJBbGxJbnRlcnZhbHMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgOTk5OTk7IGkrKykge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0YXJ0R2FtZSgpIHtcbiAgICAgICAgbGV0IHBsYXllckdhbWVCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZ2FtZUJvYXJkLWNlbGxzJylcbiAgICAgICAgbGV0IGNvbXB1dGVyR2FtZUJvYXJkQ2VsbHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItZ2FtZUJvYXJkLWNlbGxzJylcbiAgICAgICAgbGV0IHNoaXBTZWxlY3RvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXNlbGVjdG9yLWNvbnRhaW5lcicpXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyR2FtZUJvYXJkQ2VsbHNEaXZbMF0pXG4gICAgICAgIHNoaXBTZWxlY3RvckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBjb21wdXRlckdhbWVCb2FyZENlbGxzRGl2WzBdLmlubmVySFRNTCA9ICcnXG4gICAgICAgIHBsYXllckdhbWVCb2FyZERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgIHRoaXMuY2xlYXJBbGxJbnRlcnZhbHMoKVxuICAgICAgICB0aGlzLmRvbUNvbnRyb2xsZXIuY2xlYXJCb2FyZCgpXG4gICAgICAgIHRoaXMucGxheWVyLnJlc2V0UGxheWVyKClcbiAgICAgICAgdGhpcy5jb21wdXRlci5yZXNldFBsYXllcigpXG4gICAgICAgIHRoaXMuY29tcHV0ZXIucmVzdGFydENvbXB1dGVyKClcbiAgICAgICAgdGhpcy5nYW1lU2V0dXAoKVxuICAgIH1cblxuICAgIHNldFJlc2V0QnV0dG9uKCkge1xuICAgICAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYm9hcmQnKVxuICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGlzR2FtZU92ZXIoKSB7XG4gICAgICAgIGxldCBnYW1lT3ZlckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmdldFJlbWFpbmluZ1NoaXBzKCkgPT09IDAgfHwgdGhpcy5jb21wdXRlci5nZXRSZW1haW5pbmdTaGlwcygpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lT3ZlckludGVydmFsKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgfVxuXG4gICAgZ2V0V2lubmVyKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQ29tcHV0ZXJcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiUGxheWVyXCJcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnYW1lU2V0dXAoKSB7XG5cblxuICAgICAgICB0aGlzLnBsYXllci5wb3B1bGF0ZVNoaXBMaXN0KClcbiAgICAgICAgdGhpcy5jb21wdXRlci5wb3B1bGF0ZVNoaXBMaXN0KClcbiAgICAgICAgdGhpcy5kb21Db250cm9sbGVyLmNyZWF0ZUdhbWVib2FyZCgnY29tcHV0ZXInKVxuICAgICAgICB0aGlzLmRvbUNvbnRyb2xsZXIuY3JlYXRlR2FtZWJvYXJkKCdwbGF5ZXInKVxuICAgICAgICB0aGlzLnBsYXllci5nYW1lYm9hcmQuY3JlYXRlR2FtZWJvYXJkKClcbiAgICAgICAgdGhpcy5jb21wdXRlci5nYW1lYm9hcmQuY3JlYXRlR2FtZWJvYXJkKClcbiAgICAgICAgdGhpcy5kb21Db250cm9sbGVyLmFkZFBsYXllckJvYXJkTGlzdGVuZXJzKHRoaXMucGxheWVyKVxuICAgICAgICB0aGlzLmNvbXB1dGVyLnJhbmRvbVNoaXBQbGFjZW1lbnQoKVxuICAgICAgICB0aGlzLmRvbUNvbnRyb2xsZXIuYWRkU2hpcFRvU2VsZWN0b3IodGhpcy5wbGF5ZXIuc2hpcExpc3RbMF0pXG5cbiAgICAgICAgLy91c2UgdGhpcyB0byBjcmVhdGUgIHJlZ3VsYXIgZ2FtZSBsb29wXG4gICAgICAgIGxldCBnYW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc2hpcExpc3QubGVuZ3RoID09PSAwICYmIHRoaXMuY29tcHV0ZXIuc2hpcExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXh0UGhhc2VcIilcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXB1dGVyR2FtZUJvYXJkTGlzdGVuZXJzKClcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGdhbWVJbnRlcnZhbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMClcblxuICAgICAgICBsZXQgZ2FtZU92ZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5nZXRSZW1haW5pbmdTaGlwcygpID09PSAwIHx8IHRoaXMuY29tcHV0ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCB3aW5uZXIgPSB0aGlzLmdldFdpbm5lcigpXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7d2lubmVyfSB3aW5zIWApXG4gICAgICAgICAgICAgICAgdGhpcy5kb21Db250cm9sbGVyLnRvZ2dsZUNvbXB1dGVyT3ZlcmxheU9uKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWUgb3ZlclwiKVxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZU92ZXJJbnRlcnZhbClcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcblxuXG4gICAgfVxuXG4gICAgY2xpY2tFdmVudChlKSB7XG4gICAgICAgIGxldCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuaWQuc2xpY2UoMSkpXG4gICAgICAgIGxldCB5ID0gZS50YXJnZXQuaWQuc2xpY2UoMCwgMSlcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucGxheWVyLmF0dGFjayh4LCB5LCB0aGlzLmNvbXB1dGVyLmdhbWVib2FyZClcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJIaXRcIikge1xuICAgICAgICAgICAgdGhpcy5kb21Db250cm9sbGVyLnNob3dIaXQoZS50YXJnZXQpXG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVyLnJhbmRvbUF0dGFjayh0aGlzLnBsYXllci5nYW1lYm9hcmQpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgdGhpcy5kb21Db250cm9sbGVyLnNob3dNaXNzKGUudGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy5jb21wdXRlci5yYW5kb21BdHRhY2sodGhpcy5wbGF5ZXIuZ2FtZWJvYXJkKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJBbHJlYWR5IEhpdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgSGl0XCIpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFkZENvbXB1dGVyR2FtZUJvYXJkTGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgY29tcHV0ZXJHYW1lYm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lQm9hcmQtY2VsbHMgLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrRXZlbnQoZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVtb3ZlQ29tcHV0ZXJMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBjb21wdXRlckdhbWVib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdhbWVCb2FyZC1jZWxscyAuZ2FtZUJvYXJkLWNlbGwnKVxuICAgICAgICBjb21wdXRlckdhbWVib2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tFdmVudChlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWRcIilcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmxldCBnYW1lTG9naWMgPSBuZXcgR2FtZUxvZ2ljKClcbmdhbWVMb2dpYy5nYW1lU2V0dXAoKVxuXG5cbi8vZ2FtZUxvZ2ljLnBsYXllclNoaXBQbGFjZW1lbnRQaGFzZSgpXG5cblxubW9kdWxlXG4gICAgLmV4cG9ydHMgPSB7Tm9kZSwgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIsIENvbXB1dGVyfTtcblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==