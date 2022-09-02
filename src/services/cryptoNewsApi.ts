import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const  cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPIDAPI_KEY}`,
    'X-RapidAPI-Host': `${process.env.REACT_APP_BINGNEWS_RAPIDAPI_HOST}`
}

const createRequest = (url : string) => ({ url, headers : cryptoNewsApiHeaders });

interface NewsReturn {
    newsCategory : any,
    count : number
}

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({ baseUrl : `${process.env.REACT_APP_BINGNEWS_RAPIDAPI_URL}`}),
    endpoints : (builder) => ({
        getCryptoNews : builder.query<any, NewsReturn>({
            query : ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;