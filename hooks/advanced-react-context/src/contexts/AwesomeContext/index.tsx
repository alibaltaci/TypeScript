import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type AwesomeContextType = {
    awesomeState: number
    setAwesomeState: Dispatch<SetStateAction<number>>
}

type Props = {
    children: ReactNode
}

export const AwesomeContext = createContext< null | AwesomeContextType >(null)

export const AwesomeContextProvider = ({children}: Props) => {

    const [ awesomeState, setAwesomeState ] = useState(0)

    return(
        <AwesomeContext.Provider value={{ awesomeState, setAwesomeState }}>
            {children}
        </AwesomeContext.Provider>
    )
}