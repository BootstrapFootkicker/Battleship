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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    margin: 0;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.hit {\n    background-color: red;\n    color: white;\n}\n\n.miss {\n    background-color: grey;\n    color: white;\n}\n\n.player-gameBoard-cells, .computer-gameBoard-cells {\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(11, 50px);\n    grid-template-rows: repeat(11, 50px);\n\n\n}\n\n.gameBoard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 120px;\n\n}\n\n.gameBoard-cell, .x-coord, .y-coord {\n    display: flex;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    color: black;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.overlay {\n    position: absolute; /* Sit on top of the page content */\n    display: flex; /* Hidden by default */\n    left: 25px;\n    top: 15px;\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.0); /* Black background with opacity */\n    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n    align-items: center;\n}\n\n.computer-overlay {\n    display: none;\n}\n\n.startButton {\n    height: 50px;\n    width: 200px;\n\n}\n\n.hit {\n    background-color: red;\n    color: white;\n}\n\n.dragging {\n    background-color: #000000;\n    color: white;\n}\n\n.ship-selector-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: grey solid 1px;\n    /*todo if changed to column change width to 50 percent for centering*/\n\n}\n\n.controls-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    margin-left: -30%;\n    min-width: 15%;\n    gap: 20px;\n\n}\n\n.ship-cell {\n    background-color: #000000;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n\n}\n\n.topCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 1px 1px 1px;\n}\n\n.topRightCornerCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 4px 1px 1px;\n\n}\n\n.topLeftCornerCell {\n\n    border-color: black grey grey black;\n    border-width: 4px 1px 1px 4px;\n\n}\n\n.leftCell {\n\n    border-color: grey grey grey black;\n    border-width: 1px 1px 1px 4px;\n\n}\n\n.rightCell {\n\n    border-color: grey black grey grey;\n    border-width: 1px 4px 1px 1px;\n\n}\n\n.bottomCell {\n\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}\n\n.bottomLeftCornerCell {\n    border-color: grey grey black black;\n    border-width: 1px 1px 4px 4px;\n\n}\n\n.bottomRightCornerCell {\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,yCAAyC;IACzC,eAAe;IACf,SAAS;IACT,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;;AAGxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;;AAGA;IACI,kBAAkB,EAAE,mCAAmC;IACvD,aAAa,EAAE,sBAAsB;IACrC,UAAU;IACV,SAAS;IACT,WAAW,EAAE,sCAAsC;IACnD,YAAY,EAAE,uCAAuC;IACrD,uBAAuB;IACvB,oCAAoC,EAAE,kCAAkC;IACxE,UAAU,EAAE,oFAAoF;IAChG,eAAe,EAAE,2BAA2B;IAC5C,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;;AAEhB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,qEAAqE;;AAEzE;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;IACd,SAAS;;AAEb;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;IACZ,WAAW;;AAEf;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;;IAEI,kCAAkC;IAClC,6BAA6B;;AAEjC;;AAEA;;IAEI,kCAAkC;IAClC,6BAA6B;;AAEjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;IACI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;IACI,mCAAmC;IACnC,6BAA6B;;AAEjC","sourcesContent":["body {\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    margin: 0;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.hit {\n    background-color: red;\n    color: white;\n}\n\n.miss {\n    background-color: grey;\n    color: white;\n}\n\n.player-gameBoard-cells, .computer-gameBoard-cells {\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(11, 50px);\n    grid-template-rows: repeat(11, 50px);\n\n\n}\n\n.gameBoard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 120px;\n\n}\n\n.gameBoard-cell, .x-coord, .y-coord {\n    display: flex;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    color: black;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.overlay {\n    position: absolute; /* Sit on top of the page content */\n    display: flex; /* Hidden by default */\n    left: 25px;\n    top: 15px;\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.0); /* Black background with opacity */\n    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n    align-items: center;\n}\n\n.computer-overlay {\n    display: none;\n}\n\n.startButton {\n    height: 50px;\n    width: 200px;\n\n}\n\n.hit {\n    background-color: red;\n    color: white;\n}\n\n.dragging {\n    background-color: #000000;\n    color: white;\n}\n\n.ship-selector-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: grey solid 1px;\n    /*todo if changed to column change width to 50 percent for centering*/\n\n}\n\n.controls-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    margin-left: -30%;\n    min-width: 15%;\n    gap: 20px;\n\n}\n\n.ship-cell {\n    background-color: #000000;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n\n}\n\n.topCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 1px 1px 1px;\n}\n\n.topRightCornerCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 4px 1px 1px;\n\n}\n\n.topLeftCornerCell {\n\n    border-color: black grey grey black;\n    border-width: 4px 1px 1px 4px;\n\n}\n\n.leftCell {\n\n    border-color: grey grey grey black;\n    border-width: 1px 1px 1px 4px;\n\n}\n\n.rightCell {\n\n    border-color: grey black grey grey;\n    border-width: 1px 4px 1px 1px;\n\n}\n\n.bottomCell {\n\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}\n\n.bottomLeftCornerCell {\n    border-color: grey grey black black;\n    border-width: 1px 1px 4px 4px;\n\n}\n\n.bottomRightCornerCell {\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}"],"sourceRoot":""}]);
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

    randomShipPlacement(user) {
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
        let GameBoardCells
        if (user === 'player') {
            GameBoardCells = document.querySelectorAll('.player-gameBoard-cells .gameBoard-cell')
        } else if (user === 'computer') {
            GameBoardCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')
        }

        // let GameBoardCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')
        let shipList = this.gameboard.shipList
        shipList.forEach((ship) => {
            ship.shipCoords.forEach((coord) => {
                GameBoardCells.forEach((cell) => {
                    if (cell.id === `${coord.y}${coord.x}`) {
                        cell.classList.add('ship-cell')
                    }
                });
            })
        });

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


    clearShipSelector() {
        let shipSelectorContainer = document.querySelector('.ship-selector-container')
        shipSelectorContainer.innerHTML = ''
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
        this.setrandomBoardButton()
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


    setrandomBoardButton() {
        let randomBoardButton = document.querySelector('.random-board')
        randomBoardButton.addEventListener('click', () => {
            this.player.randomShipPlacement('player')
            this.domController.clearShipSelector()
        });
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
        this.computer.randomShipPlacement('computer')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ1ZBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGF5ZXItZ2FtZUJvYXJkLWNlbGxzLCAuY29tcHV0ZXItZ2FtZUJvYXJkLWNlbGxzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCA1MHB4KTtcXG5cXG5cXG59XFxuXFxuLmdhbWVCb2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMjBweDtcXG5cXG59XFxuXFxuLmdhbWVCb2FyZC1jZWxsLCAueC1jb29yZCwgLnktY29vcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBsZWZ0OiAyNXB4O1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMCk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXFxuICAgIHotaW5kZXg6IDI7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wdXRlci1vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN0YXJ0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuXFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRyYWdnaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2hpcC1zZWxlY3Rvci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3V0bGluZTogZ3JleSBzb2xpZCAxcHg7XFxuICAgIC8qdG9kbyBpZiBjaGFuZ2VkIHRvIGNvbHVtbiBjaGFuZ2Ugd2lkdGggdG8gNTAgcGVyY2VudCBmb3IgY2VudGVyaW5nKi9cXG5cXG59XFxuXFxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zMCU7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcblxcbn1cXG5cXG4udG9wQ2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgYmxhY2sgZ3JleSBncmV5O1xcbiAgICBib3JkZXItd2lkdGg6IDRweCAxcHggMXB4IDFweDtcXG59XFxuXFxuLnRvcFJpZ2h0Q29ybmVyQ2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgYmxhY2sgZ3JleSBncmV5O1xcbiAgICBib3JkZXItd2lkdGg6IDRweCA0cHggMXB4IDFweDtcXG5cXG59XFxuXFxuLnRvcExlZnRDb3JuZXJDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayBncmV5IGdyZXkgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDFweCAxcHggNHB4O1xcblxcbn1cXG5cXG4ubGVmdENlbGwge1xcblxcbiAgICBib3JkZXItY29sb3I6IGdyZXkgZ3JleSBncmV5IGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDRweDtcXG5cXG59XFxuXFxuLnJpZ2h0Q2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogZ3JleSBibGFjayBncmV5IGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDRweCAxcHggMXB4O1xcblxcbn1cXG5cXG4uYm90dG9tQ2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogZ3JleSBibGFjayBibGFjayBncmV5O1xcbiAgICBib3JkZXItd2lkdGg6IDFweCA0cHggNHB4IDFweDtcXG5cXG59XFxuXFxuLmJvdHRvbUxlZnRDb3JuZXJDZWxsIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGdyZXkgYmxhY2sgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDFweCA0cHggNHB4O1xcblxcbn1cXG5cXG4uYm90dG9tUmlnaHRDb3JuZXJDZWxsIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGJsYWNrIGJsYWNrIGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDRweCA0cHggMXB4O1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7OztBQUd4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGtCQUFrQixFQUFFLG1DQUFtQztJQUN2RCxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVyxFQUFFLHNDQUFzQztJQUNuRCxZQUFZLEVBQUUsdUNBQXVDO0lBQ3JELHVCQUF1QjtJQUN2QixvQ0FBb0MsRUFBRSxrQ0FBa0M7SUFDeEUsVUFBVSxFQUFFLG9GQUFvRjtJQUNoRyxlQUFlLEVBQUUsMkJBQTJCO0lBQzVDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFFQUFxRTs7QUFFekU7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxTQUFTOztBQUViOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLGtDQUFrQztJQUNsQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLGtDQUFrQztJQUNsQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCOztBQUVqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYXllci1nYW1lQm9hcmQtY2VsbHMsIC5jb21wdXRlci1nYW1lQm9hcmQtY2VsbHMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDUwcHgpO1xcblxcblxcbn1cXG5cXG4uZ2FtZUJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEyMHB4O1xcblxcbn1cXG5cXG4uZ2FtZUJvYXJkLWNlbGwsIC54LWNvb3JkLCAueS1jb29yZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIHRvcDogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wKTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cXG4gICAgei1pbmRleDogMjsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyLW92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RhcnRCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG5cXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZHJhZ2dpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaGlwLXNlbGVjdG9yLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdXRsaW5lOiBncmV5IHNvbGlkIDFweDtcXG4gICAgLyp0b2RvIGlmIGNoYW5nZWQgdG8gY29sdW1uIGNoYW5nZSB3aWR0aCB0byA1MCBwZXJjZW50IGZvciBjZW50ZXJpbmcqL1xcblxcbn1cXG5cXG4uY29udHJvbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tbGVmdDogLTMwJTtcXG4gICAgbWluLXdpZHRoOiAxNSU7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLnNoaXAtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxufVxcblxcbi50b3BDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayBncmV5IGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDFweCAxcHggMXB4O1xcbn1cXG5cXG4udG9wUmlnaHRDb3JuZXJDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayBncmV5IGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDRweCAxcHggMXB4O1xcblxcbn1cXG5cXG4udG9wTGVmdENvcm5lckNlbGwge1xcblxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIGdyZXkgZ3JleSBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHggMXB4IDFweCA0cHg7XFxuXFxufVxcblxcbi5sZWZ0Q2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogZ3JleSBncmV5IGdyZXkgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggNHB4O1xcblxcbn1cXG5cXG4ucmlnaHRDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGJsYWNrIGdyZXkgZ3JleTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggNHB4IDFweCAxcHg7XFxuXFxufVxcblxcbi5ib3R0b21DZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGJsYWNrIGJsYWNrIGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDRweCA0cHggMXB4O1xcblxcbn1cXG5cXG4uYm90dG9tTGVmdENvcm5lckNlbGwge1xcbiAgICBib3JkZXItY29sb3I6IGdyZXkgZ3JleSBibGFjayBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDRweCA0cHg7XFxuXFxufVxcblxcbi5ib3R0b21SaWdodENvcm5lckNlbGwge1xcbiAgICBib3JkZXItY29sb3I6IGdyZXkgYmxhY2sgYmxhY2sgZ3JleTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggNHB4IDRweCAxcHg7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNTaGlwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hpcCA9IG51bGw7XG5cbiAgICB9XG5cbiAgICBzZXRTaGlwKHNoaXApIHtcbiAgICAgICAgdGhpcy5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaGlwID0gc2hpcDtcblxuICAgIH1cblxuICAgIGhhc1NoaXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc1NoaXA7XG4gICAgfVxuXG4gICAgaXNIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdDtcbiAgICB9XG5cblxufVxuXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIHR5cGUsIG93bmVyKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmlzU3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLm51bU9mSGl0cyA9IDA7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgICB0aGlzLnNoaXBDb29yZHMgPSBbXVxuICAgIH1cblxuICAgIGdldE9yaWVudGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBnZXRTaGlwVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9XG5cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5udW1PZkhpdHMrKztcbiAgICAgICAgaWYgKHRoaXMubnVtT2ZIaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vd25lci5yZW1haW5pbmdTaGlwcyAtPSAxXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTdW5rO1xuICAgIH1cblxuICAgIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB9XG5cblxuICAgIGdldE93bmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vd25lcjtcbiAgICB9XG5cbiAgICBnZXRMZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aFxuICAgIH1cblxuICAgIGdldFNoaXBDb29yZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBDb29yZHNcbiAgICB9XG5cbiAgICBhZGRTaGlwQ29vcmRzKGNvb3Jkcykge1xuICAgICAgICB0aGlzLnNoaXBDb29yZHMucHVzaChjb29yZHMpXG4gICAgfVxufVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5vZGVMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc2hpcExpc3QgPSBbXTtcbiAgICB9XG5cblxuICAgIHJlc3RhcnRHYW1lQm9hcmQoKSB7XG4gICAgICAgIHRoaXMubm9kZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zaGlwTGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICAgICAgbGV0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE5vZGUoaSArIDEsIGFscGhhYmV0W2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaW50U2hpcExpc3QoKSB7XG4gICAgICAgIHRoaXMuc2hpcExpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNoaXAgJHtzaGlwLmdldFNoaXBUeXBlKCl9IGF0ICR7SlNPTi5zdHJpbmdpZnkoc2hpcC5nZXRTaGlwQ29vcmRzKCkpfSBmYWNpbmcgJHtzaGlwLmdldE9yaWVudGF0aW9uKCl9YClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNDZWxsVmFsaWQoeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5maW5kTm9kZUluTGlzdCh4LCB5KSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSByZXR1cm4gdGhpcy5maW5kTm9kZUluTGlzdCh4LCB5KS5oYXNTaGlwICE9PSB0cnVlO1xuICAgIH1cblxuICAgIGlzT3JpZW50YXRpb25WYWxpZCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuICAgICAgICBsZXQgYWxwaGFiZXRJbmRleCA9IGFscGhhYmV0LmluZGV4T2YoeSlcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdIb3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NlbGxWYWxpZCh4LCB5KSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCArPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAnVmVydGljYWwnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2VsbFZhbGlkKHgsIHkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxwaGFiZXRJbmRleCArPSAxXG4gICAgICAgICAgICAgICAgeSA9IGFscGhhYmV0W2FscGhhYmV0SW5kZXhdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRWZXJ0aWNhbENvb3Jkcyh4LCB5LCBzaGlwKSB7XG4gICAgICAgIGxldCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXG4gICAgICAgIGxldCBhbHBoYWJldEluZGV4ID0gYWxwaGFiZXQuaW5kZXhPZih5KVxuICAgICAgICBzaGlwLnNldE9yaWVudGF0aW9uKCdWZXJ0aWNhbCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICBzaGlwLmFkZFNoaXBDb29yZHMoeyd4JzogeCwgJ3knOiB5fSlcbiAgICAgICAgICAgIGFscGhhYmV0SW5kZXggKz0gMVxuICAgICAgICAgICAgeSA9IGFscGhhYmV0W2FscGhhYmV0SW5kZXhdXG4gICAgICAgIH1cblxuICAgICAgICBzaGlwLnNoaXBDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkU2hpcFRvTm9kZShjb29yZC54LCBjb29yZC55LCBzaGlwKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRTaGlwVG9MaXN0KHNoaXApXG5cbiAgICB9XG5cbiAgICBzZXRIb3Jpem9udGFsQ29vcmRzKHgsIHksIHNoaXApIHtcbiAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbignSG9yaXpvbnRhbCcpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgIHNoaXAuYWRkU2hpcENvb3Jkcyh7J3gnOiB4LCAneSc6IHl9KVxuICAgICAgICAgICAgeCArPSAxXG4gICAgICAgIH1cbiAgICAgICAgc2hpcC5zaGlwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFNoaXBUb05vZGUoY29vcmQueCwgY29vcmQueSwgc2hpcClcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkU2hpcFRvTGlzdChzaGlwKVxuXG4gICAgfVxuXG4gICAgYWRkTm9kZSh4LCB5KSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IE5vZGUoeCwgeSk7XG4gICAgICAgIHRoaXMubm9kZUxpc3QucHVzaChub2RlKTtcbiAgICB9XG5cblxuICAgIGFkZFNoaXBUb05vZGUoeCwgeSwgc2hpcCkge1xuXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5maW5kTm9kZUluTGlzdCh4LCB5KTtcbiAgICAgICAgbm9kZS5zZXRTaGlwKHNoaXApO1xuXG4gICAgfVxuXG4gICAgYWRkU2hpcFRvTGlzdChzaGlwKSB7XG4gICAgICAgIHRoaXMuc2hpcExpc3QucHVzaChzaGlwKVxuICAgIH1cblxuICAgIHByaW50Tm9kZXMoKSB7XG4gICAgICAgIHRoaXMubm9kZUxpc3QuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE5vZGUgKCR7bm9kZS54fSwgJHtub2RlLnl9KWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kTm9kZUluTGlzdCh4LCB5KSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlTGlzdC5maW5kKChub2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS54ID09PSB4ICYmIG5vZGUueSA9PT0geTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5maW5kTm9kZUluTGlzdCh4LCB5KTtcbiAgICAgICAgbGV0IG5vZGVDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eX0ke3h9YClcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuaGFzU2hpcCAmJiBub2RlLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG5vZGUuaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUuc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBcIkhpdFwiO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuaGFzU2hpcCA9PT0gZmFsc2UgJiYgbm9kZS5oaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBub2RlLmhpdCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gXCJNaXNzXCI7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5oaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkFscmVhZHkgSGl0XCJcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdTaGlwcyA9IDU7XG4gICAgICAgIHRoaXMuc2hpcExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICByZXNldFBsYXllcigpIHtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQucmVzdGFydEdhbWVCb2FyZCgpXG4gICAgICAgIHRoaXMuc2hpcExpc3QgPSBbXVxuICAgICAgICB0aGlzLnJlbWFpbmluZ1NoaXBzID0gNVxuICAgIH1cblxuICAgIGZpbmRTaGlwKHNoaXBUeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBMaXN0LmZpbmQoKHNoaXApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwLnR5cGUgPT09IHNoaXBUeXBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kU2hpcEluZGV4KHNoaXBUeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBMaXN0LmZpbmRJbmRleCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXAudHlwZSA9PT0gc2hpcFR5cGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFBsYXllck5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgcHJpbnRTaGlwcygpIHtcbiAgICAgICAgdGhpcy5zaGlwTGlzdC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2hpcDogJHtzaGlwLnR5cGV9LCBMZW5ndGg6ICR7c2hpcC5sZW5ndGh9LCBPd25lcjogJHtzaGlwLmdldE93bmVyKCkuZ2V0UGxheWVyTmFtZSgpfWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRSZW1haW5pbmdTaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nU2hpcHNcbiAgICB9XG5cbiAgICBhdHRhY2soeCwgeSwgZW5lbXlHYW1lYm9hcmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFBsYXllciAke3RoaXMubmFtZX0gYXR0YWNrZWQgJHt4fSwke3l9YClcbiAgICAgICAgcmV0dXJuIGVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVTaGlwTGlzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcExpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBMaXN0ID0gW11cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcExpc3QucHVzaChuZXcgU2hpcCg1LCAnQ2FycmllcicsIHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcExpc3QucHVzaChuZXcgU2hpcCg0LCAnQmF0dGxlc2hpcCcsIHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcExpc3QucHVzaChuZXcgU2hpcCgzLCAnRGVzdHJveWVyJywgdGhpcykpO1xuICAgICAgICAgICAgdGhpcy5zaGlwTGlzdC5wdXNoKG5ldyBTaGlwKDMsICdTdWJtYXJpbmUnLCB0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBMaXN0LnB1c2gobmV3IFNoaXAoMiwgJ1BhdHJvbCBCb2F0JywgdGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlUmFuZG9tQ29vcmRzKCkge1xuICAgICAgICBsZXQgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgbGV0IHkgPSBhbHBoYWJldFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuXG4gICAgICAgIHJldHVybiBbeCwgeV1cbiAgICB9XG5cbiAgICBjcmVhdGVSYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9ucyA9IFsnSG9yaXpvbnRhbCcsICdWZXJ0aWNhbCddO1xuICAgICAgICByZXR1cm4gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXVxuICAgIH1cblxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQodXNlcikge1xuICAgICAgICBsZXQgcmFuZG9tQ29vcmRzID0gdGhpcy5jcmVhdGVSYW5kb21Db29yZHMoKVxuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSB0aGlzLmNyZWF0ZVJhbmRvbU9yaWVudGF0aW9uKClcbiAgICAgICAgbGV0IHggPSByYW5kb21Db29yZHNbMF1cbiAgICAgICAgbGV0IHkgPSByYW5kb21Db29yZHNbMV1cblxuICAgICAgICB3aGlsZSAodGhpcy5zaGlwTGlzdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGxldCBzaGlwID0gdGhpcy5zaGlwTGlzdFswXVxuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAoeCwgeSwgc2hpcCwgb3JpZW50YXRpb24pXG4gICAgICAgICAgICByYW5kb21Db29yZHMgPSB0aGlzLmNyZWF0ZVJhbmRvbUNvb3JkcygpXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IHRoaXMuY3JlYXRlUmFuZG9tT3JpZW50YXRpb24oKVxuICAgICAgICAgICAgeCA9IHJhbmRvbUNvb3Jkc1swXVxuICAgICAgICAgICAgeSA9IHJhbmRvbUNvb3Jkc1sxXVxuICAgICAgICB9XG4gICAgICAgIGxldCBHYW1lQm9hcmRDZWxsc1xuICAgICAgICBpZiAodXNlciA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgICAgIEdhbWVCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1nYW1lQm9hcmQtY2VsbHMgLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICBHYW1lQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lQm9hcmQtY2VsbHMgLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBHYW1lQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lQm9hcmQtY2VsbHMgLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgbGV0IHNoaXBMaXN0ID0gdGhpcy5nYW1lYm9hcmQuc2hpcExpc3RcbiAgICAgICAgc2hpcExpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5zaGlwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgR2FtZUJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5pZCA9PT0gYCR7Y29vcmQueX0ke2Nvb3JkLnh9YCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWNlbGwnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHBsYWNlU2hpcCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuZmluZE5vZGVJbkxpc3QoeCwgeSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibnVsbFwiKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLmZpbmROb2RlSW5MaXN0KHgsIHkpLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHNoaXBcIilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLmlzT3JpZW50YXRpb25WYWxpZCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikgJiYgb3JpZW50YXRpb24gPT09IFwiVmVydGljYWxcIikge1xuXG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5zZXRWZXJ0aWNhbENvb3Jkcyh4LCB5LCBzaGlwKVxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maW5kU2hpcEluZGV4KHNoaXAudHlwZSlcblxuICAgICAgICAgICAgdGhpcy5zaGlwTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2hpcCAke3NoaXAuZ2V0U2hpcFR5cGUoKX0gcGxhY2VkIGF0ICR7eH0sJHt5fWApXG5cblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZWJvYXJkLmlzT3JpZW50YXRpb25WYWxpZCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikgJiYgb3JpZW50YXRpb24gPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5zZXRIb3Jpem9udGFsQ29vcmRzKHgsIHksIHNoaXApXG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmluZFNoaXBJbmRleChzaGlwLnR5cGUpXG5cbiAgICAgICAgICAgIHRoaXMuc2hpcExpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYFNoaXAgJHtzaGlwLmdldFNoaXBUeXBlKCl9IHBsYWNlZCBhdCAke3h9LCR7eX1gKVxuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBQbGFjZW1lbnRcIilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMuY29vcmRzQXR0YWNrZWQgPSBbXVxuICAgIH1cblxuICAgIHJlc3RhcnRDb21wdXRlcigpIHtcbiAgICAgICAgdGhpcy5jb29yZHNBdHRhY2tlZCA9IFtdXG4gICAgfVxuXG5cbiAgICByYW5kb21BdHRhY2socGxheWVyR2FtZWJvYXJkKSB7XG4gICAgICAgIGxldCBoaXRWYWxpZCA9IGZhbHNlXG4gICAgICAgIHdoaWxlIChoaXRWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCByYW5kb21Db29yZHMgPSB0aGlzLmNyZWF0ZVJhbmRvbUNvb3JkcygpXG4gICAgICAgICAgICBsZXQgeCA9IHJhbmRvbUNvb3Jkc1swXVxuICAgICAgICAgICAgbGV0IHkgPSByYW5kb21Db29yZHNbMV1cblxuICAgICAgICAgICAgaWYgKHBsYXllckdhbWVib2FyZC5maW5kTm9kZUluTGlzdCh4LCB5KS5pc0hpdCgpID09PSBmYWxzZSAmJiB0aGlzLmNvb3Jkc0F0dGFja2VkLmluY2x1ZGVzKGAke3h9LCR7eX1gKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBoaXRWYWxpZCA9IHRydWVcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc0F0dGFja2VkLnB1c2goYCR7eH0sJHt5fWApXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENvbXB1dGVyIGF0dGFja2VkICR7eH0sJHt5fWApXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt5fSR7eH1gKVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENvbXB1dGVyIGFscmVhZHkgYXR0YWNrZWQgJHt4fSwke3l9YClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJHYW1lYm9hcmQuZmluZE5vZGVJbkxpc3QoeCwgeSkuaXNIaXQoKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG59XG5cbmNsYXNzIERvbUNvbnRyb2xsZXIge1xuXG4gICAgY2xlYXJCb2FyZCgpIHtcbiAgICAgICAgbGV0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1nYW1lQm9hcmQtY2VsbHMgLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgbGV0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItZ2FtZUJvYXJkLWNlbGxzIC5nYW1lQm9hcmQtY2VsbCcpXG5cbiAgICAgICAgcGxheWVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzJylcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1jZWxsJylcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLWNlbGwnKVxuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICBjbGVhclNoaXBTZWxlY3RvcigpIHtcbiAgICAgICAgbGV0IHNoaXBTZWxlY3RvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXNlbGVjdG9yLWNvbnRhaW5lcicpXG4gICAgICAgIHNoaXBTZWxlY3RvckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIGFkZFNoaXBUb1NlbGVjdG9yKHNoaXApIHtcblxuICAgICAgICBsZXQgc2hpcFNlbGVjdG9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtc2VsZWN0b3ItY29udGFpbmVyJylcblxuICAgICAgICBzaGlwU2VsZWN0b3JDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgICAgc2hpcFNlbGVjdG9yQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93J1xuICAgICAgICBzaGlwLnNldE9yaWVudGF0aW9uKCdIb3Jpem9udGFsJylcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBzaGlwQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBTZWxlY3RvckNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwU2VsZWN0b3JDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuc2V0T3JpZW50YXRpb24oJ0hvcml6b250YWwnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTZWxlY3RvckNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbidcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbignVmVydGljYWwnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1jZWxsJylcbiAgICAgICAgICAgIHNoaXBDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtzaGlwLnR5cGV9JHtpfWApXG4gICAgICAgICAgICBzaGlwU2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENlbGwpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vc3R5bGUgZG9lc24ndCBhcHBseSB0byBzZWNvbmQgZ2FtZWJvYXJkIGlmIHBsYXllciBpcyBjcmVhdGVkIGZpcnN0XG4gICAgY3JlYXRlR2FtZWJvYXJkKHVzZXIpIHtcblxuICAgICAgICBsZXQgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuICAgICAgICBsZXQgZ2FtZWJvYXJkQ2VsbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGlmICh1c2VyID09PSAncGxheWVyJykge1xuICAgICAgICAgICAgZ2FtZWJvYXJkQ2VsbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZ2FtZUJvYXJkLWNlbGxzJylcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmRDZWxsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWdhbWVCb2FyZC1jZWxscycpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB4Q29vcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICBnYW1lYm9hcmRDZWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZENlbGwpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICB4Q29vcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHhDb29yZENlbGwuY2xhc3NMaXN0LmFkZCgneC1jb29yZCcpXG4gICAgICAgICAgICB4Q29vcmRDZWxsLmlubmVySFRNTCA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGdhbWVib2FyZENlbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkQ2VsbClcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHlDb29yZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgeUNvb3JkQ2VsbC5jbGFzc0xpc3QuYWRkKCd5LWNvb3JkJylcbiAgICAgICAgICAgIHlDb29yZENlbGwuaW5uZXJIVE1MID0gYWxwaGFiZXRbaV07XG4gICAgICAgICAgICBnYW1lYm9hcmRDZWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZENlbGwpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2FtZUJvYXJkLWNlbGwnKVxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGAke2FscGhhYmV0W2ldfSR7aiArIDF9YClcbiAgICAgICAgICAgICAgICAvL3RvZG8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggY2VsbFxuXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkQ2VsbENvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBnYW1lQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lQm9hcmQtY2VsbCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgndG9wTGVmdENvcm5lckNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgOSAmJiBpID4gMCkge1xuICAgICAgICAgICAgICAgIGdhbWVCb2FyZENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ3RvcENlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSA5KSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgndG9wUmlnaHRDb3JuZXJDZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSAlIDEwID09PSAwICYmIGkgPCA5MCkge1xuICAgICAgICAgICAgICAgIGdhbWVCb2FyZENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ2xlZnRDZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMTkgfHwgaSA9PT0gMjkgfHwgaSA9PT0gMzkgfHwgaSA9PT0gNDkgfHwgaSA9PT0gNTkgfHwgaSA9PT0gNjkgfHwgaSA9PT0gNzkgfHwgaSA9PT0gODkpIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCdyaWdodENlbGwnKVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDkwKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgnYm90dG9tTGVmdENvcm5lckNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSA5MSB8fCBpID09PSA5MiB8fCBpID09PSA5MyB8fCBpID09PSA5NCB8fCBpID09PSA5NSB8fCBpID09PSA5NiB8fCBpID09PSA5NyB8fCBpID09PSA5OCkge1xuICAgICAgICAgICAgICAgIGdhbWVCb2FyZENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUNlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gOTAgJiYgaSA8IDk5KSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgnYm90dG9tQ2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDk5KSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgnYm90dG9tUmlnaHRDb3JuZXJDZWxsJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICBsZXQgY29tcHV0ZXJHYW1lQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1nYW1lQm9hcmQtY2VsbHMnKTtcbiAgICAgICAgICAgIGxldCBjb21wdXRlck92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY29tcHV0ZXJPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLW92ZXJsYXknKVxuICAgICAgICAgICAgY29tcHV0ZXJPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKVxuICAgICAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmRDZWxscy5hcHBlbmRDaGlsZChjb21wdXRlck92ZXJsYXkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjZWxsRHJhZ092ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJylcbiAgICAgICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICB9XG5cbiAgICBjZWxsRHJvcChlLCBwbGF5ZXIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJylcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXNlbGVjdG9yLWNvbnRhaW5lciAuc2hpcC1jZWxsJylcbiAgICAgICAgbGV0IHNoaXBUeXBlID0gY3VycmVudFNoaXAuaWQuc2xpY2UoMCwgLTEpXG4gICAgICAgIGxldCBzaGlwID0gcGxheWVyLmZpbmRTaGlwKHNoaXBUeXBlKTtcbiAgICAgICAgY29uc29sZS5sb2coc2hpcClcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChlLnRhcmdldC5pZC5zbGljZSgxKSlcbiAgICAgICAgY29uc29sZS5sb2coeClcbiAgICAgICAgbGV0IHkgPSBlLnRhcmdldC5pZC5zbGljZSgwLCAxKVxuICAgICAgICBjb25zb2xlLmxvZyh5KVxuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBzaGlwLmdldE9yaWVudGF0aW9uKClcbiAgICAgICAgcGxheWVyLnBsYWNlU2hpcCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbilcblxuICAgICAgICBsZXQgc2hpcENvb3JkcyA9IHNoaXAuZ2V0U2hpcENvb3JkcygpXG4gICAgICAgIHNoaXBDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y29vcmQueX0ke2Nvb3JkLnh9YClcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1jZWxsJylcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwbGF5ZXIuc2hpcExpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFNoaXBUb1NlbGVjdG9yKHBsYXllci5zaGlwTGlzdFswXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzaGlwU2VsZWN0b3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1zZWxlY3Rvci1jb250YWluZXInKVxuICAgICAgICAgICAgLy8gIGxldCBjb21wdXRlck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItb3ZlcmxheScpXG4gICAgICAgICAgICAvLyBjb21wdXRlck92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgc2hpcFNlbGVjdG9yQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgZHJhZ0xlYXZlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJylcbiAgICAgICAgLy9lLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXG4gICAgfVxuXG4gICAgYWRkUGxheWVyQm9hcmRMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgICAgIGxldCBwbGF5ZXJHYW1lYm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItZ2FtZUJvYXJkLWNlbGxzIC5nYW1lQm9hcmQtY2VsbCcpXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllckdhbWVib2FyZENlbGxzKVxuICAgICAgICBwbGF5ZXJHYW1lYm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxEcmFnT3ZlcihlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxEcm9wKGUsIHBsYXllcilcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlKGUpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNob3dIaXQoY2VsbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICB9XG5cbiAgICBzaG93TWlzcyhjZWxsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknXG4gICAgfVxuXG4gICAgdG9nZ2xlQ29tcHV0ZXJPdmVybGF5T24oKSB7XG4gICAgICAgIGxldCBjb21wdXRlck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItb3ZlcmxheScpXG5cbiAgICAgICAgY29tcHV0ZXJPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cblxuICAgIH1cbn1cblxuY2xhc3MgR2FtZUxvZ2ljIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicpXG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoJ0NvbXB1dGVyJylcbiAgICAgICAgdGhpcy5kb21Db250cm9sbGVyID0gbmV3IERvbUNvbnRyb2xsZXIoKVxuICAgICAgICB0aGlzLnNldFJlc2V0QnV0dG9uKClcbiAgICAgICAgdGhpcy5zZXRyYW5kb21Cb2FyZEJ1dHRvbigpXG4gICAgfVxuXG5cbiAgICBjbGVhckFsbEludGVydmFscygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA5OTk5OTsgaSsrKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICBsZXQgcGxheWVyR2FtZUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1nYW1lQm9hcmQtY2VsbHMnKVxuICAgICAgICBsZXQgY29tcHV0ZXJHYW1lQm9hcmRDZWxsc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lQm9hcmQtY2VsbHMnKVxuICAgICAgICBsZXQgc2hpcFNlbGVjdG9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtc2VsZWN0b3ItY29udGFpbmVyJylcbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJHYW1lQm9hcmRDZWxsc0RpdlswXSlcbiAgICAgICAgc2hpcFNlbGVjdG9yQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGNvbXB1dGVyR2FtZUJvYXJkQ2VsbHNEaXZbMF0uaW5uZXJIVE1MID0gJydcbiAgICAgICAgcGxheWVyR2FtZUJvYXJkRGl2LmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgdGhpcy5jbGVhckFsbEludGVydmFscygpXG4gICAgICAgIHRoaXMuZG9tQ29udHJvbGxlci5jbGVhckJvYXJkKClcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXRQbGF5ZXIoKVxuICAgICAgICB0aGlzLmNvbXB1dGVyLnJlc2V0UGxheWVyKClcbiAgICAgICAgdGhpcy5jb21wdXRlci5yZXN0YXJ0Q29tcHV0ZXIoKVxuICAgICAgICB0aGlzLmdhbWVTZXR1cCgpXG4gICAgfVxuXG5cbiAgICBzZXRyYW5kb21Cb2FyZEJ1dHRvbigpIHtcbiAgICAgICAgbGV0IHJhbmRvbUJvYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1ib2FyZCcpXG4gICAgICAgIHJhbmRvbUJvYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmFuZG9tU2hpcFBsYWNlbWVudCgncGxheWVyJylcbiAgICAgICAgICAgIHRoaXMuZG9tQ29udHJvbGxlci5jbGVhclNoaXBTZWxlY3RvcigpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFJlc2V0QnV0dG9uKCkge1xuICAgICAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYm9hcmQnKVxuICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGlzR2FtZU92ZXIoKSB7XG4gICAgICAgIGxldCBnYW1lT3ZlckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmdldFJlbWFpbmluZ1NoaXBzKCkgPT09IDAgfHwgdGhpcy5jb21wdXRlci5nZXRSZW1haW5pbmdTaGlwcygpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lT3ZlckludGVydmFsKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgfVxuXG4gICAgZ2V0V2lubmVyKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQ29tcHV0ZXJcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiUGxheWVyXCJcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnYW1lU2V0dXAoKSB7XG5cblxuICAgICAgICB0aGlzLnBsYXllci5wb3B1bGF0ZVNoaXBMaXN0KClcbiAgICAgICAgdGhpcy5jb21wdXRlci5wb3B1bGF0ZVNoaXBMaXN0KClcbiAgICAgICAgdGhpcy5kb21Db250cm9sbGVyLmNyZWF0ZUdhbWVib2FyZCgnY29tcHV0ZXInKVxuICAgICAgICB0aGlzLmRvbUNvbnRyb2xsZXIuY3JlYXRlR2FtZWJvYXJkKCdwbGF5ZXInKVxuICAgICAgICB0aGlzLnBsYXllci5nYW1lYm9hcmQuY3JlYXRlR2FtZWJvYXJkKClcbiAgICAgICAgdGhpcy5jb21wdXRlci5nYW1lYm9hcmQuY3JlYXRlR2FtZWJvYXJkKClcbiAgICAgICAgdGhpcy5kb21Db250cm9sbGVyLmFkZFBsYXllckJvYXJkTGlzdGVuZXJzKHRoaXMucGxheWVyKVxuICAgICAgICB0aGlzLmNvbXB1dGVyLnJhbmRvbVNoaXBQbGFjZW1lbnQoJ2NvbXB1dGVyJylcbiAgICAgICAgdGhpcy5kb21Db250cm9sbGVyLmFkZFNoaXBUb1NlbGVjdG9yKHRoaXMucGxheWVyLnNoaXBMaXN0WzBdKVxuXG4gICAgICAgIC8vdXNlIHRoaXMgdG8gY3JlYXRlICByZWd1bGFyIGdhbWUgbG9vcFxuICAgICAgICBsZXQgZ2FtZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnNoaXBMaXN0Lmxlbmd0aCA9PT0gMCAmJiB0aGlzLmNvbXB1dGVyLnNoaXBMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV4dFBoYXNlXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wdXRlckdhbWVCb2FyZExpc3RlbmVycygpXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lSW50ZXJ2YWwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgbGV0IGdhbWVPdmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSA9PT0gMCB8fCB0aGlzLmNvbXB1dGVyLmdldFJlbWFpbmluZ1NoaXBzKCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgd2lubmVyID0gdGhpcy5nZXRXaW5uZXIoKVxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3dpbm5lcn0gd2lucyFgKVxuICAgICAgICAgICAgICAgIHRoaXMuZG9tQ29udHJvbGxlci50b2dnbGVDb21wdXRlck92ZXJsYXlPbigpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIG92ZXJcIilcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGdhbWVPdmVySW50ZXJ2YWwpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG5cblxuICAgIH1cblxuICAgIGNsaWNrRXZlbnQoZSkge1xuICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNsaWNlKDEpKVxuICAgICAgICBsZXQgeSA9IGUudGFyZ2V0LmlkLnNsaWNlKDAsIDEpXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYXllci5hdHRhY2soeCwgeSwgdGhpcy5jb21wdXRlci5nYW1lYm9hcmQpXG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tQ29udHJvbGxlci5zaG93SGl0KGUudGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy5jb21wdXRlci5yYW5kb21BdHRhY2sodGhpcy5wbGF5ZXIuZ2FtZWJvYXJkKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJNaXNzXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tQ29udHJvbGxlci5zaG93TWlzcyhlLnRhcmdldClcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIucmFuZG9tQXR0YWNrKHRoaXMucGxheWVyLmdhbWVib2FyZClcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiQWxyZWFkeSBIaXRcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IEhpdFwiKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhZGRDb21wdXRlckdhbWVCb2FyZExpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IGNvbXB1dGVyR2FtZWJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItZ2FtZUJvYXJkLWNlbGxzIC5nYW1lQm9hcmQtY2VsbCcpXG4gICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja0V2ZW50KGUpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbW92ZUNvbXB1dGVyTGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgY29tcHV0ZXJHYW1lYm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lQm9hcmQtY2VsbHMgLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrRXZlbnQoZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVkXCIpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5sZXQgZ2FtZUxvZ2ljID0gbmV3IEdhbWVMb2dpYygpXG5nYW1lTG9naWMuZ2FtZVNldHVwKClcblxuXG4vL2dhbWVMb2dpYy5wbGF5ZXJTaGlwUGxhY2VtZW50UGhhc2UoKVxuXG5cbm1vZHVsZVxuICAgIC5leHBvcnRzID0ge05vZGUsIFNoaXAsIEdhbWVib2FyZCwgUGxheWVyLCBDb21wdXRlcn07XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=