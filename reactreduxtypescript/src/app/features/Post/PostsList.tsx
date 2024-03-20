import { useSelector } from "react-redux";
// import { initialStateValue } from "./postSlice";
import { selectAllPosts } from "./postSlice";
export const PostsList = () => {

    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map((post: any) => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
            </article>
        )
    })
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}