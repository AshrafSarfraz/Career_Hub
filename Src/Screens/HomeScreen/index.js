import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Addmission, CareerHub_W, HeaderHome, Logo4, Logo_W, Menu, Resume, Scholarship, Staff } from '../../Themes/Images'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.MainCont} >

      <ImageBackground source={HeaderHome} style={styles.Header} imageStyle={{ width: "100%", height: 300, resizeMode: "contain", top: "-30%" }}>
        <View style={styles.Logo_Cont} >
          <TouchableOpacity onPress={() => { navigation.openDrawer() }} >
            <Image source={Menu} style={styles.Menu} />
          </TouchableOpacity>
          <Image source={Logo4} style={styles.CareerHub_Logo} />
        </View>
        <Text style={styles.Wlcm_Txt} >Welcome To Career Hub</Text>
        <Text style={styles.World_Txt} >A World of Limitless Opportunities </Text>
      </ImageBackground>
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
        <TouchableOpacity style={styles.Btn} onPress={() => { Alert.alert('Still Close') }} >
          <Image source={Resume} style={styles.Btn_Icon} />
          <Text style={styles.Btn_Txt} >Resume</Text>
          <Text style={styles.Avaliable_Txt} > 29 Avaliable </Text>
        </TouchableOpacity>
      </View>
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
    flex: 0.3,
    resizeMode: 'center'
  },
  Logo_Cont: {
    width: "70%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: "3%",
    paddingTop: 30
  },
  Menu: {
    width: 60, height: 60
  },
  CareerHub_Logo: {
    height: 50,
    width: 150,
    resizeMode: "contain"
  },
  Wlcm_Txt: {
    fontSize: 25,
    color: Colors.White,
    fontFamily: Fonts.SF_Bold,
    lineHeight: 32,
    alignSelf: "center",
    width: 150,
    textAlign: "center",
    fontWeight: "bold",


  },
  World_Txt: {
    fontSize: 14,
    color: Colors.White,
    fontFamily: Fonts.SF_Bold,
    lineHeight: 18,
    alignSelf: "center",
    width: 150,
    textAlign: "center",
    marginTop: '5%'
  },
  BtnContainer: {
    top: '45%',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    paddingHorizontal: "5%",

  },
  Btn: {
    width: '44%', height: 125,
    backgroundColor: Colors.White,
    elevation: 7,
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