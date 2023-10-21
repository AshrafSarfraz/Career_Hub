import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import Notification from '../../Screens/Notifications';
import Bookmarks from '../../Screens/Bookmark';
import Profile from '../../Screens/Profile';
import MyDrawer from '../Drawer_Navigation/Drawer_Nav';







const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let tintColor;

          if (route.name === 'Home') {
            iconName = require('../../Assets/Icons/search.png');
            tintColor = focused ? '#038F54' : '#E2E2E2';
          } else if (route.name === 'Notification') {
            iconName = require('../../Assets/Icons/plus.png');
            tintColor = focused ? '#038F54' : '#E2E2E2';
          } else if (route.name === 'Bookmark') {
            iconName = require('../../Assets/Icons/sms.png');
            tintColor = focused ? '#038F54' : '#E2E2E2';
          } else if (route.name === 'Profile') {
            iconName = require('../../Assets/Icons/Profile.png');
            tintColor = focused ? '#038F54' : '#E2E2E2';
          }

          return <Image source={iconName} style={{ width: 25, height: 25,  tintColor}} />;
        },
      })}
      
      tabBarOptions={{
        labelStyle: { paddingBottom: 10 },
        activeTintColor: '#1B938F',
        inactiveTintColor: '#E2E2E2',
       
      }}
    
    >
      <Tab.Screen name="Home" component={MyDrawer} options={{ tabBarLabel: 'Home',headerShown: false  ,tabBarStyle:{height:70,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10,backgroundColor:'white'} }} />
      <Tab.Screen name="Notification" component={Notification} options={{ tabBarLabel: 'Notification',headerShown: false ,tabBarStyle:{height:70,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10,backgroundColor:'white'}  }} />
      <Tab.Screen name="Bookmark" component={Bookmarks} options={{ tabBarLabel: 'Bookmark',headerShown: false ,tabBarStyle:{height:70,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10,backgroundColor:'white'}}} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile',headerShown: false ,tabBarStyle:{height:70,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10,backgroundColor:'white'} }} />
    </Tab.Navigator>
  );
}

export default function Bottom() {
  return (
    
    <MyTabs />
  );
}
