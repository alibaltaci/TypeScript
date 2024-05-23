import { memo } from "react"
import { IComment, IProductProp } from "../types"
import ProductComment from "./ProductComment"

const ProductItem = ({product}: IProductProp ) => {

  console.log(`Rendering ProductItem for product ID ${product.id}`)

  const { title, description, price, image, comments } = product

  return (
    <div>
      <h3>{title}</h3>
      <p>{image}</p>
      <p>{price}</p>
      <p>{description}</p>
      <h5>Product Reviews</h5>
      {
        comments.map((comment: IComment) =>(
          <ProductComment key={comment.id} productComment={comment} />
        ))
      }
    </div>
  )
}

export default memo(ProductItem)