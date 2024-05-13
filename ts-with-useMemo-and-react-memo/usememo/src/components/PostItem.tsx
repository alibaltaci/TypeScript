import { useMemo, useState } from "react"
import { PostProps } from "../types"

const PostItem = ({post}:PostProps) => {

    console.log("PostItem render")

    const [ like, setLike ] = useState(0)
    const [ dislike, setDislike ] = useState(0)

    const { title, content } = post

    const keywords = useMemo(() => {
        console.log("Keywords function render")

        const words = content.toLocaleLowerCase().replace(/[,.]/g, '').split(' ')

        const uniqueWords = words.map( (word) => word.split("'")[0] ).filter((word, index) => words.indexOf(word) === index)

        return uniqueWords
    }, [content])
   
    return (
    <div >
        <h2>{ title }</h2>
        <p>{ content }</p>
        <p>Keywords: {keywords.map(word => <span key={word}>{`#${word} `}</span>)}</p>
        <div>
            <span>Like: {like}</span>
            <span>dislike: {dislike}</span>
        </div>
        <button onClick={() => setLike( like + 1) }>Like</button>
        <button onClick={() => setDislike( dislike + 1) }>Dislike</button>
    </div>
  )
}

export default PostItem