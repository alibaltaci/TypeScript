import { useState } from "react"
import PostList from "./components/PostList"
import postsData from "./data/posts.json"
import { Post } from "./types"

const posts: Post[] = postsData

function App() {

  const [ count, setCount ] = useState(0)

  return (
    <>
      <h1>Post List</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <PostList posts={ posts } />
    </>
  )
}

export default App
