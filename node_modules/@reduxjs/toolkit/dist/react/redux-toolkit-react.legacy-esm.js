import { createDynamicMiddleware as createDynamicMiddleware$1 } from "@reduxjs/toolkit";
import { ReactReduxContext, createDispatchHook, useDispatch } from "react-redux";
export * from "@reduxjs/toolkit";
//#region \0@oxc-project+runtime@0.144.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.144.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.144.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.144.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.144.0/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
//#endregion
//#region src/dynamicMiddleware/react/index.ts
const createDynamicMiddleware = () => {
	const instance = createDynamicMiddleware$1();
	const createDispatchWithMiddlewareHookFactory = (context = ReactReduxContext) => {
		const useDispatch$1 = context === ReactReduxContext ? useDispatch : createDispatchHook(context);
		function createDispatchWithMiddlewareHook(...middlewares) {
			instance.addMiddleware(...middlewares);
			return useDispatch$1;
		}
		createDispatchWithMiddlewareHook.withTypes = () => createDispatchWithMiddlewareHook;
		return createDispatchWithMiddlewareHook;
	};
	const createDispatchWithMiddlewareHook = createDispatchWithMiddlewareHookFactory();
	return _objectSpread2(_objectSpread2({}, instance), {}, {
		createDispatchWithMiddlewareHookFactory,
		createDispatchWithMiddlewareHook
	});
};
//#endregion
export { createDynamicMiddleware };

//# sourceMappingURL=redux-toolkit-react.legacy-esm.js.map