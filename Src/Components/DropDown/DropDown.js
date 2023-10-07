



import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput,TouchableOpacity,Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';
import { Arrow2 } from '../../Themes/Images';

const Bestdropdown = () => {
  const [Value,setValue]=useState('Select Signalment type')
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
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('Object is not appropriate'),setShowInput(false)}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >Object is not appropriate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('Object is illegal'),setShowInput(false)}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >Object is illegal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('Inappropriate/abusive messages',setShowInput(false))}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >Inappropriate/abusive messages</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('Abusive renting'),setShowInput(false)}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >Abusive renting</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setBtnState(false),setValue('Other'),setShowInput(true)}} style={styles.ValueBtn}  >
        <Text style={styles.Value} >Other..</Text>
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

export default Bestdropdown;


// import SelectDropdown from 'react-native-select-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import { Colors } from '../../Themes/Colors';

// const Bestdropdown = () => {
//   const [condition, setCondition] = useState('Select Signalment type');
//   const [showInput, setShowInput] = useState(false); // Add state to control input visibility

//   const handleConditionChange = (selectedItem) => {
//     setCondition(selectedItem);
//     // Show input if "Other.." is selected, hide it otherwise
//     setShowInput(selectedItem === 'Other');
//   };

//   return (
//     <View>
//       <View style={styles.conditiondrop}>
//         <SelectDropdown
//           data={['Select Signalment type', 'Object is not appropriate', 'Object is illegal', 'Inappropriate/abusive messages', 'Abusive renting', 'Other']}
//           defaultButtonText={condition}
//           buttonStyle={styles.buttonconditon}
//           buttonTextStyle={styles.btnconditontext}
//           onSelect={handleConditionChange}
//           buttonTextAfterSelection={(selectedItem) => selectedItem}
//           rowTextForSelection={(item) => item}
//           renderDropdownIcon={() => (
//             <View style={{ width: 200, paddingLeft: 150 }} >
//               <AntDesign
//                 name={condition === 'Condition' ? 'caretdown' : 'caretdown'}
//                 size={14}
//                 color={'#BCBCBC'}
//                 style={{ marginRight:0 }}
//               />
//             </View>
//           )}
//         />
//       </View>
      
     
//       {showInput && (
//         <View>
//             <Text style={styles.Explain_Txt} >
//             Explain type of report
//             </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Type"
//           placeholderTextColor={'#9E9E9E'}
//           textAlignVertical='top'
//           onChangeText={(text) => {
//             // Handle the input text change here
//           }}
//         />
//         </View>
//       )}
//     </View>
//   );
// };

// export default Bestdropdown;

// const styles = StyleSheet.create({
//   conditiondrop: {
//     width: "100%",
//     borderColor: "#9E9E9E",
//     borderWidth: 0.5,
//     borderRadius: 10,
//     elevation: 1,
//   },
//   buttonconditon: {
//     width: "100%",
//     backgroundColor: "white",
//     height: 55,
//     borderRadius: 10,
//   },
//   btnconditontext: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#9E9E9E',
//     marginRight: '3%',
//   },
  // input: {
  //   width: "100%",
  //   height: 120,
  //   borderColor: "#9E9E9E",
  //   backgroundColor:"#FFFFFF",
  //   borderWidth: 0.5,
  //   borderRadius: 10,
  //   marginTop: 10,
  //   paddingLeft: 10,
  //   fontSize: 14,
  //   color:Colors.Black
  // },
  // Explain_Txt:{
  //   fontSize: 14,
  //   fontWeight: '600',
  //   color: '#9E9E9E',
  //   marginRight: '3%',
  // }
// });
