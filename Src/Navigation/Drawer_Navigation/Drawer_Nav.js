import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './Custom_Drawer';
import Notification from '../../Screens/Notifications';
import HomeScreen from '../../Screens/HomeScreen';
import Bookmarks from '../../Screens/Bookmark';
import Profile from '../../Screens/Profile';



const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#45b9bf',
      }}
    >

      <Drawer.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name='Buy_Pixel'
        component={Notification}
        options={{ title: 'Buy_Pixel' }}
      />
      <Drawer.Screen
        name='View_Pixel'
        component={Bookmarks}
        options={{ title: 'View_Pixel' }}
      />
      <Drawer.Screen
        name='Contact_Us'
        component={Profile}
        options={{ title: 'Contact_Us' }}
      />
     
     
    </Drawer.Navigator>
  );
};

export default MyDrawer;
