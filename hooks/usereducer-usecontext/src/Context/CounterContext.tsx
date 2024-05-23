import { ChangeEvent, ReactElement, createContext } from "react"
import { ICounterProvider, UseCounterContextType } from "../type"
import {  initState } from "../reducers/reducer"
import { useCounterContext } from "./hooks"

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => {},
    decrement: () => {},
    handleTextInput: ( e: ChangeEvent<HTMLInputElement> ) => {}
}

export const CounterContext = createContext<UseCounterContextType>( initContextState )

// export const CounterProvider = ({ children, ...initState }: ICounterProvider & IInitState ): ReactElement => {
export const CounterProvider = ({ children }: ICounterProvider ): ReactElement => {
    return(
        <CounterContext.Provider value={ useCounterContext( initState ) } >
            { children }
        </CounterContext.Provider>
    )
}
