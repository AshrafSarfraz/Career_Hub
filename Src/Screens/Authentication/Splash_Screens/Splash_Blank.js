import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'




const Splash_Blank= ({navigation}) => {
  
 setTimeout(() => {
     navigation.navigate('Splash')
  }, 2000);

    return (
    <View style={styles.Main_Container} >
  
    </View>
  )
}

export default Splash_Blank
const styles=StyleSheet.create({
 Main_Container:{
    flex:1,
    backgroundColor:Colors.Green
 }
})