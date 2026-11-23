Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let _reduxjs_toolkit = require("@reduxjs/toolkit");
let react_redux = require("react-redux");
//#region src/dynamicMiddleware/react/index.ts
const createDynamicMiddleware = () => {
	const instance = (0, _reduxjs_toolkit.createDynamicMiddleware)();
	const createDispatchWithMiddlewareHookFactory = (context = react_redux.ReactReduxContext) => {
		const useDispatch = context === react_redux.ReactReduxContext ? react_redux.useDispatch : (0, react_redux.createDispatchHook)(context);
		function createDispatchWithMiddlewareHook(...middlewares) {
			instance.addMiddleware(...middlewares);
			return useDispatch;
		}
		createDispatchWithMiddlewareHook.withTypes = () => createDispatchWithMiddlewareHook;
		return createDispatchWithMiddlewareHook;
	};
	const createDispatchWithMiddlewareHook = createDispatchWithMiddlewareHookFactory();
	return {
		...instance,
		createDispatchWithMiddlewareHookFactory,
		createDispatchWithMiddlewareHook
	};
};
//#endregion
exports.createDynamicMiddleware = createDynamicMiddleware;
Object.keys(_reduxjs_toolkit).forEach(function(k) {
	if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function() {
			return _reduxjs_toolkit[k];
		}
	});
});

//# sourceMappingURL=redux-toolkit-react.development.cjs.map