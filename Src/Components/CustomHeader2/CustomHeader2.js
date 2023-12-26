import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Back_Icon } from '../../Themes/Images';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';



const CustomHeader2 = ({ title, onBackPress }) => {
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
    marginRight:'6%',
  },
  Back_Icon:{
   width:20,height:20,
   resizeMode:"contain"
  
  },
  title: {
    fontSize: 16,
    lineHeight:22,
    color:Colors.Black,
    fontFamily:Fonts.SF_SemiBold
  },
});

export default CustomHeader2;
