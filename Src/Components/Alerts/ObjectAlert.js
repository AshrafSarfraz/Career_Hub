import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { Mobile } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';

const NewObjectAlert= ({ visible, message, onClose,onAgree }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
            <View  style={styles.InnerCart}>
              <Text style={styles.lorem_Txt} >
              DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lorem imperdiet diam porttitor lacinia. Nunc ut mauris eu arcu efficitur rhoncus eget sit amet risus. DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lorem imperdiet diam porttitor lacinia. Nunc ut mauris eu arcu efficitur rhoncus eget sit amet risus.
              </Text>
              <Text style={styles.lorem_Txt}>
              DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lorem imperdiet diam porttitor lacinia. Nunc ut mauris eu arcu efficitur rhoncus eget sit amet risus. DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lorem imperdiet diam porttitor lacinia. Nunc ut mauris eu arcu efficitur rhoncus eget sit amet risus.
              </Text>
            </View>
            <View  style={styles.BtnCont} >
          <TouchableOpacity style={styles.Disagree} onPress={onClose}>
            <Text style={styles.DisagreeButtonText}>I Disagree</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.okButton} onPress={onAgree}>
            <Text style={styles.okButtonText}>I Agree</Text>
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
    alignItems: 'center',
  },
  InnerCart:{
   borderWidth:0.5,
   padding:'3%',
   borderRadius:10,
  

  },
  BtnCont:{
    alignItems:'center',
    flexDirection:"row",
    justifyContent:'space-between',
    width:'100%',
    marginTop:'5%'
  },
  lorem_Txt:{
     fontFamily:Fonts.SF_Regular,
     color:Colors.Green,
     fontSize:14,
     fontWeight:'400'
  },
  Logo:{
       width:150,height:150
    },
    Txt:{
      fontSize:22,
      fontFamily:Fonts.SF_Bold,
      color:Colors.Black,
      lineHeight:28,
      marginVertical:'4%'
    },
  okButton: {
    backgroundColor:Colors.Green,
    paddingVertical: '6%',
    paddingHorizontal: '12%',
    borderRadius: 10,
    width:'47%',
    alignItems:"center",
    justifyContent:'center'
  },
  okButtonText: {
    color: Colors.White,
    fontSize: 14,
    lineHeight:18,
    fontFamily:Fonts.SF_Bold
  },
  Disagree: {
    backgroundColor:Colors.White,
    paddingVertical: '6%',
    paddingHorizontal: '12%',
    borderRadius: 10,
    borderColor:Colors.Grey9,
    borderWidth:1,
    width:'47%',
    alignItems:"center",
    justifyContent:'center'
  },
  DisagreeButtonText: {
    color: Colors.Grey9,
    fontSize: 14,
    lineHeight:18,
    fontFamily:Fonts.SF_Bold
  },
});

export default NewObjectAlert;
