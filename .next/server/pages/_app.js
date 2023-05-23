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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./modules/sentry/index.ts":
/*!*********************************!*\
  !*** ./modules/sentry/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n\n_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init({\n    enabled: true,\n    // NOTE: Use your DSN. Both release and environment can be hardcoded\n    // release: <process.env.sentryRelease>,\n    // environment: <process.env.targetEnvironment>,\n    // dsn: <process.env.dsn>,\n    tracesSampleRate: 0.0001,\n    sampleRate: 1,\n    allowUrls: [],\n    denyUrls: [\n        // NOTE: Used to explicitly removing errors from chrome extensions\n        /extensions\\//i,\n        /^chrome(-extensions?)?:\\/\\//i\n    ],\n    beforeSend: (event, _)=>{\n        // NOTE(jcountryman, 03/16/2023): See\n        // https://github.com/getsentry/sentry-javascript/pull/3842\n        // and https://github.com/getsentry/sentry-javascript/issues/3147.\n        // Anonymous  values are ignored by `allowUrls` and `denyUrls`\n        // if they're in the last frame. However, if they are in all frames, this\n        // error should be dropped (i.e. likely a web extension or browser issues instead)\n        const frames = (event.exception?.values || [])[0]?.stacktrace?.frames;\n        if (frames?.every((frame)=>!frame.filename || frame.filename === \"<anonymous>\" || frame.filename === \"[native code]\")) {\n            return null;\n        }\n        return event;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3NlbnRyeS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBeUM7QUFFekNBLGdEQUFXLENBQUM7SUFDVkUsT0FBTyxFQUFFLElBQUk7SUFDYixvRUFBb0U7SUFDcEUsd0NBQXdDO0lBQ3hDLGdEQUFnRDtJQUNoRCwwQkFBMEI7SUFDMUJDLGdCQUFnQixFQUFFLE1BQU07SUFDeEJDLFVBQVUsRUFBRSxDQUFDO0lBQ2JDLFNBQVMsRUFBRSxFQUdWO0lBQ0RDLFFBQVEsRUFBRTtRQUNSLGtFQUFrRTs7O0tBR25FO0lBQ0RDLFVBQVUsRUFBRSxDQUFDQyxLQUFLLEVBQUVDLENBQUMsR0FBSztRQUN4QixxQ0FBcUM7UUFDckMsMkRBQTJEO1FBQzNELGtFQUFrRTtRQUNsRSw4REFBOEQ7UUFDOUQseUVBQXlFO1FBQ3pFLGtGQUFrRjtRQUNsRixNQUFNQyxNQUFNLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEVBQUVDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUMsVUFBVSxFQUFFSCxNQUFNO1FBQ3JFLElBQ0VBLE1BQU0sRUFBRUksS0FBSyxDQUNYLENBQUNDLEtBQUssR0FDSixDQUFDQSxLQUFLLENBQUNDLFFBQVEsSUFDZkQsS0FBSyxDQUFDQyxRQUFRLEtBQUssYUFBYSxJQUNoQ0QsS0FBSyxDQUFDQyxRQUFRLEtBQUssZUFBZSxDQUNyQyxFQUNEO1lBQ0EsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU9SLEtBQUssQ0FBQztLQUNkO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2VudHJ5LU5leHQtQ29uZmlndXJhdGlvbi1SZXByb2R1Y3Rpb24vLi9tb2R1bGVzL3NlbnRyeS9pbmRleC50cz9mZmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9uZXh0anNcIjtcblxuU2VudHJ5LmluaXQoe1xuICBlbmFibGVkOiB0cnVlLFxuICAvLyBOT1RFOiBVc2UgeW91ciBEU04uIEJvdGggcmVsZWFzZSBhbmQgZW52aXJvbm1lbnQgY2FuIGJlIGhhcmRjb2RlZFxuICAvLyByZWxlYXNlOiA8cHJvY2Vzcy5lbnYuc2VudHJ5UmVsZWFzZT4sXG4gIC8vIGVudmlyb25tZW50OiA8cHJvY2Vzcy5lbnYudGFyZ2V0RW52aXJvbm1lbnQ+LFxuICAvLyBkc246IDxwcm9jZXNzLmVudi5kc24+LFxuICB0cmFjZXNTYW1wbGVSYXRlOiAwLjAwMDEsXG4gIHNhbXBsZVJhdGU6IDEsXG4gIGFsbG93VXJsczogW1xuICAgIC8vIE5PVEU6IFVzZSB5b3VyIGJhc2UgZG9tYWluIG9yIG9taXRcbiAgICAvLyAvaHR0cHM/OlxcL1xcL2NyZWF0ZVxcLnJvYmxveFxcLmNvbS8sXG4gIF0sXG4gIGRlbnlVcmxzOiBbXG4gICAgLy8gTk9URTogVXNlZCB0byBleHBsaWNpdGx5IHJlbW92aW5nIGVycm9ycyBmcm9tIGNocm9tZSBleHRlbnNpb25zXG4gICAgL2V4dGVuc2lvbnNcXC8vaSxcbiAgICAvXmNocm9tZSgtZXh0ZW5zaW9ucz8pPzpcXC9cXC8vaVxuICBdLFxuICBiZWZvcmVTZW5kOiAoZXZlbnQsIF8pID0+IHtcbiAgICAvLyBOT1RFKGpjb3VudHJ5bWFuLCAwMy8xNi8yMDIzKTogU2VlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdC9wdWxsLzM4NDJcbiAgICAvLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdC9pc3N1ZXMvMzE0Ny5cbiAgICAvLyBBbm9ueW1vdXMgIHZhbHVlcyBhcmUgaWdub3JlZCBieSBgYWxsb3dVcmxzYCBhbmQgYGRlbnlVcmxzYFxuICAgIC8vIGlmIHRoZXkncmUgaW4gdGhlIGxhc3QgZnJhbWUuIEhvd2V2ZXIsIGlmIHRoZXkgYXJlIGluIGFsbCBmcmFtZXMsIHRoaXNcbiAgICAvLyBlcnJvciBzaG91bGQgYmUgZHJvcHBlZCAoaS5lLiBsaWtlbHkgYSB3ZWIgZXh0ZW5zaW9uIG9yIGJyb3dzZXIgaXNzdWVzIGluc3RlYWQpXG4gICAgY29uc3QgZnJhbWVzID0gKGV2ZW50LmV4Y2VwdGlvbj8udmFsdWVzIHx8IFtdKVswXT8uc3RhY2t0cmFjZT8uZnJhbWVzO1xuICAgIGlmIChcbiAgICAgIGZyYW1lcz8uZXZlcnkoXG4gICAgICAgIChmcmFtZSkgPT5cbiAgICAgICAgICAhZnJhbWUuZmlsZW5hbWUgfHxcbiAgICAgICAgICBmcmFtZS5maWxlbmFtZSA9PT0gXCI8YW5vbnltb3VzPlwiIHx8XG4gICAgICAgICAgZnJhbWUuZmlsZW5hbWUgPT09IFwiW25hdGl2ZSBjb2RlXVwiXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJTZW50cnkiLCJpbml0IiwiZW5hYmxlZCIsInRyYWNlc1NhbXBsZVJhdGUiLCJzYW1wbGVSYXRlIiwiYWxsb3dVcmxzIiwiZGVueVVybHMiLCJiZWZvcmVTZW5kIiwiZXZlbnQiLCJfIiwiZnJhbWVzIiwiZXhjZXB0aW9uIiwidmFsdWVzIiwic3RhY2t0cmFjZSIsImV2ZXJ5IiwiZnJhbWUiLCJmaWxlbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/sentry/index.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_sentry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/sentry */ \"./modules/sentry/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst getDefaultPageLayout = (page)=>page;\nconst CustomApp = ({ Component , pageProps  })=>{\n    const getPageLayout = Component.getPageLayout || getDefaultPageLayout;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundary, {\n        children: getPageLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/project/sandbox/pages/_app.tsx\",\n            lineNumber: 29,\n            columnNumber: 35\n        }, undefined))\n    }, void 0, false, {\n        fileName: \"/project/sandbox/pages/_app.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTJCO0FBQ2M7QUFHTTtBQWMvQyxNQUFNRSxvQkFBb0IsR0FBRyxDQUFDQyxJQUFlLEdBQUtBLElBQUk7QUFFdEQsTUFBTUMsU0FBUyxHQUlYLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBSztJQUNoQyxNQUFNQyxhQUFhLEdBQUdGLFNBQVMsQ0FBQ0UsYUFBYSxJQUFJTCxvQkFBb0I7SUFFckUscUJBQ0UsOERBQUNELHlEQUFhO2tCQUFFTSxhQUFhLGVBQUMsOERBQUNGLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztxQkFBSSxDQUFDOzs7OztpQkFBaUIsQ0FDNUU7Q0FDSDtBQUVELGlFQUFlRixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TZW50cnktTmV4dC1Db25maWd1cmF0aW9uLVJlcHJvZHVjdGlvbi8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vbW9kdWxlcy9zZW50cnlcIjtcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgdHlwZSB7IEFwcENvbnRleHQsIEFwcEluaXRpYWxQcm9wcywgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tIFwiQHNlbnRyeS9uZXh0anNcIjtcblxudHlwZSBOZXh0TGF5b3V0Q29tcG9uZW50VHlwZTxQID0ge30+ID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIE5leHRQYWdlQ29udGV4dCxcbiAgYW55LFxuICBQXG4+ICYge1xuICBnZXRQYWdlTGF5b3V0PzogKHBhZ2U6IFJlYWN0Tm9kZSkgPT4gUmVhY3ROb2RlO1xufTtcblxudHlwZSBBcHBMYXlvdXRQcm9wcyA9IEFwcFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRMYXlvdXRDb21wb25lbnRUeXBlO1xufTtcblxuY29uc3QgZ2V0RGVmYXVsdFBhZ2VMYXlvdXQgPSAocGFnZTogUmVhY3ROb2RlKSA9PiBwYWdlO1xuXG5jb25zdCBDdXN0b21BcHA6IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0LFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcExheW91dFByb3BzXG4+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBnZXRQYWdlTGF5b3V0ID0gQ29tcG9uZW50LmdldFBhZ2VMYXlvdXQgfHwgZ2V0RGVmYXVsdFBhZ2VMYXlvdXQ7XG5cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JCb3VuZGFyeT57Z2V0UGFnZUxheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KX08L0Vycm9yQm91bmRhcnk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21BcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJFcnJvckJvdW5kYXJ5IiwiZ2V0RGVmYXVsdFBhZ2VMYXlvdXQiLCJwYWdlIiwiQ3VzdG9tQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0UGFnZUxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();