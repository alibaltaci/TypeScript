import { _addPerson } from ".";
import { store } from "../../store";

interface AddPerson {
    name: string;
}

export const AddPerson = (name:AddPerson) =>  store.dispatch(_addPerson(name))