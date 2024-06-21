import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { registryStoreSlice } from './registryStore/registryStoreSlice';
console.log('registryStoreSlice: ', registryStoreSlice);

const rootReducer = combineReducers({
  token: registryStoreSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
});
