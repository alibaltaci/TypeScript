import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Person {
    id: number;
    name: string;
}

export interface PersonState {
    persons: Person[];
}

const initialState: PersonState = {
    persons: [],
}

export const PersonSlice = createSlice({
    name: 'person',
    initialState,
    reducers:{
        _addPerson: (state, action: PayloadAction<{ name: string }>) => {
            state.persons.push({
                id: state.persons.length,
                name: action.payload.name
            })
        }
    }
})

export const { _addPerson } = PersonSlice.actions

export default PersonSlice.reducer