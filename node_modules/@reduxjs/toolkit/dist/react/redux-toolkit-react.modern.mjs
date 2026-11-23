import { createDynamicMiddleware as createDynamicMiddleware$1 } from "@reduxjs/toolkit";
import { ReactReduxContext, createDispatchHook, useDispatch } from "react-redux";
export * from "@reduxjs/toolkit";
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
	return {
		...instance,
		createDispatchWithMiddlewareHookFactory,
		createDispatchWithMiddlewareHook
	};
};
//#endregion
export { createDynamicMiddleware };

//# sourceMappingURL=redux-toolkit-react.modern.mjs.map