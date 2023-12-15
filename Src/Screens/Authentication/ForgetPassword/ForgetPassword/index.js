import { View, Image, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../../Themes/Colors';
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader';
import Forget_Header from '../../../../Components/ForgetPass_Header/Forget_Header';
import { Message } from '../../../../Themes/Images';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { styles } from './style';
import auth from '@react-native-firebase/auth';
import SuccessAlert from '../../../../Components/Alerts/Success_Alert';

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  const sendPasswordResetEmail = async () => {
    if (email === '') {
      Alert.alert('Enter your email');
    } else {
      try {
        await auth().sendPasswordResetEmail(email);
        showAlert()
      } catch (error) {
        console.error('Error sending password reset email:', error.message);
        Alert.alert('Error', 'Failed to send password reset email. Please try again.');
      }
    }
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
        <View style={[styles.Input_Field, email !== '' ? styles.Active_Input_Field : null]}>
          <Image source={Message} style={[styles.Input_Icon, { tintColor: email !== '' ? Colors.Black2 : Colors.Grey9 }]} resizeMode='contain' />
          <TextInput
            placeholder="Email"
            value={email}
            placeholderTextColor={Colors.Grey9}
            onChangeText={(txt) => { setEmail(txt); }}
            style={styles.User_Input}
          />
        </View>
      </View>
      <View style={styles.Footer} >
        <CustomButton title={'Continue'} onPress={sendPasswordResetEmail} />
      </View>

      <SuccessAlert
      visible={alertVisible}
      message="This is a custom alert!"
      onClose={() => { hideAlert(), navigation.navigate('Login') }}
    />
    </View>
  );
};

export default ForgetPassword;
