import {StyleSheet} from 'react-native'
import { Fonts } from '../../../Themes/Fonts';
import { Colors } from '../../../Themes/Colors';
export const styles = StyleSheet.create({
    MainContainer: {
      backgroundColor: Colors.Bg,
      padding: 10,
      paddingHorizontal:'5%',
      flexGrow: 1,
    },
    H_Logo: {
      width: '60%',
      height:100,
      alignSelf: 'center',
      marginTop:'10%',
     
      
    },
    Welcome_Txt: {
      fontSize: 24,
      fontFamily:Fonts.SF_Bold,
      color:Colors.Green,
      lineHeight:28,
      alignSelf: 'center',
      
    },
    SignUp_Txt: {
      fontSize: 16,
      color: Colors.Black2,
      fontFamily:Fonts.SF_Medium,
      alignSelf: 'center',
      lineHeight:20,
      marginTop:'1%'
     
    },
    InputContainer: {
      marginTop:'7%',
  
    },
    Input_Field: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:Colors.White4,
      elevation:1,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 6,
      marginBottom: 14,
    },
    Active_Input_Field:{
       borderWidth:2,
       borderColor:Colors.Green,
       backgroundColor:Colors.White
  
    },
    Input_Icon: {
      width: 20,
      height: 20,
      marginRight: 10,
      tintColor: Colors.Grey9,
    },
    User_Input: {
      flex: 1,
      fontSize: 16,
      color: Colors.Black2,
    },
    Password_Field: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: Colors.Grey9,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: 12,
      justifyContent: 'space-between',
    },
    SignUp_Btn:{
     marginVertical:'10%',
    },
    Btn_Cont:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     marginBottom:'5%',
     marginTop:'22%',
    },
    Guest:{
     marginTop:'1%',
     alignItems:'center',
    },
    Guest_Btn:{
      fontSize: 16,
      color: Colors.Green,
      fontWeight:'600',
      fontFamily:Fonts.SF_Bold,
      alignSelf: 'center',
      lineHeight:22,
    },
    Already_Txt:{
      fontSize: 14,
      color: Colors.Grey5,
      fontFamily:Fonts.SF_Medium,
      alignSelf: 'center',
      lineHeight:18,
      
    },
    SignIn_Btn:{  
    },
    SignIn_Txt:{
      fontSize: 14,
      color: Colors.Grey5,
      fontFamily:Fonts.SF_Bold,
      alignSelf: 'center',
      lineHeight:18, 
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 3,
      borderRadius:5,
      borderColor: Colors.Green,
      marginRight: 10,
    },
    checked: {
      backgroundColor: 'green',
      alignItems:'center',
      justifyContent:'center',
      borderColor: Colors.Green,
    },
    label: {
      fontSize: 14,
      color: Colors.Grey5,
      fontFamily:Fonts.SF_Medium,
      lineHeight:18, 
    },
    Forget_Cont:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:"flex-end"
     
    },
    Forget_Btn:{
  
    },
    Forget_Txt:{
      fontSize: 14,
      color: Colors.Black2,
      fontFamily:Fonts.SF_Medium,
      lineHeight:18,
      marginBottom:'8%'
    }
  });
  

  