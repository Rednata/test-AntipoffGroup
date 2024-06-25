import { API_URI } from '../../api/api';
import { AppDispatch } from '../store';
import { catalogStoreSlice } from './catalogStoreSlice';

export const catalogRequestAsync = () =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(catalogStoreSlice.actions.catalogRequest());
      const response = await fetch(`${API_URI}api/users`);
      if (response.ok) {
        const data = await response.json();
        dispatch(catalogStoreSlice.actions.catalogRequestSuccess(data));
      } else {
        throw new Error(String(response.status));
      }
    } catch (error) {
      dispatch(catalogStoreSlice.actions.catalogRequestError(error.message));
      console.log('Ошибка:', (error));
    }
  };
