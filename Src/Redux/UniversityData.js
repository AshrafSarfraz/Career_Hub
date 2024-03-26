import { createSlice } from "@reduxjs/toolkit"


const AddmissionSlice = createSlice({
name: 'AddmissionSlice',
initialState:[],
reducers:{
    Add_All_University(state ,action){
        state.push(action.payload)
    }
}

})
export const {Add_All_University}=AddmissionSlice.actions
export default AddmissionSlice.reducer