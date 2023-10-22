import { View, Text,StyleSheet,Image, } from 'react-native'
import React from 'react'
import { Logo1,  } from '../../Themes/Images'
import { Fonts } from '../../Themes/Fonts'
import { Colors } from '../../Themes/Colors'

const Forget_Header = ({title}) => {
  return (
    <View style={styles.MainCont} >
        <View style={styles.Txt_Cont} >
      <Text style={styles.Forget_Txt} >Forgot Password?</Text>
      <Text style={styles.Continue_Txt} >{title}</Text>
      </View>
      <Image source={Logo1} style={styles.Bobi_Logo} />
    </View>
  )
}

export default Forget_Header

const styles=StyleSheet.create({
  MainCont:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  Txt_Cont:{
   justifyContent:'space-between',
   height:60
  },
  Forget_Txt:{
     fontFamily:Fonts.SF_Bold,
     fontSize:24,
     color:Colors.Green,
     lineHeight:30,  
  },
  Continue_Txt:{
    fontFamily:Fonts.SF_Regular,
    fontSize:14,
    color:Colors.Green,
    lineHeight:30,
  },
  Bobi_Logo:{
   width:80,
   height:80,
   resizeMode:'contain',
   marginRight:"3%"
  }

})