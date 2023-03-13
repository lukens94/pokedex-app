"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pokedex",{

/***/ "./src/hooks/pokemon-services.ts":
/*!***************************************!*\
  !*** ./src/hooks/pokemon-services.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGetPokemonById\": function() { return /* binding */ useGetPokemonById; },\n/* harmony export */   \"useGetPokemons\": function() { return /* binding */ useGetPokemons; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _utils_graphql_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/graphql/client */ \"./src/utils/graphql/client.ts\");\n/* harmony import */ var _utils_graphql_queries_getAllPokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/graphql/queries/getAllPokemon */ \"./src/utils/graphql/queries/getAllPokemon.ts\");\n/* harmony import */ var _utils_graphql_queries_getPokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/graphql/queries/getPokemon */ \"./src/utils/graphql/queries/getPokemon.ts\");\n\n\n\n\nconst useGetPokemons = function() {\n    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, initialData = arguments.length > 1 ? arguments[1] : void 0;\n    const { limit =20 , offset =0  } = params;\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"allPokemons\"\n    ], ()=>{\n        return _utils_graphql_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].request(_utils_graphql_queries_getAllPokemon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            limit,\n            offset\n        });\n    }, initialData);\n};\nconst useGetPokemonById = (name)=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"pokemon\",\n        name\n    ], async ()=>{\n        return await _utils_graphql_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].request(_utils_graphql_queries_getPokemon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            name\n        });\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvcG9rZW1vbi1zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFFSjtBQUN5QjtBQUNDO0FBT2hFLE1BQU1JLGlCQUFpQixXQUFzRDtRQUFyREMsMEVBQTRCLENBQUMsR0FBR0M7SUFDN0QsTUFBTSxFQUFFQyxPQUFRLEdBQUUsRUFBRUMsUUFBUyxFQUFDLEVBQUUsR0FBR0g7SUFDbkMsT0FBT0wsK0RBQVFBLENBQUM7UUFBQztLQUFjLEVBQUcsSUFBTTtRQUN0QyxPQUFPQyxxRUFBYyxDQUFDQyw0RUFBZ0JBLEVBQUU7WUFBRUs7WUFBT0M7UUFBTztJQUMxRCxHQUFHRjtBQUFZLEVBQUU7QUFFWixNQUFNSSxvQkFBb0IsQ0FBQ0MsT0FBaUI7SUFDakQsT0FBT1gsK0RBQVFBLENBQUM7UUFBQztRQUFXVztLQUFLLEVBQUUsVUFBWTtRQUM3QyxPQUFPLE1BQU1WLHFFQUFjLENBQUNFLHlFQUFvQkEsRUFBRTtZQUFFUTtRQUFLO0lBQzNEO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvcG9rZW1vbi1zZXJ2aWNlcy50cz9jNTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcblxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi91dGlscy9ncmFwaHFsL2NsaWVudCc7XG5pbXBvcnQgR0VUX0FMTF9QT0tFTU9OUyBmcm9tICcuLi91dGlscy9ncmFwaHFsL3F1ZXJpZXMvZ2V0QWxsUG9rZW1vbic7XG5pbXBvcnQgR0VUX1NQRUNJRklDX1BPS0VNT04gZnJvbSAnLi4vdXRpbHMvZ3JhcGhxbC9xdWVyaWVzL2dldFBva2Vtb24nO1xuXG5pbnRlcmZhY2UgR2V0UG9rZW1vbnNQYXJhbXMge1xuICBsaW1pdD86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgdXNlR2V0UG9rZW1vbnMgPSAocGFyYW1zOiBHZXRQb2tlbW9uc1BhcmFtcyA9IHt9LCBpbml0aWFsRGF0YTogYW55KSA9PiB7XG4gIGNvbnN0IHsgbGltaXQgPSAyMCwgb2Zmc2V0ID0gMCB9ID0gcGFyYW1zO1xuICByZXR1cm4gdXNlUXVlcnkoWydhbGxQb2tlbW9ucyddLCAgKCkgPT4ge1xuICAgIHJldHVybiBjbGllbnQucmVxdWVzdChHRVRfQUxMX1BPS0VNT05TLCB7IGxpbWl0LCBvZmZzZXQgfSk7XG4gIH0sIGluaXRpYWxEYXRhKX07XG5cbmV4cG9ydCBjb25zdCB1c2VHZXRQb2tlbW9uQnlJZCA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHVzZVF1ZXJ5KFsncG9rZW1vbicsIG5hbWVdLCBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5yZXF1ZXN0KEdFVF9TUEVDSUZJQ19QT0tFTU9OLCB7IG5hbWUgfSk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImNsaWVudCIsIkdFVF9BTExfUE9LRU1PTlMiLCJHRVRfU1BFQ0lGSUNfUE9LRU1PTiIsInVzZUdldFBva2Vtb25zIiwicGFyYW1zIiwiaW5pdGlhbERhdGEiLCJsaW1pdCIsIm9mZnNldCIsInJlcXVlc3QiLCJ1c2VHZXRQb2tlbW9uQnlJZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/pokemon-services.ts\n"));

/***/ })

});