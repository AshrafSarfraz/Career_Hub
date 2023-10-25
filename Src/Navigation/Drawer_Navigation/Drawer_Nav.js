import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './Custom_Drawer';
import Notification from '../../Screens/Notifications';
import HomeScreen from '../../Screens/HomeScreen';
import Bookmarks from '../../Screens/Bookmark';
import Profile from '../../Screens/Profile';
import Contact from '../../Screens/Contact';
import Policies from '../../Screens/Policies';




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
        name='Contact'
        component={Contact}
        options={{ title: 'Contact' }}
      />
      <Drawer.Screen
        name='Policies'
        component={Policies}
        options={{ title: 'Policies' }}
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
