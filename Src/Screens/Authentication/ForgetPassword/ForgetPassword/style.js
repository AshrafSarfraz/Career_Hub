import { StyleSheet } from "react-native"
import { Colors } from "../../../../Themes/Colors"


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
   
   },
    Input_Field: {
     marginTop:'15%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:Colors.White,
      borderWidth:1,
      borderColor:Colors.Black,
      borderRadius: 18,
      paddingHorizontal: 15,
      paddingVertical: 6,
      height:60,
  
    },
    Active_Input_Field:{
       borderWidth:1,
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
      fontSize: 16,
      color: Colors.Black2,
    },
    Footer:{
      flex:0.2,
     
      justifyContent:'flex-end'
    }
})