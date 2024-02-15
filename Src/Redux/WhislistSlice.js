import { createSlice } from "@reduxjs/toolkit";

const AddtoWhishlist=createSlice({
    name:"AddToWishList",
    initialState:[],
    reducers:{
        Add_Item_To_Wishlist(action,state){
            state.push(action.payload)
        }
    }
})