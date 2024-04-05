import { useState, ChangeEvent } from "react"

import { useAppDispatch, useAppSelector } from "../../Hooks/hook"

import { postAdded } from "./postSlice"


export const AddPostForm = () => {
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [userId, setUserId] = useState<string>("")

    const users = useAppSelector((state) => state.users)

    const dispatch = useAppDispatch();

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }
    const onAuthorChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setUserId(e.target.value)
    }

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )

            setTitle("")
            setContent("")
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map((user) => {
        return (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    })

    return (
        <section>
            <h2>Add a New Post</h2>
            <label htmlFor="postTitle">Post Title</label>
            <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange}></input>
            <label htmlFor="postAuthor">Author: </label>
            <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                <option value=""></option>
                <option value="zxcv">zxcv</option>
                {usersOptions}
            </select>
            <label htmlFor="postContent">Content</label>
            <textarea id="postContent" name="postContent" value={content} onChange={onContentChange}></textarea>
            <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
        </section>
    )
}

