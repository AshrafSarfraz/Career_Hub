import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash_Blank from '../../Screens/Authentication/Splash_Screens/Splash_Blank';
import Splash_Screen from '../../Screens/Authentication/Splash_Screens/Splash_Screen';
import OnBoarding from '../../Screens/OnBoarding';
import SignInScreen from '../../Screens/Authentication/Login';
import SignUp from '../../Screens/Authentication/Signup';
import PhoneValidation from '../../Screens/Authentication/PhoneValidation/VerifyNumber';
import Otp from '../../Screens/Authentication/PhoneValidation/Enter_Otp';
import ForgetPassword from '../../Screens/Authentication/ForgetPassword/ForgetPassword';
import GetCode from '../../Screens/Authentication/ForgetPassword/GetCode';
import Reset from '../../Screens/Authentication/ForgetPassword/Reset';
import HomeScreen from '../../Screens/HomeScreen';
import Bottom from '../Bottom_Nav/Bottom_Navigation';




const Stack = createNativeStackNavigator();

const Stack_Navigation=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator   initialRouteName='Splash_Blank' screenOptions={{headerShown:false}} >
        <Stack.Screen name="Splash_Blank" component={Splash_Blank} />
        <Stack.Screen name="Splash" component={Splash_Screen} />
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Sign_Up" component={SignUp} />
        <Stack.Screen name="PhoneNo" component={PhoneValidation} />
        <Stack.Screen name="OTP" component={Otp} />
        <Stack.Screen name="Forget" component={ForgetPassword} />
        <Stack.Screen name="GetCode" component={GetCode} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Bottom" component={Bottom} />
       



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack_Navigation;