
import { API_URI } from '../../api/api';
import { AppDispatch } from '../store';
import { catalogStoreSlice } from './catalogStoreSlice';

export const catalogRequestAsync = (numPage = 0) =>
  async (dispatch: AppDispatch, getState) => {
    console.log('getState: ', getState);
    const currentCatalog = getState().catalogList.catalogList;
    try {
      dispatch(catalogStoreSlice.actions.catalogRequest());
      const response = await fetch(`${API_URI}api/users?page=${++numPage}`);
      if (response.ok) {
        const data = await response.json();
        if (numPage > 1) {
          const dataMore = [...currentCatalog, ...data.data];
          dispatch(catalogStoreSlice.actions.catalogRequestSuccess(
            { ...data, data: dataMore }
          ));
        } else {
          dispatch(catalogStoreSlice.actions.catalogRequestSuccess(data));
        }
      } else {
        throw new Error(String(response.status));
      }
    } catch (error) {
      console.log('Ошибка:', (error));
    }
  };
