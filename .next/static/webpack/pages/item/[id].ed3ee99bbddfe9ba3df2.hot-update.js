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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tobiasberg/code/botw-items-wiki/components/DescriptiveListRow.js\",\n    _this = undefined;\n\n\n\nvar DescriptiveListRow = function DescriptiveListRow(_ref) {\n  var label = _ref.label,\n      value = _ref.value;\n\n  if (label === 'id' || label === 'image' || label === 'name' || value === null || value === '') {\n    return ''; // } else if (value.typeof ) {\n    //   <div className=\"dlRow\">\n    //     <dt>Drops</dt>\n    //     <dd>\n    //       <ul className=\"noBulletList\">\n    //         {itemData.drops.map((drop, index) => (\n    //           <li key={index}>{titleCase(drop)}</li>\n    //         ))}\n    //       </ul>\n    //     </dd>\n    //   </div>\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"dlRow\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n        children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.titleSpacing)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.titleCase)(label))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n        children: [value, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 18\n        }, _this), typeof value, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 38\n        }, _this), Array.isArray(value) ? 'true' : 'false']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }, _this);\n  }\n};\n\n_c = DescriptiveListRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DescriptiveListRow);\n\nvar _c;\n\n$RefreshReg$(_c, \"DescriptiveListRow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNjcmlwdGl2ZUxpc3RSb3cuanM/ZjQzNSJdLCJuYW1lcyI6WyJEZXNjcmlwdGl2ZUxpc3RSb3ciLCJsYWJlbCIsInZhbHVlIiwidGl0bGVTcGFjaW5nIiwidGl0bGVDYXNlIiwiQXJyYXkiLCJpc0FycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUFzQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQy9DLE1BQUlELEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssT0FBNUIsSUFBdUNBLEtBQUssS0FBSyxNQUFqRCxJQUEyREMsS0FBSyxLQUFLLElBQXJFLElBQTZFQSxLQUFLLEtBQUssRUFBM0YsRUFBK0Y7QUFDN0YsV0FBTyxFQUFQLENBRDZGLENBRS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyxHQWJELE1BYU87QUFDUCx3QkFDRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0MsMERBQVksQ0FBQ0MsdURBQVMsQ0FBQ0gsS0FBRCxDQUFWO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUEsbUJBQUtDLEtBQUwsZUFBVztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFYLEVBQWtCLE9BQU9BLEtBQXpCLGVBQStCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQS9CLEVBQXNDRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osS0FBZCxJQUF1QixNQUF2QixHQUFnQyxPQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtFO0FBQ0gsQ0FyQkQ7O0tBQU1GLGtCO0FBdUJOLCtEQUFlQSxrQkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVzY3JpcHRpdmVMaXN0Um93LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGl0bGVDYXNlLCB0aXRsZVNwYWNpbmcgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuY29uc3QgRGVzY3JpcHRpdmVMaXN0Um93ID0gKHsgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgaWYgKGxhYmVsID09PSAnaWQnIHx8IGxhYmVsID09PSAnaW1hZ2UnIHx8IGxhYmVsID09PSAnbmFtZScgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnXG4gIC8vIH0gZWxzZSBpZiAodmFsdWUudHlwZW9mICkge1xuICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiZGxSb3dcIj5cbiAgLy8gICAgIDxkdD5Ecm9wczwvZHQ+XG4gIC8vICAgICA8ZGQ+XG4gIC8vICAgICAgIDx1bCBjbGFzc05hbWU9XCJub0J1bGxldExpc3RcIj5cbiAgLy8gICAgICAgICB7aXRlbURhdGEuZHJvcHMubWFwKChkcm9wLCBpbmRleCkgPT4gKFxuICAvLyAgICAgICAgICAgPGxpIGtleT17aW5kZXh9Pnt0aXRsZUNhc2UoZHJvcCl9PC9saT5cbiAgLy8gICAgICAgICApKX1cbiAgLy8gICAgICAgPC91bD5cbiAgLy8gICAgIDwvZGQ+XG4gIC8vICAgPC9kaXY+XG4gIH0gZWxzZSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkbFJvd1wiPlxuICAgICAgPGR0Pnt0aXRsZVNwYWNpbmcodGl0bGVDYXNlKGxhYmVsKSl9PC9kdD5cbiAgICAgIDxkZD57dmFsdWV9PGJyIC8+e3R5cGVvZiB2YWx1ZX08YnIgLz57QXJyYXkuaXNBcnJheSh2YWx1ZSkgPyAndHJ1ZScgOiAnZmFsc2UnfTwvZGQ+XG4gICAgPC9kaXY+XG4gICl9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGl2ZUxpc3RSb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DescriptiveListRow.js\n");

/***/ })

});