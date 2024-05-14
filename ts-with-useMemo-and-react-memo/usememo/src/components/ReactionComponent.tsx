import { useState } from "react"

const ReactionComponent = () => {

    console.log("Action Render")

    const [ like, setLike ] = useState(0)
    const [ dislike, setDislike ] = useState(0)

  return (
    <div>
        <div>
            <span>Like: {like}</span>
            <span>dislike: {dislike}</span>
        </div>
        <button onClick={() => setLike( like + 1) }>Like</button>
        <button onClick={() => setDislike( dislike + 1) }>Dislike</button>
    </div>
  )
}

export default ReactionComponent