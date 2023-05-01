import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlices";
import postsReducer from '../features/Post/post';
import sellerReducer from '../features/sellerPost/sellerPost';

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        posts: postsReducer,
        SellerPosts: sellerReducer
    },
})