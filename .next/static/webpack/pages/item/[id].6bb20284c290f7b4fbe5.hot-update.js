/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/item/[id]",{

/***/ "./components/DescriptiveListRow.js":
/*!******************************************!*\
  !*** ./components/DescriptiveListRow.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tobiasberg/code/botw-items-wiki/components/DescriptiveListRow.js\",\n    _this = undefined;\n\n\n\nvar DescriptiveListRow = function DescriptiveListRow(_ref) {\n  var label = _ref.label,\n      value = _ref.value;\n\n  if (label === 'id' || label === 'image' || label === 'name' || label === 'description' || value === null || value === '') {\n    return '';\n  } else if (Array.isArray(value)) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"dlRow\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n        children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.titleSpacing)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.titleCase)(label))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: \"noBulletList\",\n          children: value.map(function (li, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.titleCase)(li)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 13,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"dlRow\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n        children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.titleSpacing)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.titleCase)(label))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n        children: typeof value === \"string\" ? (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.titleSpacing)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.titleCase)(value)) : value\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this);\n  }\n};\n\n_c = DescriptiveListRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DescriptiveListRow);\n\nvar _c;\n\n$RefreshReg$(_c, \"DescriptiveListRow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNjcmlwdGl2ZUxpc3RSb3cuanM/ZjQzNSJdLCJuYW1lcyI6WyJEZXNjcmlwdGl2ZUxpc3RSb3ciLCJsYWJlbCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwidGl0bGVTcGFjaW5nIiwidGl0bGVDYXNlIiwibWFwIiwibGkiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBc0I7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUMvQyxNQUFJRCxLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLE9BQTVCLElBQXVDQSxLQUFLLEtBQUssTUFBakQsSUFBMkRBLEtBQUssS0FBSyxhQUFyRSxJQUFzRkMsS0FBSyxLQUFLLElBQWhHLElBQXdHQSxLQUFLLEtBQUssRUFBdEgsRUFBMEg7QUFDeEgsV0FBTyxFQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLENBQUosRUFBMEI7QUFDL0Isd0JBQ0U7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtHLDBEQUFZLENBQUNDLHVEQUFTLENBQUNMLEtBQUQsQ0FBVjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxjQUFkO0FBQUEsb0JBQ0dDLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNDLEVBQUQsRUFBS0MsS0FBTDtBQUFBLGdDQUNUO0FBQUEsd0JBQWlCSCx1REFBUyxDQUFDRSxFQUFEO0FBQTFCLGVBQVNDLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUztBQUFBLFdBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBWUQsR0FiTSxNQWFBO0FBQ0wsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtKLDBEQUFZLENBQUNDLHVEQUFTLENBQUNMLEtBQUQsQ0FBVjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGtCQUFLLE9BQU9DLEtBQVAsS0FBaUIsUUFBakIsR0FBNEJHLDBEQUFZLENBQUNDLHVEQUFTLENBQUNKLEtBQUQsQ0FBVixDQUF4QyxHQUE2REE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBTUQ7QUFDRixDQXhCRDs7S0FBTUYsa0I7QUEwQk4sK0RBQWVBLGtCQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EZXNjcmlwdGl2ZUxpc3RSb3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aXRsZUNhc2UsIHRpdGxlU3BhY2luZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBEZXNjcmlwdGl2ZUxpc3RSb3cgPSAoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICBpZiAobGFiZWwgPT09ICdpZCcgfHwgbGFiZWwgPT09ICdpbWFnZScgfHwgbGFiZWwgPT09ICduYW1lJyB8fCBsYWJlbCA9PT0gJ2Rlc2NyaXB0aW9uJyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gJydcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsUm93XCI+XG4gICAgICAgIDxkdD57dGl0bGVTcGFjaW5nKHRpdGxlQ2FzZShsYWJlbCkpfTwvZHQ+XG4gICAgICAgIDxkZD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm9CdWxsZXRMaXN0XCI+XG4gICAgICAgICAgICB7dmFsdWUubWFwKChsaSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9Pnt0aXRsZUNhc2UobGkpfTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2RkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsUm93XCI+XG4gICAgICAgIDxkdD57dGl0bGVTcGFjaW5nKHRpdGxlQ2FzZShsYWJlbCkpfTwvZHQ+XG4gICAgICAgIDxkZD57dHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdGl0bGVTcGFjaW5nKHRpdGxlQ2FzZSh2YWx1ZSkpIDogdmFsdWV9PC9kZD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpdmVMaXN0Um93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DescriptiveListRow.js\n");

/***/ })

});