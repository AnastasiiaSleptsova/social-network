import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    prepareHeaders: (headers) => {
      headers.set('API-KEY', 'c93503c5-f080-4741-9673-76aa6a3b3c2d');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfileFrend: builder.query({
      query: (userId) => `profile/${userId}`,
    }),
    getProfileStatus: builder.query({
      query: (userId) => `profile/status/${userId}`,
    }),
    updateProfileStatus: builder.mutation({
      query: (status) => ({
        url: 'profile/status',
        method: 'PUT',
        body: { status },
      }),
    }),
    savePhoto: builder.mutation({
      query: (photoFile) => {
        const formData = new FormData();
        formData.append('image', photoFile);
        return {
          url: 'profile/photo',
          method: 'PUT',
          body: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        };
      },
    }),
  }),
});

export const {
  useGetProfileFrendQuery,
  useGetProfileStatusQuery,
  useUpdateProfileStatusMutation,
  useSavePhotoMutation,
} = profileApi;
