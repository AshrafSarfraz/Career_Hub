import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import { Colors } from '../../../Themes/Colors';
import { Drop, Hide, Lock, Message, Show } from '../../../Themes/Images';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { styles } from './style';


const SignInScreen = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ShowPassword, setShowPassword] = useState(false)
  const [isError, setIsError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // firebase  Auth BY Google
  GoogleSignin.configure({
    webClientId: '499188544934-7je57jquuqs6cv3fjiatagjqv5meo28f.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    try {
      // Check for Play Services
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });     // Get Google Sign-In token
      const { idToken } = await GoogleSignin.signIn();                               // Create Google Sign-In credentials
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);         // Sign in with Google credentials
      await auth().signInWithCredential(googleCredential);  
      navigation.navigate('Bottom')             
      // Log success
      console.log('Signed in with Google!');
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
    }}
  // firebase  Auth BY Google


  // firebase  Auth BY Email/Password
  const handleSignIn = async () => {
    if (!Email || !Password) {
      setIsError('Please fill in both email and password fields.');
      return; // Don't proceed with sign-in
    }
   
    try {
      const userCredential = await auth().signInWithEmailAndPassword(Email, Password);
      console.log('User account created & signed in!', userCredential);
      if (userCredential.user.emailVerified) {
        Alert.alert('You are verified');
        navigation.navigate('Bottom')
      } else {
        Alert.alert('You are not verified So Please check your Gmail for verification');
        await auth.currentUser.sendEmailVerification();
        await auth.signOut();
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }};
  // firebase  Auth BY Email/Password
  
  return (
    <ScrollView contentContainerStyle={styles.MainContainer}>
      <View>
        <Image source={Drop} style={styles.H_Logo} resizeMode="contain" />
        <Text style={styles.Welcome_Txt}>Welcome Back!</Text>
        <Text style={styles.SignUp_Txt}>Sign in with your account</Text>
        <View style={styles.InputContainer}>

          <View style={[styles.Input_Field, Email !== '' ? styles.Active_Input_Field : null]}>
            <Image source={Message} style={[styles.Input_Icon, { tintColor: Email !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
            <TextInput
              placeholder="ashrafq952@gmail.com"
              value={Email}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setEmail(txt); }}
              style={styles.User_Input}
            />
          </View>
          <View style={[styles.Input_Field, Password !== '' ? styles.Active_Input_Field : null]}>
            <Image source={Lock} style={[styles.Input_Icon, { tintColor: Password !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
            <TextInput
              placeholder="Password"
              value={Password}
              secureTextEntry={!ShowPassword}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setPassword(txt); }}
              style={styles.User_Input} />
            {ShowPassword === false ?
              <TouchableOpacity onPress={() => { setShowPassword(true) }} >
                <Image source={Hide} style={[styles.Input_Icon, { tintColor: Password !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => { setShowPassword(false) }} >
                <Image source={Show} style={[styles.Input_Icon, { tintColor: Password !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
              </TouchableOpacity>
            }
          </View>
     
          
          <View style={styles.Forget_Cont} >
            <TouchableOpacity style={styles.Forget_Btn} onPress={() => { navigation.navigate('Forget') }}  >
              <Text style={styles.Forget_Txt} >Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          {isError ? (
            <Text style={{ color: 'red' }}>{isError}</Text>
          ) : null}
        </View>
        <View style={styles.SignUp_Btn} >
          <CustomButton title='Sign In'  onPress={() =>{handleSignIn()}}  />
        </View>
        <TouchableOpacity style={styles.Guest} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} >
          <Text style={styles.Guest_Btn} >Continue With Google</Text>
        </TouchableOpacity>
        <View style={styles.Btn_Cont} >
          <Text style={styles.Already_Txt} >Don’t have an account?  </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Sign_Up') }} style={styles.SignIn_Btn} >
            <Text style={styles.SignIn_Txt} >Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};
export default SignInScreen;
