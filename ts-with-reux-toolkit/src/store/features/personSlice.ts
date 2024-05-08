import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Person {
    id: number;
    name: string;
}

export interface PersonState {
    person: Person[];
}

const initialState: PersonState = {
    person: [],
}

export const PersonSlice = createSlice({
    name: 'person',
    initialState,
    reducers:{
        addPerson: (state, action: PayloadAction<{ name: string }>) => {
            state.person.push({
                id: state.person.length,
                name: action.payload.name
            })
        }
    }
})

export const { addPerson } = PersonSlice.actions

export default PersonSlice.reducer