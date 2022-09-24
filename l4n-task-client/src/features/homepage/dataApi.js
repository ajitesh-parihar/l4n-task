import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: ["Data"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/data",
      providesTags: ["Data"],
    }),
    postData: builder.mutation({
      query: (data) => ({
        url: "/data",
        method: "POST",
        body: { newData: data },
      }),
      invalidatesTags: ["Data"],
    }),
  }),
});

export const { useGetDataQuery, usePostDataMutation } = dataApi;
