import { View, Text,ScrollView ,StyleSheet,Image,TextInput} from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../../../Themes/Colors'
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader'
import Forget_Header from '../../../../Components/ForgetPass_Header/Forget_Header'
import { Message } from '../../../../Themes/Images'
import CustomButton from '../../../../Components/CustomButton/CustomButton'
import { styles } from './style'
const ForgetPassword = ({navigation}) => {
  const [Email, setEmail] = useState('');
  return (
    <View  style={styles.MainCont} >
      <View  style={styles.Header} >
    <CustomHeader title={''} onBackPress={()=>{navigation.goBack()}} />
    <View style={styles.HeaderCont} >
        <Forget_Header title={'Enter your details to continue'}   />
    </View>
    </View>
    <View style={styles.Body} >
    <View style={[styles.Input_Field,Email!==''? styles.Active_Input_Field:null]}>
            <Image source={Message} style={[styles.Input_Icon ,{tintColor:Email!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Email"
              value={Email}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setEmail(txt); }}
              style={styles.User_Input}
            />
          </View>
    </View>
       <View style={styles.Footer} >
          <CustomButton title={'Continue'} onPress={()=>{navigation.navigate('GetCode')}}  />
          </View>
    </View>
  )
}

export default ForgetPassword
