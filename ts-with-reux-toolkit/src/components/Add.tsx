import { MouseEvent, useRef } from "react"
import { useAddPersonDispatch } from "../store/features/personSlice/actions";

const Add = () => {

  const name = useRef<string>("")

  const addPerson = useAddPersonDispatch();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addPerson( name.current )
    // dispatch(_addPerson({name: name.current}))
  }

  return (
    <form>
      <label htmlFor="">Person Name:</label>
      <input 
        onChange={ (e) => (name.current = e.target.value) }
      />
      <button
        onClick={ handleSubmit }
        // onClick={ () => dispatch(_addPerson( {name: name.current} )) }
      >
        Add
      </button>
    </form>
  )
}

export default Add