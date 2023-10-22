import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../../Themes/Colors';
import { Logo1 } from '../../../../Themes/Images';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { styles } from './style';
import auth from '@react-native-firebase/auth';
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader';

const PhoneValidation = ({ navigation }) => {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Toggle Checkbox
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      console.log('User is signed in:', user);
      // You can add further logic here after a successful sign-in
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // Unsubscribe on unmount
  }, []);

  // Handle the button press to send the verification code
  async function sendVerificationCode() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(PhoneNumber);
      setConfirm(confirmation);
      setVerificationCodeSent(true); // Set to true after sending the code
    } catch (error) {
      console.log('Error sending verification code:', error.message);
    }
  }

  // Handle the button press to confirm the code
  async function confirmCode(code) {
    try {
      await confirm.confirm(code);
      // Code confirmed successfully, you can add further logic here
    } catch (error) {
      console.log('Invalid code:', error.message);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.Main_Container}>
      <CustomHeader onBackPress={() => { navigation.goBack(); }} />
      <Image source={Logo1} style={styles.Logo} />
      <Text style={styles.Header_Txt}>Verify your number to continue</Text>
      <View style={styles.PhoneInputCont}>
        <PhoneInput
          defaultValue={PhoneNumber}
          defaultCode='US'
          placeholder='000 000 000'
          onChangeFormattedText={(txt) => { setPhoneNumber(txt); }}
          containerStyle={{ width: '100%', borderRadius: 20, backgroundColor: '#FFFFFF', alignSelf: 'center', overflow: 'hidden', borderWidth: PhoneNumber.length === 0 ? 0 : 1, borderColor: PhoneNumber.length >= 13 ? Colors.Green : Colors.Red }}
        />
        {PhoneNumber.length < 13 ? <Text style={styles.Error}>This phone number is invalid</Text> : null}
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.checkbox, isChecked ? styles.checked : null]}
          onPress={toggleCheckbox}
        >
          {isChecked && <Icons name="check" color="white" size={12} />}
        </TouchableOpacity>
        <Text style={styles.label}>By entering my number, I agree to Bobi’s Terms & Conditions</Text>
      </View>

      <CustomButton title={"Next"} onPress={() => { navigation.navigate('OTP', { Phone: PhoneNumber }); }} />
    </ScrollView>
  );
}

export default PhoneValidation;
