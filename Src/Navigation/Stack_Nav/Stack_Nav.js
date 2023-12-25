import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import Splash_Blank from '../../Screens/Authentication/Splash_Screens/Splash_Blank';
import Splash_Screen from '../../Screens/Authentication/Splash_Screens/Splash_Screen';
import OnBoarding from '../../Screens/OnBoarding';
import SignInScreen from '../../Screens/Authentication/Login';
import SignUp from '../../Screens/Authentication/Signup';
import ForgetPassword from '../../Screens/Authentication/ForgetPassword/ForgetPassword';
import Bottom from '../Bottom_Nav/Bottom_Navigation';
import Uni_Details from '../../Screens/Universities/Details';
import University_Name from '../../Screens/Universities/Names/Index';
import Post_Data from '../../Screens/Admin_Section/Post_Item';
import Get_Data from '../../Screens/Admin_Section/Get_Method';
import Edit_Universities from '../../Screens/Admin_Section/Update';
import Edit_Profile from '../../Screens/Edit_Profile';

const Stack = createNativeStackNavigator();

const Stack_Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null; // You can return a loading indicator while authentication is being checked
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Bottom' : 'Splash_Blank'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash_Blank" component={Splash_Blank} />
        <Stack.Screen name="Splash" component={Splash_Screen} />
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Sign_Up" component={SignUp} />
        <Stack.Screen name="Forget" component={ForgetPassword} />
        <Stack.Screen name="Bottom" component={Bottom} />
        <Stack.Screen name="Uni_Name" component={University_Name} />
        <Stack.Screen name="Uni_Detail" component={Uni_Details} />
        <Stack.Screen name="Edit_Profile" component={Edit_Profile} />

        
        <Stack.Screen name="Post_Data" component={Post_Data} />
        <Stack.Screen name="Get_Data" component={Get_Data} />



        
      {/*
         <Stack.Screen name="OTP" component={Otp} />
          <Stack.Screen name="GetCode" component={GetCode} />
        <Stack.Screen name="Reset" component={Reset} />
    
  */} 





        
        <Stack.Screen name="Post" component={Post_Data} />
        <Stack.Screen name="GET" component={Get_Data} />
        <Stack.Screen name="Edit_Uni_Details" component={Edit_Universities} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Navigation;
