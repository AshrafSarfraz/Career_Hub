import { View, Text, StyleSheet, Image,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'
import { Bobi, Gif } from '../../../Themes/Images'


const Splash_Screen=({navigation}) => {
  
setTimeout(() => {
   navigation.navigate('onBoarding')
}, 3000);

  return (
    <View style={styles.Main_Container} >
      <View  style={styles.Body} >
      <Image source={Bobi} style={styles.Logo_Img} />
      </View>
      <View  style={styles.Footer} >
      <Image source={Gif}    style={styles.Gif_Img} />
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
      height:'80%',
      resizeMode:'contain'
    },
    Footer:{
     flex:0.1,
     justifyContent:'center',
     alignItems:'center'

    },
    Gif_Img:{
      width:50,height:60,
    },
    }
    )