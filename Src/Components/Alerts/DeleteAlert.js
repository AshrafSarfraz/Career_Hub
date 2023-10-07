import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { Mobile, Wallet } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';

const DeleteAlert = ({ visible, message, onClose,OnDelete }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>

        <Text style={styles.Txt} >Are you sure you want to delete your account?</Text>
        <Text style={styles.Txt2} > All of your data will be lost and can never be returned</Text>
         <View style={styles.BtnCont} >
          <TouchableOpacity style={styles.CancelButton} onPress={onClose}>
            <Text style={styles.CancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.okButton} onPress={OnDelete}>
            <Text style={styles.okButtonText}>Delete</Text>
          </TouchableOpacity>
          </View>
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
      fontSize:24,
      fontFamily:Fonts.SF_SemiBold,
      color:Colors.Black,
      lineHeight:28,
      marginVertical:'4%',
      marginBottom:"8%",
      width:'100%',
    },
    Txt2:{
        fontSize:14,
        fontFamily:Fonts.SF_Medium,
        color:Colors.Black,
        lineHeight:20,
        marginTop:'0%',
        marginBottom:"20%",
        width:'100%',
      },
      BtnCont:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginBottom:'2%'
      },
  okButton: {
    backgroundColor:Colors.Green,
    paddingVertical: '6%',
    borderRadius: 10,
    alignItems:"center",
    justifyContent:'center',
    width:'47%'
  },
  okButtonText: {
    color: Colors.White,
    fontSize: 14,
    lineHeight:18,
    fontFamily:Fonts.SF_Bold
  },
  CancelButton: {
    borderWidth:1,
    borderColor:Colors.Green,
    paddingVertical: '6%',
    justifyContent:'center',
    borderRadius: 10,
    alignItems:"center",
    width:'47%'
  },
  CancelButtonText: {
    color: Colors.Green,
    fontSize: 14,
    lineHeight:18,
    fontFamily:Fonts.SF_Bold
  },
});

export default DeleteAlert;
