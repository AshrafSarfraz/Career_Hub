import { StyleSheet } from "react-native";
import { Colors } from "../../Themes/Colors";
import { Fonts } from "../../Themes/Fonts";


export  const styles = StyleSheet.create({
    Main_Cont:{
      flex:1,
      backgroundColor:Colors.White4,
      padding:'4%'
    },
    Header_Cont:{
     height:200,
     alignItems:'center',
     justifyContent:"flex-end"
    },
    Edit_Btn:{
       backgroundColor:Colors.Green  ,
       flexDirection:"row",
       alignItems:'center',
       justifyContent:'center',
       width:'99%',
       alignSelf:"center",
       height:55,
       borderRadius:10,
       alignSelf:'flex-end',
       marginTop:'10%',
    },
     Edit:{
      width: 30,
      height: 30,
      resizeMode: 'contain',
      marginRight:"2%"
     },
     Edit_Txt:{
      fontSize:16,
      color:Colors.White,
      lineHeight:22,
      fontFamily:Fonts.SF_SemiBold
     },
    UserImg: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
      borderRadius:100
    },
    Body:{
     height:450,
     justifyContent:"center"
    },
    Data_Cont:{
      backgroundColor:Colors.White,
      marginBottom:"4%",
      width:"99%",
      alignSelf:'center',
      height:60,
      justifyContent:'center',
      paddingHorizontal:10,
      borderRadius:10,
      elevation:3
    },
    UserName:{
     fontSize:16,
     color:Colors.Black,
     fontFamily:Fonts.SF_Medium,
     lineHeight:22
    }
  
  })


