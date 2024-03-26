import { configureStore } from "@reduxjs/toolkit";
import Whishlist_Reducer from './WhislistSlice'
import University_Reducer from './UniversityData'
const Mystore = configureStore({
    reducer:{
        Productlist:Whishlist_Reducer,
        UniversityList:University_Reducer
    }
})

export default Mystore;