// store.js
import { legacy_createStore as createStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
