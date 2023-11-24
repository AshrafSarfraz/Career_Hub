import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { styles } from './style';
import auth from '@react-native-firebase/auth';
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader';
import { Logo1 } from '../../../../Themes/Images';
import { Colors } from '../../../../Themes/Colors';
import CustomButton from '../../../../Components/CustomButton/CustomButton';

const PhoneValidation = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [error, setError] = useState(null);

  // Handle the button press to send the verification code
  // async function sendVerificationCode() {
  //   try {
  //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //     setConfirm(confirmation);
  //     setVerificationCodeSent(true); // Set to true after sending the code
  //   } catch (error) {
  //     setError('Error sending verification code: ' + error.message);
  //   }
  // }

  // const handleNext = () => {
  //   if (verificationCodeSent) {
  //     // If the verification code is sent, navigate to the OTP screen
  //     navigation.navigate('OTP', { Phone: phoneNumber });
  //   } else {
  //     setError('Please send the verification code first.');
  //   }
  // };


  // Inside the sendVerificationCode function
async function sendVerificationCode() {
  try {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
    setVerificationCodeSent(true);
    if (verificationCodeSent) {
    navigation.navigate('OTP', { Phone: phoneNumber, Confirmation: confirmation });
   }
   else {
       setError('Please send the verification code first.');
     }

  } catch (error) {
    setError('Error sending verification code: ' + error.message);
  }
}

  return (
    <ScrollView contentContainerStyle={styles.Main_Container}>
      <CustomHeader onBackPress={() => { navigation.goBack(); }} />
      <Image source={Logo1} style={styles.Logo} />
      <Text style={styles.Header_Txt}>Verify your number to continue</Text>
      <View style={styles.PhoneInputCont}>
        <PhoneInput
          defaultValue={phoneNumber}
          defaultCode='PK'
          placeholder='000 000 000'
          onChangeFormattedText={(txt) => { setPhoneNumber(txt); }}
          containerStyle={{
            width: '100%',
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            alignSelf: 'center',
            overflow: 'hidden',
            borderWidth: phoneNumber.length === 0 ? 0 : 1,
            borderColor: phoneNumber.length >= 13 ? Colors.Green : Colors.Red
          }}
        />
        {phoneNumber.length < 13 ? <Text style={styles.Error}>This phone number is invalid</Text> : null}
      </View>

      {verificationCodeSent ? (
        <CustomButton title="Next" onPress={handleNext} />
      ) : (
        <CustomButton title="Send Verification Code" onPress={sendVerificationCode} />
      )}

      {error && <Text style={styles.Error}>{error}</Text>}
    </ScrollView>
  );
}

export default PhoneValidation;
