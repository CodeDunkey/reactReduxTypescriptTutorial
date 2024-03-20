import { createSlice } from "@reduxjs/toolkit";

export type initialStateValue = {
    id: string,
    title: string,
    content: string,
}
const initialState: initialStateValue[] = [
    {id:"1", title: "first title", content: "first content"},
    {id:"2", title: "second title", content: "second content"},
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state: any) => state.posts;

export const { postAdded } = postsSlice.actions; 

export default postsSlice.reducer;