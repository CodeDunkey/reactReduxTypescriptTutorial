import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export interface ReactionsValue {
    // [key: string]: number 
    
    thumbsUp: number,
    wow: number,
    heart: number,
    rocket: number,
    coffee: number,
}

export interface InitialStatePostValue  {
    id: string,
    title: string,
    content: string,
    userId?: string,
    date: string,
    reactions: ReactionsValue,
}
const initialState: InitialStatePostValue[] = [
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
            reducer(state, action: PayloadAction<InitialStatePostValue>) {
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
        reactionAdded(state, action: PayloadAction<{postId: string, reactionKey: keyof ReactionsValue}> ) {
            const { postId, reactionKey }  = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                const t = existingPost.reactions[reactionKey]++;
               //  existingPost.reactions[reaction]++
            }
        },
    }
})

// : { postId: string, reaction: any }
// : PayloadAction<InitialStatePostValue>
// export const selectAllPosts = (state: any) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;