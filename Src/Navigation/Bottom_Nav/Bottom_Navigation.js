import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bookmarks from '../../Screens/Bookmark';
import Profile from '../../Screens/Profile';
import MyDrawer from '../Drawer_Navigation/Drawer_Nav';
import Notifications from '../../Screens/Notification';







const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let tintColor;

          if (route.name === 'Home') {
            iconName = require('../../Assets/Icons/home.png');
            tintColor = focused ? '#038F54' : '#A2A2A2';
          } else if (route.name === 'Notification') {
            iconName = require('../../Assets/Icons/Notification.png');
            tintColor = focused ? '#038F54' : '#A2A2A2';
          } else if (route.name === 'Bookmark') {
            iconName = require('../../Assets/Icons/bookmark1.png');
            tintColor = focused ? '#038F54' : '#A2A2A2';
          } else if (route.name === 'Profile') {
            iconName = require('../../Assets/Icons/Profile.png');
            tintColor = focused ? '#038F54' : '#A2A2A2';
          }

          return <Image source={iconName} style={{ width: 25, height: 25, tintColor }} />;
        },
      })}

      tabBarOptions={{
        labelStyle: { paddingBottom: 10 },
        activeTintColor: '#1B938F',
        inactiveTintColor: '#A2A2A2',

      }}

    >
      <Tab.Screen name="Home" component={MyDrawer} options={{ tabBarLabel: 'Home', headerShown: false, tabBarStyle: { height: 70, borderTopLeftRadius: 30, borderTopRightRadius: 30, elevation: 10, backgroundColor: 'white' } }} />
      <Tab.Screen name="Notification" component={Notifications} options={{ tabBarLabel: 'Notification', headerShown: false, tabBarStyle: { height: 70, borderTopLeftRadius: 30, borderTopRightRadius: 30, elevation: 10, backgroundColor: 'white' } }} />
      <Tab.Screen name="Bookmark" component={Bookmarks} options={{ tabBarLabel: 'Bookmark', headerShown: false, tabBarStyle: { height: 70, borderTopLeftRadius: 30, borderTopRightRadius: 30, elevation: 10, backgroundColor: 'white' } }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile', headerShown: false, tabBarStyle: { height: 70, borderTopLeftRadius: 30, borderTopRightRadius: 30, elevation: 10, backgroundColor: 'white' } }} />
    </Tab.Navigator>
  );
}

export default function Bottom() {
  return (

    <MyTabs />
  );
}
