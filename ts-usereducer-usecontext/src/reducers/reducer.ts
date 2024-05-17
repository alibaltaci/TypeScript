import { IInitState, IRuducerAction, REDUCER_ACTION_TYPE } from "../type"

export const initState: IInitState = {
    count: 0,
    text: ''
}

export const reducer = (state: IInitState, action: IRuducerAction ): IInitState => {
    switch( action.type ){
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1}
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? '' }
        default:
            throw new Error()
    }
}