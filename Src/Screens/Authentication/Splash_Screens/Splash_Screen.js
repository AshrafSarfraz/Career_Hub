import { View, Text, StyleSheet, Image,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'
import {  Logo4 } from '../../../Themes/Images'
import { Fonts } from '../../../Themes/Fonts'


const Splash_Screen=({navigation}) => {
  
setTimeout(() => {
   navigation.navigate('onBoarding')
}, 3000);

  return (
    <View style={styles.Main_Container} >
      <View  style={styles.Body} >
      <Image source={Logo4} style={styles.Logo_Img} />
      </View>
      <View  style={styles.Footer} >
      {/* <Image source={Gif}    style={styles.Gif_Img} /> */}
      <Text  style={styles.Gift} >In a world with limitless opportunities</Text>
      </View>
      
    </View>
  )
}

export default Splash_Screen

    const styles=StyleSheet.create({
    Main_Container:{
        flex:1,
        backgroundColor:Colors.Green,
        alignItems:'center',
        justifyContent:'center'
    },
      Body:{
        flex:0.85,
        alignItems:'center',
        justifyContent:"center",
        width:'100%'
      },
    Logo_Img:{
      width:'70%',
      height:'90%',
      resizeMode:'contain'
    },
    Footer:{
     flex:0.1,
     justifyContent:'flex-end',
     alignItems:'center',
     width:"85%"

    },
    Gif_Img:{
      width:50,height:60,
    },
    Gift:{
      fontSize:14,
      lineHeight:20,
      textAlign:'center',
      color:Colors.White,
      width:"100%",
      fontFamily:Fonts.SF_Medium,
      fontWeight:"600"
    }
    }
    )