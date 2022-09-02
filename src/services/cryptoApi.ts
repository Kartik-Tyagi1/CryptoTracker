import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const  cryptoApiHeaders = {
    'X-RapidAPI-Key': `${process.env.REACT_APP_COINRANKING_RAPIDAPI_KEY}`,
    'X-RapidAPI-Host': `${process.env.REACT_APP_COINRANKING_RAPIDAPI_HOST}`
}

const createRequest = (url : string) => ({ url, headers : cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl : `${process.env.REACT_APP_COINRANKING_RAPIDAPI_URL}` }),
    endpoints : (builder) => ({
        getCryptos : builder.query<any, number>({
            query : (count) => createRequest(`/coins?limit=${count}`),
        })
    })
});

export const { useGetCryptosQuery } = cryptoApi;