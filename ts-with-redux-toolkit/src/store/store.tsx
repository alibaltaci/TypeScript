import { configureStore } from "@reduxjs/toolkit";
import { PersonSlice } from "./features/personSlice";
import { Provider } from "react-redux";
import { ReactNode } from "react";

export const store = configureStore({
    reducer:{
        person: PersonSlice.reducer
    }
})

interface IReduxProvider {
    children: ReactNode
}

const ReduxProvider = ({children}: IReduxProvider) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider