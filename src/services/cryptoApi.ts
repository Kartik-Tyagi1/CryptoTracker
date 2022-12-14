import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const  cryptoApiHeaders = {
    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPIDAPI_KEY}`,
    'X-RapidAPI-Host': `${process.env.REACT_APP_COINRANKING_RAPIDAPI_HOST}`
}

const createRequest = (url : string) => ({ url, headers : cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl : `${process.env.REACT_APP_COINRANKING_RAPIDAPI_URL}` }),
    endpoints : (builder) => ({
        getCryptos : builder.query<any, number>({
            query : (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query<any, string>({
            query : (uuid) => createRequest(`/coin/${uuid}`),
        }),
        getCryptoHistory: builder.query<any, any>({
            query : ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`),
        })
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;