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

/***/ "./src/pages/pokedex/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/pokedex/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Pokedex; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_atoms_InputText_InputText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/atoms/InputText/InputText */ \"./src/components/atoms/InputText/InputText.tsx\");\n/* harmony import */ var _hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/pokemon-services */ \"./src/hooks/pokemon-services.ts\");\n/* harmony import */ var _Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pokedex.module.scss */ \"./src/pages/pokedex/Pokedex.module.scss\");\n/* harmony import */ var _Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction Pokedex(results) {\n    _s();\n    const { data: allPokemons  } = (0,_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_2__.useGetPokemons)({}, results);\n    const { data: pokemon  } = (0,_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_2__.useGetPokemonById)(\"bulbasaur\");\n    console.log({\n        allPokemons,\n        pokemon\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"800 \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"Pokemons\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thewavestudio/The Wave Studio Project/pokedex-2-app/src/pages/pokedex/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    \" for you to choose your favorite\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thewavestudio/The Wave Studio Project/pokedex-2-app/src/pages/pokedex/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_InputText_InputText__WEBPACK_IMPORTED_MODULE_1__.InputText, {\n                placeholder: \"Cerca il tuo Pokemon\"\n            }, void 0, false, {\n                fileName: \"/Users/thewavestudio/The Wave Studio Project/pokedex-2-app/src/pages/pokedex/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thewavestudio/The Wave Studio Project/pokedex-2-app/src/pages/pokedex/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Pokedex, \"pg+FHDcaoEWMa7FyKAaoc7pB+q4=\", false, function() {\n    return [\n        _hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_2__.useGetPokemons,\n        _hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_2__.useGetPokemonById\n    ];\n});\n_c = Pokedex;\nvar _c;\n$RefreshReg$(_c, \"Pokedex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9rZWRleC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUU7QUFDVTtBQUN2Qzs7QUFnQjNCLFNBQVNJLFFBQVFDLE9BQXdELEVBQUU7O0lBQ3hGLE1BQU0sRUFBRUMsTUFBTUMsWUFBVyxFQUFFLEdBQUdMLHVFQUFjQSxDQUFDLENBQUMsR0FBR0c7SUFDakQsTUFBTSxFQUFFQyxNQUFNRSxRQUFPLEVBQUUsR0FBR1AsMEVBQWlCQSxDQUFDO0lBQzVDUSxRQUFRQyxHQUFHLENBQUM7UUFBRUg7UUFBYUM7SUFBUTtJQUVuQyxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV1QscUVBQWE7OzBCQUMzQiw4REFBQ1U7O29CQUFHO2tDQUNFLDhEQUFDQztrQ0FBRTs7Ozs7O29CQUFZOzs7Ozs7OzBCQUVyQiw4REFBQ2QsNEVBQVNBO2dCQUFDZSxhQUFZOzs7Ozs7Ozs7Ozs7QUFHN0IsQ0FBQztHQWJ1Qlg7O1FBQ1FGLG1FQUFjQTtRQUNsQkQsc0VBQWlCQTs7O0tBRnJCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9rZWRleC9pbmRleC50c3g/MjJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL0lucHV0VGV4dC9JbnB1dFRleHQnO1xuaW1wb3J0IHsgdXNlR2V0UG9rZW1vbkJ5SWQsIHVzZUdldFBva2Vtb25zIH0gZnJvbSAnLi4vLi4vaG9va3MvcG9rZW1vbi1zZXJ2aWNlcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9Qb2tlZGV4Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7R2V0U3RhdGljUHJvcHMsIEluZmVyR2V0U3RhdGljUHJvcHNUeXBlfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvZ3JhcGhxbC9jbGllbnRcIjtcbmltcG9ydCBHRVRfQUxMX1BPS0VNT05TIGZyb20gXCIuLi8uLi91dGlscy9ncmFwaHFsL3F1ZXJpZXMvZ2V0QWxsUG9rZW1vblwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHsgbGltaXQ6IDIwLCBvZmZzZXQ6IDAgfTtcbiAgICBjb25zdCBhbGxQb2tlbW9ucyA9IGF3YWl0IGNsaWVudC5yZXF1ZXN0KEdFVF9BTExfUE9LRU1PTlMsIHZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICBhbGxQb2tlbW9uc1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlZGV4KHJlc3VsdHMgOiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSB7XG4gIGNvbnN0IHsgZGF0YTogYWxsUG9rZW1vbnMgfSA9IHVzZUdldFBva2Vtb25zKHt9LCByZXN1bHRzKTtcbiAgY29uc3QgeyBkYXRhOiBwb2tlbW9uIH0gPSB1c2VHZXRQb2tlbW9uQnlJZCgnYnVsYmFzYXVyJyk7XG4gIGNvbnNvbGUubG9nKHsgYWxsUG9rZW1vbnMsIHBva2Vtb24gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuUG9rZWRleH0+XG4gICAgICA8aDI+XG4gICAgICAgIDgwMCA8Yj5Qb2tlbW9uczwvYj4gZm9yIHlvdSB0byBjaG9vc2UgeW91ciBmYXZvcml0ZVxuICAgICAgPC9oMj5cbiAgICAgIDxJbnB1dFRleHQgcGxhY2Vob2xkZXI9XCJDZXJjYSBpbCB0dW8gUG9rZW1vblwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW5wdXRUZXh0IiwidXNlR2V0UG9rZW1vbkJ5SWQiLCJ1c2VHZXRQb2tlbW9ucyIsInN0eWxlIiwiUG9rZWRleCIsInJlc3VsdHMiLCJkYXRhIiwiYWxsUG9rZW1vbnMiLCJwb2tlbW9uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYiIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pokedex/index.tsx\n"));

/***/ })

});