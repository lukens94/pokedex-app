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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Pokedex; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_atoms_InputText_InputText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/atoms/InputText/InputText */ \"./src/components/atoms/InputText/InputText.tsx\");\n/* harmony import */ var _hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/pokemon-services */ \"./src/hooks/pokemon-services.ts\");\n/* harmony import */ var _Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pokedex.module.scss */ \"./src/pages/pokedex/Pokedex.module.scss\");\n/* harmony import */ var _Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction Pokedex(results) {\n    _s();\n    const { data: { pokemons: allPokemons  }  } = (0,_hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_2__.useGetPokemons)({}, results);\n    console.log(allPokemons);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"800 \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"Pokemons\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thewavestudio/The Wave Studio Project/pokedex-2-app/src/pages/pokedex/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    \" for you to choose your favorite\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thewavestudio/The Wave Studio Project/pokedex-2-app/src/pages/pokedex/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_InputText_InputText__WEBPACK_IMPORTED_MODULE_1__.InputText, {\n                placeholder: \"Cerca il tuo Pokemon\"\n            }, void 0, false, {\n                fileName: \"/Users/thewavestudio/The Wave Studio Project/pokedex-2-app/src/pages/pokedex/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thewavestudio/The Wave Studio Project/pokedex-2-app/src/pages/pokedex/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Pokedex, \"lcGT9wjdyZZbvoBvGHa/nYvO7PE=\", false, function() {\n    return [\n        _hooks_pokemon_services__WEBPACK_IMPORTED_MODULE_2__.useGetPokemons\n    ];\n});\n_c = Pokedex;\nvar _c;\n$RefreshReg$(_c, \"Pokedex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9rZWRleC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUU7QUFDVTtBQUN2Qzs7QUFnQjNCLFNBQVNHLFFBQVFDLE9BQXdELEVBQUU7O0lBQ3hGLE1BQU0sRUFBRUMsTUFBTSxFQUFDQyxVQUFVQyxZQUFXLEVBQUMsR0FBQyxHQUFHTix1RUFBY0EsQ0FBQyxDQUFDLEdBQUdHO0lBQzVESSxRQUFRQyxHQUFHLENBQUNGO0lBRVoscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdULHFFQUFhOzswQkFDM0IsOERBQUNVOztvQkFBRztrQ0FDRSw4REFBQ0M7a0NBQUU7Ozs7OztvQkFBWTs7Ozs7OzswQkFFckIsOERBQUNiLDRFQUFTQTtnQkFBQ2MsYUFBWTs7Ozs7Ozs7Ozs7O0FBRzdCLENBQUM7R0FadUJYOztRQUNtQkYsbUVBQWNBOzs7S0FEakNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2tlZGV4L2luZGV4LnRzeD8yMmEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvSW5wdXRUZXh0L0lucHV0VGV4dCc7XG5pbXBvcnQgeyB1c2VHZXRQb2tlbW9uQnlJZCwgdXNlR2V0UG9rZW1vbnMgfSBmcm9tICcuLi8uLi9ob29rcy9wb2tlbW9uLXNlcnZpY2VzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL1Bva2VkZXgubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtHZXRTdGF0aWNQcm9wcywgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGV9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi91dGlscy9ncmFwaHFsL2NsaWVudFwiO1xuaW1wb3J0IEdFVF9BTExfUE9LRU1PTlMgZnJvbSBcIi4uLy4uL3V0aWxzL2dyYXBocWwvcXVlcmllcy9nZXRBbGxQb2tlbW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVzID0geyBsaW1pdDogMjAsIG9mZnNldDogMCB9O1xuICAgIGNvbnN0IGFsbFBva2Vtb25zID0gYXdhaXQgY2xpZW50LnJlcXVlc3QoR0VUX0FMTF9QT0tFTU9OUywgdmFyaWFibGVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgIGFsbFBva2Vtb25zXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2VkZXgocmVzdWx0cyA6IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pIHtcbiAgY29uc3QgeyBkYXRhOiB7cG9rZW1vbnM6IGFsbFBva2Vtb25zfX0gPSB1c2VHZXRQb2tlbW9ucyh7fSwgcmVzdWx0cyk7XG4gIGNvbnNvbGUubG9nKGFsbFBva2Vtb25zKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlBva2VkZXh9PlxuICAgICAgPGgyPlxuICAgICAgICA4MDAgPGI+UG9rZW1vbnM8L2I+IGZvciB5b3UgdG8gY2hvb3NlIHlvdXIgZmF2b3JpdGVcbiAgICAgIDwvaDI+XG4gICAgICA8SW5wdXRUZXh0IHBsYWNlaG9sZGVyPVwiQ2VyY2EgaWwgdHVvIFBva2Vtb25cIiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIklucHV0VGV4dCIsInVzZUdldFBva2Vtb25zIiwic3R5bGUiLCJQb2tlZGV4IiwicmVzdWx0cyIsImRhdGEiLCJwb2tlbW9ucyIsImFsbFBva2Vtb25zIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYiIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pokedex/index.tsx\n"));

/***/ })

});