import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Themes/Colors'
import { Fonts } from '../../../../Themes/Fonts'


export const styles=StyleSheet.create({
    Main_Container:{
         backgroundColor:Colors.Bg,
         flexGrow:1,
         padding:'4%',
    },
    Logo:{
      width:120,
      height:120,
      alignSelf:'center'
    },
    Header_Txt:{
      fontFamily:Fonts.SF_Medium,
      fontSize:22,
      lineHeight:28,
      color:Colors.Black,
      textAlign:'center',
      marginVertical:'4%',
    },
    PhoneInputCont:{
      marginTop:'8%',
      marginBottom:'6%',
    },
    Error:{
      fontFamily:Fonts.SF_Medium,
      fontSize:14,
      lineHeight:20,
      color:Colors.Red,
      marginTop:'2%'
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
       marginBottom:"54%"
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
      backgroundColor: Colors.Green,
      alignItems:'center',
      justifyContent:'center',
      borderColor: Colors.Green,
    },
    label:{
      fontFamily:Fonts.SF_Regular,
      fontSize:12,
      lineHeight:15,
      color:Colors.Grey5,
      width:'80%',
      
    }
})