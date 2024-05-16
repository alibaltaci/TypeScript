import { initState } from "../components/Counter"

export const enum REDUCER_ACTION_TYPE{
    INCREMENT,
    DECREMENT,
    NEW_INPUT
}

interface ReducerAction {
    // type: "INCREMENT" | "DECREMENT"
    type: REDUCER_ACTION_TYPE
    payload?: string
}

export const reducer = ( state: typeof initState, action: ReducerAction): typeof initState => {
    switch( action.type ){
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1}
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1}
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload }
        default:
            throw new Error()
    }
}