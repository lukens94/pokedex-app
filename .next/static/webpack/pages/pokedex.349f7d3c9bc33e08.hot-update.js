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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGetPokemonById\": function() { return /* binding */ useGetPokemonById; },\n/* harmony export */   \"useGetPokemons\": function() { return /* binding */ useGetPokemons; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_graphql_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/graphql/client */ \"./src/utils/graphql/client.ts\");\n/* harmony import */ var _utils_graphql_queries_getAllPokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/graphql/queries/getAllPokemon */ \"./src/utils/graphql/queries/getAllPokemon.ts\");\n\n\n\n\nconst useGetPokemons = ()=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([\n        \"allPokemons\"\n    ], async ()=>{\n        return await _utils_graphql_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].request(_utils_graphql_queries_getAllPokemon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    });\n};\nconst useGetPokemonById = (id)=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([\n        \"pokemon\",\n        id\n    ], async ()=>{\n        return await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://pokeapi.co/api/v2/pokemon/\".concat(id)).then((res)=>res.data).catch((res)=>res);\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvcG9rZW1vbi1zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDdkI7QUFDbUI7QUFDeUI7QUFFL0QsTUFBTUksaUJBQWlCLElBQU07SUFDbEMsT0FBT0osK0RBQVFBLENBQUM7UUFBQztLQUFjLEVBQUUsVUFBWTtRQUMzQyxPQUFPLE1BQU1FLHFFQUFjLENBQUNDLDRFQUFnQkE7SUFDOUM7QUFDRixFQUFFO0FBRUssTUFBTUcsb0JBQW9CLENBQUNDLEtBQWU7SUFDL0MsT0FBT1AsK0RBQVFBLENBQUM7UUFBQztRQUFXTztLQUFHLEVBQUUsVUFBWTtRQUMzQyxPQUFPLE1BQU1OLGlEQUNQLENBQUMscUNBQXdDLE9BQUhNLEtBQ3pDRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxFQUN0QkMsS0FBSyxDQUFDLENBQUNGLE1BQVFBO0lBQ3BCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvcG9rZW1vbi1zZXJ2aWNlcy50cz9jNTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi91dGlscy9ncmFwaHFsL2NsaWVudFwiO1xuaW1wb3J0IEdFVF9BTExfUE9LRU1PTlMgZnJvbSBcIi4uL3V0aWxzL2dyYXBocWwvcXVlcmllcy9nZXRBbGxQb2tlbW9uXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VHZXRQb2tlbW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZVF1ZXJ5KFsnYWxsUG9rZW1vbnMnXSwgYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBjbGllbnQucmVxdWVzdChHRVRfQUxMX1BPS0VNT05TKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0UG9rZW1vbkJ5SWQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICByZXR1cm4gdXNlUXVlcnkoWydwb2tlbW9uJywgaWRdLCBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICAgICAuY2F0Y2goKHJlcykgPT4gcmVzKTtcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiYXhpb3MiLCJjbGllbnQiLCJHRVRfQUxMX1BPS0VNT05TIiwidXNlR2V0UG9rZW1vbnMiLCJyZXF1ZXN0IiwidXNlR2V0UG9rZW1vbkJ5SWQiLCJpZCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/pokemon-services.ts\n"));

/***/ })

});