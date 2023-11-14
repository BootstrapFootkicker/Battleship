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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    margin: 0;\n    padding: 50px;\n}\n\n.player-gameBoard-cells,.computer-gameBoard-cells {\n    display: grid;\n    grid-template-columns: repeat(11, 50px);\n    grid-template-rows: repeat(11, 50px);\n\n\n}\n\n.gameBoard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.gameBoard-cell {\n    display: flex;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    color: black;\n    justify-content: center;\n    align-items: center;\n}\n\n.topCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 1px 1px 1px;\n}\n\n.topRightCornerCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 4px 1px 1px;\n\n}\n\n.topLeftCornerCell {\n\n    border-color: black grey grey black;\n    border-width: 4px 1px 1px 4px;\n\n}\n\n.leftCell {\n\n    border-color: grey grey grey black;\n    border-width: 1px 1px 1px 4px;\n\n}\n\n.rightCell {\n\n    border-color: grey black grey grey;\n    border-width: 1px 4px 1px 1px;\n\n}\n\n.bottomCell {\n\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}\n\n.bottomLeftCornerCell\n{\n    border-color: grey grey black black;\n    border-width: 1px 1px 4px 4px;\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,yCAAyC;IACzC,eAAe;IACf,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;;AAGxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;;IAEI,kCAAkC;IAClC,6BAA6B;;AAEjC;;AAEA;;IAEI,kCAAkC;IAClC,6BAA6B;;AAEjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;;IAEI,mCAAmC;IACnC,6BAA6B;;AAEjC","sourcesContent":["body {\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    margin: 0;\n    padding: 50px;\n}\n\n.player-gameBoard-cells,.computer-gameBoard-cells {\n    display: grid;\n    grid-template-columns: repeat(11, 50px);\n    grid-template-rows: repeat(11, 50px);\n\n\n}\n\n.gameBoard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.gameBoard-cell {\n    display: flex;\n    border: 1px solid grey;\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    color: black;\n    justify-content: center;\n    align-items: center;\n}\n\n.topCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 1px 1px 1px;\n}\n\n.topRightCornerCell {\n\n    border-color: black black grey grey;\n    border-width: 4px 4px 1px 1px;\n\n}\n\n.topLeftCornerCell {\n\n    border-color: black grey grey black;\n    border-width: 4px 1px 1px 4px;\n\n}\n\n.leftCell {\n\n    border-color: grey grey grey black;\n    border-width: 1px 1px 1px 4px;\n\n}\n\n.rightCell {\n\n    border-color: grey black grey grey;\n    border-width: 1px 4px 1px 1px;\n\n}\n\n.bottomCell {\n\n    border-color: grey black black grey;\n    border-width: 1px 4px 4px 1px;\n\n}\n\n.bottomLeftCornerCell\n{\n    border-color: grey grey black black;\n    border-width: 1px 1px 4px 4px;\n\n}"],"sourceRoot":""}]);
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
        this.edges = [];
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
        this.orientation = null;
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
        if (this.findNodeInList(x, y) === null) {
            return null;
        }
        let node = this.findNodeInList(x, y);
        if (node.hasShip) {
            node.hit = true;
            node.ship.hit();
            return true;
        } else {
            node.hit = true;
            return false;
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
        this.shipList = [];
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

    attack(x, y, enemyGameboard) {
        enemyGameboard.recieveAttack(x, y);
    }

    populateShipList() {
        this.shipList.push(new Ship(5, 'Carrier', this.name));
        this.shipList.push(new Ship(4, 'Battleship', this.name));
        this.shipList.push(new Ship(3, 'Destroyer', this.name));
        this.shipList.push(new Ship(3, 'Submarine', this.name));
        this.shipList.push(new Ship(2, 'Patrol Boat', this.name));
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
        //todo implement random ship placement
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


    }

    randomAttack(playerGameboard) {
        let hitValid = false
        while (hitValid === false) {
            let randomCoords = this.createRandomCoords()
            let x = randomCoords[0]
            let y = randomCoords[1]

            if (playerGameboard.findNodeInList(x, y).isHit() === false && this.coordsAttacked.includes(`${x},${y}`) === false) {
                hitValid = true
                playerGameboard.receiveAttack(x, y)
                this.coordsAttacked.push(`${x},${y}`)
                console.log(`Computer attacked ${x},${y}`)

            } else {
                console.log(`Computer already attacked ${x},${y}`)
                console.log(playerGameboard.findNodeInList(x, y).isHit())
            }

        }


    }


}

class DomController {

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
        // xCoordCell.classList.add('gameBoard-cell')
        gameboardCellContainer.appendChild(xCoordCell)

        for (let i = 0; i < 10; i++) {
            xCoordCell = document.createElement('div')
            xCoordCell.classList.add('gameBoard-cell')
            xCoordCell.innerHTML = (i + 1).toString();
            gameboardCellContainer.appendChild(xCoordCell)
        }

        for (let i = 0; i < 10; i++) {
            let yCoordCell = document.createElement('div')
            yCoordCell.classList.add('gameBoard-cell')
            yCoordCell.innerHTML = alphabet[i];
            gameboardCellContainer.appendChild(yCoordCell)
            for (let j = 0; j < 10; j++) {
                let cell = document.createElement('div')
                cell.classList.add('gameBoard-cell')
                cell.id = `${i + 1},${alphabet[j]}`
                gameboardCellContainer.appendChild(cell)
            }
        }

        const gameBoardCells = document.querySelectorAll('.gameBoard-cell')
        for (let i = 11; i < 120; i++) {

            //gameBoardCells[i].classList.remove('gameBoard-cell')
            if (i === 11) {
                gameBoardCells[i].classList.add('topLeftCornerCell')
            } else if (i === 20) {
                gameBoardCells[i].classList.add('topRightCornerCell')
            } else if (i < 21 && i > 11) {
                gameBoardCells[i].classList.add('topCell')
            } else if (i === 31 || i === 42 || i === 53 || i === 64 || i === 75 || i === 86 || i === 97 || i === 108) {

                gameBoardCells[i].classList.add('rightCell')
            } else if (i === 110) {
                gameBoardCells[i].classList.add('bottomLeftCornerCell')
            } else if (i % 11 === 0 && i < 110) {
                gameBoardCells[i].classList.add('leftCell')
            } else if (i > 109 && i < 120) {
                gameBoardCells[i].classList.add('bottomCell')
            }


        }
    }

    addShipToDom(ship) {
    //todo add ship to dom
        //todo add a way to see which game board to add to
    }
}


let domController = new DomController()

domController.createGameboard('computer')
domController.createGameboard('player')

module.exports = {Node, Ship, Gameboard, Player, Computer};





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLnBsYXllci1nYW1lQm9hcmQtY2VsbHMsLmNvbXB1dGVyLWdhbWVCb2FyZC1jZWxscyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDUwcHgpO1xcblxcblxcbn1cXG5cXG4uZ2FtZUJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhbWVCb2FyZC1jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3BDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayBncmV5IGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDFweCAxcHggMXB4O1xcbn1cXG5cXG4udG9wUmlnaHRDb3JuZXJDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayBncmV5IGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDRweCAxcHggMXB4O1xcblxcbn1cXG5cXG4udG9wTGVmdENvcm5lckNlbGwge1xcblxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIGdyZXkgZ3JleSBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHggMXB4IDFweCA0cHg7XFxuXFxufVxcblxcbi5sZWZ0Q2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogZ3JleSBncmV5IGdyZXkgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggNHB4O1xcblxcbn1cXG5cXG4ucmlnaHRDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGJsYWNrIGdyZXkgZ3JleTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggNHB4IDFweCAxcHg7XFxuXFxufVxcblxcbi5ib3R0b21DZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGJsYWNrIGJsYWNrIGdyZXk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDRweCA0cHggMXB4O1xcblxcbn1cXG5cXG4uYm90dG9tTGVmdENvcm5lckNlbGxcXG57XFxuICAgIGJvcmRlci1jb2xvcjogZ3JleSBncmV5IGJsYWNrIGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAxcHggNHB4IDRweDtcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7OztBQUd4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLGtDQUFrQztJQUNsQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLGtDQUFrQztJQUNsQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyLWdhbWVCb2FyZC1jZWxscywuY29tcHV0ZXItZ2FtZUJvYXJkLWNlbGxzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDUwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgNTBweCk7XFxuXFxuXFxufVxcblxcbi5nYW1lQm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2FtZUJvYXJkLWNlbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcENlbGwge1xcblxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIGJsYWNrIGdyZXkgZ3JleTtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHggMXB4IDFweCAxcHg7XFxufVxcblxcbi50b3BSaWdodENvcm5lckNlbGwge1xcblxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIGJsYWNrIGdyZXkgZ3JleTtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDFweCAxcHg7XFxuXFxufVxcblxcbi50b3BMZWZ0Q29ybmVyQ2VsbCB7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgZ3JleSBncmV5IGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDRweCAxcHggMXB4IDRweDtcXG5cXG59XFxuXFxuLmxlZnRDZWxsIHtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGdyZXkgZ3JleSBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCA0cHg7XFxuXFxufVxcblxcbi5yaWdodENlbGwge1xcblxcbiAgICBib3JkZXItY29sb3I6IGdyZXkgYmxhY2sgZ3JleSBncmV5O1xcbiAgICBib3JkZXItd2lkdGg6IDFweCA0cHggMXB4IDFweDtcXG5cXG59XFxuXFxuLmJvdHRvbUNlbGwge1xcblxcbiAgICBib3JkZXItY29sb3I6IGdyZXkgYmxhY2sgYmxhY2sgZ3JleTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggNHB4IDRweCAxcHg7XFxuXFxufVxcblxcbi5ib3R0b21MZWZ0Q29ybmVyQ2VsbFxcbntcXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5IGdyZXkgYmxhY2sgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDFweCA0cHggNHB4O1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzU2hpcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoaXAgPSBudWxsO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgfVxuXG4gICAgc2V0U2hpcChzaGlwKSB7XG4gICAgICAgIHRoaXMuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hpcCA9IHNoaXA7XG5cbiAgICB9XG5cbiAgICBoYXNTaGlwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNTaGlwO1xuICAgIH1cblxuICAgIGlzSGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXQ7XG4gICAgfVxuXG5cbn1cblxuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCB0eXBlLCBvd25lcikge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5udW1PZkhpdHMgPSAwO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnNoaXBDb29yZHMgPSBbXVxuICAgIH1cblxuICAgIGdldE9yaWVudGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBnZXRTaGlwVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9XG5cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5udW1PZkhpdHMrKztcbiAgICAgICAgaWYgKHRoaXMubnVtT2ZIaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1N1bms7XG4gICAgfVxuXG4gICAgc2V0T3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIH1cblxuXG4gICAgZ2V0T3duZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyO1xuICAgIH1cblxuICAgIGdldExlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gICAgfVxuXG4gICAgZ2V0U2hpcENvb3JkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcENvb3Jkc1xuICAgIH1cblxuICAgIGFkZFNoaXBDb29yZHMoY29vcmRzKSB7XG4gICAgICAgIHRoaXMuc2hpcENvb3Jkcy5wdXNoKGNvb3JkcylcbiAgICB9XG59XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubm9kZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zaGlwTGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICAgICAgbGV0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE5vZGUoaSArIDEsIGFscGhhYmV0W2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaW50U2hpcExpc3QoKSB7XG4gICAgICAgIHRoaXMuc2hpcExpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNoaXAgJHtzaGlwLmdldFNoaXBUeXBlKCl9IGF0ICR7SlNPTi5zdHJpbmdpZnkoc2hpcC5nZXRTaGlwQ29vcmRzKCkpfSBmYWNpbmcgJHtzaGlwLmdldE9yaWVudGF0aW9uKCl9YClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNDZWxsVmFsaWQoeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5maW5kTm9kZUluTGlzdCh4LCB5KSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSByZXR1cm4gdGhpcy5maW5kTm9kZUluTGlzdCh4LCB5KS5oYXNTaGlwICE9PSB0cnVlO1xuICAgIH1cblxuICAgIGlzT3JpZW50YXRpb25WYWxpZCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuICAgICAgICBsZXQgYWxwaGFiZXRJbmRleCA9IGFscGhhYmV0LmluZGV4T2YoeSlcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdIb3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NlbGxWYWxpZCh4LCB5KSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCArPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAnVmVydGljYWwnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2VsbFZhbGlkKHgsIHkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxwaGFiZXRJbmRleCArPSAxXG4gICAgICAgICAgICAgICAgeSA9IGFscGhhYmV0W2FscGhhYmV0SW5kZXhdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRWZXJ0aWNhbENvb3Jkcyh4LCB5LCBzaGlwKSB7XG4gICAgICAgIGxldCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXG4gICAgICAgIGxldCBhbHBoYWJldEluZGV4ID0gYWxwaGFiZXQuaW5kZXhPZih5KVxuICAgICAgICBzaGlwLnNldE9yaWVudGF0aW9uKCdWZXJ0aWNhbCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICBzaGlwLmFkZFNoaXBDb29yZHMoeyd4JzogeCwgJ3knOiB5fSlcbiAgICAgICAgICAgIGFscGhhYmV0SW5kZXggKz0gMVxuICAgICAgICAgICAgeSA9IGFscGhhYmV0W2FscGhhYmV0SW5kZXhdXG4gICAgICAgIH1cblxuICAgICAgICBzaGlwLnNoaXBDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkU2hpcFRvTm9kZShjb29yZC54LCBjb29yZC55LCBzaGlwKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRTaGlwVG9MaXN0KHNoaXApXG5cbiAgICB9XG5cbiAgICBzZXRIb3Jpem9udGFsQ29vcmRzKHgsIHksIHNoaXApIHtcbiAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbignSG9yaXpvbnRhbCcpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgIHNoaXAuYWRkU2hpcENvb3Jkcyh7J3gnOiB4LCAneSc6IHl9KVxuICAgICAgICAgICAgeCArPSAxXG4gICAgICAgIH1cbiAgICAgICAgc2hpcC5zaGlwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFNoaXBUb05vZGUoY29vcmQueCwgY29vcmQueSwgc2hpcClcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkU2hpcFRvTGlzdChzaGlwKVxuXG4gICAgfVxuXG4gICAgYWRkTm9kZSh4LCB5KSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IE5vZGUoeCwgeSk7XG4gICAgICAgIHRoaXMubm9kZUxpc3QucHVzaChub2RlKTtcbiAgICB9XG5cblxuICAgIGFkZFNoaXBUb05vZGUoeCwgeSwgc2hpcCkge1xuXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5maW5kTm9kZUluTGlzdCh4LCB5KTtcbiAgICAgICAgbm9kZS5zZXRTaGlwKHNoaXApO1xuXG4gICAgfVxuXG4gICAgYWRkU2hpcFRvTGlzdChzaGlwKSB7XG4gICAgICAgIHRoaXMuc2hpcExpc3QucHVzaChzaGlwKVxuICAgIH1cblxuICAgIHByaW50Tm9kZXMoKSB7XG4gICAgICAgIHRoaXMubm9kZUxpc3QuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE5vZGUgKCR7bm9kZS54fSwgJHtub2RlLnl9KWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kTm9kZUluTGlzdCh4LCB5KSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlTGlzdC5maW5kKChub2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS54ID09PSB4ICYmIG5vZGUueSA9PT0geTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGlmICh0aGlzLmZpbmROb2RlSW5MaXN0KHgsIHkpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZmluZE5vZGVJbkxpc3QoeCwgeSk7XG4gICAgICAgIGlmIChub2RlLmhhc1NoaXApIHtcbiAgICAgICAgICAgIG5vZGUuaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUuc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBmaW5kU2hpcChzaGlwVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwTGlzdC5maW5kKChzaGlwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcC50eXBlID09PSBzaGlwVHlwZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZFNoaXBJbmRleChzaGlwVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwTGlzdC5maW5kSW5kZXgoKHNoaXApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwLnR5cGUgPT09IHNoaXBUeXBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHByaW50U2hpcHMoKSB7XG4gICAgICAgIHRoaXMuc2hpcExpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNoaXA6ICR7c2hpcC50eXBlfSwgTGVuZ3RoOiAke3NoaXAubGVuZ3RofSwgT3duZXI6ICR7c2hpcC5nZXRPd25lcigpLmdldFBsYXllck5hbWUoKX1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXR0YWNrKHgsIHksIGVuZW15R2FtZWJvYXJkKSB7XG4gICAgICAgIGVuZW15R2FtZWJvYXJkLnJlY2lldmVBdHRhY2soeCwgeSk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVTaGlwTGlzdCgpIHtcbiAgICAgICAgdGhpcy5zaGlwTGlzdC5wdXNoKG5ldyBTaGlwKDUsICdDYXJyaWVyJywgdGhpcy5uYW1lKSk7XG4gICAgICAgIHRoaXMuc2hpcExpc3QucHVzaChuZXcgU2hpcCg0LCAnQmF0dGxlc2hpcCcsIHRoaXMubmFtZSkpO1xuICAgICAgICB0aGlzLnNoaXBMaXN0LnB1c2gobmV3IFNoaXAoMywgJ0Rlc3Ryb3llcicsIHRoaXMubmFtZSkpO1xuICAgICAgICB0aGlzLnNoaXBMaXN0LnB1c2gobmV3IFNoaXAoMywgJ1N1Ym1hcmluZScsIHRoaXMubmFtZSkpO1xuICAgICAgICB0aGlzLnNoaXBMaXN0LnB1c2gobmV3IFNoaXAoMiwgJ1BhdHJvbCBCb2F0JywgdGhpcy5uYW1lKSk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVib2FyZC5maW5kTm9kZUluTGlzdCh4LCB5KSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJudWxsXCIpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuZmluZE5vZGVJbkxpc3QoeCwgeSkuaGFzU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgc2hpcFwiKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuaXNPcmllbnRhdGlvblZhbGlkKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKSAmJiBvcmllbnRhdGlvbiA9PT0gXCJWZXJ0aWNhbFwiKSB7XG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkLnNldFZlcnRpY2FsQ29vcmRzKHgsIHksIHNoaXApXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRTaGlwSW5kZXgoc2hpcC50eXBlKVxuXG4gICAgICAgICAgICB0aGlzLnNoaXBMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaGlwICR7c2hpcC5nZXRTaGlwVHlwZSgpfSBwbGFjZWQgYXQgJHt4fSwke3l9YClcblxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lYm9hcmQuaXNPcmllbnRhdGlvblZhbGlkKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKSAmJiBvcmllbnRhdGlvbiA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkLnNldEhvcml6b250YWxDb29yZHMoeCwgeSwgc2hpcClcblxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maW5kU2hpcEluZGV4KHNoaXAudHlwZSlcblxuICAgICAgICAgICAgdGhpcy5zaGlwTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2hpcCAke3NoaXAuZ2V0U2hpcFR5cGUoKX0gcGxhY2VkIGF0ICR7eH0sJHt5fWApXG5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIFBsYWNlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5jb29yZHNBdHRhY2tlZCA9IFtdXG4gICAgfVxuXG4gICAgY3JlYXRlUmFuZG9tQ29vcmRzKCkge1xuICAgICAgICBsZXQgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgbGV0IHkgPSBhbHBoYWJldFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuXG4gICAgICAgIHJldHVybiBbeCwgeV1cbiAgICB9XG5cbiAgICBjcmVhdGVSYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9ucyA9IFsnSG9yaXpvbnRhbCcsICdWZXJ0aWNhbCddO1xuICAgICAgICByZXR1cm4gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXVxuICAgIH1cblxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgICAgIC8vdG9kbyBpbXBsZW1lbnQgcmFuZG9tIHNoaXAgcGxhY2VtZW50XG4gICAgICAgIGxldCByYW5kb21Db29yZHMgPSB0aGlzLmNyZWF0ZVJhbmRvbUNvb3JkcygpXG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IHRoaXMuY3JlYXRlUmFuZG9tT3JpZW50YXRpb24oKVxuICAgICAgICBsZXQgeCA9IHJhbmRvbUNvb3Jkc1swXVxuICAgICAgICBsZXQgeSA9IHJhbmRvbUNvb3Jkc1sxXVxuXG4gICAgICAgIHdoaWxlICh0aGlzLnNoaXBMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbGV0IHNoaXAgPSB0aGlzLnNoaXBMaXN0WzBdXG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbilcbiAgICAgICAgICAgIHJhbmRvbUNvb3JkcyA9IHRoaXMuY3JlYXRlUmFuZG9tQ29vcmRzKClcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gdGhpcy5jcmVhdGVSYW5kb21PcmllbnRhdGlvbigpXG4gICAgICAgICAgICB4ID0gcmFuZG9tQ29vcmRzWzBdXG4gICAgICAgICAgICB5ID0gcmFuZG9tQ29vcmRzWzFdXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgcmFuZG9tQXR0YWNrKHBsYXllckdhbWVib2FyZCkge1xuICAgICAgICBsZXQgaGl0VmFsaWQgPSBmYWxzZVxuICAgICAgICB3aGlsZSAoaGl0VmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29vcmRzID0gdGhpcy5jcmVhdGVSYW5kb21Db29yZHMoKVxuICAgICAgICAgICAgbGV0IHggPSByYW5kb21Db29yZHNbMF1cbiAgICAgICAgICAgIGxldCB5ID0gcmFuZG9tQ29vcmRzWzFdXG5cbiAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQuZmluZE5vZGVJbkxpc3QoeCwgeSkuaXNIaXQoKSA9PT0gZmFsc2UgJiYgdGhpcy5jb29yZHNBdHRhY2tlZC5pbmNsdWRlcyhgJHt4fSwke3l9YCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaGl0VmFsaWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc0F0dGFja2VkLnB1c2goYCR7eH0sJHt5fWApXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENvbXB1dGVyIGF0dGFja2VkICR7eH0sJHt5fWApXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENvbXB1dGVyIGFscmVhZHkgYXR0YWNrZWQgJHt4fSwke3l9YClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJHYW1lYm9hcmQuZmluZE5vZGVJbkxpc3QoeCwgeSkuaXNIaXQoKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG59XG5cbmNsYXNzIERvbUNvbnRyb2xsZXIge1xuXG4gICAgLy9zdHlsZSBkb2Vzbid0IGFwcGx5IHRvIHNlY29uZCBnYW1lYm9hcmQgaWYgcGxheWVyIGlzIGNyZWF0ZWQgZmlyc3RcbiAgICBjcmVhdGVHYW1lYm9hcmQodXNlcikge1xuICAgICAgICBsZXQgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuICAgICAgICBsZXQgZ2FtZWJvYXJkQ2VsbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGlmICh1c2VyID09PSAncGxheWVyJykge1xuICAgICAgICAgICAgZ2FtZWJvYXJkQ2VsbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZ2FtZUJvYXJkLWNlbGxzJylcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmRDZWxsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWdhbWVCb2FyZC1jZWxscycpXG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgeENvb3JkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIHhDb29yZENlbGwuY2xhc3NMaXN0LmFkZCgnZ2FtZUJvYXJkLWNlbGwnKVxuICAgICAgICBnYW1lYm9hcmRDZWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZENlbGwpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICB4Q29vcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHhDb29yZENlbGwuY2xhc3NMaXN0LmFkZCgnZ2FtZUJvYXJkLWNlbGwnKVxuICAgICAgICAgICAgeENvb3JkQ2VsbC5pbm5lckhUTUwgPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBnYW1lYm9hcmRDZWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZENlbGwpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB5Q29vcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHlDb29yZENlbGwuY2xhc3NMaXN0LmFkZCgnZ2FtZUJvYXJkLWNlbGwnKVxuICAgICAgICAgICAgeUNvb3JkQ2VsbC5pbm5lckhUTUwgPSBhbHBoYWJldFtpXTtcbiAgICAgICAgICAgIGdhbWVib2FyZENlbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoeUNvb3JkQ2VsbClcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2dhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgICAgICAgICBjZWxsLmlkID0gYCR7aSArIDF9LCR7YWxwaGFiZXRbal19YFxuICAgICAgICAgICAgICAgIGdhbWVib2FyZENlbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdhbWVCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVCb2FyZC1jZWxsJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDExOyBpIDwgMTIwOyBpKyspIHtcblxuICAgICAgICAgICAgLy9nYW1lQm9hcmRDZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lQm9hcmQtY2VsbCcpXG4gICAgICAgICAgICBpZiAoaSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCd0b3BMZWZ0Q29ybmVyQ2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDIwKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgndG9wUmlnaHRDb3JuZXJDZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDIxICYmIGkgPiAxMSkge1xuICAgICAgICAgICAgICAgIGdhbWVCb2FyZENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ3RvcENlbGwnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAzMSB8fCBpID09PSA0MiB8fCBpID09PSA1MyB8fCBpID09PSA2NCB8fCBpID09PSA3NSB8fCBpID09PSA4NiB8fCBpID09PSA5NyB8fCBpID09PSAxMDgpIHtcblxuICAgICAgICAgICAgICAgIGdhbWVCb2FyZENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Q2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDExMCkge1xuICAgICAgICAgICAgICAgIGdhbWVCb2FyZENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUxlZnRDb3JuZXJDZWxsJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSAlIDExID09PSAwICYmIGkgPCAxMTApIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCdsZWZ0Q2VsbCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiAxMDkgJiYgaSA8IDEyMCkge1xuICAgICAgICAgICAgICAgIGdhbWVCb2FyZENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUNlbGwnKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFNoaXBUb0RvbShzaGlwKSB7XG4gICAgLy90b2RvIGFkZCBzaGlwIHRvIGRvbVxuICAgICAgICAvL3RvZG8gYWRkIGEgd2F5IHRvIHNlZSB3aGljaCBnYW1lIGJvYXJkIHRvIGFkZCB0b1xuICAgIH1cbn1cblxuXG5sZXQgZG9tQ29udHJvbGxlciA9IG5ldyBEb21Db250cm9sbGVyKClcblxuZG9tQ29udHJvbGxlci5jcmVhdGVHYW1lYm9hcmQoJ2NvbXB1dGVyJylcbmRvbUNvbnRyb2xsZXIuY3JlYXRlR2FtZWJvYXJkKCdwbGF5ZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtOb2RlLCBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciwgQ29tcHV0ZXJ9O1xuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9