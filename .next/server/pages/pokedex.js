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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGetPokemonById\": () => (/* binding */ useGetPokemonById),\n/* harmony export */   \"useGetPokemons\": () => (/* binding */ useGetPokemons)\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useGetPokemons = ()=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([\n        \"allPokemons\"\n    ], async ()=>{\n        return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://pokeapi.co/api/v2/pokemon\").then((res)=>res.data).catch((res)=>res);\n    });\n};\nconst useGetPokemonById = (id)=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([\n        \"pokemon\",\n        id\n    ], async ()=>{\n        return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res)=>res.data).catch((res)=>res);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvcG9rZW1vbi1zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBQ3JCO0FBR25CLE1BQU1FLGlCQUFpQixJQUFNO0lBQ2hDLE9BQU9GLCtEQUFRQSxDQUNYO1FBQUM7S0FBYyxFQUFFLFVBQVk7UUFDekIsT0FBTyxNQUFNQyxpREFDTCxDQUFDLHFDQUNKRyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxFQUN0QkMsS0FBSyxDQUFDLENBQUNGLE1BQVNBO0lBQ3pCO0FBRVIsRUFBRTtBQUVLLE1BQU1HLG9CQUFvQixDQUFDQyxLQUFlO0lBQzdDLE9BQU9ULCtEQUFRQSxDQUNYO1FBQUM7UUFBV1M7S0FBRyxFQUFFLFVBQVk7UUFDekIsT0FBTyxNQUFNUixpREFDTCxDQUFDLENBQUMsa0NBQWtDLEVBQUVRLEdBQUcsQ0FBQyxFQUM3Q0wsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksRUFDdEJDLEtBQUssQ0FBQyxDQUFDRixNQUFTQTtJQUN6QjtBQUVSLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LTEzLy4vc3JjL2hvb2tzL3Bva2Vtb24tc2VydmljZXMudHM/YzUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblxuZXhwb3J0IGNvbnN0IHVzZUdldFBva2Vtb25zID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VRdWVyeShcbiAgICAgICAgWydhbGxQb2tlbW9ucyddLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24nKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgocmVzKSA9PiAocmVzKSlcbiAgICAgICAgfVxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHZXRQb2tlbW9uQnlJZCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHVzZVF1ZXJ5KFxuICAgICAgICBbJ3Bva2Vtb24nLCBpZF0sIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXMpID0+IChyZXMpKVxuICAgICAgICB9XG4gICAgKVxufTsiXSwibmFtZXMiOlsidXNlUXVlcnkiLCJheGlvcyIsInVzZUdldFBva2Vtb25zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsInVzZUdldFBva2Vtb25CeUlkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/pokemon-services.ts\n");

/***/ }),

/***/ "./src/pages/pokedex/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/pokedex/index.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pokedex)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/pokemon-services */ \"./src/hooks/pokemon-services.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__]);\n_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Pokedex() {\n    const { data: allPokemons  } = (0,_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__.useGetPokemons)();\n    const { data: pokemon  } = (0,_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__.useGetPokemonById)(2);\n    console.log({\n        allPokemons,\n        pokemon\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9rZWRleC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStFO0FBRWhFLFNBQVNFLFVBQVU7SUFFOUIsTUFBTSxFQUFDQyxNQUFNQyxZQUFXLEVBQUMsR0FBR0gsdUVBQWNBO0lBQzFDLE1BQU0sRUFBQ0UsTUFBTUUsUUFBTyxFQUFDLEdBQUdMLDBFQUFpQkEsQ0FBQztJQUMxQ00sUUFBUUMsR0FBRyxDQUFDO1FBQUNIO1FBQWFDO0lBQU87SUFFakMscUJBQ0k7QUFHUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC0xMy8uL3NyYy9wYWdlcy9wb2tlZGV4L2luZGV4LnRzeD8yMmEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlR2V0UG9rZW1vbkJ5SWQsIHVzZUdldFBva2Vtb25zfSBmcm9tIFwiLi4vLi4vaG9va3MvcG9rZW1vbi1zZXJ2aWNlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlZGV4KCkge1xuXG4gICAgY29uc3Qge2RhdGE6IGFsbFBva2Vtb25zfSA9IHVzZUdldFBva2Vtb25zKCk7XG4gICAgY29uc3Qge2RhdGE6IHBva2Vtb259ID0gdXNlR2V0UG9rZW1vbkJ5SWQoMik7XG4gICAgY29uc29sZS5sb2coe2FsbFBva2Vtb25zLCBwb2tlbW9ufSk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VHZXRQb2tlbW9uQnlJZCIsInVzZUdldFBva2Vtb25zIiwiUG9rZWRleCIsImRhdGEiLCJhbGxQb2tlbW9ucyIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pokedex/index.tsx\n");

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