import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { registryStoreSlice } from './registryStore/registryStoreSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { catalogStoreSlice } from './catalogStore/catalogStoreSlice';
import { cardStoreSlice } from './cardStore/cardStoreSlice';
import { tokenMiddleware } from './registryStore/registryActionRequest';
import {
  likeMemberMiddleware, likeMiddleware
} from './catalogStore/likeMiddleware';

const rootReducer = combineReducers({
  token: registryStoreSlice.reducer,
  catalogList: catalogStoreSlice.reducer,
  memberCard: cardStoreSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      tokenMiddleware, likeMemberMiddleware, likeMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
