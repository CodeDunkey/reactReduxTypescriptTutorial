import { useAppDispatch } from "../../Hooks/hook"
import { reactionAdded } from "./postSlice"
import { initialStatePostValue, ReactionsValue } from "./postSlice"
const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕',
}

export const ReactionButton = ({post}: {post: initialStatePostValue}) => {
    const dispatch = useAppDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name} type="button" onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name }))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    }) 
    return (
        <div>{reactionButtons}</div>
    )
}
