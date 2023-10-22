import { StyleSheet } from "react-native"
import { Colors } from "../../Themes/Colors"
import { Fonts } from "../../Themes/Fonts"





export const styles=StyleSheet.create({
    MainCont:{
       backgroundColor:Colors.White,
       paddingBottom:'5%',
       flex:1
    },
    Header:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
       padding:'4%'
    },
    Menu:{
       width:50,height:50,
       resizeMode:'contain'
    },
    Vibes:{
       fontSize:20,
       fontFamily:Fonts.SF_Bold,
       color:Colors.Green,
       fontWeight:'600'
    },
    Body:{
     padding:'4%'
    },
    PoliciesCont:{
     flexDirection:'row',
     alignItems:'flex-start',
     marginBottom:'4%'
    },
    Dot:{
     fontSize:20,color:"#212121",
     bottom:'2%', marginRight:'2%'
    },
    Policies_Txt:{
     fontSize:16,lineHeight:24,
     color:'#212121',
     width:'98%'
    }
    
   })