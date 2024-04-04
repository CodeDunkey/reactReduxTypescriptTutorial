import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export type initialStateValue = {
    id: string,
    title: string,
    content: string,
}
const initialState: initialStateValue[] = [
    { id: "1", title: "first title", content: "first content" },
    { id: "2", title: "second title", content: "second content" },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<initialStateValue>) {
                state.push(action.payload)
            },
            prepare( title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    },
                }
            },
        },
    }
})

// export const selectAllPosts = (state: any) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;