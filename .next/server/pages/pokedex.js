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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGetPokemonById\": () => (/* binding */ useGetPokemonById),\n/* harmony export */   \"useGetPokemons\": () => (/* binding */ useGetPokemons)\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _utils_graphql_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/graphql/client */ \"./src/utils/graphql/client.ts\");\n/* harmony import */ var _utils_graphql_queries_getAllPokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/graphql/queries/getAllPokemon */ \"./src/utils/graphql/queries/getAllPokemon.ts\");\n/* harmony import */ var _utils_graphql_queries_getPokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/graphql/queries/getPokemon */ \"./src/utils/graphql/queries/getPokemon.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _utils_graphql_client__WEBPACK_IMPORTED_MODULE_1__, _utils_graphql_queries_getAllPokemon__WEBPACK_IMPORTED_MODULE_2__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _utils_graphql_client__WEBPACK_IMPORTED_MODULE_1__, _utils_graphql_queries_getAllPokemon__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst useGetPokemons = (params = {})=>{\n    const { limit =20 , offset =0  } = params;\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([\n        \"allPokemons\"\n    ], async ()=>{\n        return await _utils_graphql_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request(_utils_graphql_queries_getAllPokemon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            limit,\n            offset\n        });\n    });\n};\nconst useGetPokemonById = (name)=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([\n        \"pokemon\",\n        name\n    ], async ()=>{\n        return await _utils_graphql_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request(_utils_graphql_queries_getPokemon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            name\n        });\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvcG9rZW1vbi1zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSjtBQUN5QjtBQUNDO0FBT2hFLE1BQU1JLGlCQUFpQixDQUFDQyxTQUE2QixDQUFDLENBQUMsR0FBSztJQUMvRCxNQUFNLEVBQ0ZDLE9BQVEsR0FBRSxFQUNWQyxRQUFTLEVBQUMsRUFDYixHQUFHRjtJQUNOLE9BQU9MLCtEQUFRQSxDQUFDO1FBQUM7S0FBYyxFQUFFLFVBQVk7UUFDM0MsT0FBTyxNQUFNQyxxRUFBYyxDQUFDQyw0RUFBZ0JBLEVBQUU7WUFBQ0k7WUFBT0M7UUFBTTtJQUM5RDtBQUNGLEVBQUU7QUFFSyxNQUFNRSxvQkFBb0IsQ0FBQ0MsT0FBaUI7SUFFakQsT0FBT1YsK0RBQVFBLENBQUM7UUFBQztRQUFXVTtLQUFLLEVBQUUsVUFBWTtRQUM3QyxPQUFPLE1BQU1ULHFFQUFjLENBQUNFLHlFQUFvQkEsRUFBRTtZQUFDTztRQUFJO0lBQ3pEO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtMTMvLi9zcmMvaG9va3MvcG9rZW1vbi1zZXJ2aWNlcy50cz9jNTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL3V0aWxzL2dyYXBocWwvY2xpZW50XCI7XG5pbXBvcnQgR0VUX0FMTF9QT0tFTU9OUyBmcm9tIFwiLi4vdXRpbHMvZ3JhcGhxbC9xdWVyaWVzL2dldEFsbFBva2Vtb25cIjtcbmltcG9ydCBHRVRfU1BFQ0lGSUNfUE9LRU1PTiBmcm9tIFwiLi4vdXRpbHMvZ3JhcGhxbC9xdWVyaWVzL2dldFBva2Vtb25cIjtcblxuaW50ZXJmYWNlIEdldFBva2Vtb25zUGFyYW1zIHtcbiAgbGltaXQ/OiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUdldFBva2Vtb25zID0gKHBhcmFtcyA6IEdldFBva2Vtb25zUGFyYW1zID0ge30pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGxpbWl0ID0gMjAsXG4gICAgICAgIG9mZnNldCA9IDBcbiAgICB9ID0gcGFyYW1zO1xuICByZXR1cm4gdXNlUXVlcnkoWydhbGxQb2tlbW9ucyddLCBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5yZXF1ZXN0KEdFVF9BTExfUE9LRU1PTlMsIHtsaW1pdCwgb2Zmc2V0fSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldFBva2Vtb25CeUlkID0gKG5hbWU6IHN0cmluZykgPT4ge1xuXG4gIHJldHVybiB1c2VRdWVyeShbJ3Bva2Vtb24nLCBuYW1lXSwgYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBjbGllbnQucmVxdWVzdChHRVRfU1BFQ0lGSUNfUE9LRU1PTiwge25hbWV9KVxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJjbGllbnQiLCJHRVRfQUxMX1BPS0VNT05TIiwiR0VUX1NQRUNJRklDX1BPS0VNT04iLCJ1c2VHZXRQb2tlbW9ucyIsInBhcmFtcyIsImxpbWl0Iiwib2Zmc2V0IiwicmVxdWVzdCIsInVzZUdldFBva2Vtb25CeUlkIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/pokemon-services.ts\n");

/***/ }),

/***/ "./src/pages/pokedex/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/pokedex/index.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pokedex)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/pokemon-services */ \"./src/hooks/pokemon-services.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__]);\n_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Pokedex() {\n    const { data: allPokemons  } = (0,_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__.useGetPokemons)();\n    const { data: pokemon  } = (0,_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_1__.useGetPokemonById)(\"bulbasaur\");\n    console.log({\n        allPokemons,\n        pokemon\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9rZWRleC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlGO0FBRWxFLFNBQVNFLFVBQVU7SUFDaEMsTUFBTSxFQUFFQyxNQUFNQyxZQUFXLEVBQUUsR0FBR0gsdUVBQWNBO0lBQzVDLE1BQU0sRUFBRUUsTUFBTUUsUUFBTyxFQUFFLEdBQUdMLDBFQUFpQkEsQ0FBQztJQUM1Q00sUUFBUUMsR0FBRyxDQUFDO1FBQUVIO1FBQWFDO0lBQVE7SUFFbkMscUJBQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC0xMy8uL3NyYy9wYWdlcy9wb2tlZGV4L2luZGV4LnRzeD8yMmEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdldFBva2Vtb25CeUlkLCB1c2VHZXRQb2tlbW9ucyB9IGZyb20gJy4uLy4uL2hvb2tzL3Bva2Vtb24tc2VydmljZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlZGV4KCkge1xuICBjb25zdCB7IGRhdGE6IGFsbFBva2Vtb25zIH0gPSB1c2VHZXRQb2tlbW9ucygpO1xuICBjb25zdCB7IGRhdGE6IHBva2Vtb24gfSA9IHVzZUdldFBva2Vtb25CeUlkKCdidWxiYXNhdXInKTtcbiAgY29uc29sZS5sb2coeyBhbGxQb2tlbW9ucywgcG9rZW1vbiB9KTtcblxuICByZXR1cm4gPD48Lz47XG59XG4iXSwibmFtZXMiOlsidXNlR2V0UG9rZW1vbkJ5SWQiLCJ1c2VHZXRQb2tlbW9ucyIsIlBva2VkZXgiLCJkYXRhIiwiYWxsUG9rZW1vbnMiLCJwb2tlbW9uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/pokedex/index.tsx\n");

/***/ }),

/***/ "./src/utils/graphql/client.ts":
/*!*************************************!*\
  !*** ./src/utils/graphql/client.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_request__WEBPACK_IMPORTED_MODULE_0__]);\ngraphql_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst endpoint = \"https://graphql-pokeapi.vercel.app/api/graphql\";\nconst client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(endpoint);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZ3JhcGhxbC9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsV0FBVztBQUNqQixNQUFNQyxTQUFTLElBQUlGLDBEQUFhQSxDQUFDQztBQUVqQyxpRUFBZUMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtMTMvLi9zcmMvdXRpbHMvZ3JhcGhxbC9jbGllbnQudHM/N2Q4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuXG5jb25zdCBlbmRwb2ludCA9ICdodHRwczovL2dyYXBocWwtcG9rZWFwaS52ZXJjZWwuYXBwL2FwaS9ncmFwaHFsJ1xuY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoZW5kcG9pbnQpXG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiR3JhcGhRTENsaWVudCIsImVuZHBvaW50IiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/graphql/client.ts\n");

/***/ }),

/***/ "./src/utils/graphql/queries/getAllPokemon.ts":
/*!****************************************************!*\
  !*** ./src/utils/graphql/queries/getAllPokemon.ts ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_request__WEBPACK_IMPORTED_MODULE_0__]);\ngraphql_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst GET_ALL_POKEMONS = /* GraphQL */ graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\n    query Pokemons($limit: Int!, $offset: Int!) {\n        pokemons(limit: $limit, offset: $offset) {\n            results {\n                id\n                image\n                name\n            }\n        }\n    }\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_ALL_POKEMONS);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZ3JhcGhxbC9xdWVyaWVzL2dldEFsbFBva2Vtb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFFcEMsTUFBTUMsbUJBQW1CLFdBQVcsR0FBR0QsZ0RBQUcsQ0FBQzs7Ozs7Ozs7OztBQVUzQyxDQUFDO0FBRUQsaUVBQWVDLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtMTMvLi9zcmMvdXRpbHMvZ3JhcGhxbC9xdWVyaWVzL2dldEFsbFBva2Vtb24udHM/MDM2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dxbH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuXG5jb25zdCBHRVRfQUxMX1BPS0VNT05TID0gLyogR3JhcGhRTCAqLyBncWxgXG4gICAgcXVlcnkgUG9rZW1vbnMoJGxpbWl0OiBJbnQhLCAkb2Zmc2V0OiBJbnQhKSB7XG4gICAgICAgIHBva2Vtb25zKGxpbWl0OiAkbGltaXQsIG9mZnNldDogJG9mZnNldCkge1xuICAgICAgICAgICAgcmVzdWx0cyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgR0VUX0FMTF9QT0tFTU9OUzsiXSwibmFtZXMiOlsiZ3FsIiwiR0VUX0FMTF9QT0tFTU9OUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/graphql/queries/getAllPokemon.ts\n");

/***/ }),

/***/ "./src/utils/graphql/queries/getPokemon.ts":
/*!*************************************************!*\
  !*** ./src/utils/graphql/queries/getPokemon.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst GET_SPECIFIC_POKEMON = /* GraphQL */ `\n    query Pokemon($name: String!) {\n        pokemon(name: $name) {\n            name\n            id\n            height\n            weight\n            status\n            sprites {\n                front_default\n            }\n        }\n    }\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_SPECIFIC_POKEMON);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZ3JhcGhxbC9xdWVyaWVzL2dldFBva2Vtb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLHVCQUF1QixXQUFXLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWE1QyxDQUFDO0FBQ0QsaUVBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtMTMvLi9zcmMvdXRpbHMvZ3JhcGhxbC9xdWVyaWVzL2dldFBva2Vtb24udHM/MmI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHRVRfU1BFQ0lGSUNfUE9LRU1PTiA9IC8qIEdyYXBoUUwgKi8gYFxuICAgIHF1ZXJ5IFBva2Vtb24oJG5hbWU6IFN0cmluZyEpIHtcbiAgICAgICAgcG9rZW1vbihuYW1lOiAkbmFtZSkge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgd2VpZ2h0XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgIHNwcml0ZXMge1xuICAgICAgICAgICAgICAgIGZyb250X2RlZmF1bHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmBcbmV4cG9ydCBkZWZhdWx0IEdFVF9TUEVDSUZJQ19QT0tFTU9OOyJdLCJuYW1lcyI6WyJHRVRfU1BFQ0lGSUNfUE9LRU1PTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/graphql/queries/getPokemon.ts\n");

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

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("graphql-request");;

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