import React, { useState } from 'react';
import { View, Text,ScrollView,StyleSheet,TextInput,Image,TouchableOpacity,Alert,} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../Themes/Colors';
import { Discovery, H_Logo, Hide, Lock, Logo, Message, Profile, Show } from '../../../Themes/Images';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { styles } from './style';
import CustomHeader2 from '../../../Components/CustomHeader2/CustomHeader2';




const SignUp = ({ navigation }) => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [ShowPassword,setShowPassword]=useState(false)
  const [ShowConfirmPassword,setShowConfirmPassword]=useState(false)
  const [isChecked, setIsChecked] = useState(false);
 
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // firebase  Auth BY Google
  GoogleSignin.configure({
    webClientId: '499188544934-7je57jquuqs6cv3fjiatagjqv5meo28f.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

// firebase  Auth BY Google





// firebase 
const handleRegister = async () => {
  try {
    await auth().createUserWithEmailAndPassword(Email, Password);
    Alert.alert('User account created & signed in!');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    } else {
      Alert.alert('An error occurred. Please try again later.');
    }
  }
};

//firebase 




  return (
    <ScrollView contentContainerStyle={styles.MainContainer}>
      <View>
        <CustomHeader2 title="" onBackPress={() => { navigation.navigate('Login')}} />
        
        <Image source={Logo} style={styles.H_Logo} resizeMode="contain" />
        <Text style={styles.Welcome_Txt}>Welcome!</Text>
        <Text style={styles.SignUp_Txt}>Sign up to continue</Text>
        <View style={styles.InputContainer}>
         
        <View style={[styles.Input_Field,Username!==''? styles.Active_Input_Field:null]}>
            <Image source={Profile} style={[styles.Input_Icon ,{tintColor:Username!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Name"
              value={Username}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setUsername(txt); }}
              style={styles.User_Input}
            />
          </View>
          <View style={[styles.Input_Field,Email!==''? styles.Active_Input_Field:null]}>
            <Image source={Message} style={[styles.Input_Icon ,{tintColor:Email!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="ashrafq952@gmail.com"
              value={Email}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setEmail(txt); }}
              style={styles.User_Input}
            />
          </View>
         
          <View style={[styles.Input_Field,Password!==''? styles.Active_Input_Field:null]}>
            <Image source={Lock} style={[styles.Input_Icon ,{tintColor:Password!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Password"
              value={Password}
              secureTextEntry={!ShowPassword}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setPassword(txt); }}
              style={styles.User_Input} />
              { ShowPassword===false?  
              <TouchableOpacity onPress={()=>{setShowPassword(true)}} >
              <Image source={Hide} style={[styles.Input_Icon ,{tintColor:Password!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
              </TouchableOpacity> 
               :  
               <TouchableOpacity onPress={()=>{setShowPassword(false)}} >
               <Image source={Show} style={[styles.Input_Icon ,{tintColor:Password!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
               </TouchableOpacity> 
                 }
          </View>
          <View style={[styles.Input_Field,ConfirmPassword!==''? styles.Active_Input_Field:null]}>
            <Image source={Lock} style={[styles.Input_Icon ,{tintColor:ConfirmPassword!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Confirm Password"
              value={ConfirmPassword}
              secureTextEntry={!ShowConfirmPassword}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setConfirmPassword(txt); }}
              style={styles.User_Input} />
              { ShowConfirmPassword===false?  
              <TouchableOpacity onPress={()=>{setShowConfirmPassword(true)}} >
              <Image source={Hide} style={[styles.Input_Icon ,{tintColor:ConfirmPassword!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
              </TouchableOpacity> 
               :  
               <TouchableOpacity onPress={()=>{setShowConfirmPassword(false)}} >
               <Image source={Show} style={[styles.Input_Icon ,{tintColor:ConfirmPassword!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
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
      <View style={{flexDirection:'row'}} >
      <Text style={styles.label}>I Agree to the Bobi’s </Text>
      <TouchableOpacity onPress={()=>{Alert.alert('Conditions')}} >
        <Text style={styles.Term_Text} >Term & Conditions</Text>
      </TouchableOpacity>
      </View>
    </View>
        </View>

        <TouchableOpacity style={styles.Guest}  onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} >
          <Text style={styles.Guest_Btn} >Continue as Google</Text>
        </TouchableOpacity>

        <View style={styles.SignUp_Btn} >
        <CustomButton title='Sign Up' onPress={()=>{navigation.navigate('PhoneNo'),handleRegister()}} />
        </View>
        <View style={styles.Btn_Cont} >
          <Text style={styles.Already_Txt} >Already have an account?  </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={styles.SignIn_Btn} >
          <Text  style={styles.SignIn_Txt} >Sign In</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  );
};
export default SignUp;