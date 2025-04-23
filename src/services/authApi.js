import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    prepareHeaders: (headers) => {
      headers.set('API-KEY', 'c93503c5-f080-4741-9673-76aa6a3b3c2d');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    me: builder.query({
      query: () => 'auth/me',
    }),
    login: builder.mutation({
      query: ({ email, password, rememberMe = false }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { email, password, rememberMe },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'auth/login',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useMeQuery,
  useLoginMutation,
  useLogoutMutation,
} = authApi;