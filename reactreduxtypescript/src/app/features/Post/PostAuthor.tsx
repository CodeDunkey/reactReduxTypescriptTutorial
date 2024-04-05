import { useAppSelector } from "../../Hooks/hook"

export const PostAuthor = ({userId}: {userId:string | undefined}) => {
    const users = useAppSelector((state) => state.users)

    const author = users.find(user => user.id === userId)
    return (
        <span>by {author ? author.name : "Unknown author"}</span>
    )
}