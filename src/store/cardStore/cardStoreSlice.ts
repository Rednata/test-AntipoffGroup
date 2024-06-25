import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  memberCard: {},
  error: '',
};

export const cardStoreSlice = createSlice({
  name: 'memberCard',
  initialState,
  reducers: {
    memberCardRequest: (state) => {
      state.error = '';
    },
    memberCardRequestSuccess: (state, action) => {
      state.memberCard = action.payload.data;
      state.error = '';
    },
    memberCardRequestError: (state, action) => {
      state.error = action.payload;
    },
  }

});

