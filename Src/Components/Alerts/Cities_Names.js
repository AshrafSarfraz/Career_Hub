import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../../Themes/Colors';
import {  Wallet } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';

const CitiesName = ({ visible, message, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
    
          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>View Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '5%',
    width: '90%',
    
  },
  Logo:{
       width:250,height:250,
       alignSelf:'center'
    },
    Txt:{
      fontSize:22,
      fontFamily:Fonts.SF_Bold,
      color:Colors.Black,
      lineHeight:28,
      marginVertical:'4%',
      marginBottom:"8%",
      textAlign:"center"
    },
  okButton: {
   borderWidth:1,
   paddingVertical:"2%",
   paddingHorizontal:"3%",
   borderRadius:10

  },
  okButtonText: {
    color: Colors.Black,
    fontSize: 14,
    lineHeight:18,
    fontFamily:Fonts.SF_Bold
  },
  cityItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  selectedCityItem: {
    backgroundColor: 'green',
  },
  cityText: {
    fontSize: 16,
    color: 'black',
  },
});

export default CitiesName;
