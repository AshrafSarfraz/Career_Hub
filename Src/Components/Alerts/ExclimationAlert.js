import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { Device, Mobile } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';

const Exclimation_Alert = ({ visible, message, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
       

        <Text style={styles.Txt} >You can accept the rent request automatically and your object will be booked. If you wish not to do this, Please make sure to uncheck this to ensure there’s no confusion on both sides. Thanks!</Text>
       

          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>Got it</Text>
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
    backgroundColor: Colors.Bg,
    borderRadius: 10,
    padding: '5%',
    width: '90%',
  
  },
  Logo:{
       width:150,height:150
    },
    Txt:{
      fontSize:16,
      fontFamily:Fonts.SF_Medium,
      color:Colors.Green,
      lineHeight:20,
      marginVertical:'4%',
      width:'80%',
      alignSelf:'flex-start'
    },
  okButton: {
    backgroundColor:Colors.Green,
    paddingVertical: '6%',
    paddingHorizontal: '12%',
    borderRadius: 10,
    width:'100%',
    alignItems:'center'
  },
  okButtonText: {
    color: Colors.White,
    fontSize: 14,
    lineHeight:18,
    fontFamily:Fonts.SF_Bold
  },
});

export default Exclimation_Alert;
