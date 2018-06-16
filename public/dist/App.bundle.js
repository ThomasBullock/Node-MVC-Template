/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function offCanvas() {
	console.log('offCanvas init!');
	var offCanvasToggle = document.querySelector('.off-canvas__toggle');
	var offCanvas = document.querySelector('.off-canvas');
	console.log(offCanvas);
	offCanvasToggle.addEventListener('click', function () {
		console.log('clickity click!');
		offCanvas.classList.toggle('off-canvas--visible');
	});
}

exports.default = offCanvas;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (64)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.7.2\n    at module.exports (/Users/motbook/Sites/MVC-Template/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/motbook/Sites/MVC-Template/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:678:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)\n    at Module.load (internal/modules/cjs/loader.js:589:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:528:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:520:3)\n    at Module.require (internal/modules/cjs/loader.js:626:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at Object.<anonymous> (/Users/motbook/Sites/MVC-Template/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:678:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)\n    at Module.load (internal/modules/cjs/loader.js:589:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:528:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:520:3)\n    at Module.require (internal/modules/cjs/loader.js:626:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at loadLoader (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/NormalModule.js:129:2)\n    at NormalModule.build (/Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/NormalModule.js:180:15)\n    at /Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/NormalModule.js:141:35\n    at /Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/motbook/Sites/MVC-Template/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/NormalModule.js:129:2)\n    at NormalModule.build (/Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/NormalModule.js:180:15)\n    at Compilation.buildModule (/Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/Compilation.js:142:10)\n    at moduleFactory.create (/Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/Compilation.js:424:9)\n    at /Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/NormalModuleFactory.js:242:4\n    at /Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/NormalModuleFactory.js:93:13\n    at /Users/motbook/Sites/MVC-Template/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/motbook/Sites/MVC-Template/node_modules/tapable/lib/Tapable.js:272:13)\n    at onDoneResolving (/Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/NormalModuleFactory.js:68:11)\n    at onDoneResolving (/Users/motbook/Sites/MVC-Template/node_modules/webpack/lib/NormalModuleFactory.js:189:6)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _offCanvas = __webpack_require__(0);

var _offCanvas2 = _interopRequireDefault(_offCanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _offCanvas2.default)();

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map