import { View, Text,StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icons from 'react-native-vector-icons/FontAwesome5';
import PhoneInput from 'react-native-phone-number-input'
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader'
import { Colors } from '../../../../Themes/Colors'
import { T_Logo } from '../../../../Themes/Images'
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { styles } from './style';

const PhoneValidation = ({navigation}) => {
   const [PhoneNumber,setPhoneNumber]=useState('')
   const [isChecked, setIsChecked] = useState(false);
   const toggleCheckbox = () => {
     setIsChecked(!isChecked);
   };
 

  return (
    <ScrollView contentContainerStyle  ={styles.Main_Container} >
     <CustomHeader onBackPress={()=>{navigation.goBack()}} />
     <Image source={T_Logo}  style={styles.Logo} />
      <Text style={styles.Header_Txt} >Verify your number to continue</Text>
       <View  style={styles.PhoneInputCont} >
      <PhoneInput
        defaultValue={PhoneNumber}
        defaultCode='US'
        placeholder='000 000 000'
        
        onChangeFormattedText={(txt)=>{setPhoneNumber(txt)}}
        containerStyle={{width:'100%', borderRadius:20,backgroundColor:'#FFFFFF',alignSelf:'center',overflow:'hidden',borderWidth:PhoneNumber.length===0?0:1  ,borderColor:PhoneNumber.length>=13?Colors.Green:Colors.Red }}
      />
      {PhoneNumber.length<13?<Text style={styles.Error} >This phone number is invalid</Text>:null}
      </View>
      <View style={styles.container}>
      {/* <TouchableOpacity
        style={[styles.checkbox, isChecked ? styles.checked : null]}
        onPress={toggleCheckbox}
      >
        {isChecked && <Icons name="check" color="white" size={12} />}
      </TouchableOpacity>
      <Text style={styles.label}>By entering my number, I agree to Bobi’s Terms & Conditions</Text> */}
   
    </View>
    
    <CustomButton title={"Next"}  onPress={()=>{navigation.navigate('OTP',{Phone:PhoneNumber})}} />
    </ScrollView>
  )
}

export default PhoneValidation

