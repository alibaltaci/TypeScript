import { ChangeEvent, ReactNode, useReducer } from "react"
import { reducer, REDUCER_ACTION_TYPE } from "../reducer/reducer"

interface ICounter {
    children: (num: number) => ReactNode
}

export const initState = { 
    count: 0,
    text: ''
 }

const Counter = ( {children}: ICounter ) => {

    // const [ count, setCount ] = useState<number>(1)

    // const increment = () => setCount( prev => prev + 1 ) 
    // const decrement = () => setCount( prev => prev - 1 ) 
    
    const [ state, dispatch ] = useReducer( reducer, initState )

    const increment = () => dispatch( {type: REDUCER_ACTION_TYPE.INCREMENT } ) 
    const decrement = () => dispatch( {type: REDUCER_ACTION_TYPE.DECREMENT} ) 
    const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch( {
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value
        } )
    }

  return (
    <>
        <h1>{children( state.count )}</h1>
        <div>
            <button onClick={ increment }>+</button>    
            <button onClick={ decrement }>-</button>    
        </div>   
    </>
  )
}

export default Counter