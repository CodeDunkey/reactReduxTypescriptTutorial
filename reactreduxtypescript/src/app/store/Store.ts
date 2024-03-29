import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/Post/postSlice'
export const store = configureStore({
    // 
    reducer: {
        counter: counterReducer,
        posts: postsReducer
    }
})