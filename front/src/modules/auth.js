import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: null,
  data: null,
  error: {
    loading: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initialize: (state) => {
      state = initialState;
    },
    register: (state, action) => {
      state.data = action.payload;
      state.error.loading = true;
    },
    registerSuccess(state, action) {
      state.error.loading = false;
      state.auth = action.payload;
    },
    registerFailure(state, action) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
  },
});

export const { initialize, register, registerSuccess, registerFailure } =
  authSlice.actions;

export default authSlice.reducer;
