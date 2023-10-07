import { StyleSheet } from "react-native";
import { Colors } from "../../../../Themes/Colors";
import { Fonts } from "../../../../Themes/Fonts";


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
     marginTop:'5%',
   },
   Input_Field: {
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor:Colors.White,
     elevation:1,
     borderRadius: 20,
     paddingHorizontal: 15,
     paddingVertical: 6,
     marginBottom: 14,
     borderWidth:1,
     borderColor:Colors.Green,
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
     flex: 1,
     fontSize: 16,
     color: Colors.Black2,
     fontFamily:Fonts.SF_Medium
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
    Footer:{
      flex:0.2,
     
      justifyContent:'flex-end'
    }
})