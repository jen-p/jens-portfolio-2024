"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/work/diabetes-treatment-tools",{

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//import Logo from '../assets/images/logo.inline.svg'\nconst Header = ()=>{\n    /*constructor(props) {\n    super(props)\n\n    this.state = {\n      mobileNavOpen: false,\n    }\n  }\n\n  toggleMobileNav = () => {\n    document.body.classList.toggle('has-overlay')\n    this.setState({ mobileNavOpen: !this.state.mobileNavOpen })\n  }*/ const navItems = [\n        {\n            link: '/index/',\n            title: 'Work'\n        },\n        {\n            link: '/whoami/',\n            title: 'Who Am I?'\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header-wrapper container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"name\",\n                    children: \"Jennifer Patel\"\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferpatel/GitHub/portfolio-2024/src/components/header.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header-nav\",\n                    children: navItems.map((navItem)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: navItem.link,\n                            className: \"header-nav__link \".concat(navItem.class),\n                            children: navItem.title\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferpatel/GitHub/portfolio-2024/src/components/header.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferpatel/GitHub/portfolio-2024/src/components/header.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jenniferpatel/GitHub/portfolio-2024/src/components/header.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferpatel/GitHub/portfolio-2024/src/components/header.js\",\n        lineNumber: 27,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUNTO0FBQ047QUFDNUIscURBQXFEO0FBRXJELE1BQU1HLFNBQVM7SUFDYjs7Ozs7Ozs7Ozs7R0FXQyxHQUdDLE1BQU1DLFdBQVc7UUFDZjtZQUFFQyxNQUFNO1lBQVdDLE9BQU87UUFBTztRQUNqQztZQUFFRCxNQUFNO1lBQVlDLE9BQU87UUFBWTtLQUN4QztJQUVELHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUFPOzs7Ozs7OEJBR3RCLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWkwsU0FBU00sR0FBRyxDQUFDQyxDQUFBQTt3QkFDWixxQkFDRSw4REFBQ1Qsa0RBQUlBOzRCQUNIVSxNQUFNRCxRQUFRTixJQUFJOzRCQUNsQkksV0FBVyxvQkFBa0MsT0FBZEUsUUFBUUUsS0FBSztzQ0FFM0NGLFFBQVFMLEtBQUs7Ozs7OztvQkFHcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7S0ExQ01IO0FBNENOLGlFQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMvamVubmlmZXJwYXRlbC9HaXRIdWIvcG9ydGZvbGlvLTIwMjQvc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vaW1wb3J0IExvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLmlubGluZS5zdmcnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgLypjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vYmlsZU5hdk9wZW46IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU1vYmlsZU5hdiA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2hhcy1vdmVybGF5JylcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlTmF2T3BlbjogIXRoaXMuc3RhdGUubW9iaWxlTmF2T3BlbiB9KVxuICB9Ki9cblxuICBcbiAgICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICAgIHsgbGluazogJy9pbmRleC8nLCB0aXRsZTogJ1dvcmsnIH0sXG4gICAgICB7IGxpbms6ICcvd2hvYW1pLycsIHRpdGxlOiAnV2hvIEFtIEk/JyB9XG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgIEplbm5pZmVyIFBhdGVsXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbmF2XCI+XG4gICAgICAgICAgICB7bmF2SXRlbXMubWFwKG5hdkl0ZW0gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPXtuYXZJdGVtLmxpbmt9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItbmF2X19saW5rICR7bmF2SXRlbS5jbGFzc31gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGluayIsIkhlYWRlciIsIm5hdkl0ZW1zIiwibGluayIsInRpdGxlIiwiaGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibmF2SXRlbSIsImhyZWYiLCJjbGFzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header.js\n"));

/***/ })

});