import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
// import postsReducer from '../features/Post/postSlice'

// only one store is recommented, multiple is possible
export const store = configureStore({
    // 
    reducer: {
        counter: counterReducer,
        // posts: postsReducer
    }
})


// from redux tutorial with hooks *
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// *