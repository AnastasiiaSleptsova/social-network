import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    prepareHeaders: (headers) => {
      headers.set('API-KEY', 'c93503c5-f080-4741-9673-76aa6a3b3c2d');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ currentPage, pageSize }) => `users?page=${currentPage}&count=${pageSize}`,
    }),
    getUsersMore: builder.query({
      query: ({ currentPage, pageSize }) => `users?page=${currentPage + 1}&count=${pageSize}`,
    }),
    followOnUser: builder.mutation({
      query: (userID) => ({
        url: `follow/${userID}`,
        method: 'POST',
      }),
    }),
    unFollowOnUser: builder.mutation({
      query: (userID) => ({
        url: `follow/${userID}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUsersMoreQuery,
  useFollowOnUserMutation,
  useUnFollowOnUserMutation,
} = usersApi;