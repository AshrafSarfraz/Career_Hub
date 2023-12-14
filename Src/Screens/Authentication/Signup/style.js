import {StyleSheet} from 'react-native'
import { Colors } from '../../../Themes/Colors';
import { Fonts } from '../../../Themes/Fonts';

export const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: Colors.Bg,
    padding: 10,
    paddingHorizontal:20,
    flexGrow: 1,
  },
  H_Logo: {
    width: '60%',
    height:100,
    alignSelf: 'center',
    bottom:'2%'
    
  },
  Welcome_Txt: {
    fontSize: 24,
    fontFamily:Fonts.SF_Bold,
    fontWeight:'700',
    color:Colors.Green,
    lineHeight:28.6,
    alignSelf: 'center',
    bottom:'2%'
  },
  SignUp_Txt: {
    fontSize: 14,
    fontWeight:'500',
    color: Colors.Black,
    fontFamily:Fonts.SF_Medium,
    alignSelf: 'center',
    lineHeight:20,
    bottom:'1%'
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
    height:50
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
    color: Colors.Black,
    fontFamily:Fonts.SF_Medium,
    fontWeight:'500',
    lineHeight:18, 
  },
  Term_Text:{
    fontSize: 14,
    fontWeight:'500',
    color: Colors.Green,
    fontFamily:Fonts.SF_Medium,
    lineHeight:18,
  },


  SignUp_Btn:{
   marginVertical:'8%',
  },
  Btn_Cont:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   marginBottom:'5%',
  },
  Already_Txt:{
    fontSize: 14,
    color: Colors.Grey5,
    fontFamily:Fonts.SF_Medium,
    alignSelf: 'center',
    lineHeight:18,
    
  },
  Guest:{
    marginTop:'4%',
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
  SignIn_Btn:{  
  },
  SignIn_Txt:{
    fontSize: 14,
    color: Colors.Grey5,
    fontFamily:Fonts.SF_Bold,
    alignSelf: 'center',
    lineHeight:18,
   
  }
});


