



import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput,TouchableOpacity,Image } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';
import { Arrow2 } from '../../Themes/Images';

const ID_Type = () => {
  const [Value,setValue]=useState('Select ID type')
  const [BtnState,setBtnState]=useState(false)
  const [showInput, setShowInput] = useState(false); 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{setBtnState(true)}} style={styles.DropDownCont} >
        <Text style={styles.SelectValue} >{Value}</Text>
        <Image source={Arrow2} style={styles.Arrow2} />
      </TouchableOpacity>
      
      
    {BtnState===true? 
      <View style={styles.Cart} >
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('Passport'),setShowInput(false)}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >Passport</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('Residence Permit'),setShowInput(false)}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >Residence Permit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('National ID card',setShowInput(false))}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >National ID card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('Other'),setShowInput(true)}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >Other</Text>
      </TouchableOpacity>
      </View>:null
      }



{showInput && (
        <View>
            <Text style={styles.Explain_Txt} >
            Explain type of report
            </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Type"
          placeholderTextColor={'#9E9E9E'}
          textAlignVertical='top'
          onChangeText={(text) => {
            // Handle the input text change here
          }}
        />
        </View>
      )}
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
    borderWidth:0.5,
    borderRadius:5,
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
    borderWidth:0.2,
    zIndex:1
  },
  ValueBtn:{
   width:300,
  marginBottom:'4%'
   
  },
  Value:{
    color:'#737373',
    fontFamily:Fonts.SF_SemiBold,
    fontSize:14,
    lineHeight:18,
  },
  SelectValue:{
   color:Colors.Grey9,
    fontFamily:Fonts.SF_Regular,
    fontSize:14,
    lineHeight:18,
  },
  input: {
    width: "100%",
    height: 120,
    borderColor: "#9E9E9E",
    backgroundColor:"#FFFFFF",
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 14,
    color:Colors.Black
  },
  Explain_Txt:{
    fontSize: 14,
    fontFamily:Fonts.SF_Regular,
    color: '#263238',
    marginRight: '3%',
    marginTop:'4%'
  }
  
  
});

export default ID_Type;