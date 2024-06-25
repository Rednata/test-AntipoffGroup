import { API_URI } from '../../api/api';
import { AppDispatch } from '../store';
import { cardStoreSlice } from './cardStoreSlice';
// import { catalogStoreSlice } from './catalogStoreSlice';


export const cardRequestAsync = (id) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(cardStoreSlice.actions.memberCardRequest());
      const response = await fetch(`${API_URI}api/users/${id}`);
      if (response.ok) {
        const data = await response.json();
        dispatch(cardStoreSlice.actions.memberCardRequestSuccess(data));
      } else {
        throw new Error(String(response.status));
      }
    } catch (error) {
      dispatch(cardStoreSlice.actions.memberCardRequestError(error.message));
      console.log('Ошибка:', (error));
    }
  };
