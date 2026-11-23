import { combineReducers, configureStore } from '@reduxjs/toolkit';

import usersReducer from './usersReducer';

export default configureStore({
  reducer: combineReducers({
    users: usersReducer,
  }),
});
