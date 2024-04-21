import { createSlice } from "@reduxjs/toolkit";


export const Universities=createSlice({
    name: 'University_Data',
    initialState: [],
    reducers:{
        UniversitiesData(state, action){
            state.push(action.payload)
        }
    }
})

export const {UniversitiesData}=Universities.actions
export default Universities.reducer