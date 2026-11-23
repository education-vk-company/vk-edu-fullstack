import { DynamicMiddlewareInstance, GetDispatch, GetState, MiddlewareApiConfig, TSHelpersExtractDispatchExtensions } from "@reduxjs/toolkit";
import { Context } from "react";
import { ReactReduxContextValue } from "react-redux";
import { Action, Dispatch, Middleware, UnknownAction } from "redux";
export * from "@reduxjs/toolkit";
//#region src/dynamicMiddleware/react/index.d.ts
type UseDispatchWithMiddlewareHook<Middlewares extends Middleware<any, State, DispatchType>[] = [], State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = () => TSHelpersExtractDispatchExtensions<Middlewares> & DispatchType;
type CreateDispatchWithMiddlewareHook<State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = {
  <Middlewares extends [Middleware<any, State, DispatchType>, ...Middleware<any, State, DispatchType>[]]>(...middlewares: Middlewares): UseDispatchWithMiddlewareHook<Middlewares, State, DispatchType>;
  withTypes<MiddlewareConfig extends MiddlewareApiConfig>(): CreateDispatchWithMiddlewareHook<GetState<MiddlewareConfig>, GetDispatch<MiddlewareConfig>>;
};
type ActionFromDispatch<DispatchType extends Dispatch<Action>> = DispatchType extends Dispatch<infer Action> ? Action : never;
type ReactDynamicMiddlewareInstance<State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = DynamicMiddlewareInstance<State, DispatchType> & {
  createDispatchWithMiddlewareHookFactory: (context?: Context<ReactReduxContextValue<State, ActionFromDispatch<DispatchType>> | null>) => CreateDispatchWithMiddlewareHook<State, DispatchType>;
  createDispatchWithMiddlewareHook: CreateDispatchWithMiddlewareHook<State, DispatchType>;
};
declare const createDynamicMiddleware: <State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>>() => ReactDynamicMiddlewareInstance<State, DispatchType>;
//#endregion
export { type CreateDispatchWithMiddlewareHook, createDynamicMiddleware };