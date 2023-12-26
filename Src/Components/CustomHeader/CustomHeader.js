import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Back_Icon } from '../../Themes/Images';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';



const CustomHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Image source={Back_Icon} style={styles.Back_Icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {/* You can add more header elements here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
     paddingTop:'5%',
     paddingHorizontal:'0%',
    backgroundColor: Colors.Bg,
  },
  backButton: {
    marginRight:'5%',
  },
  Back_Icon:{
   width:20,height:20,
   resizeMode:"contain"
 
  },
  title: {
    fontSize: 18,
    lineHeight:24,
    color:Colors.Green,
    fontFamily:Fonts.SF_SemiBold
  },
});

export default CustomHeader;
