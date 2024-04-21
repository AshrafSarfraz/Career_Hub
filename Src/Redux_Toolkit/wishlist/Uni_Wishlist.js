import { createSlice } from "@reduxjs/toolkit";


const University_Slice=createSlice({
    name: 'Uni_Wishlist',
    initialState: [],
    reducers:{
        Add_University(state, action){
            state.push(action.payload)
        },
        Removetocart(state, action){
            return state.filter((item)=> 
            item.id !== action.payload );
           },
    }
})

export const {Add_University, Removetocart}=University_Slice.actions
export default University_Slice.reducer