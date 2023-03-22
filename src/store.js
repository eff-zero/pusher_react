import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const useAuthSelector = () => useSelector((store) => store.auth);
