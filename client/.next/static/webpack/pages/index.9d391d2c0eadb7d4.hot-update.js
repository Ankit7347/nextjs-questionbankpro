"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"./node_modules/@mui/material/FormControlLabel/index.js\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Checkbox */ \"./node_modules/@mui/material/Checkbox/index.js\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Link */ \"./node_modules/@mui/material/Link/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"./node_modules/@mui/icons-material/LockOutlined.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        variant: \"body2\",\n        color: \"text.secondary\",\n        align: \"center\",\n        ...props,\n        children: [\n            \"Copyright \\xa9 \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"inherit\",\n                href: \"https://mui.com/\",\n                children: \"Your Website\"\n            }, void 0, false, {\n                fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            \" \",\n            new Date().getFullYear(),\n            \".\"\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c = Copyright;\n// TODO remove, this demo shouldn't need to reset the theme.\nconst defaultTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)();\nfunction SignIn() {\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const data = new FormData(event.currentTarget);\n        console.log({\n            email: data.get(\"email\"),\n            password: data.get(\"password\")\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: defaultTheme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            component: \"main\",\n            maxWidth: \"xs\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        marginTop: 8,\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            sx: {\n                                m: 1,\n                                bgcolor: \"secondary.main\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            component: \"h1\",\n                            variant: \"h5\",\n                            children: \"Sign in\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            component: \"form\",\n                            onSubmit: handleSubmit,\n                            noValidate: true,\n                            sx: {\n                                mt: 1\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    margin: \"normal\",\n                                    required: true,\n                                    fullWidth: true,\n                                    id: \"email\",\n                                    label: \"Email Address\",\n                                    name: \"email\",\n                                    autoComplete: \"email\",\n                                    autoFocus: true\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    margin: \"normal\",\n                                    required: true,\n                                    fullWidth: true,\n                                    name: \"password\",\n                                    label: \"Password\",\n                                    type: \"password\",\n                                    id: \"password\",\n                                    autoComplete: \"current-password\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        value: \"remember\",\n                                        color: \"primary\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 24\n                                    }, void 0),\n                                    label: \"Remember me\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    type: \"submit\",\n                                    fullWidth: true,\n                                    variant: \"contained\",\n                                    sx: {\n                                        mt: 3,\n                                        mb: 2\n                                    },\n                                    children: \"Sign In\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                    container: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                            item: true,\n                                            xs: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                href: \"#\",\n                                                variant: \"body2\",\n                                                children: \"Forgot password?\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                            item: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                href: \"#\",\n                                                variant: \"body2\",\n                                                children: \"Don't have an account? Sign Up\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Copyright, {\n                    sx: {\n                        mt: 8,\n                        mb: 4\n                    }\n                }, void 0, false, {\n                    fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\questionbankpro.com\\\\client\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SignIn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Copyright\");\n$RefreshReg$(_c1, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEM7TUFqRndCcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xMYWJlbCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG11aS9tYXRlcmlhbC9DaGVja2JveCc7XG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NrT3V0bGluZWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cblxuXG5pbXBvcnQge0Zvb3Rlcn0gZnJvbSAnX2NvbXBvbmVudHMvRm9vdGVyL2YnXG5cbmZ1bmN0aW9uIENvcHlyaWdodChwcm9wczogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCIgey4uLnByb3BzfT5cbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tdWkuY29tL1wiPlxuICAgICAgICBZb3VyIFdlYnNpdGVcbiAgICAgIDwvTGluaz57JyAnfVxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgIHsnLid9XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuXG4vLyBUT0RPIHJlbW92ZSwgdGhpcyBkZW1vIHNob3VsZG4ndCBuZWVkIHRvIHJlc2V0IHRoZSB0aGVtZS5cbmNvbnN0IGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcblxuICBcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICBlbWFpbDogZGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICBwYXNzd29yZDogZGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17ZGVmYXVsdFRoZW1lfT5cbiAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEF2YXRhciBzeD17eyBtOiAxLCBiZ2NvbG9yOiAnc2Vjb25kYXJ5Lm1haW4nIH19PlxuICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlIHN4PXt7IG10OiAxIH19PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggdmFsdWU9XCJyZW1lbWJlclwiIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxuICAgICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyIG1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIHN4PXt7IG10OiAzLCBtYjogMiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxDb3B5cmlnaHQgc3g9e3sgbXQ6IDgsIG1iOiA0IH19IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiQnV0dG9uIiwiQ3NzQmFzZWxpbmUiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbExhYmVsIiwiQ2hlY2tib3giLCJMaW5rIiwiR3JpZCIsIkJveCIsIkxvY2tPdXRsaW5lZEljb24iLCJUeXBvZ3JhcGh5IiwiQ29udGFpbmVyIiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiQ29weXJpZ2h0IiwicHJvcHMiLCJ2YXJpYW50IiwiY29sb3IiLCJhbGlnbiIsImhyZWYiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkZWZhdWx0VGhlbWUiLCJTaWduSW4iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsImdldCIsInBhc3N3b3JkIiwidGhlbWUiLCJjb21wb25lbnQiLCJtYXhXaWR0aCIsInN4IiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibSIsImJnY29sb3IiLCJvblN1Ym1pdCIsIm5vVmFsaWRhdGUiLCJtdCIsIm1hcmdpbiIsInJlcXVpcmVkIiwiZnVsbFdpZHRoIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJ0eXBlIiwiY29udHJvbCIsInZhbHVlIiwibWIiLCJjb250YWluZXIiLCJpdGVtIiwieHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});