/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/item/[id]",{

/***/ "./pages/item/[id].js":
/*!****************************!*\
  !*** ./pages/item/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ItemPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/tobiasberg/code/botw-items-wiki/botw-items-wiki/pages/item/[id].js\";\n\n\n\n;\nvar __N_SSG = true;\nfunction ItemPage(_ref) {\n  var _this = this;\n\n  var itemData = _ref.itemData;\n  var altText = \"Image of \" + itemData.name;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [itemData.name.replace(/(^\\w{1})|(\\s+\\w{1})/g, function (letter) {\n          return letter.toUpperCase();\n        }), \" - BOTW Items Wiki\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: itemData.image,\n      alt: altText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"Name: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), itemData.name.replace(/(^\\w{1})|(\\s+\\w{1})/g, function (letter) {\n        return letter.toUpperCase();\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Category: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 20\n      }, this), itemData.category.replace(/(^\\w{1})|(\\s+\\w{1})/g, function (letter) {\n        return letter.toUpperCase();\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Description: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 23\n      }, this), itemData.description]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Common Locations (array): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: itemData.common_locations.forEach(function (location) {\n          /*#__PURE__*/\n          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: location\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 36\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), itemData.drops.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Drops (array) (monsters, treasure): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 48\n      }, this), itemData.drops]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, this), itemData.cooking_effect && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Cooking Effect (materials, creatures): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 51\n      }, this), itemData.cooking_effect]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, this), itemData.hearts_recovered && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Hearts Recovered (materials, creatures): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 53\n      }, this), itemData.hearts_recovered]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this), itemData.defense && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Defense (equipment): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 33\n      }, this), itemData.defense]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Back to \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\".concat(itemData.category.toLowerCase()),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: itemData.category.replace(/(^\\w{1})|(\\s+\\w{1})/g, function (letter) {\n              return letter.toUpperCase();\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 72\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 69\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 18\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n_c = ItemPage;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbS9baWRdLmpzPzM1MWYiXSwibmFtZXMiOlsiSXRlbVBhZ2UiLCJpdGVtRGF0YSIsImFsdFRleHQiLCJuYW1lIiwicmVwbGFjZSIsImxldHRlciIsInRvVXBwZXJDYXNlIiwiaW1hZ2UiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiY29tbW9uX2xvY2F0aW9ucyIsImZvckVhY2giLCJsb2NhdGlvbiIsImRyb3BzIiwibGVuZ3RoIiwiY29va2luZ19lZmZlY3QiLCJoZWFydHNfcmVjb3ZlcmVkIiwiZGVmZW5zZSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFtQ0M7O0FBRWMsU0FBU0EsUUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUMzQyxNQUFNQyxPQUFPLEdBQUcsY0FBYUQsUUFBUSxDQUFDRSxJQUF0QztBQUNBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLG1CQUFRRixRQUFRLENBQUNFLElBQVQsQ0FBY0MsT0FBZCxDQUFzQixzQkFBdEIsRUFBOEMsVUFBQUMsTUFBTTtBQUFBLGlCQUFJQSxNQUFNLENBQUNDLFdBQVAsRUFBSjtBQUFBLFNBQXBELENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSyxTQUFHLEVBQUVMLFFBQVEsQ0FBQ00sS0FBbkI7QUFBMEIsU0FBRyxFQUFFTDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFBLHdDQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBVixFQUFpQkQsUUFBUSxDQUFDRSxJQUFULENBQWNDLE9BQWQsQ0FBc0Isc0JBQXRCLEVBQThDLFVBQUFDLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNDLFdBQVAsRUFBSjtBQUFBLE9BQXBELENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBQSw0Q0FBYTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWIsRUFBb0JMLFFBQVEsQ0FBQ08sUUFBVCxDQUFrQkosT0FBbEIsQ0FBMEIsc0JBQTFCLEVBQWtELFVBQUFDLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNDLFdBQVAsRUFBSjtBQUFBLE9BQXhELENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0U7QUFBQSwrQ0FBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFoQixFQUF1QkwsUUFBUSxDQUFDUSxXQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVFFO0FBQUEsNERBQTZCO0FBQUEsa0JBQzNCUixRQUFRLENBQUNTLGdCQUFULENBQTBCQyxPQUExQixDQUFrQyxVQUFDQyxRQUFELEVBQWM7QUFDOUM7QUFBQTtBQUFBLHNCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRCxTQUZEO0FBRDJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFhR1gsUUFBUSxDQUFDWSxLQUFULENBQWVDLE1BQWYsR0FBd0IsQ0FBeEIsaUJBQ0M7QUFBQSxzRUFBdUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF2QyxFQUE4Q2IsUUFBUSxDQUFDWSxLQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSixFQWdCR1osUUFBUSxDQUFDYyxjQUFULGlCQUNDO0FBQUEseUVBQTBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBMUMsRUFBaURkLFFBQVEsQ0FBQ2MsY0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKLEVBbUJHZCxRQUFRLENBQUNlLGdCQUFULGlCQUNDO0FBQUEsMkVBQTRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBNUMsRUFBbURmLFFBQVEsQ0FBQ2UsZ0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCSixFQXNCR2YsUUFBUSxDQUFDZ0IsT0FBVCxpQkFDQztBQUFBLHVEQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXhCLEVBQStCaEIsUUFBUSxDQUFDZ0IsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJKLGVBeUJFO0FBQUEsMENBQVcsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLGFBQU1oQixRQUFRLENBQUNPLFFBQVQsQ0FBa0JVLFdBQWxCLEVBQU4sQ0FBVjtBQUFBLCtCQUFtRDtBQUFBLGlDQUFHO0FBQUEsc0JBQU9qQixRQUFRLENBQUNPLFFBQVQsQ0FBa0JKLE9BQWxCLENBQTBCLHNCQUExQixFQUFrRCxVQUFBQyxNQUFNO0FBQUEscUJBQUlBLE1BQU0sQ0FBQ0MsV0FBUCxFQUFKO0FBQUEsYUFBeEQ7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEO0tBL0J1Qk4sUTtBQStCdkIiLCJmaWxlIjoiLi9wYWdlcy9pdGVtL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2JvdHctY29tcGVuZGl1bS5oZXJva3VhcHAuY29tL2FwaS92MicpXG4gIGNvbnN0IHJlc2pzb24gPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnN0IGRhdGEgPSByZXNqc29uLmRhdGFcbiAgY29uc3QgY3JlYXR1cmVzZm9vZGFycmF5ID0gZGF0YS5jcmVhdHVyZXMuZm9vZFxuICBjb25zdCBjcmVhdHVyZXNub25mb29kYXJyYXkgPSBkYXRhLmNyZWF0dXJlcy5ub25fZm9vZFxuICBjb25zdCBlcXVpcG1lbnRhcnJheSA9IGRhdGEuZXF1aXBtZW50XG4gIGNvbnN0IG1hdGVyaWFsc2FycmF5ID0gZGF0YS5tYXRlcmlhbHNcbiAgY29uc3QgbW9uc3RlcnNhcnJheSA9IGRhdGEubW9uc3RlcnNcbiAgY29uc3QgdHJlYXN1cmVhcnJheSA9IGRhdGEudHJlYXN1cmVcbiAgY29uc3QgY3JlYXR1cmVzZm9vZGFycmF5aWRzID0gY3JlYXR1cmVzZm9vZGFycmF5Lm1hcCgoY3JlYXR1cmVzZm9vZCkgPT4gY3JlYXR1cmVzZm9vZC5pZCk7XG4gIGNvbnN0IGNyZWF0dXJlc25vbmZvb2RhcnJheWlkcyA9IGNyZWF0dXJlc25vbmZvb2RhcnJheS5tYXAoKGNyZWF0dXJlc25vbmZvb2QpID0+IGNyZWF0dXJlc25vbmZvb2QuaWQpO1xuICBjb25zdCBlcXVpcG1lbnRhcnJheWlkcyA9IGVxdWlwbWVudGFycmF5Lm1hcCgoZXF1aXBtZW50KSA9PiBlcXVpcG1lbnQuaWQpO1xuICBjb25zdCBtYXRlcmlhbHNhcnJheWlkcyA9IG1hdGVyaWFsc2FycmF5Lm1hcCgobWF0ZXJpYWxzKSA9PiBtYXRlcmlhbHMuaWQpO1xuICBjb25zdCBtb25zdGVyc2FycmF5aWRzID0gbW9uc3RlcnNhcnJheS5tYXAoKG1vbnN0ZXJzKSA9PiBtb25zdGVycy5pZCk7XG4gIGNvbnN0IHRyZWFzdXJlYXJyYXlpZHMgPSB0cmVhc3VyZWFycmF5Lm1hcCgodHJlYXN1cmUpID0+IHRyZWFzdXJlLmlkKTtcbiAgY29uc3QgaWRzID0gY3JlYXR1cmVzZm9vZGFycmF5aWRzLmNvbmNhdChjcmVhdHVyZXNub25mb29kYXJyYXlpZHMsIGVxdWlwbWVudGFycmF5aWRzLCBtYXRlcmlhbHNhcnJheWlkcywgbW9uc3RlcnNhcnJheWlkcywgdHJlYXN1cmVhcnJheWlkcylcbiAgY29uc3QgcGF0aHMgPSBpZHMubWFwKChpZCkgPT4gKHsgcGFyYW1zOiB7IGlkOiBpZC50b1N0cmluZygpIH0gfSkpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IGlkIH0gfSkge1xuICBjb25zdCBpdGVtcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2JvdHctY29tcGVuZGl1bS5oZXJva3VhcHAuY29tL2FwaS92Mi9lbnRyeS8ke2lkfWApXG4gIGNvbnN0IGl0ZW1qc29uID0gYXdhaXQgaXRlbXMuanNvbigpXG4gIGNvbnN0IGl0ZW1EYXRhID0gaXRlbWpzb24uZGF0YVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpdGVtRGF0YTogaXRlbURhdGFcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbVBhZ2Uoe2l0ZW1EYXRhfSkge1xuICBjb25zdCBhbHRUZXh0ID0gXCJJbWFnZSBvZiBcIisgaXRlbURhdGEubmFtZTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57aXRlbURhdGEubmFtZS5yZXBsYWNlKC8oXlxcd3sxfSl8KFxccytcXHd7MX0pL2csIGxldHRlciA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSl9IC0gQk9UVyBJdGVtcyBXaWtpPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxpbWcgc3JjPXtpdGVtRGF0YS5pbWFnZX0gYWx0PXthbHRUZXh0fSAvPlxuICAgICAgPGgxPk5hbWU6IDxiciAvPntpdGVtRGF0YS5uYW1lLnJlcGxhY2UoLyheXFx3ezF9KXwoXFxzK1xcd3sxfSkvZywgbGV0dGVyID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKX08L2gxPlxuICAgICAgPHA+Q2F0ZWdvcnk6IDxiciAvPntpdGVtRGF0YS5jYXRlZ29yeS5yZXBsYWNlKC8oXlxcd3sxfSl8KFxccytcXHd7MX0pL2csIGxldHRlciA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSl9PC9wPlxuICAgICAgPHA+RGVzY3JpcHRpb246IDxiciAvPntpdGVtRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8cD5Db21tb24gTG9jYXRpb25zIChhcnJheSk6IDx1bD57XG4gICAgICAgIGl0ZW1EYXRhLmNvbW1vbl9sb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgICAgICA8bGk+e2xvY2F0aW9ufTwvbGk+XG4gICAgICAgIH0pXG4gICAgICAgIH08L3VsPjwvcD5cbiAgICAgIHtpdGVtRGF0YS5kcm9wcy5sZW5ndGggPiAwICYmXG4gICAgICAgIDxwPkRyb3BzIChhcnJheSkgKG1vbnN0ZXJzLCB0cmVhc3VyZSk6IDxiciAvPntpdGVtRGF0YS5kcm9wc308L3A+XG4gICAgICB9XG4gICAgICB7aXRlbURhdGEuY29va2luZ19lZmZlY3QgJiZcbiAgICAgICAgPHA+Q29va2luZyBFZmZlY3QgKG1hdGVyaWFscywgY3JlYXR1cmVzKTogPGJyIC8+e2l0ZW1EYXRhLmNvb2tpbmdfZWZmZWN0fTwvcD5cbiAgICAgIH1cbiAgICAgIHtpdGVtRGF0YS5oZWFydHNfcmVjb3ZlcmVkICYmXG4gICAgICAgIDxwPkhlYXJ0cyBSZWNvdmVyZWQgKG1hdGVyaWFscywgY3JlYXR1cmVzKTogPGJyIC8+e2l0ZW1EYXRhLmhlYXJ0c19yZWNvdmVyZWR9PC9wPlxuICAgICAgfVxuICAgICAge2l0ZW1EYXRhLmRlZmVuc2UgJiZcbiAgICAgICAgPHA+RGVmZW5zZSAoZXF1aXBtZW50KTogPGJyIC8+e2l0ZW1EYXRhLmRlZmVuc2V9PC9wPlxuICAgICAgfVxuICAgICAgPHA+QmFjayB0byA8TGluayBocmVmPXtgLyR7aXRlbURhdGEuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKX1gfT48YT48c3Bhbj57aXRlbURhdGEuY2F0ZWdvcnkucmVwbGFjZSgvKF5cXHd7MX0pfChcXHMrXFx3ezF9KS9nLCBsZXR0ZXIgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpfTwvc3Bhbj48L2E+PC9MaW5rPjwvcD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/item/[id].js\n");

/***/ })

});