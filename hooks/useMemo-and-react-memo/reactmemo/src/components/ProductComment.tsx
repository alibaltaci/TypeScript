import { ICommentProp } from "../types"

const ProductComment = ( {productComment}: ICommentProp) => {

    const { user, comment } = productComment
    
  return (
    <div>
        <p>{comment}</p>
        <p>{user}</p>
    </div>
  )
}

export default ProductComment