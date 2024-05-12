import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type AnotherContextType = {
    name: string
    setName: Dispatch<SetStateAction<string>>
}

type Props = {
    children: ReactNode
}

export const AnotherContext = createContext< null | AnotherContextType >(null)

export const AnotherContextProvider = ({children}: Props) => {

    const [name, setName] = useState('ali')

    return(
        <AnotherContext.Provider value={{name, setName}}>
            {children}
        </AnotherContext.Provider>
    )
}