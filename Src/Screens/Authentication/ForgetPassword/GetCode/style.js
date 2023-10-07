import { StyleSheet } from "react-native"
import { Colors } from "../../../../Themes/Colors"
import { Fonts } from "../../../../Themes/Fonts"


export const styles=StyleSheet.create({
    MainCont:{
      flex:1,
      backgroundColor:Colors.Bg,
      padding:'4%',
    },
   Header:{
    flex:0.3,
    justifyContent:'space-evenly'
   },
   HeaderCont:{
    
   },
   Body:{
    flex:0.5,
     marginTop:'10%',
     alignItems:'center'
   },
   inputContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     width:'100%',
   
   },
   Otp:{
     width:50,
     height:50,
     backgroundColor:Colors.Bg,
     marginBottom:'2%',
     justifyContent:'center',
     textAlign:'center',
     borderRadius:0,
     elevation:1,
     borderWidth:1,
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
     alignSelf:'flex-end',
     marginBottom:'3%'
   },
   Resend_Txt:{
     fontFamily:Fonts.SF_Medium,
     fontSize:14,
     color:Colors.Black,
     lineHeight:20,
   },
    Footer:{
      flex:0.2,
     
      justifyContent:'flex-end'
    }
})