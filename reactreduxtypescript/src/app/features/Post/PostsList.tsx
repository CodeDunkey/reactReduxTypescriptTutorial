// import { useSelector } from "react-redux";
// import { initialStateValue } from "./postSlice";
// import { selectAllPosts } from "./postSlice";
// import { func } from "../../Types/Types";
import { useAppSelector } from "../../Hooks/hook"
import { PostAuthor } from "./PostAuthor";
import { ReactionButton } from "./ReactionButton";

export const PostsList = () => {
    // func();
    const posts = useAppSelector((state) => state.posts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const showPosts = orderedPosts.map((post) => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
                <p>
                    <PostAuthor userId={post.userId} />
                    {post.date}
                </p>
                <ReactionButton post={post}/>
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

