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
import Edit_Profile from '../../Screens/Edit_Profile';
import Post_Data from '../../Screens/Admin/Universities/Post/Post';
import Get_Data from '../../Screens/Admin/Universities/Get/Get';
import EditItem from '../../Screens/Admin/Universities/Update/Update';
import Admin_Home from '../../Screens/Admin/Panel/Index';
import Job_Post from '../../Screens/Admin/JOBS/Post/Post';
import Job_Data from '../../Screens/Admin/JOBS/Get/Get';
import SchlorShip_Post from '../../Screens/Admin/Schlorship/Post/Post';
import Schlorship_Update from '../../Screens/Admin/Schlorship/Update/Update';
import JOB_Data from '../../Screens/Jobs/Jobs_Data/Index';
import Jobs_Details from '../../Screens/Jobs/Detail';
import Jobs_Update from '../../Screens/Admin/JOBS/Update/Update';
import Sch_Details from '../../Screens/SchlorShips/Details';
import Sch_Data from '../../Screens/SchlorShips/Data/Index';
import SchlorShip_Data from '../../Screens/Admin/Schlorship/Get/Get';



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
      <Stack.Navigator initialRouteName={user ?  'Bottom':'Splash_Blank' } screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash_Blank" component={Splash_Blank} />
        <Stack.Screen name="Splash" component={Splash_Screen} />
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Sign_Up" component={SignUp} />
        <Stack.Screen name="Forget" component={ForgetPassword} />
        <Stack.Screen name="Bottom" component={Bottom} />
        <Stack.Screen name="Uni_Name" component={University_Name} />
        <Stack.Screen name="Uni_Detail" component={Uni_Details} />
        <Stack.Screen name="Jobs_Data" component={JOB_Data} />
        <Stack.Screen name="Jobs_Details" component={Jobs_Details} />
        <Stack.Screen name="Sch_Data" component={Sch_Data} />
        <Stack.Screen name="Sch_Details" component={Sch_Details} />
        <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
        
     


        
        <Stack.Screen name="Admin" component={Admin_Home} />
        <Stack.Screen name="Uni_Post" component={Post_Data} />
        <Stack.Screen name="Uni_Data" component={Get_Data} />
        <Stack.Screen name="Uni_Update" component={EditItem} />
        <Stack.Screen name="Job_Post" component={Job_Post} />
        <Stack.Screen name="Job_Data" component={Job_Data} />
        <Stack.Screen name="Job_Update" component={Jobs_Update} />
        <Stack.Screen name="Schlorship_Post" component={SchlorShip_Post} />
        <Stack.Screen name="Schlorship_Data" component={SchlorShip_Data} />
        <Stack.Screen name="Schlorship_Update" component={Schlorship_Update} />
         
        
      {/*
         <Stack.Screen name="OTP" component={Otp} />
          <Stack.Screen name="GetCode" component={GetCode} />
        <Stack.Screen name="Reset" component={Reset} />
      */}
  
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Navigation;
