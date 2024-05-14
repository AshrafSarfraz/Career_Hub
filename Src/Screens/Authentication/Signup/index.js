import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { generatePolicyText } from './Terms_Condition';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Icons from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Colors } from '../../../Themes/Colors';
import { Drop, Hide, Lock, Message, Profile, Show } from '../../../Themes/Images';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { styles } from './style';
import CustomHeader2 from '../../../Components/CustomHeader2/CustomHeader2';
import ActivityIndicatorModal from '../../../Components/Loader/ActivityIndicator';

const SignUp = () => {
  const navigation = useNavigation();
  const [Username, setUsername] = useState('');
  const [Lastname, setLastname] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

 
  const checkPasswordStrength = (Password) => {
    // Define criteria for medium and strong passwords
    const mediumCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const strongCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{12,}$/;

    if (strongCriteria.test(Password)) {
      return 'strong';
    } else if (mediumCriteria.test(Password)) {
      return 'medium';
    } else {
      return 'weak';
    }
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Login');
      }
    });
    return () => subscriber();
  }, [navigation]);
  // Google Sign-In configuration
  GoogleSignin.configure({
    webClientId: '499188544934-7je57jquuqs6cv3fjiatagjqv5meo28f.apps.googleusercontent.com',
  });

  // Function to handle Google Sign-In
  async function onGoogleButtonPress() {

    try {
      setIsLoading(true)
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });     // Get Google Sign-In token
      const { idToken } = await GoogleSignin.signIn();                               // Create Google Sign-In credentials
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);         // Sign in with Google credentials
      await auth().signInWithCredential(googleCredential);
      setIsLoading(false)
      navigation.navigate('Bottom')
      setIsError('');
    } catch (error) {
      setIsError('Google Sign-In error:', error.message);
    }
  }

  // Function to sign up with phone number
  async function RegisterUser() {
    if (!Email || !Password || !Username || !ConfirmPassword || !PhoneNumber || isChecked === false) {
      setIsError('All fields are required.');
      return;
    }
    const passwordStrength = checkPasswordStrength(Password);
    if (passwordStrength === 'weak') {
      setIsError('Password must be contain [a-z] [A-Z] {8,}.');
      return;
    }
    if (Password !== ConfirmPassword) {
      setIsError("Passwords don't match.");
      return;
    }
    try {
      setIsLoading(true)
      const userCredential = await auth().createUserWithEmailAndPassword(Email, Password);
      setIsError('User account created',);
      const user = userCredential.user;
      const userId = user.uid;

      // Store additional user details in your database (Firestore, Realtime Database, etc.)
      await firestore().collection('users').doc(userId).set({
        Username: Username,
        Lastname: Lastname,
        Email: Email,
        PhoneNumber: PhoneNumber,
        Password: Password,
        userImage: userImage
      });
      await auth().currentUser.sendEmailVerification();
      setIsLoading(false)
      Alert.alert('Please check your Gmail for Verification of Account')
      await auth().signOut();
      // You can navigate to another screen or perform other actions upon successful signup
    } catch (error) {
      setIsLoading(false)
      if (error.code === 'auth/email-already-in-use') {
        setIsError('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        setIsError('That email address is invalid!');
      } else {
        setIsError(error.message);
      }
    }
  }
  const showPoliciesAlert = () => {
    const policyText = generatePolicyText();
    Alert.alert('Terms & Policies', policyText);
  };

  return (
    <ScrollView contentContainerStyle={styles.MainContainer}>
      <View>
        <CustomHeader2 title="" onBackPress={() => { navigation.goBack() }} />
        <Image source={Drop} style={styles.H_Logo} resizeMode="contain" />
        <Text style={styles.Welcome_Txt}>Welcome!</Text>
        <Text style={styles.SignUp_Txt}>Sign up to continue</Text>
        <View style={styles.InputContainer}>
          <View style={[styles.Input_Field, Username !== '' ? styles.Active_Input_Field : null]}>
            <Image source={Profile} style={[styles.Input_Icon, { tintColor: Username !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
            <TextInput
              placeholder="First Name"
              value={Username}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setUsername(txt); }}
              style={styles.User_Input}
            />
          </View>
          <View style={[styles.Input_Field, Lastname !== '' ? styles.Active_Input_Field : null]}>
            <Image source={Profile} style={[styles.Input_Icon, { tintColor: Lastname !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
            <TextInput
              placeholder="Last Name"
              value={Lastname}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setLastname(txt); }}
              style={styles.User_Input}
            />
          </View>
          <PhoneInput
            defaultValue={PhoneNumber}
            defaultCode='PK'
            placeholder='300-1234567'
            onChangeFormattedText={(txt) => { setPhoneNumber(txt) }}
            containerStyle={{ width: '100%', marginBottom: "3%", height: 65, elevation: 1, borderRadius: 10, alignSelf: 'center', overflow: 'hidden', backgroundColor: PhoneNumber.length === 0 ? '#F4F4F4' : "#FFFFFF", borderWidth: PhoneNumber.length === 0 ? 0 : 2, borderColor: PhoneNumber.length >= 11 ? Colors.Green : Colors.Red }}
            textContainerStyle={{ backgroundColor: PhoneNumber.length === 0 ? '#F4F4F4' : "#FFFFFF", }}
            textInputProps={{ fontSize: 14, color: '#000000', padding: '0%', }}
          />
          <View style={[styles.Input_Field, Email !== '' ? styles.Active_Input_Field : null]}>
            <Image source={Message} style={[styles.Input_Icon, { tintColor: Email !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
            <TextInput
              placeholder="Email"
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
          <View style={[styles.Input_Field, ConfirmPassword !== '' ? styles.Active_Input_Field : null]}>
            <Image source={Lock} style={[styles.Input_Icon, { tintColor: ConfirmPassword !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
            <TextInput
              placeholder="Confirm Password"
              value={ConfirmPassword}
              secureTextEntry={!ShowConfirmPassword}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setConfirmPassword(txt); }}
              style={styles.User_Input} />
            {ShowConfirmPassword === false ?
              <TouchableOpacity onPress={() => { setShowConfirmPassword(true) }} >
                <Image source={Hide} style={[styles.Input_Icon, { tintColor: ConfirmPassword !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => { setShowConfirmPassword(false) }} >
                <Image source={Show} style={[styles.Input_Icon, { tintColor: ConfirmPassword !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
              </TouchableOpacity>
            }
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.checkbox, isChecked ? styles.checked : null]}
              onPress={toggleCheckbox}
            >
              {isChecked && <Icons name="check" color="white" size={12} />}
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }} >
              <Text style={styles.label}>I Agree to the Bobi’s </Text>
              <TouchableOpacity onPress={() => showPoliciesAlert()} >
                <Text style={styles.Term_Text} >Term & Conditions</Text>
              </TouchableOpacity>
            </View>
          </View>
          {isError ? (
            <Text style={{ color: 'red' }}>{isError}</Text>
          ) : null}
        </View>
        <TouchableOpacity style={styles.Guest} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} >
          <Text style={styles.Guest_Btn} >Continue as Google</Text>
        </TouchableOpacity>

        <View style={styles.SignUp_Btn} >
          <CustomButton title='Sign Up' onPress={RegisterUser} />
        </View>
        <View style={styles.Btn_Cont} >
          <Text style={styles.Already_Txt} >Already have an account?  </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={styles.SignIn_Btn} >
            <Text style={styles.SignIn_Txt} >Sign In</Text>
          </TouchableOpacity>
        </View>

      </View>
      <ActivityIndicatorModal visible={isLoading} />
    </ScrollView>
  );
}


export default SignUp
