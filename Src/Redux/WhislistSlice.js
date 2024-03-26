import { createSlice } from "@reduxjs/toolkit";

const AddtoWhishlist=createSlice({
    name:"AddToWishList",
    initialState:[],
    reducers:{
        Add_To_Wishlist(state,action){
            state.push(action.payload)
        }
    }
})
export const {Add_To_Wishlist}=AddtoWhishlist.actions
export default AddtoWhishlist.reducer
