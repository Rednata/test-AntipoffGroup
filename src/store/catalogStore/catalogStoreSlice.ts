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
  }
});


