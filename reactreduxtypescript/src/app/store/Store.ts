import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/Post/postSlice'
import usersReducer from "../features/Users/usersSlice";

// only one store is recommented, multiple is possible
export const store = configureStore({
    // 
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
    }
})


// from redux tutorial with hooks *
// understand how this works   *_*
export type AppDispatch = typeof store.dispatch;

// understand how this works   *_*
export type RootState = ReturnType<typeof store.getState>;
// *