import { useAppSelector } from "../../hooks";

export const usePerson = () => useAppSelector( state => state.person.persons)