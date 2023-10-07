import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput,TouchableOpacity,Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';
import { Arrow2 } from '../../Themes/Images';

const DistanceDropDown = () => {
  const [Value,setValue]=useState('10 KM')
  const [BtnState,setBtnState]=useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{setBtnState(true)}} style={styles.DropDownCont} >
        <Text style={styles.SelectValue} >{Value}</Text>
        <Image source={Arrow2} style={styles.Arrow2} />
      </TouchableOpacity>
      
      
    {BtnState===true? 
      <View style={styles.Cart} >
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('10 KM')}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >10 KM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue(' 5 KM')}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >5 KM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue(' 2 KM')}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >2 KM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue(' 1 KM')}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >1 KM</Text>
      </TouchableOpacity>
      </View>:null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
  },
  DropDownCont:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'4%',
   
    borderRadius:10,
    elevation:2,
    backgroundColor:Colors.White
  },
  Arrow2:{
    width:20,height:20,
    tintColor:Colors.Grey9
  },
  Cart:{
    backgroundColor:Colors.White,
    marginTop:4, 
    padding:'4%',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:0.5,
    borderTopWidth:0,
    zIndex:1
  },
  ValueBtn:{
   width:100,
  marginBottom:'3%'
   
  },
  Value:{
    color:'#737373',
    fontFamily:Fonts.SF_Medium,
    fontSize:14,
    lineHeight:18,
  },
  SelectValue:{
   color:Colors.Grey9,
    fontFamily:Fonts.SF_Medium,
    fontSize:14,
    lineHeight:18,
  },
  
});

export default DistanceDropDown;
