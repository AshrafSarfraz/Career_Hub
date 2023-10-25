import { View, Text, ScrollView, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SearchItemData } from './DummyData'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts'
import { Back_Icon, Bookmark, Bookmark1, Search } from '../../../Themes/Images'



const University_Name = (props) => {
  const [BtnState, setBtnState] = useState(0)
  const [itemStates, setItemStates] = useState(SearchItemData.map(() => true));

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>
      <TouchableOpacity onPress={() => { props.navigation.navigate('Uni_Detail', { Data: item }) }} >
        <ImageBackground source={item.Image1} style={styles.Product_Img} imageStyle={{ borderRadius: 10, alignItems: 'center' }} resizeMode='cover'>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Detail_cont} onPress={() => { props.navigation.navigate('Uni_Detail', { Data: item }) }} >
        <Text style={styles.Title}>{item.Title}</Text>
        <View style={styles.City_Cont}>
          <Text style={styles.City_Text}>{item.City}</Text>
        </View>
      </TouchableOpacity>
      {itemStates[index] ? (
        <TouchableOpacity onPress={() => toggleItemState(index)} style={{ width: 30, height: 30, alignSelf: 'flex-end', right: "5%", bottom: "2%" }} >
          <Image source={Bookmark} style={styles.Wishlist} />
        </TouchableOpacity>
      ) : <TouchableOpacity onPress={() => toggleItemState(index)} style={{ width: 30, height: 30, alignSelf: "flex-end", right: "5%", bottom: "2%" }} >
        <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
      </TouchableOpacity>}

    </View>
  );

  // Function to toggle the state of a specific item
  const toggleItemState = (index) => {
    const updatedStates = [...itemStates];
    updatedStates[index] = !updatedStates[index];
    setItemStates(updatedStates);
  };

  return (
    <ScrollView style={styles.MainCont}>
      <View style={styles.Header} >
        <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={styles.Back_Cont} >
          <Image source={Back_Icon} style={styles.Back_Icon} />
        </TouchableOpacity>
        <Text style={styles.Back_Txt} >Addmission</Text>
        <View style={styles.Auth_Cont} >
        </View>
      </View>
      <View style={styles.Input_Cont} >
        <Image source={Search} style={styles.SearchIcon} />
        <TextInput placeholder='Search here.....' placeholderTextColor={Colors.Grey9} style={styles.Search_Input} />
      </View>
      <ScrollView horizontal style={styles.Btn_Cont}  >
        <TouchableOpacity style={[styles.Btn, BtnState === 0 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(0) }}>
          <Text style={[styles.Btn_Txt, BtnState === 0 ? styles.ActiveBtn_Txt : null]} >All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 1 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(1) }}>
          <Text style={[styles.Btn_Txt, BtnState == 1 ? styles.ActiveBtn_Txt : null]} >Goverment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 2 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(2) }}>
          <Text style={[styles.Btn_Txt, BtnState == 2 ? styles.ActiveBtn_Txt : null]} >Semi-Goverment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 3 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(3) }}>
          <Text style={[styles.Btn_Txt, BtnState === 3 ? styles.ActiveBtn_Txt : null]} >Private</Text>
        </TouchableOpacity>
      </ScrollView>


      <View style={styles.FlatList_Cont} >
        <FlatList
          data={SearchItemData}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  )
}

export default University_Name

const styles = StyleSheet.create({
  MainCont: {
    backgroundColor: Colors.White,
    padding: '3%'
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
    alignItems: "center"
  },
  Back_Cont: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: "2%"
  },
  Back_Txt: {

    color: Colors.Green,
    fontFamily: Fonts.SF_Bold,
    lineHeight: 26,
    fontSize: 22,
    fontWeight: "700",
    marginRight: "5%"
  },
  Back_Icon: {
    width: 50, height: 50,
  },
  Auth_Cont: {
    flexDirection: 'row',
    alignItems: "center",
    marginRight: "5%"
  },
  FlatList_Cont: {
    backgroundColor: Colors.White,
    paddingVertical: "3%"
  },
  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    marginVertical: "1%",
    padding: '2%',
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: Colors.Grey4
  },
  Product_Img: {
    width: 110, height: 110,

  },
  City_Cont: {
    backgroundColor: '#D0A700',
    paddingHorizontal: "3%",
    paddingVertical: '2%',
    alignItems: 'center',
    width: 150,
    borderRadius: 5,
    marginTop: "2%"

  },
  City_Text: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.White,
    fontFamily: Fonts.SF_Medium,
  },
  Wishlist: {
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
    top: "40%",
    right: '20%'
  },
  Title: {
    fontSize: 14,
    fontFamily: Fonts.SF_Bold,
    fontWeight: "600",
    lineHeight: 18,
    color: Colors.Black,
    marginBottom: "3%"
  },
  Detail_cont: {
    justifyContent: "center",
    marginLeft: "4%",
    width: "60%"
  },
  Input_Cont: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.White,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.Black,
    borderRadius: 10,
    paddingHorizontal: "3%",
    paddingVertical: '1%',
    marginTop: "3%"
  },
  SearchIcon: {
    width: 25, height: 25,
    marginRight: "2%"
  },
  Search_Input: {
    width: "80%",
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
    fontSize: 14,
    backgroundColor: Colors.White
  },
  Btn_Cont: {
    marginTop: 20,
    marginBottom: 30

  },
  Btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: Colors.White,
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: Colors.Grey4
  },
  ActiveBtn: {
    backgroundColor: Colors.Green
  },
  Btn_Txt: {
    fontSize: 16,
    fontFamily: Fonts.SF_SemiBold,
    lineHeight: 20,
    color: Colors.Black
  },
  ActiveBtn_Txt: {
    color: Colors.White
  }


})
