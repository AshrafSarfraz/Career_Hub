import { StyleSheet } from "react-native";
import { Colors } from "../../Themes/Colors";
import { Fonts } from "../../Themes/Fonts";

export const styles=StyleSheet.create({
  MainCont:{
    backgroundColor:Colors.Bg,
    padding:'2%',
    paddingHorizontal:'4%'
  },
  InputCont:{
    marginVertical:'4%'
  },
  Subject_Txt:{
    fontSize:14,
    fontFamily:Fonts.SF_Regular,
    color:Colors.Green,
    lineHeight:18,
    marginVertical:'4%'
  },
  Input_Design:{
    fontSize:14,
    fontFamily:Fonts.SF_Medium,
    color:Colors.Black,
    lineHeight:18,
    padding:'4%',
    elevation:1,
    backgroundColor:Colors.White,
    borderRadius:10,
  },
  Doc_Cont:{
    height:250,
    width:'100%',
    backgroundColor:Colors.White,
    borderRadius:10,
    elevation:1,
    marginBottom:50
  },
  btn_:{
    width:"100%",
    height:120,
    justifyContent:'flex-end',
    alignItems:"center",
  },
  Plus_Img_Cont:{
   backgroundColor:Colors.White,
   borderRadius:10,
   borderWidth:2,
   borderColor:Colors.Green,
   width:50,height:50,
   justifyContent:"center",
   alignItems:"center"
  },
  Img:{
    width:20,height:20,
    resizeMode:"center"
  },
  Upload_Txt:{
    color:Colors.Black,
    fontSize:14,
    fontFamily:Fonts.SF_Regular,
     marginTop:'2%',
  },
  imageContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    width:'100%',
    height:130,
  }

})