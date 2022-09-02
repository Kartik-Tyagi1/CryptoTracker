import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer : {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    },
});

// This "store" holds the main truth or definite state of our app