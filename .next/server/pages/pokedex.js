"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/pokedex";
exports.ids = ["pages/pokedex"];
exports.modules = {

/***/ "./src/hooks/pokemon-services.ts":
/*!***************************************!*\
  !*** ./src/hooks/pokemon-services.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGetPokemonById\": () => (/* binding */ useGetPokemonById),\n/* harmony export */   \"useGetPokemons\": () => (/* binding */ useGetPokemons)\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useGetPokemons = ()=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([\n        \"allPokemons\"\n    ], async ()=>{\n        return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://pokeapi.co/api/v2/pokemon\").then((res)=>res.data).catch((res)=>res);\n    });\n};\nconst useGetPokemonById = (id)=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([\n        \"pokemon\",\n        id\n    ], async ()=>{\n        return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res)=>res.data).catch((res)=>res);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvcG9rZW1vbi1zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBRW5CLE1BQU1FLGlCQUFpQixJQUFNO0lBQ2xDLE9BQU9GLCtEQUFRQSxDQUFDO1FBQUM7S0FBYyxFQUFFLFVBQVk7UUFDM0MsT0FBTyxNQUFNQyxpREFDUCxDQUFDLHFDQUNKRyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxFQUN0QkMsS0FBSyxDQUFDLENBQUNGLE1BQVFBO0lBQ3BCO0FBQ0YsRUFBRTtBQUVLLE1BQU1HLG9CQUFvQixDQUFDQyxLQUFlO0lBQy9DLE9BQU9ULCtEQUFRQSxDQUFDO1FBQUM7UUFBV1M7S0FBRyxFQUFFLFVBQVk7UUFDM0MsT0FBTyxNQUFNUixpREFDUCxDQUFDLENBQUMsa0NBQWtDLEVBQUVRLEdBQUcsQ0FBQyxFQUM3Q0wsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksRUFDdEJDLEtBQUssQ0FBQyxDQUFDRixNQUFRQTtJQUNwQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LTEzLy4vc3JjL2hvb2tzL3Bva2Vtb24tc2VydmljZXMudHM/YzUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgdXNlR2V0UG9rZW1vbnMgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VRdWVyeShbJ2FsbFBva2Vtb25zJ10sIGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcbiAgICAgIC5jYXRjaCgocmVzKSA9PiByZXMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHZXRQb2tlbW9uQnlJZCA9IChpZDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiB1c2VRdWVyeShbJ3Bva2Vtb24nLCBpZF0sIGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfWApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcbiAgICAgIC5jYXRjaCgocmVzKSA9PiByZXMpO1xuICB9KTtcbn07XG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJheGlvcyIsInVzZUdldFBva2Vtb25zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsInVzZUdldFBva2Vtb25CeUlkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/pokemon-services.ts\n");

/***/ }),

/***/ "./src/pages/pokedex/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/pokedex/index.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pokedex)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/pokemon-services */ \"./src/hooks/pokemon-services.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__]);\n_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Pokedex() {\n    const { data: allPokemons  } = (0,_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__.useGetPokemons)();\n    const { data: pokemon  } = (0,_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__.useGetPokemonById)(2);\n    console.log({\n        allPokemons,\n        pokemon\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9rZWRleC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlGO0FBRWxFLFNBQVNFLFVBQVU7SUFDaEMsTUFBTSxFQUFFQyxNQUFNQyxZQUFXLEVBQUUsR0FBR0gsdUVBQWNBO0lBQzVDLE1BQU0sRUFBRUUsTUFBTUUsUUFBTyxFQUFFLEdBQUdMLDBFQUFpQkEsQ0FBQztJQUM1Q00sUUFBUUMsR0FBRyxDQUFDO1FBQUVIO1FBQWFDO0lBQVE7SUFFbkMscUJBQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC0xMy8uL3NyYy9wYWdlcy9wb2tlZGV4L2luZGV4LnRzeD8yMmEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdldFBva2Vtb25CeUlkLCB1c2VHZXRQb2tlbW9ucyB9IGZyb20gJy4uLy4uL2hvb2tzL3Bva2Vtb24tc2VydmljZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlZGV4KCkge1xuICBjb25zdCB7IGRhdGE6IGFsbFBva2Vtb25zIH0gPSB1c2VHZXRQb2tlbW9ucygpO1xuICBjb25zdCB7IGRhdGE6IHBva2Vtb24gfSA9IHVzZUdldFBva2Vtb25CeUlkKDIpO1xuICBjb25zb2xlLmxvZyh7IGFsbFBva2Vtb25zLCBwb2tlbW9uIH0pO1xuXG4gIHJldHVybiA8PjwvPjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VHZXRQb2tlbW9uQnlJZCIsInVzZUdldFBva2Vtb25zIiwiUG9rZWRleCIsImRhdGEiLCJhbGxQb2tlbW9ucyIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pokedex/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/pokedex/index.tsx"));
module.exports = __webpack_exports__;

})();