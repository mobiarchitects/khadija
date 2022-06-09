import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../redux/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://rh-api-dev-mobiarchitects.azurewebsites.net',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const jwToken = getState().auth.jwToken;
    if (jwToken) {
      headers.set('authorization', `Bearer ${jwToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token');
    //send refresh token to get new access token
    const refreshResult = await baseQuery(
      '/api/Account/Authenticate',
      api,
      extraOptions,
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      const email = api.getState().auth.email;
      //store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, email }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
});
