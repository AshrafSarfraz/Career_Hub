import { View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../../Themes/Colors';
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader';
import Forget_Header from '../../../../Components/ForgetPass_Header/Forget_Header';
import { Message } from '../../../../Themes/Images';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { styles } from './style';
import auth from '@react-native-firebase/auth';

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const sendPasswordResetEmail = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      // Password reset email sent successfully
      console.log('Password reset email sent successfully');
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
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
    </View>
  );
};

export default ForgetPassword;
