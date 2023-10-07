import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { Bhoot, Device, Mobile } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';

const CancelAlert = ({ visible, message, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
        <Image source={Device} style={styles.Logo}/>

        <Text style={styles.Txt} >Submission Successful!</Text>
       

          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>Back to Explore</Text>
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
    width: '80%',
    alignItems: 'center',
  },
  Logo:{
       width:200,height:200
    },
    Txt:{
      fontSize:22,
      fontFamily:Fonts.SF_SemiBold,
      color:Colors.Black,
      lineHeight:28,
      marginVertical:'4%'
    },
  okButton: {
    backgroundColor:Colors.Green,
    paddingVertical: '6%',
    paddingHorizontal: '12%',
    borderRadius: 10,
    width:'80%',
    alignItems:'center'
  },
  okButtonText: {
    color: Colors.White,
    fontSize: 14,
    lineHeight:18,
    fontFamily:Fonts.SF_Bold
  },
});

export default CancelAlert;
