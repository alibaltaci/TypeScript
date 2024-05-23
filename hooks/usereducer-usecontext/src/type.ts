import { ChangeEvent, ReactElement, ReactNode } from "react"
import { useCounterContext } from "./Context/hooks"

// Counter 

export interface ICounter {
    children: (num: number) => ReactNode
}

// reducer

export interface IInitState {
    count: number
    text: string
}

export const enum REDUCER_ACTION_TYPE{
    INCREMENT,
    DECREMENT,
    NEW_INPUT
}

export interface IRuducerAction {
    type: REDUCER_ACTION_TYPE
    payload?: string
}

// Context 

export type UseCounterContextType = ReturnType<typeof useCounterContext>

export interface ICounterProvider {
    children?: ReactElement | undefined
}

export interface IUseCounter {
    count: number
    increment: () => void
    decrement: () => void 
}

export interface IUseText {
    text: string
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void
}