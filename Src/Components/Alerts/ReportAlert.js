import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { Exclimation, Mobile, Wallet } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';

const ReportAlert = ({ visible, message, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>

       

          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Image source={Exclimation} style={styles.Exclimation} />
            <Text style={styles.okButtonText}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
 alignItems:'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '1%',
    width: 130,
    height:65,
    alignItems:"center",
    justifyContent:'center',
    top:'8%',
    right:'5%'
    
  },

  okButton: {
    
    width:'100%',
    height:"100%",
    borderRadius: 10,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:'row'
  },
  okButtonText: {
    color: Colors.Red,
    fontSize: 16,
    lineHeight:18,
    fontFamily:Fonts.SF_SemiBold
  },
  Exclimation:{
    tintColor:Colors.Red,
    width:25,height:25,
    marginRight:"10%"
  }
});

export default ReportAlert;
