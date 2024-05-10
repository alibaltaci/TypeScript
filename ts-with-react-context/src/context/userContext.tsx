import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

export interface User {
    name: string
    email: string
}

export interface IUserContext {
    user: User
    setUser: Dispatch<SetStateAction<User>>
}

interface IUserProvider {
    children: ReactNode
}

const defaultState = {
    user:{
        name: '',
        email: ''
    },
    setUser: () => {}
} as IUserContext

export const UserContext = createContext(defaultState)

const UserProvider = ({children}: IUserProvider) => {

    const [ user, setUser ] = useState<User>({
        name: '',
        email: ''
    })

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
