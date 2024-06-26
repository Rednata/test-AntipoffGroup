import { Dispatch } from '@reduxjs/toolkit';
import { API_URI } from '../../api/api';
import { setToken } from '../../localStorage/controlLocalStorage';
import { AppDispatch } from '../store';
import { registryStoreSlice } from './registryStoreSlice';

interface IInfoAuth {
  email: string,
  password: string
}

export const tokenMiddleware = () => (next) => (action) => {
  if (action.type === 'token/updateToken') {
    setToken(action.payload.token);
  }
  next(action);
};

export const registryRequestAsync = ({ email, password }: IInfoAuth) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(registryStoreSlice.actions.registryRequest());
      const response = await fetch(`${API_URI}api/register`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(registryStoreSlice.actions.updateToken(data));
        dispatch(registryStoreSlice.actions.registryRequestSuccess(data));
      } else {
        throw new Error(String(response.status));
      }
    } catch (error) {
      console.log('Ошибка:', (error));
    }
  };
