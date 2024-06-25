import { API_URI } from '../../api/api';
import { setLocalStorage, setToken } from '../../localStorage/controlLocalStorage';
import { AppDispatch } from '../store';
import { registryStoreSlice } from './registryStoreSlice';

interface infoAuth {
  email: string,
  password: string
}

export const tokenMiddleware = () => (next) => (action: any) => {
  if (action.type === 'token/updateToken') {
    setToken(action.payload.token);
  }
  next(action);
};

export const registryRequestAsync = ({ email, password }: infoAuth) =>
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
      dispatch(registryStoreSlice.actions.registryRequestError(error.message));
      console.log('Ошибка:', (error));
    }
  };
