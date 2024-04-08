import { useAppDispatch } from "../../Hooks/hook"
import { reactionAdded } from "./postSlice"
import { InitialStatePostValue, ReactionsValue } from "./postSlice"
// : keyof ReactionsValue 


const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕',
}

export const ReactionButton = ({ post }: { post: InitialStatePostValue }) => {
    
    const dispatch = useAppDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([element, elementEmoji]) => {
    // const t = element as unknown as keyof ReactionsValue;
    const t = element as unknown as keyof ReactionsValue;
        
        return (
            <button key={element} type="button" onClick={() => dispatch(reactionAdded({ postId: post.id, reactionKey: t }))}>
                {elementEmoji} {post.reactions[t]}
            </button>
        )
    })

    return (
        <div>
            {reactionButtons}
        </div>
    )
}

