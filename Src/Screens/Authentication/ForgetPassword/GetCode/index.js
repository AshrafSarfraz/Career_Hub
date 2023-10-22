import { View, Text,ScrollView ,StyleSheet,Image,TextInput,TouchableOpacity,Alert} from 'react-native'
import React,{useState,useRef,useEffect} from 'react'

import CustomHeader from '../../../../Components/CustomHeader/CustomHeader'
import Forget_Header from '../../../../Components/ForgetPass_Header/Forget_Header'
import CustomButton from '../../../../Components/CustomButton/CustomButton'
import { useRoute } from '@react-navigation/native'
import { styles } from './style'

const GetCode = ({navigation}) => {
    const route = useRoute()
    const [otp, setOtp] = useState(['', '', '', '','','']);
    const inputRef = useRef([]);
    const [showError, setShowError] = useState(false);
     
    
  const handleOtpChange = (value, index) => {
    setOtp(prevOtp => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      // Conditionally focus the next input field
      if (value && index < inputRef.current.length - 1) {
        inputRef.current[index + 1].focus();
      }

      // Check if all OTP pins are entered
      if (newOtp.every(pin => pin !== '')) {
        setShowError(false); // Hide error when all pins are entered
      } else {
        setShowError(true); // Show error if any pin is missing
      }

      return newOtp;
    });
  };

  const handleOtpKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };






  return (
    <View  style={styles.MainCont} >
      <View  style={styles.Header} >
    <CustomHeader title={''} onBackPress={()=>{navigation.goBack()}} />
    <View style={styles.HeaderCont} >
    <Forget_Header title={'Enter the OTP sent to you'}   />
    </View>
    </View>
    <View style={styles.Body} >
    <View style={styles.inputContainer}>
        {otp.map((pin, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRef.current[index] = ref)}
            style={[
              styles.Otp,
              { borderColor: pin ? 'green' : 'black' }, // Set borderColor to green if pin is filled, black if not
            ]}
            value={pin}
            onChangeText={value => handleOtpChange(value, index)}
            onKeyPress={event => handleOtpKeyPress(event, index)}
            maxLength={1}
            keyboardType="numeric"
            autoFocus={index === 0}
          />
        ))}
      </View>

     
   
   <View style={styles.Resend_Cont} >
    <TouchableOpacity  onPress={()=>{Alert.alert('Api Working here')}} >
      <Text style={styles.Resend_Txt} >Resend</Text>
     </TouchableOpacity>
   </View>
    {/* Display an error message if not all OTP pins are entered */}
   {showError && <Text style={styles.Error} >The OTP passcode you’ve entered is incorrect</Text>}
    </View>
       <View style={styles.Footer} >
          <CustomButton title={'Reset Password'} onPress={()=>{navigation.navigate('Reset')}}  />
          </View>
    </View>
  )
}

export default GetCode

