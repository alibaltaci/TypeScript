import { useContext } from "react";
import { AnotherContext } from ".";

export const useAnotherContext = () => {
    const anotherContext = useContext(AnotherContext)

    if(!anotherContext) throw new Error("Another Context Error!")

    return anotherContext
}