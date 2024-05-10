import { useEffect } from "react"
import { useUserContext } from "../../context/hooks"

export const AnotherComponent = () => {

    // const { setUser } = useContext(UserContext)

    const { setUser } = useUserContext()

    useEffect(() => {
        setUser({
            name: "John",
            email: "john@example.com"
        })
    }, [])

    return(
        <>
            <p>Some other component</p>
        </>
    )
}