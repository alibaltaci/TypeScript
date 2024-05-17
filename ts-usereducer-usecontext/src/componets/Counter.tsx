import { useCounterContext } from "../Context/hooks"
import { initState } from "../reducers/reducer"
import { ICounter } from "../type"

const Counter = ( {children}:ICounter ) => {

    const { state, increment, decrement, handleTextInput } = useCounterContext( initState )

  return (
    <>
        <h1>{children(state.count)}</h1>
        <div>
            <button onClick={ increment } >+</button>
            <button onClick={ decrement } >-</button>
        </div>
        <input onChange={ handleTextInput } />
        <h2>{ state.text }</h2>
    </>
  )
}

export default Counter