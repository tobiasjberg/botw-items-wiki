/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/[category]";
exports.ids = ["pages/[category]"];
exports.modules = {

/***/ "./pages/[category].js":
/*!*****************************!*\
  !*** ./pages/[category].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"default\": function() { return /* binding */ ItemPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n\nvar _jsxFileName = \"/Users/tobiasberg/code/botw-items-wiki/botw-items-wiki/pages/[category].js\";\n\n\n\n\nasync function getStaticPaths() {\n  const categoriesarray = [\"creatures\", \"equipment\", \"materials\", \"monsters\", \"treasure\"];\n  const paths = categoriesarray.map(category => ({\n    params: {\n      category\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params: {\n    category\n  }\n}) {\n  const items = await fetch(`https://botw-compendium.herokuapp.com/api/v2/category/${category}`);\n  const itemjson = await items.json();\n  const itemData = itemjson.data;\n  return {\n    props: {\n      itemData: itemData,\n      category: category\n    }\n  };\n}\n;\nfunction ItemPage({\n  itemData,\n  category\n}) {\n  if (category == \"creatures\") {\n    itemData = itemData.food.concat(itemData.non_food);\n  }\n\n  const itemDataSorted = itemData.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(category), \" - BOTW Items Wiki\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"sectionTitle\",\n      children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(category)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"grid\",\n      children: itemDataSorted.map(({\n        name,\n        id,\n        image\n      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: `/item/${id.toString().toLowerCase()}`,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(name)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: image,\n              className: \"icon\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 15\n        }, this)\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 24\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 7\n  }, this);\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvW2NhdGVnb3J5XS5qcz9jMDJmIl0sIm5hbWVzIjpbImdldFN0YXRpY1BhdGhzIiwiY2F0ZWdvcmllc2FycmF5IiwicGF0aHMiLCJtYXAiLCJjYXRlZ29yeSIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJpdGVtcyIsImZldGNoIiwiaXRlbWpzb24iLCJqc29uIiwiaXRlbURhdGEiLCJkYXRhIiwicHJvcHMiLCJJdGVtUGFnZSIsImZvb2QiLCJjb25jYXQiLCJub25fZm9vZCIsIml0ZW1EYXRhU29ydGVkIiwic29ydCIsImEiLCJiIiwibmFtZSIsInRpdGxlQ2FzZSIsImlkIiwiaW1hZ2UiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxlQUFlQSxjQUFmLEdBQWdDO0FBQ25DLFFBQU1DLGVBQWUsR0FBRyxDQUFDLFdBQUQsRUFBZSxXQUFmLEVBQTZCLFdBQTdCLEVBQTJDLFVBQTNDLEVBQXdELFVBQXhELENBQXhCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRCxlQUFlLENBQUNFLEdBQWhCLENBQXFCQyxRQUFELEtBQWU7QUFBRUMsVUFBTSxFQUFFO0FBQUVEO0FBQUY7QUFBVixHQUFmLENBQXBCLENBQWQ7QUFDQSxTQUFPO0FBQ0xGLFNBREs7QUFFTEksWUFBUSxFQUFFO0FBRkwsR0FBUDtBQUlEO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFRixRQUFNLEVBQUU7QUFBRUQ7QUFBRjtBQUFWLENBQTlCLEVBQXdEO0FBQzdELFFBQU1JLEtBQUssR0FBRyxNQUFNQyxLQUFLLENBQUUseURBQXdETCxRQUFTLEVBQW5FLENBQXpCO0FBQ0EsUUFBTU0sUUFBUSxHQUFHLE1BQU1GLEtBQUssQ0FBQ0csSUFBTixFQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxJQUExQjtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xGLGNBQVEsRUFBRUEsUUFETDtBQUVMUixjQUFRLEVBQUVBO0FBRkw7QUFERixHQUFQO0FBTUQ7QUFBQTtBQUVjLFNBQVNXLFFBQVQsQ0FBa0I7QUFBQ0gsVUFBRDtBQUFXUjtBQUFYLENBQWxCLEVBQXdDO0FBQ3JELE1BQUlBLFFBQVEsSUFBSSxXQUFoQixFQUE2QjtBQUMzQlEsWUFBUSxHQUFHQSxRQUFRLENBQUNJLElBQVQsQ0FBY0MsTUFBZCxDQUFxQkwsUUFBUSxDQUFDTSxRQUE5QixDQUFYO0FBQ0Q7O0FBQ0QsUUFBTUMsY0FBYyxHQUFHUCxRQUFRLENBQUNRLElBQVQsQ0FBYyxDQUFDQyxDQUFELEVBQUdDLENBQUgsS0FBVUQsQ0FBQyxDQUFDRSxJQUFGLEdBQVNELENBQUMsQ0FBQ0MsSUFBWixHQUFvQixDQUFwQixHQUEwQkQsQ0FBQyxDQUFDQyxJQUFGLEdBQVNGLENBQUMsQ0FBQ0UsSUFBWixHQUFvQixDQUFDLENBQXJCLEdBQXlCLENBQXpFLENBQXZCO0FBRUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQVFDLHVEQUFTLENBQUNwQixRQUFELENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQSxnQkFBOEJvQix1REFBUyxDQUFDcEIsUUFBRDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsZ0JBQ0dlLGNBQWMsQ0FBQ2hCLEdBQWYsQ0FBbUIsQ0FBQztBQUFFb0IsWUFBRjtBQUFRRSxVQUFSO0FBQVlDO0FBQVosT0FBRCxrQkFDbEI7QUFBYyxpQkFBUyxFQUFDLE1BQXhCO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUcsU0FBUUQsRUFBRSxDQUFDRSxRQUFILEdBQWNDLFdBQWQsRUFBNEIsRUFBakQ7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFO0FBQUEsd0JBQUlKLHVEQUFTLENBQUNELElBQUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBSyxpQkFBRyxFQUFFRyxLQUFWO0FBQWlCLHVCQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVUQsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFpQkUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvW2NhdGVnb3J5XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyB0aXRsZUNhc2UgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXNhcnJheSA9IFtcImNyZWF0dXJlc1wiLCAgXCJlcXVpcG1lbnRcIiwgIFwibWF0ZXJpYWxzXCIsICBcIm1vbnN0ZXJzXCIsICBcInRyZWFzdXJlXCJdXG4gICAgY29uc3QgcGF0aHMgPSBjYXRlZ29yaWVzYXJyYXkubWFwKChjYXRlZ29yeSkgPT4gKHsgcGFyYW1zOiB7IGNhdGVnb3J5IH0gfSkpO1xuICAgIHJldHVybiB7XG4gICAgICBwYXRocyxcbiAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIFxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgY2F0ZWdvcnkgfSB9KSB7XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ib3R3LWNvbXBlbmRpdW0uaGVyb2t1YXBwLmNvbS9hcGkvdjIvY2F0ZWdvcnkvJHtjYXRlZ29yeX1gKVxuICAgIGNvbnN0IGl0ZW1qc29uID0gYXdhaXQgaXRlbXMuanNvbigpXG4gICAgY29uc3QgaXRlbURhdGEgPSBpdGVtanNvbi5kYXRhXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaXRlbURhdGE6IGl0ZW1EYXRhLFxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1QYWdlKHtpdGVtRGF0YSwgY2F0ZWdvcnl9KSB7XG4gICAgaWYgKGNhdGVnb3J5ID09IFwiY3JlYXR1cmVzXCIpIHtcbiAgICAgIGl0ZW1EYXRhID0gaXRlbURhdGEuZm9vZC5jb25jYXQoaXRlbURhdGEubm9uX2Zvb2QpXG4gICAgfVxuICAgIGNvbnN0IGl0ZW1EYXRhU29ydGVkID0gaXRlbURhdGEuc29ydCgoYSxiKSA9PiAoYS5uYW1lID4gYi5uYW1lKSA/IDEgOiAoKGIubmFtZSA+IGEubmFtZSkgPyAtMSA6IDApKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57dGl0bGVDYXNlKGNhdGVnb3J5KX0gLSBCT1RXIEl0ZW1zIFdpa2k8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uVGl0bGVcIj57dGl0bGVDYXNlKGNhdGVnb3J5KX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICB7aXRlbURhdGFTb3J0ZWQubWFwKCh7IG5hbWUsIGlkLCBpbWFnZSB9KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9pdGVtLyR7aWQudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPHA+e3RpdGxlQ2FzZShuYW1lKX08L3A+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGNsYXNzTmFtZT1cImljb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[category].js\n");

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titleCase\": function() { return /* binding */ titleCase; }\n/* harmony export */ });\nfunction titleCase(string) {\n  return string.replace(/(^\\w{1})|(\\s+\\w{1})/g, letter => letter.toUpperCase());\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vdXRpbHMvdXRpbHMuanM/OTBjMCJdLCJuYW1lcyI6WyJ0aXRsZUNhc2UiLCJzdHJpbmciLCJyZXBsYWNlIiwibGV0dGVyIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUM5QixTQUFPQSxNQUFNLENBQUNDLE9BQVAsQ0FBZSxzQkFBZixFQUF1Q0MsTUFBTSxJQUFJQSxNQUFNLENBQUNDLFdBQVAsRUFBakQsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vdXRpbHMvdXRpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdGl0bGVDYXNlKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKF5cXHd7MX0pfChcXHMrXFx3ezF9KS9nLCBsZXR0ZXIgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/utils.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_js"], function() { return __webpack_exec__("./pages/[category].js"); });
module.exports = __webpack_exports__;

})();