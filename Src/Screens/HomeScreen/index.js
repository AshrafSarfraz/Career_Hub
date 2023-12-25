import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'
import { Addmission, CareerHub_W, Device, HeaderHome, Logo1, Logo2, Logo4, Logo_W, Menu, Resume, Scholarship, Staff } from '../../Themes/Images'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'


const HomeScreen = ({ navigation }) => {
  return (
    <View  style={styles.MainCont}>
    <ScrollView  showsVerticalScrollIndicator={false} >
     <View  style={styles.Header}>
        <View style={styles.Logo_Cont} >
          <TouchableOpacity onPress={() => { navigation.openDrawer() }} >
            <Image source={Menu} style={styles.Menu} />
            <Text style={styles.Wlcm_Txt} >Start Your Journey Comfortably</Text>
          </TouchableOpacity>
          <Image source={require('../../Assets/Images/Slider1.png')} style={styles.CareerHub_Logo} />
        </View>
        <View  style={styles.World_Cont}>
        <Text style={styles.World_Txt}>A world of limitless opportunities</Text>
        </View>
       </View>
      <View style={styles.BtnContainer} >
      
        <TouchableOpacity style={styles.Btn} onPress={() => { navigation.navigate('Uni_Name') }} >
          <Image source={Addmission} style={styles.Btn_Icon} />
          <Text style={styles.Btn_Txt} >Admission </Text>
          <Text style={styles.Avaliable_Txt} > 29 Avaliable </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={() => { navigation.navigate('Uni_Name') }} >
          <Image source={Scholarship} style={styles.Btn_Icon} />
          <Text style={styles.Btn_Txt} >Scholarship</Text>
          <Text style={styles.Avaliable_Txt} > 29 Avaliable </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={() => { navigation.navigate('Uni_Name') }} >
          <Image source={Staff} style={styles.Btn_Icon} />
          <Text style={styles.Btn_Txt} >Job-Seeker</Text>
          <Text style={styles.Avaliable_Txt} > 29 Avaliable </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={() => { navigation.navigate('Post')}} >
          <Image source={Resume} style={styles.Btn_Icon} />
          <Text style={styles.Btn_Txt} >Resume</Text>
          <Text style={styles.Avaliable_Txt} > 29 Avaliable </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    backgroundColor: Colors.White
  },
  Header: {
    width: "100%",
    height:300,
    backgroundColor:Colors.Green
  },
  Logo_Cont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: "3%",
    paddingTop: 30,
    height:190,
    alignItems:"center"
  },
  Menu: {
    width: 50, height: 50,
    resizeMode:"contain",
    marginBottom:'5%'
  },
  CareerHub_Logo: {
    height: 180,
    width:  180,
    resizeMode: "contain",
  },
  Wlcm_Txt: {
    fontSize: 24,
    color: Colors.White,
    fontFamily: Fonts.SF_Bold,
    lineHeight: 30,
    width:135,
  },
  World_Cont:{
   alignSelf:"center",
   height:40,
   alignItems:"center",
   justifyContent:"center",
   width:'80%',
   borderRadius:15,
   backgroundColor:Colors.White,
   marginTop:'2%'
  },
  World_Txt: {
    fontSize: 16,
    color: Colors.Green,
    fontFamily: Fonts.SF_Bold,
    lineHeight: 20,

  },
  BtnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    paddingHorizontal: "4%",
    backgroundColor:Colors.White,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    paddingTop:"10%",
    top:'-10%',


  },
  Btn: {
    width: '44%', height: 125,
    backgroundColor: Colors.White,
    elevation: 7,
    shadowColor:Colors.Black,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 15,
    margin: "3%",

  },
  Btn_Icon: {
    width: 50, height: 50,
    tintColor: Colors.Green,
  },
  Btn_Txt: {
    color: Colors.Black,
    fontSize: 20,
    lineHeight: 26,
    fontFamily: Fonts.SF_Medium,
    fontWeight: "700",
    marginTop: '3%'
  },
  Avaliable_Txt: {
    color: Colors.Green,
    fontSize: 14,
  }
})