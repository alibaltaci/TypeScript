import { useCounter, useText } from "../Context/hooks"
import { ICounter } from "../type"

const Counter = ( {children}:ICounter ) => {

    // const { state, increment, decrement, handleTextInput } = useCounterContext( initState )

    const { count, increment, decrement } = useCounter()
    const { text, handleTextInput } = useText()

  return (
    <>
        <h1>{children(count)}</h1>
        <div>
            <button onClick={ increment } >+</button>
            <button onClick={ decrement } >-</button>
        </div>
        <input onChange={ handleTextInput } />
        <h2>{ text }</h2>
    </>
  )
}

export default Counter