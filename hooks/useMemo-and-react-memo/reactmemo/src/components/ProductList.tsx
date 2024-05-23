import ProductItem from "./ProductItem"
import productsData from "../data/products.json"
import { IProduct } from "../types"
import { useMemo, useState } from "react"

const ProductList = () => {

  const [ count, setCount ] = useState(0)

  const products: IProduct[] = useMemo( () => productsData, [])

  return (
    <div>
      <h2>Product List</h2>

      <p>{count}</p>
      <button onClick={() => setCount( prev => prev + 1)}>+</button>
      <button onClick={() => setCount( prev => prev - 1)}>-</button>
      {
        products.map( (product: IProduct) => {
          return <ProductItem key={product.id} product={product} />
        } )
      }
        
    </div>
  )
}

export default ProductList