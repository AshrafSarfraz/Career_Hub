import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { Star } from '../../Themes/Images'
import { Fonts } from '../../Themes/Fonts'
import { Colors } from '../../Themes/Colors'

const Rating = () => {
  return (
    <View style={styles.MainCont} >
     <Image source={Star} style={styles.Img} />
     <Image source={Star} style={styles.Img} />
     <Image source={Star} style={styles.Img} />
     <Image source={Star} style={styles.Img} />
     <Image source={Star} style={styles.Img} />
     <Text style={styles.Rating} >5.0</Text>
    </View>
  )
}

export default Rating

const styles=StyleSheet.create({
 MainCont:{
    flexDirection:'row',
    alignItems:'center'
 },
 Img:{
    width:15,height:15,
    margin:'1%'
 },
 Rating:{
    fontFamily:Fonts.SF_Medium,
    fontSize:14,
    lineHeight:18,
    color:Colors.Black,
    marginLeft:"3%"
 }


})