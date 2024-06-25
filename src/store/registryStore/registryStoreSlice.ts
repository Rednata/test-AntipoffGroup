import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  error: '',
};

export const registryStoreSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    registryRequest: (state) => {
      state.error = '';
    },
    registryRequestSuccess: (state, action) => {
      state.token = action.payload.token;
      state.error = '';
    },
    registryRequestError: (state, action) => {
      state.error = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    }
  }

});


