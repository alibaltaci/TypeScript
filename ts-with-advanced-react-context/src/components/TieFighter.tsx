import { LaserShot } from "./LaserShot"

export const TieFighter = () => {
    console.log("Render TieFighter")
    
    return(
        <>
            <p>TieFighter</p>
            <LaserShot />
            <button onClick={() => console.log('click')}>Click Me!</button>
        </>
    )
}