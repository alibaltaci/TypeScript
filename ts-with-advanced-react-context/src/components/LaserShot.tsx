import { ChangeEvent, MouseEvent, useRef } from "react"
import { useAnotherContext } from "../context/AnotherContext/hooks"

export const LaserShot = () => {

    const { name, setName } = useAnotherContext() || {}

    console.log("Render LaserShot")

    const currentName = useRef<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        currentName.current = e.target.value      
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault()
        setName && setName(currentName.current)
    }
    
    return(
        <>
            <p>LaserShot</p>
            <p>{name}</p>
            <label htmlFor="">Input Name</label>
            <input 
                onChange={ handleChange }
            />
            <button
                onClick={ handleSubmit }
            >
                Add New Name
            </button>

        </>
        
    )
}