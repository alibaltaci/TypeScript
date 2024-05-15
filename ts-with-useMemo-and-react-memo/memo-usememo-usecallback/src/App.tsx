import { useCallback, useMemo, useState } from "react"
import Swatch from "./components/Swatch"

function App() {
  
  const [ appRenderIndex, setAppRenderIndex ] = useState(0)
  
  const [ color, setColor ] = useState("red")
 
  console.log(`App Render ${appRenderIndex}`  )

  const params = useMemo( () => ({ color }), [color] )

  const callbackFunction = useCallback( () => {}, [] ) 

  return (
    <>
      <div>
        <button onClick={ () => setAppRenderIndex(appRenderIndex + 1) }>
          Re-Render App
        </button>
        <button onClick={ () => setColor(color === "red" ? "blue" : "red") }>
          Change Color 
        </button>
      </div>
      <div>
        <Swatch params={ params } onClick={ callbackFunction }/>

        {/* <Swatch color={color === "red" ? "blue" : "red" }/>  */}
      </div>
    </>
  )
}

export default App
