import { useRef } from "react"
import { useAppDispatch } from "../store/hooks"
import { _addPerson } from "../store/features/personSlice";

const Add = () => {

  const name = useRef<string>("")

  const dispatch = useAppDispatch();

  return (
    <form>
      <label htmlFor="">Person Name:</label>
      <input 
        onChange={ (e) => (name.current = e.target.value) }
      />
      <button
        onClick={ () => dispatch(_addPerson( {name: name.current} )) }
      >
        Add
      </button>
    </form>
  )
}

export default Add