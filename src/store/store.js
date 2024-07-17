
import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productSlice';
import { productApi } from '../api/productApi';


export const store = configureStore({
	reducer: {
		// products: productReducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});