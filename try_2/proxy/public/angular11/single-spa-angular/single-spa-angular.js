System.register(["@angular/common","tslib","@angular/core"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE__0S4P__, __WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE_vOrQ__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__0S4P__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__17wl__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_vOrQ__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "iYF8");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0S4P":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0S4P__;

/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "K4BP":
/*!**********************************************************************************!*\
  !*** ./node_modules/single-spa-angular/fesm2015/single-spa-angular-internals.js ***!
  \**********************************************************************************/
/*! exports provided: getContainerElementAndSetTemplate, removeApplicationFromDOMIfIvyEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainerElementAndSetTemplate", function() { return getContainerElementAndSetTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeApplicationFromDOMIfIvyEnabled", function() { return removeApplicationFromDOMIfIvyEnabled; });
function removeApplicationFromDOMIfIvyEnabled(options, props) {
    if (ivyEnabled()) {
        const domElementGetter = chooseDomElementGetter(options, props);
        const domElement = getContainerElement(domElementGetter);
        // View Engine removes all nodes automatically when calling `NgModuleRef.destroy()`,
        // which calls `ComponentRef.destroy()`.
        // Basically this will remove `app-root` or any other selector from the container element.
        while (domElement.firstChild)
            domElement.removeChild(domElement.firstChild);
    }
}
function getContainerElementAndSetTemplate(options, props) {
    const domElementGetter = chooseDomElementGetter(options, props);
    if (!domElementGetter) {
        throw Error(`Cannot mount angular application '${props.name || props.appName}' without a domElementGetter provided either as an opt or a prop`);
    }
    const containerElement = getContainerElement(domElementGetter);
    containerElement.innerHTML = options.template;
    return containerElement;
}
function getContainerElement(domElementGetter) {
    const element = domElementGetter();
    if (!element) {
        throw Error('domElementGetter did not return a valid dom element');
    }
    return element;
}
function chooseDomElementGetter(opts, props) {
    var _a;
    props = (_a = props === null || props === void 0 ? void 0 : props.customProps) !== null && _a !== void 0 ? _a : props;
    if (props.domElement) {
        return () => props.domElement;
    }
    else if (props.domElementGetter) {
        return props.domElementGetter;
    }
    else if (opts.domElementGetter) {
        return opts.domElementGetter;
    }
    else {
        return defaultDomElementGetter(props.name);
    }
}
function defaultDomElementGetter(name) {
    return function getDefaultDomElement() {
        const id = `single-spa-application:${name}`;
        let domElement = document.getElementById(id);
        if (!domElement) {
            domElement = document.createElement('div');
            domElement.id = id;
            document.body.appendChild(domElement);
        }
        return domElement;
    };
}
function ivyEnabled() {
    try {
        // `ɵivyEnabled` variable is exposed starting from version 8.
        // We use `require` here except of a single `import { ɵivyEnabled }` because the
        // developer can use Angular version that doesn't expose it (all versions <8).
        // The `catch` statement will handle those cases.
        // eslint-disable-next-line
        const { ɵivyEnabled } = __webpack_require__(/*! @angular/core */ "vOrQ");
        return !!ɵivyEnabled;
    }
    catch (_a) {
        return false;
    }
}

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=single-spa-angular-internals.js.map

/***/ }),

/***/ "iYF8":
/*!************************************************************************!*\
  !*** ./node_modules/single-spa-angular/fesm2015/single-spa-angular.js ***!
  \************************************************************************/
/*! exports provided: getSingleSpaExtraProviders, singleSpaAngular, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleSpaExtraProviders", function() { return getSingleSpaExtraProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSpaAngular", function() { return singleSpaAngular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SingleSpaPlatformLocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var single_spa_angular_internals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! single-spa-angular/internals */ "K4BP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "vOrQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "0S4P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);






class SingleSpaPlatformLocation extends _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵBrowserPlatformLocation"] {
    constructor() {
        super(...arguments);
        // This is a simple marker that helps us to ignore PopStateEvents
        // that was not dispatched by the browser.
        this.skipNextPopState = false;
        // The key here is an actual forked `Zone` of some specific application.
        // We will be able to find the specific zone when application gets destroyed
        // by application `name`.
        // The reason of that the `onPopState` method is invoked during `bootstrapModule`
        // and we can't know what application has invoked it. Why should we know the application
        // that has invoked `onPopState`? When application gets destroyed in a `sharing dependencies mode`
        // (when there is a single platform per all applications) we want to remove application
        // specific `popstate` listeners. E.g. if there are 2 applications:
        // * shop application adds `popstate` listener
        // * navbar application adds `popstate` listener
        // When shop application gets destroyed we want to remove only its `popstate` listener.
        this.zoneToOnPopStateListenersMap = new Map();
        // This is used only to make `Zone.wrap` happy, since it requires 2 arguments
        // and the second argument is a unique string which `zone.js` uses for debugging purposes.
        // We might want to use the application name, but we're not able to get it when `onPopState`
        // method is called during module bootstrapping.
        this.source = 0;
    }
    destroyApplication(zoneIdentifier) {
        // TLDR: Angular adds `popstate` event listener and then doesn't remove it when application gets destroyed.
        // Basically, Angular has a potentional memory leak. The `ɵBrowserPlatformLocation`
        // has `onPopState` method which adds `popstate` event listener and forgets, see here:
        // https://github.com/angular/angular/blob/14be55c9facf3e47b8c97df4502dc3f0f897da03/packages/common/src/location/platform_location.ts#L126
        const zone = [...this.zoneToOnPopStateListenersMap.keys()].find(
        // `getZoneWith` will return a zone which defines a `key` and in our case
        // we define a custom key in `single-spa-angular.ts`
        // via this line of code:
        // `_properties[zoneIdentifier] = true;`
        zone => zone.getZoneWith(zoneIdentifier) !== null);
        const onPopStateListeners = this.zoneToOnPopStateListenersMap.get(zone);
        if (Array.isArray(onPopStateListeners)) {
            for (const onPopStateListener of onPopStateListeners) {
                window.removeEventListener('popstate', onPopStateListener);
            }
        }
        this.zoneToOnPopStateListenersMap.delete(zone);
    }
    pushState(state, title, url) {
        this.skipNextPopState = true;
        super.pushState(state, title, url);
    }
    replaceState(state, title, url) {
        this.skipNextPopState = true;
        super.replaceState(state, title, url);
    }
    onPopState(fn) {
        // `Zone.current` will reference the zone that serves as an execution context
        // to some specific application, especially when `onPopState` is called.
        const zone = Zone.current;
        // Wrap any event listener into zone that is specific to some application.
        // The main issue is `back/forward` buttons of browsers, because they invoke
        // `history.back|forward` which dispatch `popstate` event. Since `single-spa`
        // overrides `history.replaceState` Angular's zone cannot intercept this event.
        // Only the root zone is able to intercept all events.
        // See https://github.com/single-spa/single-spa-angular/issues/94 for more details
        fn = zone.wrap(fn, `${this.source++}`);
        const onPopStateListener = (event) => {
            // The `LocationChangeEvent` doesn't have the `singleSpa` property, since it's added
            // by `single-spa` starting from `5.4` version. We need this check because we want
            // to skip "unnatural" PopStateEvents, the one caused by `single-spa`.
            const popStateEventWasDispatchedBySingleSpa = !!event
                .singleSpa;
            if (this.skipNextPopState && popStateEventWasDispatchedBySingleSpa) {
                this.skipNextPopState = false;
            }
            else {
                fn(event);
            }
        };
        this.storeOnPopStateListener(zone, onPopStateListener);
        super.onPopState(onPopStateListener);
    }
    storeOnPopStateListener(zone, onPopStateListener) {
        // All listeners should be stored inside an array because the `onPopState` can be called
        // multiple times thus we wanna reference all listeners to remove them further.
        const onPopStateListeners = this.zoneToOnPopStateListenersMap.get(zone) || [];
        onPopStateListeners.push(onPopStateListener);
        if (!this.zoneToOnPopStateListenersMap.has(zone)) {
            this.zoneToOnPopStateListenersMap.set(zone, onPopStateListeners);
        }
    }
}
SingleSpaPlatformLocation.ɵfac = function SingleSpaPlatformLocation_Factory(t) { return ɵSingleSpaPlatformLocation_BaseFactory(t || SingleSpaPlatformLocation); };
SingleSpaPlatformLocation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SingleSpaPlatformLocation, factory: SingleSpaPlatformLocation.ɵfac });
const ɵSingleSpaPlatformLocation_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SingleSpaPlatformLocation);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SingleSpaPlatformLocation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], null, null); })();
/**
 * The `PlatformLocation` class is an "injectee" of the `PathLocationStrategy`,
 * which creates `Subject` internally for listening on `popstate` events. We want
 * to provide this class in the most top injector that's used during bootstrapping.
 */
function getSingleSpaExtraProviders() {
    return [
        {
            provide: SingleSpaPlatformLocation,
            useClass: SingleSpaPlatformLocation,
            deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])]],
        },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"],
            useExisting: SingleSpaPlatformLocation,
        },
    ];
}

const defaultOptions = {
    // Required options that will be set by the library consumer.
    NgZone: null,
    bootstrapFunction: null,
    template: null,
    // Optional options
    Router: undefined,
    domElementGetter: undefined,
    AnimationEngine: undefined,
    updateFunction: () => Promise.resolve(),
    bootstrappedModule: null,
};
function singleSpaAngular(userOptions) {
    if (typeof userOptions !== 'object') {
        throw Error('single-spa-angular requires a configuration object');
    }
    const options = Object.assign(Object.assign({}, defaultOptions), userOptions);
    if (typeof options.bootstrapFunction !== 'function') {
        throw Error('single-spa-angular must be passed an options.bootstrapFunction');
    }
    if (typeof options.template !== 'string') {
        throw Error('single-spa-angular must be passed options.template string');
    }
    if (!options.NgZone) {
        throw Error(`single-spa-angular must be passed the NgZone option`);
    }
    if (options.Router && !options.NavigationStart) {
        // We call `console.warn` except of throwing `new Error()` since this will not
        // be a breaking change.
        console.warn(`single-spa-angular must be passed the NavigationStart option`);
    }
    return {
        bootstrap: bootstrap.bind(null, options),
        mount: mount.bind(null, options),
        unmount: unmount.bind(null, options),
        update: options.updateFunction,
    };
}
function bootstrap(options, props) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        // Angular provides an opportunity to develop `zone-less` application, where developers
        // have to trigger change detection manually.
        // See https://angular.io/guide/zone#noopzone
        if (options.NgZone === 'noop') {
            return;
        }
        // In order for multiple Angular apps to work concurrently on a page, they each need a unique identifier.
        options.zoneIdentifier = `single-spa-angular:${props.name || props.appName}`;
        // This is a hack, since NgZone doesn't allow you to configure the property that identifies your zone.
        // See https://github.com/PlaceMe-SAS/single-spa-angular-cli/issues/33,
        // https://github.com/single-spa/single-spa-angular/issues/47,
        // https://github.com/angular/angular/blob/a14dc2d7a4821a19f20a9547053a5734798f541e/packages/core/src/zone/ng_zone.ts#L144,
        // and https://github.com/angular/angular/blob/a14dc2d7a4821a19f20a9547053a5734798f541e/packages/core/src/zone/ng_zone.ts#L257
        options.NgZone.isInAngularZone = () => {
            // @ts-ignore
            return window.Zone.current._properties[options.zoneIdentifier] === true;
        };
        options.routingEventListener = () => {
            options.bootstrappedNgZone.run(() => {
                // See https://github.com/single-spa/single-spa-angular/issues/86
                // Zone is unaware of the single-spa navigation change and so Angular change detection doesn't work
                // unless we tell Zone that something happened
            });
        };
    });
}
function mount(options, props) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        Object(single_spa_angular_internals__WEBPACK_IMPORTED_MODULE_1__["getContainerElementAndSetTemplate"])(options, props);
        const bootstrapPromise = options.bootstrapFunction(props);
        if (!(bootstrapPromise instanceof Promise)) {
            throw Error(`single-spa-angular: the options.bootstrapFunction must return a promise, but instead returned a '${typeof bootstrapPromise}' that is not a Promise`);
        }
        const module = yield bootstrapPromise;
        if (!module || typeof module.destroy !== 'function') {
            throw Error(`single-spa-angular: the options.bootstrapFunction returned a promise that did not resolve with a valid Angular module. Did you call platformBrowserDynamic().bootstrapModule() correctly?`);
        }
        const singleSpaPlatformLocation = module.injector.get(SingleSpaPlatformLocation, null);
        const ngZoneEnabled = options.NgZone !== 'noop';
        // The user has to provide `BrowserPlatformLocation` only if his application uses routing.
        // So if he provided `Router` but didn't provide `BrowserPlatformLocation` then we have to inform him.
        // Also `getSingleSpaExtraProviders()` function should be called only if the user doesn't use
        // `zone-less` change detection, if `NgZone` is `noop` then we can skip it.
        if (ngZoneEnabled && options.Router && singleSpaPlatformLocation === null) {
            throw new Error(`
      single-spa-angular: could not retrieve extra providers from the platform injector. Did you call platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule()?
    `);
        }
        const bootstrappedOptions = options;
        if (ngZoneEnabled) {
            const ngZone = module.injector.get(options.NgZone);
            const zoneIdentifier = bootstrappedOptions.zoneIdentifier;
            // `NgZone` can be enabled but routing may not be used thus `getSingleSpaExtraProviders()`
            // function was not called.
            if (singleSpaPlatformLocation !== null) {
                skipLocationChangeOnNonImperativeRoutingTriggers(module, options);
                // Cleanup resources, especially remove event listeners thus they will not be added
                // twice when application gets bootstrapped the second time.
                module.onDestroy(() => {
                    singleSpaPlatformLocation.destroyApplication(zoneIdentifier);
                });
            }
            bootstrappedOptions.bootstrappedNgZone = ngZone;
            bootstrappedOptions.bootstrappedNgZone['_inner']._properties[zoneIdentifier] = true;
            window.addEventListener('single-spa:routing-event', bootstrappedOptions.routingEventListener);
        }
        bootstrappedOptions.bootstrappedModule = module;
        return module;
    });
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function unmount(options, props) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        if (options.Router) {
            // Workaround for https://github.com/angular/angular/issues/19079
            const router = options.bootstrappedModule.injector.get(options.Router);
            router.dispose();
        }
        if (options.routingEventListener) {
            window.removeEventListener('single-spa:routing-event', options.routingEventListener);
        }
        if (options.AnimationEngine) {
            /*
            The BrowserAnimationsModule does not clean up after itself :'(. When you unmount/destroy the main module, the
            BrowserAnimationsModule uses an AnimationRenderer thing to remove dom elements from the page. But the AnimationRenderer
            defers the actual work to the TransitionAnimationEngine to do this, and the TransitionAnimationEngine doesn't actually
            remove the dom node, but just calls "markElementAsRemoved()".
        
            See https://github.com/angular/angular/blob/db62ccf9eb46ee89366ade586365ea027bb93eb1/packages/animations/browser/src/render/transition_animation_engine.ts#L717
        
            What markAsRemovedDoes is put it into an array called "collectedLeaveElements", which is all the elements that should be removed
            after the DOM has had a chance to do any animations.
        
            See https://github.com/angular/angular/blob/master/packages/animations/browser/src/render/transition_animation_engine.ts#L525
        
            The actual dom nodes aren't removed until the TransitionAnimationEngine "flushes".
        
            See https://github.com/angular/angular/blob/db62ccf9eb46ee89366ade586365ea027bb93eb1/packages/animations/browser/src/render/transition_animation_engine.ts#L851
        
            Unfortunately, though, that "flush" will never happen, since the entire module is being destroyed and there will be no more flushes.
            So what we do in this code is force one more flush of the animations after the module is destroyed.
        
            Ideally, we would do this by getting the TransitionAnimationEngine directly and flushing it. Unfortunately, though, it's private class
            that cannot be imported and is not provided to the dependency injector. So, instead, we get its wrapper class, AnimationEngine, and then
            access its private variable reference to the TransitionAnimationEngine so that we can call flush.
            */
            const animationEngine = options.bootstrappedModule.injector.get(options.AnimationEngine);
            animationEngine._transitionEngine.flush();
        }
        options.bootstrappedModule.destroy();
        options.bootstrappedModule = null;
        // TODO: this is not an issue anymore and should be removed in the future.
        Object(single_spa_angular_internals__WEBPACK_IMPORTED_MODULE_1__["removeApplicationFromDOMIfIvyEnabled"])(options, props);
    });
}
function skipLocationChangeOnNonImperativeRoutingTriggers(module, options) {
    if (!options.NavigationStart) {
        // As discussed we don't do anything right now if the developer doesn't provide
        // `options.NavigationStart` since this might be a breaking change.
        return;
    }
    const router = module.injector.get(options.Router);
    const subscription = router.events.subscribe((event) => {
        if (event instanceof options.NavigationStart) {
            const currentNavigation = router.getCurrentNavigation();
            // This listener will be set up for each Angular application
            // that has routing capabilities.
            // We set `skipLocationChange` for each non-imperative navigation,
            // Angular router checks under the hood if it has to change
            // the browser URL or not.
            // If `skipLocationChange` is truthy then Angular router will not call
            // `setBrowserUrl()` which calls `history.replaceState()` and dispatches `popstate` event.
            if (currentNavigation.trigger !== 'imperative') {
                currentNavigation.extras.skipLocationChange = true;
                currentNavigation.extras.replaceUrl = false;
            }
        }
    });
    module.onDestroy(() => {
        subscription.unsubscribe();
    });
}

/**
 * The public api for consumers of single-spa-angular
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=single-spa-angular.js.map

/***/ }),

/***/ "vOrQ":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vOrQ__;

/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=single-spa-angular.js.map
//# sourceMappingURL=single-spa-angular.js.map