import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React,{useState} from 'react'
import { SearchItemData } from './DummyData'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts'
import { Bookmark, Bookmark1 } from '../../../Themes/Images'


const university_Name = (props) => { // Change the parameter to 'props'

  const [itemStates, setItemStates] = useState(SearchItemData.map(() => true));

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>
        <TouchableOpacity  onPress={() => { props.navigation.navigate('Uni_Detail',{Data:item}) }} >
      <ImageBackground source={item.Image1} style={styles.Product_Img} imageStyle={{ borderRadius: 10, alignItems: 'center' }} resizeMode='cover'>
      </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity   style={styles.Detail_cont}  onPress={() => { props.navigation.navigate('Uni_Detail',{Data:item}) }} >
        <Text style={styles.Title}>{item.Title}</Text>
        <View style={styles.City_Cont}>
          <Text style={styles.City_Text}>{item.City}</Text>
        </View>
        </TouchableOpacity>
        {itemStates[index] ? (
          <TouchableOpacity onPress={() => toggleItemState(index)} style={{width:30,height:30,alignSelf:'flex-end',right:"40%",bottom:"2%"}} >
            <Image source={Bookmark} style={styles.Wishlist} />
          </TouchableOpacity>
        ) :<TouchableOpacity onPress={() => toggleItemState(index)}  style={{width:30,height:30,alignSelf:"flex-end",right:"40%",bottom:"2%"}} >
        <Image source={Bookmark1} style={[styles.Wishlist,{tintColor:Colors.Green}]} />
      </TouchableOpacity> }
     
    </View>
  );

  // Function to toggle the state of a specific item
  const toggleItemState = (index) => {
    const updatedStates = [...itemStates];
    updatedStates[index] = !updatedStates[index];
    setItemStates(updatedStates);
  };

  return (
    <View style={styles.MainCont}>
      <FlatList
        data={SearchItemData}
        renderItem={renderItem}
      />
    </View>
  )
}

export default university_Name

const styles = StyleSheet.create({
  MainCont: {
    backgroundColor:Colors.Bg
  },
  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    margin: '2%',
    marginTop: '0%',
    elevation: 2,
    padding: '2%',
    flexDirection:"row",
  },
  Product_Img: {
    width:110,height:110,
  
  },
  City_Cont:{
    backgroundColor:'#D0A700',
    paddingHorizontal:"3%",
    paddingVertical:'2%',
    alignItems:'center',
    width:150,
    borderRadius:5,
    marginTop:"2%"
  
  },
  City_Text:{
    fontSize:14,
    lineHeight:18,
    color:Colors.White,
    fontFamily:Fonts.SF_Medium,
  },
  Wishlist: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    top: '5%',
    right: '5%'
  },
  Title: {
    fontSize: 14,
    fontFamily: Fonts.SF_Bold,
    fontWeight:"600",
    lineHeight: 18,
    color: Colors.Black,
    marginBottom:"3%"
  },
  Detail_cont:{
    justifyContent:"center",
   marginLeft:"4%",
   width:"70%"
     
  }
 

})
