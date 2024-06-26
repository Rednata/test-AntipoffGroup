import { API_URI } from '../../api/api';
import { AppDispatch } from '../store';
import { cardStoreSlice } from './cardStoreSlice';

export const cardRequestAsync = (id: number) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(cardStoreSlice.actions.memberCardRequest());
      const response: Response = await fetch(`${API_URI}api/users/${id}`);
      if (response.ok) {
        const data = await response.json();
        dispatch(cardStoreSlice.actions.memberCardRequestSuccess(data));
      } else {
        throw new Error(String(response.status));
      }
    } catch (error) {
      console.log('Ошибка:', (error));
    }
  };
