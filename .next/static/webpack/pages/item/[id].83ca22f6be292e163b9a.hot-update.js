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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ItemPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/tobiasberg/code/botw-items-wiki/botw-items-wiki/pages/item/[id].js\";\n\n\n\n;\nvar __N_SSG = true;\nfunction ItemPage(_ref) {\n  var _this = this;\n\n  var itemData = _ref.itemData;\n  var altText = \"Image of \" + itemData.name;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [itemData.name.replace(/(^\\w{1})|(\\s+\\w{1})/g, function (letter) {\n          return letter.toUpperCase();\n        }), \" - BOTW Items Wiki\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: itemData.image,\n      alt: altText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"Name: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), itemData.name.replace(/(^\\w{1})|(\\s+\\w{1})/g, function (letter) {\n        return letter.toUpperCase();\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Category: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 20\n      }, this), itemData.category.replace(/(^\\w{1})|(\\s+\\w{1})/g, function (letter) {\n        return letter.toUpperCase();\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Description: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 23\n      }, this), itemData.description]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), itemData.common_locations && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Common Locations (array): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: itemData.common_locations.forEach(function (location) {\n          /*#__PURE__*/\n          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: location\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 38\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, this), itemData.drops && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Drops (array) (monsters, treasure): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: itemData.drops.forEach(function (drop) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: drop\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 48\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, this), itemData.cooking_effect && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Cooking Effect (materials, creatures): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 51\n      }, this), itemData.cooking_effect]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, this), itemData.hearts_recovered && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Hearts Recovered (materials, creatures): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 53\n      }, this), itemData.hearts_recovered]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, this), itemData.defense && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Defense (equipment): \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 33\n      }, this), itemData.defense]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Back to \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\".concat(itemData.category.toLowerCase()),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: itemData.category.replace(/(^\\w{1})|(\\s+\\w{1})/g, function (letter) {\n              return letter.toUpperCase();\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 72\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 69\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 18\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n_c = ItemPage;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbS9baWRdLmpzPzM1MWYiXSwibmFtZXMiOlsiSXRlbVBhZ2UiLCJpdGVtRGF0YSIsImFsdFRleHQiLCJuYW1lIiwicmVwbGFjZSIsImxldHRlciIsInRvVXBwZXJDYXNlIiwiaW1hZ2UiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiY29tbW9uX2xvY2F0aW9ucyIsImZvckVhY2giLCJsb2NhdGlvbiIsImRyb3BzIiwiZHJvcCIsImNvb2tpbmdfZWZmZWN0IiwiaGVhcnRzX3JlY292ZXJlZCIsImRlZmVuc2UiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBbUNDOztBQUVjLFNBQVNBLFFBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDM0MsTUFBTUMsT0FBTyxHQUFHLGNBQWFELFFBQVEsQ0FBQ0UsSUFBdEM7QUFDQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFBUUYsUUFBUSxDQUFDRSxJQUFULENBQWNDLE9BQWQsQ0FBc0Isc0JBQXRCLEVBQThDLFVBQUFDLE1BQU07QUFBQSxpQkFBSUEsTUFBTSxDQUFDQyxXQUFQLEVBQUo7QUFBQSxTQUFwRCxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssU0FBRyxFQUFFTCxRQUFRLENBQUNNLEtBQW5CO0FBQTBCLFNBQUcsRUFBRUw7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBQSx3Q0FBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVYsRUFBaUJELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxPQUFkLENBQXNCLHNCQUF0QixFQUE4QyxVQUFBQyxNQUFNO0FBQUEsZUFBSUEsTUFBTSxDQUFDQyxXQUFQLEVBQUo7QUFBQSxPQUFwRCxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQUEsNENBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFiLEVBQW9CTCxRQUFRLENBQUNPLFFBQVQsQ0FBa0JKLE9BQWxCLENBQTBCLHNCQUExQixFQUFrRCxVQUFBQyxNQUFNO0FBQUEsZUFBSUEsTUFBTSxDQUFDQyxXQUFQLEVBQUo7QUFBQSxPQUF4RCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUEsK0NBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBaEIsRUFBdUJMLFFBQVEsQ0FBQ1EsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsRUFRR1IsUUFBUSxDQUFDUyxnQkFBVCxpQkFDQztBQUFBLDREQUE2QjtBQUFBLGtCQUMzQlQsUUFBUSxDQUFDUyxnQkFBVCxDQUEwQkMsT0FBMUIsQ0FBa0MsVUFBQ0MsUUFBRCxFQUFjO0FBQzlDO0FBQUE7QUFBQSxzQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0QsU0FGRDtBQUQyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKLEVBZUdYLFFBQVEsQ0FBQ1ksS0FBVCxpQkFDQztBQUFBLHNFQUF1QztBQUFBLGtCQUFLWixRQUFRLENBQUNZLEtBQVQsQ0FBZUYsT0FBZixDQUF1QixVQUFDRyxJQUFEO0FBQUEsOEJBQy9EO0FBQUEsc0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEK0Q7QUFBQSxTQUF2QjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJKLEVBb0JHYixRQUFRLENBQUNjLGNBQVQsaUJBQ0M7QUFBQSx5RUFBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUExQyxFQUFpRGQsUUFBUSxDQUFDYyxjQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkosRUF1QkdkLFFBQVEsQ0FBQ2UsZ0JBQVQsaUJBQ0M7QUFBQSwyRUFBNEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUE1QyxFQUFtRGYsUUFBUSxDQUFDZSxnQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKLEVBMEJHZixRQUFRLENBQUNnQixPQUFULGlCQUNDO0FBQUEsdURBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBeEIsRUFBK0JoQixRQUFRLENBQUNnQixPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkosZUE2QkU7QUFBQSwwQ0FBVyw4REFBQyxrREFBRDtBQUFNLFlBQUksYUFBTWhCLFFBQVEsQ0FBQ08sUUFBVCxDQUFrQlUsV0FBbEIsRUFBTixDQUFWO0FBQUEsK0JBQW1EO0FBQUEsaUNBQUc7QUFBQSxzQkFBT2pCLFFBQVEsQ0FBQ08sUUFBVCxDQUFrQkosT0FBbEIsQ0FBMEIsc0JBQTFCLEVBQWtELFVBQUFDLE1BQU07QUFBQSxxQkFBSUEsTUFBTSxDQUFDQyxXQUFQLEVBQUo7QUFBQSxhQUF4RDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7S0FuQ3VCTixRO0FBbUN2QiIsImZpbGUiOiIuL3BhZ2VzL2l0ZW0vW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYm90dy1jb21wZW5kaXVtLmhlcm9rdWFwcC5jb20vYXBpL3YyJylcbiAgY29uc3QgcmVzanNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc3QgZGF0YSA9IHJlc2pzb24uZGF0YVxuICBjb25zdCBjcmVhdHVyZXNmb29kYXJyYXkgPSBkYXRhLmNyZWF0dXJlcy5mb29kXG4gIGNvbnN0IGNyZWF0dXJlc25vbmZvb2RhcnJheSA9IGRhdGEuY3JlYXR1cmVzLm5vbl9mb29kXG4gIGNvbnN0IGVxdWlwbWVudGFycmF5ID0gZGF0YS5lcXVpcG1lbnRcbiAgY29uc3QgbWF0ZXJpYWxzYXJyYXkgPSBkYXRhLm1hdGVyaWFsc1xuICBjb25zdCBtb25zdGVyc2FycmF5ID0gZGF0YS5tb25zdGVyc1xuICBjb25zdCB0cmVhc3VyZWFycmF5ID0gZGF0YS50cmVhc3VyZVxuICBjb25zdCBjcmVhdHVyZXNmb29kYXJyYXlpZHMgPSBjcmVhdHVyZXNmb29kYXJyYXkubWFwKChjcmVhdHVyZXNmb29kKSA9PiBjcmVhdHVyZXNmb29kLmlkKTtcbiAgY29uc3QgY3JlYXR1cmVzbm9uZm9vZGFycmF5aWRzID0gY3JlYXR1cmVzbm9uZm9vZGFycmF5Lm1hcCgoY3JlYXR1cmVzbm9uZm9vZCkgPT4gY3JlYXR1cmVzbm9uZm9vZC5pZCk7XG4gIGNvbnN0IGVxdWlwbWVudGFycmF5aWRzID0gZXF1aXBtZW50YXJyYXkubWFwKChlcXVpcG1lbnQpID0+IGVxdWlwbWVudC5pZCk7XG4gIGNvbnN0IG1hdGVyaWFsc2FycmF5aWRzID0gbWF0ZXJpYWxzYXJyYXkubWFwKChtYXRlcmlhbHMpID0+IG1hdGVyaWFscy5pZCk7XG4gIGNvbnN0IG1vbnN0ZXJzYXJyYXlpZHMgPSBtb25zdGVyc2FycmF5Lm1hcCgobW9uc3RlcnMpID0+IG1vbnN0ZXJzLmlkKTtcbiAgY29uc3QgdHJlYXN1cmVhcnJheWlkcyA9IHRyZWFzdXJlYXJyYXkubWFwKCh0cmVhc3VyZSkgPT4gdHJlYXN1cmUuaWQpO1xuICBjb25zdCBpZHMgPSBjcmVhdHVyZXNmb29kYXJyYXlpZHMuY29uY2F0KGNyZWF0dXJlc25vbmZvb2RhcnJheWlkcywgZXF1aXBtZW50YXJyYXlpZHMsIG1hdGVyaWFsc2FycmF5aWRzLCBtb25zdGVyc2FycmF5aWRzLCB0cmVhc3VyZWFycmF5aWRzKVxuICBjb25zdCBwYXRocyA9IGlkcy5tYXAoKGlkKSA9PiAoeyBwYXJhbXM6IHsgaWQ6IGlkLnRvU3RyaW5nKCkgfSB9KSk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgaWQgfSB9KSB7XG4gIGNvbnN0IGl0ZW1zID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYm90dy1jb21wZW5kaXVtLmhlcm9rdWFwcC5jb20vYXBpL3YyL2VudHJ5LyR7aWR9YClcbiAgY29uc3QgaXRlbWpzb24gPSBhd2FpdCBpdGVtcy5qc29uKClcbiAgY29uc3QgaXRlbURhdGEgPSBpdGVtanNvbi5kYXRhXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGl0ZW1EYXRhOiBpdGVtRGF0YVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtUGFnZSh7aXRlbURhdGF9KSB7XG4gIGNvbnN0IGFsdFRleHQgPSBcIkltYWdlIG9mIFwiKyBpdGVtRGF0YS5uYW1lO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntpdGVtRGF0YS5uYW1lLnJlcGxhY2UoLyheXFx3ezF9KXwoXFxzK1xcd3sxfSkvZywgbGV0dGVyID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKX0gLSBCT1RXIEl0ZW1zIFdpa2k8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGltZyBzcmM9e2l0ZW1EYXRhLmltYWdlfSBhbHQ9e2FsdFRleHR9IC8+XG4gICAgICA8aDE+TmFtZTogPGJyIC8+e2l0ZW1EYXRhLm5hbWUucmVwbGFjZSgvKF5cXHd7MX0pfChcXHMrXFx3ezF9KS9nLCBsZXR0ZXIgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpfTwvaDE+XG4gICAgICA8cD5DYXRlZ29yeTogPGJyIC8+e2l0ZW1EYXRhLmNhdGVnb3J5LnJlcGxhY2UoLyheXFx3ezF9KXwoXFxzK1xcd3sxfSkvZywgbGV0dGVyID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKX08L3A+XG4gICAgICA8cD5EZXNjcmlwdGlvbjogPGJyIC8+e2l0ZW1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHtpdGVtRGF0YS5jb21tb25fbG9jYXRpb25zICYmXG4gICAgICAgIDxwPkNvbW1vbiBMb2NhdGlvbnMgKGFycmF5KTogPHVsPntcbiAgICAgICAgICBpdGVtRGF0YS5jb21tb25fbG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICA8bGk+e2xvY2F0aW9ufTwvbGk+XG4gICAgICAgICAgfSlcbiAgICAgICAgICB9PC91bD48L3A+XG4gICAgICAgIH1cbiAgICAgIHtpdGVtRGF0YS5kcm9wcyAmJlxuICAgICAgICA8cD5Ecm9wcyAoYXJyYXkpIChtb25zdGVycywgdHJlYXN1cmUpOiA8dWw+e2l0ZW1EYXRhLmRyb3BzLmZvckVhY2goKGRyb3ApID0+IChcbiAgICAgICAgICAgIDxsaT57ZHJvcH08L2xpPlxuICAgICAgICAgICkpfTwvdWw+PC9wPlxuICAgICAgfVxuICAgICAge2l0ZW1EYXRhLmNvb2tpbmdfZWZmZWN0ICYmXG4gICAgICAgIDxwPkNvb2tpbmcgRWZmZWN0IChtYXRlcmlhbHMsIGNyZWF0dXJlcyk6IDxiciAvPntpdGVtRGF0YS5jb29raW5nX2VmZmVjdH08L3A+XG4gICAgICB9XG4gICAgICB7aXRlbURhdGEuaGVhcnRzX3JlY292ZXJlZCAmJlxuICAgICAgICA8cD5IZWFydHMgUmVjb3ZlcmVkIChtYXRlcmlhbHMsIGNyZWF0dXJlcyk6IDxiciAvPntpdGVtRGF0YS5oZWFydHNfcmVjb3ZlcmVkfTwvcD5cbiAgICAgIH1cbiAgICAgIHtpdGVtRGF0YS5kZWZlbnNlICYmXG4gICAgICAgIDxwPkRlZmVuc2UgKGVxdWlwbWVudCk6IDxiciAvPntpdGVtRGF0YS5kZWZlbnNlfTwvcD5cbiAgICAgIH1cbiAgICAgIDxwPkJhY2sgdG8gPExpbmsgaHJlZj17YC8ke2l0ZW1EYXRhLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCl9YH0+PGE+PHNwYW4+e2l0ZW1EYXRhLmNhdGVnb3J5LnJlcGxhY2UoLyheXFx3ezF9KXwoXFxzK1xcd3sxfSkvZywgbGV0dGVyID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKX08L3NwYW4+PC9hPjwvTGluaz48L3A+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/item/[id].js\n");

/***/ })

});