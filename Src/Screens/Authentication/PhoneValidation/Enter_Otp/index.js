import { View, Text,StyleSheet,ScrollView ,Image,TouchableOpacity,TextInput, Alert} from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { Colors } from '../../../../Themes/Colors'
import { useRoute } from '@react-navigation/native'
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader'
import { T_Logo } from '../../../../Themes/Images'
import { Fonts } from '../../../../Themes/Fonts'
import CustomButton from '../../../../Components/CustomButton/CustomButton'


const Otp = ({ navigation }) => {
  const route = useRoute();
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
    <ScrollView contentContainerStyle={styles.MainCont} >
        <CustomHeader title={''} onBackPress={()=>{navigation.goBack()}} />
        <Image source={T_Logo} style={styles.Logo} />
        <Text style={styles.digit_Txt}  >Enter the 6-digit OTP sent to you at</Text>
      <Text style={styles.Number} >{route.params.Phone}</Text>


      <View style={styles.inputContainer}>
        {otp.map((pin, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRef.current[index] = ref)}
            style={[
              styles.Otp,
              { borderColor: pin ? 'green' : '#959595' }, // Set borderColor to green if pin is filled, black if not
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

      {/* Display an error message if not all OTP pins are entered */}
      {showError && <Text style={styles.Error} >The OTP passcode you’ve entered is incorrect</Text>}
   <View style={styles.Resend_Cont} >
    <Text style={styles.Already} >I haven’t received a code </Text>
    <TouchableOpacity  onPress={()=>{Alert.alert('Api Working here')}} >
      <Text style={styles.Resend_Txt} >RESEND</Text>
     </TouchableOpacity>
   </View>
    
    <CustomButton title={'Next'} onPress={()=>{navigation.navigate('Login')}} />



    </ScrollView>
  )
}

export default Otp

const styles=StyleSheet.create({
MainCont:{
   backgroundColor:Colors.Bg,
   flexGrow:1,
   padding:'4%'
},
Logo:{
    width:120,
    height:120,
    alignSelf:'center'
},
Number:{
 fontFamily:Fonts.SF_Medium,
 fontSize:20,
 color:Colors.Green,
 alignSelf:'center',
 lineHeight:26,
 marginBottom:'7%'
},
digit_Txt:{
    fontFamily:Fonts.SF_Medium,
    fontSize:20,
    color:Colors.Black,
    alignSelf:'center',
    lineHeight:26,
    marginTop:"4%",
    marginBottom:'1%'
},
inputContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
},
Otp:{
  width:50,
  height:50,
  backgroundColor:Colors.Bg,
  marginLeft:'2%',
  marginBottom:'3%',
  justifyContent:'center',
  textAlign:'center',
  borderRadius:10,
  elevation:1,
  borderWidth:2,
  fontSize:16,
  color:Colors.Black2
},
input: {
  width: 40,
  height: 40,
  borderWidth: 1,
  borderRadius: 4,
  marginHorizontal: 5,
  textAlign: 'center',
  fontSize: 16,
},
Error:{
  fontFamily:Fonts.SF_Medium,
    fontSize:14,
    color:Colors.Red,
    lineHeight:20,
    marginTop:"4%",
    marginBottom:'1%'
},
Resend_Cont:{
  flexDirection:'row',
  alignSelf:'center',
  marginTop:'45%',
  marginBottom:'15%'
},
Already:{
  fontFamily:Fonts.SF_Regular,
  fontSize:14,
  color:Colors.Green,
  lineHeight:20,
},
Resend_Txt:{
  fontFamily:Fonts.SF_Bold,
  fontSize:14,
  color:Colors.Green,
  lineHeight:20,
}

})