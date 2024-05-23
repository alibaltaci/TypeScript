import { ChangeEvent, useCallback, useContext, useReducer } from "react"
import { IInitState, IUseCounter, IUseText, REDUCER_ACTION_TYPE } from "../type"
import { reducer } from "../reducers/reducer"
import { CounterContext } from "./CounterContext"

export const useCounterContext = (initState: IInitState) => {

    const [ state, dispatch ] = useReducer( reducer, initState  )

    const increment = useCallback( () => dispatch( {type: REDUCER_ACTION_TYPE.INCREMENT} ), [] )
    const decrement = useCallback( () => dispatch( {type: REDUCER_ACTION_TYPE.DECREMENT} ), [] )

    const handleTextInput = useCallback(( e: ChangeEvent<HTMLInputElement> ) => {
        dispatch( {
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value
        } )
    }, [] )

    return { state, increment, decrement, handleTextInput }
}

export const useCounter = (): IUseCounter => {
    const { state: {count}, increment, decrement } = useContext( CounterContext )
    return { count, increment, decrement }
} 

export const useText = (): IUseText => {
    const { state: {text}, handleTextInput } = useContext( CounterContext )
    return { text, handleTextInput }
}