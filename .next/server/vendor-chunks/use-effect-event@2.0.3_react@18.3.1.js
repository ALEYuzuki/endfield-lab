"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-effect-event@2.0.3_react@18.3.1";
exports.ids = ["vendor-chunks/use-effect-event@2.0.3_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/../node_modules/.pnpm/use-effect-event@2.0.3_react@18.3.1/node_modules/use-effect-event/dist/index.js":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/use-effect-event@2.0.3_react@18.3.1/node_modules/use-effect-event/dist/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useEffectEvent: () => (/* binding */ useEffectEvent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../node_modules/.pnpm/next@15.5.2_@babel+core@7.2_a4e656b99e842170c0a22eb76d21770b/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n\nconst context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(!0);\nfunction forbiddenInRender() {\n  throw new Error(\"A function wrapped in useEffectEvent can't be called during rendering.\");\n}\nconst isInvalidExecutionContextForEventFunction = \"use\" in react__WEBPACK_IMPORTED_MODULE_0__ ? () => {\n  try {\n    return react__WEBPACK_IMPORTED_MODULE_0__.use(context);\n  } catch {\n    return !1;\n  }\n} : () => !1;\nfunction useEffectEvent(fn) {\n  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(forbiddenInRender);\n  return react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect(() => {\n    ref.current = fn;\n  }, [fn]), (...args) => {\n    isInvalidExecutionContextForEventFunction() && forbiddenInRender();\n    const latestFn = ref.current;\n    return latestFn(...args);\n  };\n}\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3VzZS1lZmZlY3QtZXZlbnRAMi4wLjNfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy91c2UtZWZmZWN0LWV2ZW50L2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFDMUIsZ0JBQWdCLGdEQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMkNBQWM7QUFDaEU7QUFDQSxXQUFXLHNDQUFTO0FBQ3BCLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsY0FBYyx5Q0FBWTtBQUMxQixTQUFTLHFEQUF3QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0U7QUFDRiIsInNvdXJjZXMiOlsiRDpcXG5vZGVfbW9kdWxlc1xcLnBucG1cXHVzZS1lZmZlY3QtZXZlbnRAMi4wLjNfcmVhY3RAMTguMy4xXFxub2RlX21vZHVsZXNcXHVzZS1lZmZlY3QtZXZlbnRcXGRpc3RcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IGNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCEwKTtcbmZ1bmN0aW9uIGZvcmJpZGRlbkluUmVuZGVyKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJBIGZ1bmN0aW9uIHdyYXBwZWQgaW4gdXNlRWZmZWN0RXZlbnQgY2FuJ3QgYmUgY2FsbGVkIGR1cmluZyByZW5kZXJpbmcuXCIpO1xufVxuY29uc3QgaXNJbnZhbGlkRXhlY3V0aW9uQ29udGV4dEZvckV2ZW50RnVuY3Rpb24gPSBcInVzZVwiIGluIFJlYWN0ID8gKCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBSZWFjdC51c2UoY29udGV4dCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAhMTtcbiAgfVxufSA6ICgpID0+ICExO1xuZnVuY3Rpb24gdXNlRWZmZWN0RXZlbnQoZm4pIHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKGZvcmJpZGRlbkluUmVuZGVyKTtcbiAgcmV0dXJuIFJlYWN0LnVzZUluc2VydGlvbkVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSBmbjtcbiAgfSwgW2ZuXSksICguLi5hcmdzKSA9PiB7XG4gICAgaXNJbnZhbGlkRXhlY3V0aW9uQ29udGV4dEZvckV2ZW50RnVuY3Rpb24oKSAmJiBmb3JiaWRkZW5JblJlbmRlcigpO1xuICAgIGNvbnN0IGxhdGVzdEZuID0gcmVmLmN1cnJlbnQ7XG4gICAgcmV0dXJuIGxhdGVzdEZuKC4uLmFyZ3MpO1xuICB9O1xufVxuZXhwb3J0IHtcbiAgdXNlRWZmZWN0RXZlbnRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/.pnpm/use-effect-event@2.0.3_react@18.3.1/node_modules/use-effect-event/dist/index.js\n");

/***/ })

};
;