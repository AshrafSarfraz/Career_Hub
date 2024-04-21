import { createSlice } from "@reduxjs/toolkit";


export const Scholarship_Slice=createSlice({
    name: 'scholar',
    initialState: [],
    reducers:{
        Add_Scholarship(state, action){
            state.push(action.payload)
        }
    }
})

export const {Add_Scholarship}=Scholarship_Slice.actions
export default Scholarship_Slice.reducer