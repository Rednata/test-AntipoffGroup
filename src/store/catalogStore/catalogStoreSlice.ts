import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalogList: [],
  totalPages: 0,
  totalMembers: 0,
  error: '',
};

export const catalogStoreSlice = createSlice({
  name: 'catalogList',
  initialState,
  reducers: {
    catalogRequest: (state) => {
      state.error = '';
    },
    catalogRequestSuccess: (state, action) => {
      state.catalogList = action.payload.data;
      state.totalPages = action.payload.total_pages;
      state.totalMembers = action.payload.total;
      state.error = '';
    },
    catalogRequestError: (state, action) => {
      state.error = action.payload;
    },
    updateCatalogListLiked: (state, action) => {
      state.catalogList = [...state.catalogList]
      const catalog = [...state.catalogList].map(elem => {
        if (elem.id === action.payload.id) {
          return ({ ...elem, isLike: action.payload.isLikeBtn });
        } else {
          return elem;
        }
      });
      state.catalogList = catalog;
    }
  }
});


