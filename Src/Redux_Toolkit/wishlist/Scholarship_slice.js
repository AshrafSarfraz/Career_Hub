import { createSlice } from "@reduxjs/toolkit";


export const Scholarship_Slice=createSlice({
    name: 'scholar',
    initialState: [],
    reducers:{
        Add_Scholarship(state, action){
            state.push(action.payload)
        },
        Remove_Scholarship(state, action){
            return state.filter((item)=> 
            item.id !== action.payload );
           },
    }
})

export const {Add_Scholarship,Remove_Scholarship}=Scholarship_Slice.actions
export default Scholarship_Slice.reducer