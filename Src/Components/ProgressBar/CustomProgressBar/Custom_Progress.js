import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Fonts } from '../../../Themes/Fonts';
import { Colors } from '../../../Themes/Colors';

const CustomProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      {/* <View style={[styles.line, progress >= 1 ? styles.activeLine : null]} /> */}

    <View>
    <View style={[styles.circle, progress >= 1 ? styles.activeCircle : null]}>
        <Text style={[styles.circleText, progress >= 1 ? styles.activeText : styles.nonactiveText]}>1</Text>
       
      </View>
    </View>
    
      <View style={[styles.line, progress >= 2 ? styles.activeLine : null]} />
      
      <View style={[styles.circle, progress >= 2 ? styles.activeCircle : null]}>
        <Text style={[styles.circleText, progress >= 2 ? styles.activeText : styles.nonactiveText]}>2</Text>
       

      </View>
      <View style={[styles.line, progress >= 3 ? styles.activeLine : null]} />
      <View style={[styles.circle, progress >= 3 ? styles.activeCircle : styles.nonactiveCircle]}>
        <Text style={[styles.circleText, progress >= 3 ? styles.activeText : styles.nonactiveText]}>3</Text>
        

      </View>
      {/* <View style={[styles.line, progress >= 3 ? null : null]} /> */}
      <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#E9E9E9'}}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'60%'
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#C3C3C3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCircle: {
    backgroundColor: Colors.Green,
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
    position:"absolute"
  },
  activeText: {
    color: Colors.White,
  },
  line: {
    flex: 1,
    height: 4,
    backgroundColor: '#C3C3C3',
  },
  activeLine: {
    backgroundColor:Colors.Green,
  },
  stepText: {
    color: Colors.Grey9,
    fontSize: 8,
  top:'83%',
  fontFamily:'',
  // backgroundColor:"red",
  width:'150%',
  textAlign:'center'
  },
  nonactiveText:{
    color:'#C3C3C3' ,
  },nonactiveCircle:{
    backgroundColor:"#C3C3C3",
    borderWidth:3,
    borderColor:'#C3C3C3'
  },
  stepText2: {
    color: Colors.Grey9,
    fontSize: 8,
  top:'95%',
  fontFamily:Fonts.PoppinsSemiBold,
  // backgroundColor:"red",
  width:'150%',
  textAlign:'center'
  },
});

export default CustomProgressBar;