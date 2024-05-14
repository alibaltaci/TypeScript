import { useMemo } from "react"
import { PostProps } from "../types"
import ReactionComponent from "./ReactionComponent"

const PostItem = ({post}:PostProps) => {

    console.log("PostItem render")

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
        <ReactionComponent />
    </div>
  )
}

export default PostItem