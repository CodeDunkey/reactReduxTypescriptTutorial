import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export type ReactionsValue = {
    thumbsUp: number,
        wow: number,
        heart: number,
        rocket: number,
        coffee: number,
}

export type initialStatePostValue = {
    id: string,
    title: string,
    content: string,
    userId?: string,
    date: string,
    reactions: ReactionsValue,
}
const initialState: initialStatePostValue[] = [
    {
        id: "1", title: "first title", content: "first content", date: "4/5/2023, 1:47:03 PM", reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
    {
        id: "2", title: "second title", content: "second content", date: "4/2/2023, 1:47:03 PM", reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<initialStatePostValue>) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toLocaleString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        },
                    },
                }
            },
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost: any = state.find(post => post.id === postId)
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        },
    }
})

// export const selectAllPosts = (state: any) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;