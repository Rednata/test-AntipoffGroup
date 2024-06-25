import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { registryStoreSlice } from './registryStore/registryStoreSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { catalogStoreSlice } from './catalogStore/catalogStoreSlice';
import { cardStoreSlice } from './cardStore/cardStoreSlice';
import { tokenMiddleware } from './registryStore/registryActionRequest';

const rootReducer = combineReducers({
  token: registryStoreSlice.reducer,
  catalogList: catalogStoreSlice.reducer,
  memberCard: cardStoreSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenMiddleware),
});

export type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
