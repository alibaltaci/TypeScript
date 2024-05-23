import { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from "react";

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

    const memoizedContextValue = useMemo(() => (
        {name, setName, inputValue, setInputValue}
    ), [name, setName, inputValue, setInputValue])

    return(
        <AnotherContext.Provider value={ memoizedContextValue }>
            {children}
        </AnotherContext.Provider>
    )
}