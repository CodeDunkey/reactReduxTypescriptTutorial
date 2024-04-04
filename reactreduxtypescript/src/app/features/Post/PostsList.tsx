// import { useSelector } from "react-redux";
// import { initialStateValue } from "./postSlice";
// import { selectAllPosts } from "./postSlice";
// import { func } from "../../Types/Types";
import { useAppSelector } from "../../Hooks/hook"

export const PostsList = () => {
    // func();
    const posts = useAppSelector((state) => state.posts)

    console.log('posts', posts);
    const showPosts = posts.map((post) => {
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
            {showPosts}
        </section>
    )
}

