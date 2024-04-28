import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Uni_Wishlist from './wishlist/Uni_Wishlist';
import Job_Wishlist from './wishlist/Job_slice';
import Sch_Wishlist from './wishlist/Scholarship_slice';
import GetUniData from './University_Data/Universities';

const rootReducer = combineReducers({  // Combine your reducers into a root reducer
  uni: Uni_Wishlist,
  job: Job_Wishlist,
  scholarship: Sch_Wishlist,
  Get_All_Uni_Data: GetUniData,
});

const persistConfig = { // Configuration for Redux Persist
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Create the persisted reducer


const Mystore = configureStore({ // Configure the Redux store
  reducer: persistedReducer,
});

// Export the persistor if needed (for use in PersistGate)
export const persistor = persistStore(Mystore);

export default Mystore;
