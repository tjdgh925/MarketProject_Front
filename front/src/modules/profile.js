import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  error: {
    loading: false,
    error: null,
  },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfile: (state) => {
      state.error.loading = true;
      state.error.error = null;
    },
    getProfileSuccess: (state, action) => {
      state.error.loading = false;
      state.data = action.payload;
    },
    getProfileFailure: (state, action) => {
      state.error.loading = false;
      state.error.error = action.payload;
    },
    updateProfile: (state, action) => {
      state.data = action.payload;
      state.error.loading = true;
      state.error.error = null;
    },
    updateProfileSuccess: (state) => {
      state.error.loading = false;
    },
    updateProfileFailure: (state, action) => {
      state.error.loading = false;
      state.error.error = action.payload;
    },
  },
});

export const {
  getProfile,
  getProfileSuccess,
  getProfileFailure,
  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,
} = profileSlice.actions;

export default profileSlice.reducer;
