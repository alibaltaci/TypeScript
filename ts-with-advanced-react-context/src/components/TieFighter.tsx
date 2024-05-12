import { AnotherContextProvider } from "../context/AnotherContext"
import { useAwesomeContext } from "../context/AwesomeContext/hooks"
import { LaserShot } from "./LaserShot"

export const TieFighter = () => {

    // const awesomeContext = useAwesomeContext()
    // const { awesomeState, setAwesomeState } = useAwesomeContext() || {}

    const { awesomeState, setAwesomeState } = useAwesomeContext()

    console.log("Render TieFighter")

    return(
        <AnotherContextProvider>
            <p>TieFighter</p>
            <p>{ awesomeState }</p>
            { awesomeState && <button onClick={ () => setAwesomeState( Math.random() ) }>Click Me!</button>}
            <LaserShot />
        </AnotherContextProvider>
    )
}