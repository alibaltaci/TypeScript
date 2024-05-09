import { _addPerson } from ".";
import { useAppDispatch } from "../../hooks";

export const useAddPersonDispatch = () => {
    const dispatch = useAppDispatch();
    
    const addPerson = (name: string) => {
      dispatch(_addPerson({ name }));
    };
  
    return addPerson;
  };

// export const addPerson = (name:AddPerson) =>  store.dispatch(_addPerson(name))