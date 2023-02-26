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
exports.id = "pages/item/[id]";
exports.ids = ["pages/item/[id]"];
exports.modules = {

/***/ "./pages/item/[id].js":
/*!****************************!*\
  !*** ./pages/item/[id].js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"default\": function() { return /* binding */ ItemPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ \"./utils/utils.js\");\n\nvar _jsxFileName = \"/Users/tobiasberg/code/botw-items-wiki/botw-items-wiki/pages/item/[id].js\";\n\n\n\n\nasync function getStaticPaths() {\n  const res = await fetch('https://botw-compendium.herokuapp.com/api/v2');\n  const resjson = await res.json();\n  const data = resjson.data;\n  const creaturesfoodarray = data.creatures.food;\n  const creaturesnonfoodarray = data.creatures.non_food;\n  const equipmentarray = data.equipment;\n  const materialsarray = data.materials;\n  const monstersarray = data.monsters;\n  const treasurearray = data.treasure;\n  const creaturesfoodarrayids = creaturesfoodarray.map(creaturesfood => creaturesfood.id);\n  const creaturesnonfoodarrayids = creaturesnonfoodarray.map(creaturesnonfood => creaturesnonfood.id);\n  const equipmentarrayids = equipmentarray.map(equipment => equipment.id);\n  const materialsarrayids = materialsarray.map(materials => materials.id);\n  const monstersarrayids = monstersarray.map(monsters => monsters.id);\n  const treasurearrayids = treasurearray.map(treasure => treasure.id);\n  const ids = creaturesfoodarrayids.concat(creaturesnonfoodarrayids, equipmentarrayids, materialsarrayids, monstersarrayids, treasurearrayids);\n  const paths = ids.map(id => ({\n    params: {\n      id: id.toString()\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params: {\n    id\n  }\n}) {\n  const items = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`);\n  const itemjson = await items.json();\n  const itemData = itemjson.data;\n  return {\n    props: {\n      itemData: itemData\n    }\n  };\n}\n;\nfunction ItemPage({\n  itemData\n}) {\n  const altText = \"Image of \" + itemData.name;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(itemData.name), \" - BOTW Items Wiki\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"pageTwoColumn\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: itemData.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: itemData.image,\n          alt: altText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(itemData.name)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this), itemData.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: itemData.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n          children: [itemData.common_locations != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"Common Locations\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"noBulletList\",\n                children: itemData.common_locations.map(location => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                  children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(location)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 23\n                }, this))\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, this), itemData.drops != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"Drops\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"noBulletList\",\n                children: itemData.drops.map(drop => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                  children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(drop)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 23\n                }, this))\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, this), itemData.cooking_effect != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"Cooking Effect\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: itemData.cooking_effect\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, this), itemData.hearts_recovered != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"Hearts Recovered\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: itemData.hearts_recovered\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, this), itemData.defense != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dlRow\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n              children: \"Defense\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n              children: itemData.defense\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Back to \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: `/${itemData.category.toLowerCase()}`,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: [\"Category - \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.titleCase)(itemData.category)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 83\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 69\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 18\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvaXRlbS9baWRdLmpzPzM1MWYiXSwibmFtZXMiOlsiZ2V0U3RhdGljUGF0aHMiLCJyZXMiLCJmZXRjaCIsInJlc2pzb24iLCJqc29uIiwiZGF0YSIsImNyZWF0dXJlc2Zvb2RhcnJheSIsImNyZWF0dXJlcyIsImZvb2QiLCJjcmVhdHVyZXNub25mb29kYXJyYXkiLCJub25fZm9vZCIsImVxdWlwbWVudGFycmF5IiwiZXF1aXBtZW50IiwibWF0ZXJpYWxzYXJyYXkiLCJtYXRlcmlhbHMiLCJtb25zdGVyc2FycmF5IiwibW9uc3RlcnMiLCJ0cmVhc3VyZWFycmF5IiwidHJlYXN1cmUiLCJjcmVhdHVyZXNmb29kYXJyYXlpZHMiLCJtYXAiLCJjcmVhdHVyZXNmb29kIiwiaWQiLCJjcmVhdHVyZXNub25mb29kYXJyYXlpZHMiLCJjcmVhdHVyZXNub25mb29kIiwiZXF1aXBtZW50YXJyYXlpZHMiLCJtYXRlcmlhbHNhcnJheWlkcyIsIm1vbnN0ZXJzYXJyYXlpZHMiLCJ0cmVhc3VyZWFycmF5aWRzIiwiaWRzIiwiY29uY2F0IiwicGF0aHMiLCJwYXJhbXMiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJpdGVtcyIsIml0ZW1qc29uIiwiaXRlbURhdGEiLCJwcm9wcyIsIkl0ZW1QYWdlIiwiYWx0VGV4dCIsIm5hbWUiLCJ0aXRsZUNhc2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiY29tbW9uX2xvY2F0aW9ucyIsImxvY2F0aW9uIiwiZHJvcHMiLCJkcm9wIiwiY29va2luZ19lZmZlY3QiLCJoZWFydHNfcmVjb3ZlcmVkIiwiZGVmZW5zZSIsImNhdGVnb3J5IiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLGVBQWVBLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw4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O0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpRUQ7QUFBQSIsImZpbGUiOiIuL3BhZ2VzL2l0ZW0vW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyB0aXRsZUNhc2UgfSBmcm9tICcuLi8uLi91dGlscy91dGlscydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9ib3R3LWNvbXBlbmRpdW0uaGVyb2t1YXBwLmNvbS9hcGkvdjInKVxuICBjb25zdCByZXNqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zdCBkYXRhID0gcmVzanNvbi5kYXRhXG4gIGNvbnN0IGNyZWF0dXJlc2Zvb2RhcnJheSA9IGRhdGEuY3JlYXR1cmVzLmZvb2RcbiAgY29uc3QgY3JlYXR1cmVzbm9uZm9vZGFycmF5ID0gZGF0YS5jcmVhdHVyZXMubm9uX2Zvb2RcbiAgY29uc3QgZXF1aXBtZW50YXJyYXkgPSBkYXRhLmVxdWlwbWVudFxuICBjb25zdCBtYXRlcmlhbHNhcnJheSA9IGRhdGEubWF0ZXJpYWxzXG4gIGNvbnN0IG1vbnN0ZXJzYXJyYXkgPSBkYXRhLm1vbnN0ZXJzXG4gIGNvbnN0IHRyZWFzdXJlYXJyYXkgPSBkYXRhLnRyZWFzdXJlXG4gIGNvbnN0IGNyZWF0dXJlc2Zvb2RhcnJheWlkcyA9IGNyZWF0dXJlc2Zvb2RhcnJheS5tYXAoKGNyZWF0dXJlc2Zvb2QpID0+IGNyZWF0dXJlc2Zvb2QuaWQpO1xuICBjb25zdCBjcmVhdHVyZXNub25mb29kYXJyYXlpZHMgPSBjcmVhdHVyZXNub25mb29kYXJyYXkubWFwKChjcmVhdHVyZXNub25mb29kKSA9PiBjcmVhdHVyZXNub25mb29kLmlkKTtcbiAgY29uc3QgZXF1aXBtZW50YXJyYXlpZHMgPSBlcXVpcG1lbnRhcnJheS5tYXAoKGVxdWlwbWVudCkgPT4gZXF1aXBtZW50LmlkKTtcbiAgY29uc3QgbWF0ZXJpYWxzYXJyYXlpZHMgPSBtYXRlcmlhbHNhcnJheS5tYXAoKG1hdGVyaWFscykgPT4gbWF0ZXJpYWxzLmlkKTtcbiAgY29uc3QgbW9uc3RlcnNhcnJheWlkcyA9IG1vbnN0ZXJzYXJyYXkubWFwKChtb25zdGVycykgPT4gbW9uc3RlcnMuaWQpO1xuICBjb25zdCB0cmVhc3VyZWFycmF5aWRzID0gdHJlYXN1cmVhcnJheS5tYXAoKHRyZWFzdXJlKSA9PiB0cmVhc3VyZS5pZCk7XG4gIGNvbnN0IGlkcyA9IGNyZWF0dXJlc2Zvb2RhcnJheWlkcy5jb25jYXQoY3JlYXR1cmVzbm9uZm9vZGFycmF5aWRzLCBlcXVpcG1lbnRhcnJheWlkcywgbWF0ZXJpYWxzYXJyYXlpZHMsIG1vbnN0ZXJzYXJyYXlpZHMsIHRyZWFzdXJlYXJyYXlpZHMpXG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcCgoaWQpID0+ICh7IHBhcmFtczogeyBpZDogaWQudG9TdHJpbmcoKSB9IH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBpZCB9IH0pIHtcbiAgY29uc3QgaXRlbXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ib3R3LWNvbXBlbmRpdW0uaGVyb2t1YXBwLmNvbS9hcGkvdjIvZW50cnkvJHtpZH1gKVxuICBjb25zdCBpdGVtanNvbiA9IGF3YWl0IGl0ZW1zLmpzb24oKVxuICBjb25zdCBpdGVtRGF0YSA9IGl0ZW1qc29uLmRhdGFcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbURhdGE6IGl0ZW1EYXRhXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1QYWdlKHtpdGVtRGF0YX0pIHtcbiAgY29uc3QgYWx0VGV4dCA9IFwiSW1hZ2Ugb2YgXCIrIGl0ZW1EYXRhLm5hbWU7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlQ2FzZShpdGVtRGF0YS5uYW1lKX0gLSBCT1RXIEl0ZW1zIFdpa2k8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlVHdvQ29sdW1uXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2l0ZW1EYXRhLmltYWdlICYmXG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbURhdGEuaW1hZ2V9IGFsdD17YWx0VGV4dH0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57dGl0bGVDYXNlKGl0ZW1EYXRhLm5hbWUpfTwvaDE+XG4gICAgICAgICAge2l0ZW1EYXRhLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgICA8cD57aXRlbURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICB7aXRlbURhdGEuY29tbW9uX2xvY2F0aW9ucyAhPSBudWxsICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxSb3dcIj5cbiAgICAgICAgICAgICAgICA8ZHQ+Q29tbW9uIExvY2F0aW9uczwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5vQnVsbGV0TGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbURhdGEuY29tbW9uX2xvY2F0aW9ucy5tYXAoKGxvY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPnt0aXRsZUNhc2UobG9jYXRpb24pfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtpdGVtRGF0YS5kcm9wcyAhPSBudWxsICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxSb3dcIj5cbiAgICAgICAgICAgICAgICA8ZHQ+RHJvcHM8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJub0J1bGxldExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1EYXRhLmRyb3BzLm1hcCgoZHJvcCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaT57dGl0bGVDYXNlKGRyb3ApfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtpdGVtRGF0YS5jb29raW5nX2VmZmVjdCAhPSBudWxsICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxSb3dcIj5cbiAgICAgICAgICAgICAgICA8ZHQ+Q29va2luZyBFZmZlY3Q8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57aXRlbURhdGEuY29va2luZ19lZmZlY3R9PC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7aXRlbURhdGEuaGVhcnRzX3JlY292ZXJlZCAhPSBudWxsICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxSb3dcIj5cbiAgICAgICAgICAgICAgICA8ZHQ+SGVhcnRzIFJlY292ZXJlZDwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPntpdGVtRGF0YS5oZWFydHNfcmVjb3ZlcmVkfTwvZGQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2l0ZW1EYXRhLmRlZmVuc2UgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsUm93XCI+XG4gICAgICAgICAgICAgICAgPGR0PkRlZmVuc2U8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57aXRlbURhdGEuZGVmZW5zZX08L2RkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2RsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+QmFjayB0byA8TGluayBocmVmPXtgLyR7aXRlbURhdGEuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKX1gfT48YT5DYXRlZ29yeSAtIDxzcGFuPnt0aXRsZUNhc2UoaXRlbURhdGEuY2F0ZWdvcnkpfTwvc3Bhbj48L2E+PC9MaW5rPjwvcD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/item/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_js"], function() { return __webpack_exec__("./pages/item/[id].js"); });
module.exports = __webpack_exports__;

})();