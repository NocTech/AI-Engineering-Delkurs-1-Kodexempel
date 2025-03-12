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
exports.id = "app/api/openai/route";
exports.ids = ["app/api/openai/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai%2Froute&page=%2Fapi%2Fopenai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai%2Froute.js&appDir=%2FUsers%2Fjoeljanson%2FWork%2FOthers-projects%2FReky%2FAI-Engineering%2FDelkurs-1%2FKodexempel-git%2FVecka-8%2Fprerecorded%2Fnext-ai-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjoeljanson%2FWork%2FOthers-projects%2FReky%2FAI-Engineering%2FDelkurs-1%2FKodexempel-git%2FVecka-8%2Fprerecorded%2Fnext-ai-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai%2Froute&page=%2Fapi%2Fopenai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai%2Froute.js&appDir=%2FUsers%2Fjoeljanson%2FWork%2FOthers-projects%2FReky%2FAI-Engineering%2FDelkurs-1%2FKodexempel-git%2FVecka-8%2Fprerecorded%2Fnext-ai-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjoeljanson%2FWork%2FOthers-projects%2FReky%2FAI-Engineering%2FDelkurs-1%2FKodexempel-git%2FVecka-8%2Fprerecorded%2Fnext-ai-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_joeljanson_Work_Others_projects_Reky_AI_Engineering_Delkurs_1_Kodexempel_git_Vecka_8_prerecorded_next_ai_apis_app_api_openai_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/openai/route.js */ \"(rsc)/./app/api/openai/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/openai/route\",\n        pathname: \"/api/openai\",\n        filename: \"route\",\n        bundlePath: \"app/api/openai/route\"\n    },\n    resolvedPagePath: \"/Users/joeljanson/Work/Others-projects/Reky/AI-Engineering/Delkurs-1/Kodexempel-git/Vecka-8/prerecorded/next-ai-apis/app/api/openai/route.js\",\n    nextConfigOutput,\n    userland: _Users_joeljanson_Work_Others_projects_Reky_AI_Engineering_Delkurs_1_Kodexempel_git_Vecka_8_prerecorded_next_ai_apis_app_api_openai_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/openai/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZvcGVuYWklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm9wZW5haSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm9wZW5haSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmpvZWxqYW5zb24lMkZXb3JrJTJGT3RoZXJzLXByb2plY3RzJTJGUmVreSUyRkFJLUVuZ2luZWVyaW5nJTJGRGVsa3Vycy0xJTJGS29kZXhlbXBlbC1naXQlMkZWZWNrYS04JTJGcHJlcmVjb3JkZWQlMkZuZXh0LWFpLWFwaXMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGam9lbGphbnNvbiUyRldvcmslMkZPdGhlcnMtcHJvamVjdHMlMkZSZWt5JTJGQUktRW5naW5lZXJpbmclMkZEZWxrdXJzLTElMkZLb2RleGVtcGVsLWdpdCUyRlZlY2thLTglMkZwcmVyZWNvcmRlZCUyRm5leHQtYWktYXBpcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM0RjtBQUN6SztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYWktYXBpcy8/YjBlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvam9lbGphbnNvbi9Xb3JrL090aGVycy1wcm9qZWN0cy9SZWt5L0FJLUVuZ2luZWVyaW5nL0RlbGt1cnMtMS9Lb2RleGVtcGVsLWdpdC9WZWNrYS04L3ByZXJlY29yZGVkL25leHQtYWktYXBpcy9hcHAvYXBpL29wZW5haS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvb3BlbmFpL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvb3BlbmFpXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9vcGVuYWkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvam9lbGphbnNvbi9Xb3JrL090aGVycy1wcm9qZWN0cy9SZWt5L0FJLUVuZ2luZWVyaW5nL0RlbGt1cnMtMS9Lb2RleGVtcGVsLWdpdC9WZWNrYS04L3ByZXJlY29yZGVkL25leHQtYWktYXBpcy9hcHAvYXBpL29wZW5haS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9vcGVuYWkvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai%2Froute&page=%2Fapi%2Fopenai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai%2Froute.js&appDir=%2FUsers%2Fjoeljanson%2FWork%2FOthers-projects%2FReky%2FAI-Engineering%2FDelkurs-1%2FKodexempel-git%2FVecka-8%2Fprerecorded%2Fnext-ai-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjoeljanson%2FWork%2FOthers-projects%2FReky%2FAI-Engineering%2FDelkurs-1%2FKodexempel-git%2FVecka-8%2Fprerecorded%2Fnext-ai-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/openai/route.js":
/*!*********************************!*\
  !*** ./app/api/openai/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\nconst systemInstruction = \"You are a helpful Stockholm guide. If the user asks about anything other than Stockholm, kindly reply, 'I'm sorry, but I can only answer questions related to Stockholm.' Additionally, provide a fun fact about Stockholm related to the user's query when possible.\";\nasync function POST(request) {\n    try {\n        const { query } = await request.json();\n        const openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            apiKey: process.env.OPENAI_API_KEY\n        });\n        const response = await openai.chat.completions.create({\n            model: \"gpt-4\",\n            messages: [\n                {\n                    role: \"system\",\n                    content: systemInstruction\n                },\n                {\n                    role: \"user\",\n                    content: query\n                }\n            ],\n            max_tokens: 500\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(response);\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL29wZW5haS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFDZTtBQUUzQyxNQUFNRSxvQkFDSjtBQUVLLGVBQWVDLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUQsUUFBUUUsSUFBSTtRQUNwQyxNQUFNQyxTQUFTLElBQUlQLDhDQUFNQSxDQUFDO1lBQ3hCUSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7UUFDcEM7UUFFQSxNQUFNQyxXQUFXLE1BQU1MLE9BQU9NLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLENBQUM7WUFDcERDLE9BQU87WUFDUEMsVUFBVTtnQkFDUjtvQkFDRUMsTUFBTTtvQkFDTkMsU0FBU2pCO2dCQUNYO2dCQUNBO29CQUNFZ0IsTUFBTTtvQkFDTkMsU0FBU2Q7Z0JBQ1g7YUFDRDtZQUNEZSxZQUFZO1FBQ2Q7UUFFQSxPQUFPbkIsa0ZBQVlBLENBQUNLLElBQUksQ0FBQ007SUFDM0IsRUFBRSxPQUFPUyxPQUFPO1FBQ2QsT0FBT3BCLGtGQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBRWUsT0FBT0EsTUFBTUMsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpLWFwaXMvLi9hcHAvYXBpL29wZW5haS9yb3V0ZS5qcz9iZmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcGVuQUkgZnJvbSAnb3BlbmFpJztcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcblxuY29uc3Qgc3lzdGVtSW5zdHJ1Y3Rpb24gPVxuICBcIllvdSBhcmUgYSBoZWxwZnVsIFN0b2NraG9sbSBndWlkZS4gSWYgdGhlIHVzZXIgYXNrcyBhYm91dCBhbnl0aGluZyBvdGhlciB0aGFuIFN0b2NraG9sbSwga2luZGx5IHJlcGx5LCAnSSdtIHNvcnJ5LCBidXQgSSBjYW4gb25seSBhbnN3ZXIgcXVlc3Rpb25zIHJlbGF0ZWQgdG8gU3RvY2tob2xtLicgQWRkaXRpb25hbGx5LCBwcm92aWRlIGEgZnVuIGZhY3QgYWJvdXQgU3RvY2tob2xtIHJlbGF0ZWQgdG8gdGhlIHVzZXIncyBxdWVyeSB3aGVuIHBvc3NpYmxlLlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSSh7XG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgbW9kZWw6IFwiZ3B0LTRcIixcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByb2xlOiBcInN5c3RlbVwiLFxuICAgICAgICAgIGNvbnRlbnQ6IHN5c3RlbUluc3RydWN0aW9uLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgY29udGVudDogcXVlcnksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbWF4X3Rva2VuczogNTAwLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlc3BvbnNlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59ICJdLCJuYW1lcyI6WyJPcGVuQUkiLCJOZXh0UmVzcG9uc2UiLCJzeXN0ZW1JbnN0cnVjdGlvbiIsIlBPU1QiLCJyZXF1ZXN0IiwicXVlcnkiLCJqc29uIiwib3BlbmFpIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwicmVzcG9uc2UiLCJjaGF0IiwiY29tcGxldGlvbnMiLCJjcmVhdGUiLCJtb2RlbCIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJtYXhfdG9rZW5zIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/openai/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai%2Froute&page=%2Fapi%2Fopenai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai%2Froute.js&appDir=%2FUsers%2Fjoeljanson%2FWork%2FOthers-projects%2FReky%2FAI-Engineering%2FDelkurs-1%2FKodexempel-git%2FVecka-8%2Fprerecorded%2Fnext-ai-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjoeljanson%2FWork%2FOthers-projects%2FReky%2FAI-Engineering%2FDelkurs-1%2FKodexempel-git%2FVecka-8%2Fprerecorded%2Fnext-ai-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();