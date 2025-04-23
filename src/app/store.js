import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../services/userApi';
import { profileApi } from '../services/profileApi';
import { authApi } from '../services/authApi';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      profileApi.middleware,
      authApi.middleware
    ),
  devTools: true,
});