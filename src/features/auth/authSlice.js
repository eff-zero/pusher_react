import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: true,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    login: (state, action) => (state.isAuthenticated = true),
    logout: (state, action) => (state.isAuthenticated = false),
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
