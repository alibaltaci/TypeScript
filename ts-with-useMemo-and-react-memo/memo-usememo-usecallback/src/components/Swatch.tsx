import { memo } from "react"
import { ISwatch } from "../types"

const Swatch = ({params, onClick}: ISwatch) => {

    console.log("Swatch Render")

    console.log(onClick)

  return (
    <div
        style={{ width: 75, margin: 2, height: 75, backgroundColor: params.color}}
    ></div>
  )
}

export default memo(Swatch) 