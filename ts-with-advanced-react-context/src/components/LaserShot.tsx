import { ChangeEvent, MouseEvent } from "react"
import { useAnotherContext } from "../context/AnotherContext/hooks"

export const LaserShot = () => {

    const { name, setName, inputValue, setInputValue } = useAnotherContext()

    console.log("Render LaserShot")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)       
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault()
        setName(inputValue)
        setInputValue("")
    }
    
    return(
        <>
            <p>LaserShot</p>
            <p>{name}</p>
            <label htmlFor="">Input Name</label>
            <input 
                onChange={ handleChange }
                value={ inputValue }
            />
            <button
                onClick={ handleSubmit }
            >
                Add New Name
            </button>

        </>
        
    )
}