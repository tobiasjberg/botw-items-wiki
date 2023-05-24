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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ItemPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ \"./utils/utils.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/tobiasberg/code/botw-items-wiki/pages/item/[id].js\";\n\n\n\n\n;\nvar __N_SSG = true;\nfunction ItemPage(_ref) {\n  var _this = this;\n\n  var itemData = _ref.itemData;\n  var altText = \"Image of \" + itemData.name;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(itemData.name), \" - BOTW Items Wiki\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"pageTwoColumn\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"imageColumn\",\n        children: itemData.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: itemData.image,\n          alt: altText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(itemData.name)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this), itemData.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: itemData.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n          children: [itemData.common_locations != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"common_locations\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"noBulletList\",\n                children: itemData.common_locations.map(function (location) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(location)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 23\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, this), itemData.drops != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"Drops\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"noBulletList\",\n                children: itemData.drops.map(function (drop) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(drop)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 78,\n                    columnNumber: 23\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, this), itemData.cooking_effect != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"Cooking Effect\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: itemData.cooking_effect\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, this), itemData.hearts_recovered != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"Hearts Recovered\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: itemData.hearts_recovered\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, this), itemData.defense != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"Defense\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: itemData.defense\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Back to \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\".concat(itemData.category.toLowerCase()),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: [\"Category - \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(itemData.category)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 83\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 69\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 18\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n_c = ItemPage;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbS9baWRdLmpzPzM1MWYiXSwibmFtZXMiOlsiSXRlbVBhZ2UiLCJpdGVtRGF0YSIsImFsdFRleHQiLCJuYW1lIiwidGl0bGVDYXNlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImNvbW1vbl9sb2NhdGlvbnMiLCJtYXAiLCJsb2NhdGlvbiIsImRyb3BzIiwiZHJvcCIsImNvb2tpbmdfZWZmZWN0IiwiaGVhcnRzX3JlY292ZXJlZCIsImRlZmVuc2UiLCJjYXRlZ29yeSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFtQ0M7O0FBRWMsU0FBU0EsUUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUMzQyxNQUFNQyxPQUFPLEdBQUcsY0FBYUQsUUFBUSxDQUFDRSxJQUF0QztBQUNBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLG1CQUFRQyx1REFBUyxDQUFDSCxRQUFRLENBQUNFLElBQVYsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsa0JBQ0dGLFFBQVEsQ0FBQ0ksS0FBVCxpQkFDQztBQUFLLGFBQUcsRUFBRUosUUFBUSxDQUFDSSxLQUFuQjtBQUEwQixhQUFHLEVBQUVIO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFBLGdDQUNFO0FBQUEsb0JBQUtFLHVEQUFTLENBQUNILFFBQVEsQ0FBQ0UsSUFBVjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR0YsUUFBUSxDQUFDSyxXQUFULGlCQUNDO0FB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O0FBaUVEO0tBbkV1QmYsUTtBQW1FdkIiLCJmaWxlIjoiLi9wYWdlcy9pdGVtL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgdGl0bGVDYXNlLCB0aXRsZVNwYWNpbmcgfSBmcm9tICcuLi8uLi91dGlscy91dGlscydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9ib3R3LWNvbXBlbmRpdW0uaGVyb2t1YXBwLmNvbS9hcGkvdjInKVxuICBjb25zdCByZXNqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zdCBkYXRhID0gcmVzanNvbi5kYXRhXG4gIGNvbnN0IGNyZWF0dXJlc2Zvb2RhcnJheSA9IGRhdGEuY3JlYXR1cmVzLmZvb2RcbiAgY29uc3QgY3JlYXR1cmVzbm9uZm9vZGFycmF5ID0gZGF0YS5jcmVhdHVyZXMubm9uX2Zvb2RcbiAgY29uc3QgZXF1aXBtZW50YXJyYXkgPSBkYXRhLmVxdWlwbWVudFxuICBjb25zdCBtYXRlcmlhbHNhcnJheSA9IGRhdGEubWF0ZXJpYWxzXG4gIGNvbnN0IG1vbnN0ZXJzYXJyYXkgPSBkYXRhLm1vbnN0ZXJzXG4gIGNvbnN0IHRyZWFzdXJlYXJyYXkgPSBkYXRhLnRyZWFzdXJlXG4gIGNvbnN0IGNyZWF0dXJlc2Zvb2RhcnJheWlkcyA9IGNyZWF0dXJlc2Zvb2RhcnJheS5tYXAoKGNyZWF0dXJlc2Zvb2QpID0+IGNyZWF0dXJlc2Zvb2QuaWQpO1xuICBjb25zdCBjcmVhdHVyZXNub25mb29kYXJyYXlpZHMgPSBjcmVhdHVyZXNub25mb29kYXJyYXkubWFwKChjcmVhdHVyZXNub25mb29kKSA9PiBjcmVhdHVyZXNub25mb29kLmlkKTtcbiAgY29uc3QgZXF1aXBtZW50YXJyYXlpZHMgPSBlcXVpcG1lbnRhcnJheS5tYXAoKGVxdWlwbWVudCkgPT4gZXF1aXBtZW50LmlkKTtcbiAgY29uc3QgbWF0ZXJpYWxzYXJyYXlpZHMgPSBtYXRlcmlhbHNhcnJheS5tYXAoKG1hdGVyaWFscykgPT4gbWF0ZXJpYWxzLmlkKTtcbiAgY29uc3QgbW9uc3RlcnNhcnJheWlkcyA9IG1vbnN0ZXJzYXJyYXkubWFwKChtb25zdGVycykgPT4gbW9uc3RlcnMuaWQpO1xuICBjb25zdCB0cmVhc3VyZWFycmF5aWRzID0gdHJlYXN1cmVhcnJheS5tYXAoKHRyZWFzdXJlKSA9PiB0cmVhc3VyZS5pZCk7XG4gIGNvbnN0IGlkcyA9IGNyZWF0dXJlc2Zvb2RhcnJheWlkcy5jb25jYXQoY3JlYXR1cmVzbm9uZm9vZGFycmF5aWRzLCBlcXVpcG1lbnRhcnJheWlkcywgbWF0ZXJpYWxzYXJyYXlpZHMsIG1vbnN0ZXJzYXJyYXlpZHMsIHRyZWFzdXJlYXJyYXlpZHMpXG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcCgoaWQpID0+ICh7IHBhcmFtczogeyBpZDogaWQudG9TdHJpbmcoKSB9IH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBpZCB9IH0pIHtcbiAgY29uc3QgaXRlbXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ib3R3LWNvbXBlbmRpdW0uaGVyb2t1YXBwLmNvbS9hcGkvdjIvZW50cnkvJHtpZH1gKVxuICBjb25zdCBpdGVtanNvbiA9IGF3YWl0IGl0ZW1zLmpzb24oKVxuICBjb25zdCBpdGVtRGF0YSA9IGl0ZW1qc29uLmRhdGFcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbURhdGE6IGl0ZW1EYXRhXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1QYWdlKHtpdGVtRGF0YX0pIHtcbiAgY29uc3QgYWx0VGV4dCA9IFwiSW1hZ2Ugb2YgXCIrIGl0ZW1EYXRhLm5hbWU7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlQ2FzZShpdGVtRGF0YS5uYW1lKX0gLSBCT1RXIEl0ZW1zIFdpa2k8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlVHdvQ29sdW1uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VDb2x1bW5cIj5cbiAgICAgICAgICB7aXRlbURhdGEuaW1hZ2UgJiZcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtRGF0YS5pbWFnZX0gYWx0PXthbHRUZXh0fSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnt0aXRsZUNhc2UoaXRlbURhdGEubmFtZSl9PC9oMT5cbiAgICAgICAgICB7aXRlbURhdGEuZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICAgIDxwPntpdGVtRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgIHtpdGVtRGF0YS5jb21tb25fbG9jYXRpb25zICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbFJvd1wiPlxuICAgICAgICAgICAgICAgIDxkdD5jb21tb25fbG9jYXRpb25zPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm9CdWxsZXRMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtRGF0YS5jb21tb25fbG9jYXRpb25zLm1hcCgobG9jYXRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+e3RpdGxlQ2FzZShsb2NhdGlvbil9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2l0ZW1EYXRhLmRyb3BzICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbFJvd1wiPlxuICAgICAgICAgICAgICAgIDxkdD5Ecm9wczwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5vQnVsbGV0TGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbURhdGEuZHJvcHMubWFwKChkcm9wKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPnt0aXRsZUNhc2UoZHJvcCl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2l0ZW1EYXRhLmNvb2tpbmdfZWZmZWN0ICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbFJvd1wiPlxuICAgICAgICAgICAgICAgIDxkdD5Db29raW5nIEVmZmVjdDwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPntpdGVtRGF0YS5jb29raW5nX2VmZmVjdH08L2RkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtpdGVtRGF0YS5oZWFydHNfcmVjb3ZlcmVkICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbFJvd1wiPlxuICAgICAgICAgICAgICAgIDxkdD5IZWFydHMgUmVjb3ZlcmVkPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+e2l0ZW1EYXRhLmhlYXJ0c19yZWNvdmVyZWR9PC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7aXRlbURhdGEuZGVmZW5zZSAhPSBudWxsICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxSb3dcIj5cbiAgICAgICAgICAgICAgICA8ZHQ+RGVmZW5zZTwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPntpdGVtRGF0YS5kZWZlbnNlfTwvZGQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8cD5CYWNrIHRvIDxMaW5rIGhyZWY9e2AvJHtpdGVtRGF0YS5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpfWB9PjxhPkNhdGVnb3J5IC0gPHNwYW4+e3RpdGxlQ2FzZShpdGVtRGF0YS5jYXRlZ29yeSl9PC9zcGFuPjwvYT48L0xpbms+PC9wPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/item/[id].js\n");

/***/ })

});