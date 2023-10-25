import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../../Themes/Colors'
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader'
import Forget_Header from '../../../../Components/ForgetPass_Header/Forget_Header'
import { Hide, Lock, Message, Show } from '../../../../Themes/Images'
import CustomButton from '../../../../Components/CustomButton/CustomButton'
import SuccessAlert from '../../../../Components/Alerts/Success_Alert'
import { styles } from './style'

const Reset = ({ navigation }) => {
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [ShowPassword, setShowPassword] = useState(false)
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };







  return (
    <View style={styles.MainCont} >
      <View style={styles.Header} >
        <CustomHeader title={''} onBackPress={() => { navigation.goBack() }} />
        <View style={styles.HeaderCont} >
          <Forget_Header title={'Enter your details to continue'} />
        </View>
      </View>
      <View style={styles.Body} >
        <View style={[styles.Input_Field, Password !== '' ? styles.Active_Input_Field : null]}>
          <Image source={Lock} style={[styles.Input_Icon, { tintColor: Password !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
          <TextInput
            placeholder="Enter New Password"
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
      </View>
      <View style={styles.Footer} >
        <CustomButton title={'Continue'} onPress={showAlert} />
      </View>

      <SuccessAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={() => { hideAlert(), navigation.navigate('Login') }}
      />
    </View>
  )
}

export default Reset
