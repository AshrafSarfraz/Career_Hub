import { View, Text } from 'react-native'
import React from 'react'
import messaging from '@react-native-firebase/messaging'
import Stack_Navigation from './Src/Navigation/Stack_Nav/Stack_Nav'
import { Provider } from 'react-redux'
import Mystore , { persistor } from './Src/Redux_Toolkit/store'
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
      // forground Notification
  // useEffect(()=>{
  // GetToken()
  // },[])

  // const GetToken=async()=>{
  //  let  token = await messaging().getToken();
  //   console.log(token)
  // }
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);


  return (
    <Provider store={Mystore}>
    <PersistGate loading={null} persistor={persistor}>
      <Stack_Navigation />
    </PersistGate>
  </Provider>
   
  )
}

export default App