import { PostsPorps } from "../types"
import PostItem from "./PostItem"

const PostList = ({posts}:PostsPorps) => {
  return (
    <div>
        {
            posts.map(( post ) => <PostItem key={post.id} post={post} />)
        }
    </div>
  )
}

export default PostList