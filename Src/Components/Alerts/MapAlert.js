import React from 'react';
import { View, Text, Modal, TouchableOpacity,FlatList, StyleSheet, Image } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { Mobile, Wallet } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';
import { RentedData } from '../../Screens/Disscuss/Chat/ChatScreen/DummyData';
import ProductDetails from '../../Screens/ProductDetails';
import { useNavigation } from '@react-navigation/native';

const MapAlert = ( { visible, message, onClose }) => {
  const navigation=useNavigation()
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { navigation.navigate('ProductDetails',{Data:item})  }}>
        <View style={styles.Cart}>
          <Image source={item.Image1} style={styles.Product_Img}  resizeMode='contain' />
          <TouchableOpacity onPress={() => { navigation.navigate('ProductDetails',{Data:item})  }}>
            <Text style={styles.Title}>{item.Title}</Text>
            <Text style={styles.MeetingPoint}>{item.MeetingPoint}</Text>
            <View style={{ flexDirection: 'row', marginBottom: "4%" }}>
              <Text style={styles.Price_Txt}>Price :</Text>
              <Text style={styles.Total}>{item.Price}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.okButton} onPress={() => { navigation.navigate('ProductDetails',{Data:item}) }}>
            <Text style={styles.okButtonText}>View Booking</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )



  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
       
        <View style={styles.Product} >
        <FlatList
          data={RentedData}
          renderItem={renderItem}
        />
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
      fontSize:22,
      fontFamily:Fonts.SF_Bold,
      color:Colors.Black,
      lineHeight:28,
      marginVertical:'4%',
      marginBottom:"8%",
      textAlign:"center"
    },
  okButton: {
    backgroundColor:Colors.Green,
    paddingVertical: '6%',
    paddingHorizontal: '12%',
    borderRadius: 10,
    alignItems:"center"
  },
  okButtonText: {
    color: Colors.White,
    fontSize: 14,
    lineHeight:18,
    fontFamily:Fonts.SF_Bold
  },

  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    marginBottom:'3%',
    width: '100%',
    paddingHorizontal: '2%',
    flexDirection:'row',
    alignItems:'center'
  },
  Product_Img: {
    width:110, height: 100,
     marginRight:'4%'
  },
  
  Title: {
    fontSize: 14,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 18,
    color: Colors.Black,
    marginVertical: '4%',
    marginHorizontal: '4%'
  },
  MeetingPoint: {
    fontSize: 10,
    fontFamily: Fonts.SF_Regular,
    lineHeight: 15,
    color: Colors.Green,
    width:150,
    marginBottom: '2%',
    marginLeft: '4%',
    marginRight:'1%',
  },
  Price_Txt: {
    fontSize: 12,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 15,
    color: Colors.Black,
    marginBottom: '2%',
    marginHorizontal: '4%'
  },
});

export default MapAlert;
