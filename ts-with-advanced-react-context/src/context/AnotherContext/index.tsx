import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type AnotherContextType = {
    name: string
    setName: Dispatch<SetStateAction<string>>
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
}

type Props = {
    children: ReactNode
}

export const AnotherContext = createContext< null | AnotherContextType >(null)

export const AnotherContextProvider = ({children}: Props) => {

    const [name, setName] = useState('ali')

    const [inputValue, setInputValue] = useState("")

    return(
        <AnotherContext.Provider value={{name, setName, inputValue, setInputValue}}>
            {children}
        </AnotherContext.Provider>
    )
}