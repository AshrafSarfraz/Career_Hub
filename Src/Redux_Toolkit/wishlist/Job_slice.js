import { createSlice } from "@reduxjs/toolkit";


export const Job_Slice=createSlice({
    name: 'Job',
    initialState: [],
    reducers:{
        Add_Job(state, action){
            state.push(action.payload)
        }
    }
})

export const {Add_Job}=Job_Slice.actions
export default Job_Slice.reducer