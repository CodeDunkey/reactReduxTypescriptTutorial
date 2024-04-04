import { useState, ChangeEvent } from "react"
// import { useDispatch } from "react-redux"
import { useAppDispatch } from "../../Hooks/hook"
import { nanoid } from "@reduxjs/toolkit"
import { postAdded } from "./postSlice"


export const AddPostForm = () => {
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const dispatch = useAppDispatch();

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )

            setTitle("")
            setContent("")
        }
    }
    return (
        <section>
            <h2>Add a New Post</h2>
            <label htmlFor="postTitle">Post Title</label>
            <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange}></input>
            <label htmlFor="postContent">Content</label>
            <textarea id="postContent" name="postContent" value={content} onChange={onContentChange}></textarea>
            <button type="button" onClick={onSavePostClicked}>Save Post</button>
        </section>
    )
}

