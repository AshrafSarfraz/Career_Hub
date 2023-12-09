import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Bobi, Doc, Home, Logo, Logo1, Logout, Profile, Profile2 } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';



function CustomDrawerContent(props) {
  const [ButtonState, setButtonState] = useState(1)
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;
        // Retrieve user data from Firestore
        try {
          const userDocument = await firestore().collection('users').doc(userId).get();
  
          if (userDocument.exists) {
            const userDataFromFirestore = userDocument.data();
            setUserData(userDataFromFirestore);
          } else {
            console.log('User document does not exist.');
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      } else {
        // No user is signed in
        setUserData(null);
      }
    });
  
    return () => unsubscribe(); // Cleanup function to unsubscribe from the onAuthStateChanged listener
  }, []);


  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    checkGoogleSignIn();
  }, []);

  const checkGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const isSignedIn = await GoogleSignin.isSignedIn();

      if (isSignedIn) {
        const currentUser = await GoogleSignin.getCurrentUser();
        setUserInfo(currentUser.user);
      }
    } catch (error) {
      console.error('Error checking Google Sign-In:', error.message);
    }
  };


  const handleSignOut = async () => {
    try {
      // Ensure GoogleSignin is configured before calling signOut
      await GoogleSignin.configure({
        webClientId: '499188544934-7je57jquuqs6cv3fjiatagjqv5meo28f.apps.googleusercontent.com',
        // other configuration options...
      });
      // Sign out from Google
      await GoogleSignin.signOut();
      // Sign out from Firebase or perform other sign-out actions
      await auth().signOut();
      // Navigate to the login screen or any other screen as needed
      props.navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing out:', error.message);
      // Handle the error appropriately
    }
  };
  
// const handleSignOut = async () => {
//   try {
//     // Check if a user is signed in before attempting to sign out
//     const user = auth().currentUser;

//     if (user) {
//       GoogleSignin.configure({
      //   webClientId: '499188544934-7je57jquuqs6cv3fjiatagjqv5meo28f.apps.googleusercontent.com',
      // });
      
//       // Sign out from Firebase
//       await auth().signOut();

//       // Sign out from Google if using Google Sign-In
//       await GoogleSignin.signOut();

//       // After successful signout, navigate to the login screen or any other screen as needed
//       props.navigation.navigate('Login');
//     } else {
//       console.warn('No user currently signed in');
//     }
//   } catch (error) {
//     console.error('Error signing out:', error.message);
//     // You can log or display the error message to understand the issue
//   }
// };

  

  return (
    <View style={styles.DrawerCont}>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        {/* <DrawerItem
          style={styles.Btn1}
          label="Help"
          onPress={() =>{props.navigation.navigate('Navigator')}}
        /> */}
        <View style={{ backgroundColor: Colors.Green, borderBottomWidth: 1, borderColor: Colors.Grey4, top: '-1%' }} >
          <Image source={{uri:userInfo.photo}} style={[styles.UserImg]} />
          {userData ? 
            ( <Text style={styles.UserName} >{userData.Username} {userData.Lastname}</Text>):
            (  (userInfo && userInfo.name ? <Text style={styles.UserName}>{userInfo.name}</Text> : null))}
        </View>
        <View style={{ padding: '4%' }} >
          <TouchableOpacity onPress={() => { setButtonState(1), props.navigation.navigate('HomeScreen') }} style={[styles.ButtonStyle, ButtonState === 1 ? styles.ActiveButton : null]} >
            {ButtonState === 1 ?
              <Image source={Home} style={[styles.HomeIcon, { tintColor: '#FFFFFF' }]} />
              :
              <Image source={Home} style={styles.HomeIcon} />}
            <Text style={[styles.Label, ButtonState === 1 ? styles.ActiveButtonTxt : null]} >Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setButtonState(2), props.navigation.navigate('Contact') }} style={[styles.ButtonStyle, ButtonState === 2 ? styles.ActiveButton : null]} >
            {ButtonState === 2 ?
              <Image source={Profile} style={[styles.HomeIcon, { tintColor: '#FFFFFF' }]} />
              :
              <Image source={Profile} style={[styles.HomeIcon, { tintColor: Colors.Green }]} />}
            <Text style={[styles.Label, ButtonState === 2 ? styles.ActiveButtonTxt : null]} >Contact us</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => { setButtonState(3), props.navigation.navigate('Policies') }} style={[styles.ButtonStyle, ButtonState === 3 ? styles.ActiveButton : null]} >
            {ButtonState === 3 ?
              <Image source={Doc} style={[styles.HomeIcon, { tintColor: '#FFFFFF' }]} />
              :
              <Image source={Doc} style={[styles.HomeIcon, { tintColor: Colors.Green }]} />}
            <Text style={[styles.Label, ButtonState === 3 ? styles.ActiveButtonTxt : null]} >Terms & Privay Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setButtonState(4),handleSignOut() }} style={[styles.ButtonStyle, ButtonState === 4 ? styles.ActiveButton : null]} >
            {ButtonState === 4 ?
              <Image source={Logout} style={[styles.HomeIcon, { tintColor: '#FFFFFF' }]} />
              :
              <Image source={Logout} style={[styles.HomeIcon, { tintColor: Colors.Green }]} />}
            <Text style={[styles.Label, ButtonState === 4 ? styles.ActiveButtonTxt : null]} >Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.VersionContainer} >

          <Text style={styles.Vibes} >Career-Hub</Text>
          <Text style={styles.ShareVibes} >A World With LimitLess Opportunities</Text>
          <Text style={styles.Version} >VERSION 1.0</Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
export default CustomDrawerContent;

const styles = StyleSheet.create({
  DrawerCont: {
    flex: 1,
    backgroundColor: Colors.White,


  },
  UserImg: {
    width: 80, height: 80,
    borderRadius: 50,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: '8%',
    marginBottom: '2%'
  },
  UserName: {
    fontSize: 20,
    lineHeight: 30,
    color: Colors.White,
    textAlign: "center",
    marginVertical: "2%",
    paddingBottom: "4%",
    fontFamily: Fonts.SF_SemiBold

  },
  ButtonStyle: {
    width: '100%',
    padding: '2%',
    alignItems: 'center',
    flexDirection: "row",
    padding: '4%',
    paddingHorizontal: "6%",
    marginBottom: '2%'
  },
  ActiveButton: {
    backgroundColor: Colors.Green,
    borderRadius: 7
  },
  ActiveButtonTxt: {
    color: '#FFFFFF'
  },
  HomeIcon: {
    width: 25, height: 25, resizeMode: 'contain', marginRight: "5%"
  },
  Label: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.Green,
    fontWeight: '700'
  },
  VersionContainer: {
    marginTop: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },


  Vibes: {
    fontSize: 22,
    fontFamily: Fonts.SF_Bold,
    color: Colors.Green,
    fontWeight: '900',
    lineHeight: 30,

  },
  ShareVibes: {
    fontSize: 8,
    fontFamily: Fonts.SF_Bold,
    color: '#000000',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  Version: {
    fontSize: 13,
    fontFamily: Fonts.SF_Bold,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: '1%'
  },
})



