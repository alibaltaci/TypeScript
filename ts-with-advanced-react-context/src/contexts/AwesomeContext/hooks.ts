import { useContext } from "react";
import { AwesomeContext } from ".";

export const useAwesomeContext = () => {
    
    const awesomeContext = useContext(AwesomeContext)

    if(!awesomeContext) throw new Error("Awesome Context Error")

    return awesomeContext
}