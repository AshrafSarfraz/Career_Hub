import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash_Blank from '../../Screens/Authentication/Splash_Screens/Splash_Blank';
import Splash_Screen from '../../Screens/Authentication/Splash_Screens/Splash_Screen';
import OnBoarding from '../../Screens/OnBoarding';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Stack_Navigation=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}} >
        <Stack.Screen name="Splash_Blank" component={Splash_Blank} />
        <Stack.Screen name="Splash" component={Splash_Screen} />
        <Stack.Screen name="onBoarding" component={OnBoarding} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack_Navigation;