

import { View, Text, ScrollView, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'
import { Back_Icon, Bookmark, Bookmark1, Search } from '../../Themes/Images'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import CitiesName from '../../Components/Alerts/Cities_Names'
``

const Get_Data = (props) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const currentDate = new Date();
  const [BtnState, setBtnState] = useState(0)
  const [items, setItems] = useState([]);
  const [itemStates, setItemStates] = useState(items.map(() => true));
  const filteredData = items;
  const [filteredItems, setFilteredItems] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
// console.log(items)
  const filterItems = () => {
    const filtered = filteredData.filter((item) => {
    
      const itemName = (item.data && item.data.name) ? item.data.name.toLowerCase() : '';
      const searchLowerCase = searchQuery.toLowerCase();
      return itemName.includes(searchLowerCase);
    });
    setFilteredItems(filtered);
  };

  useEffect(() => {
    filterItems();
  }, [searchQuery, items]);
  
  const filterDataByButton = () => {
    let filtered = filteredData;
    if (selectedCities.length > 0) {
  switch (BtnState) {
        case 0:
           filtered = filtered.filter(
      item =>
        selectedCities.includes(item.data.City) &&
        (BtnState === 0 || item.data.Status === 'Government' || item.data.Status === 'Semi-Government' || item.data.Status === 'Private')
    );
          break;
        case 1:
          filtered = filtered.filter(item => item.data.Status === 'Government' && selectedCities.includes(item.data.City));
          break;
        case 2:
          filtered = filtered.filter(item => item.data.Status === 'Semi-Government' && selectedCities.includes(item.data.City));
          break;
        case 3:
          filtered = filtered.filter(item => item.data.Status === 'Private' && selectedCities.includes(item.data.City));
          break;
        default:
          break;
      }
    } else {
      switch (BtnState) {
        case 0:
          break;
        case 1:
          filtered = filtered.filter(item => item.data.Status === 'Government');
          break;
        case 2:
          filtered = filtered.filter(item => item.data.Status === 'Semi-Government');
          break;
        case 3:
          filtered = filtered.filter(item => item.data.Status === 'Private');
          break;
        default:
          break;
      }
    }
  
   
    return filtered;
  };
  useEffect(() => {
    setFilteredItems(filterDataByButton());
  }, [BtnState, items, selectedCities]);
  
  const showAlert = () => {
    setAlertVisible(true);
  };
  const hideAlert = () => {
    setAlertVisible(false);
  };
  useEffect(() => {
    getItems();
  }, [isFocused]);



  const onCitiesSelect = (cities) => {
    setSelectedCities(cities);
  }; 
  const onSearchInputChange = (text) => {
    setSearchQuery(text);
  };

  const getItems = () => {
    try {
      firestore()
        .collection('Education')
        .get()
        .then(querySnapshot => {
          let tempData = [];
          querySnapshot.forEach(documentSnapshot => {
            tempData.push({
              id: documentSnapshot.id,
              data: documentSnapshot.data(),
            });
          });
          setItems(tempData);
        })
        .catch(error => {
         console.error('Error getting items from Firestore:', error);
        });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const deleteItem = docId => {
    firestore()
      .collection('Education')
      .doc(docId)
      .delete()
      .then(() => {
        getItems();
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>

      <TouchableOpacity  style={styles.ItemCont} onPress={() => { props.navigation.navigate('Uni_Detail', { item: item }) }} >
   <ImageBackground source={ item.data && item.data.Logo && item.data.Logo[0] ? { uri: item.data.Logo[0] }
          : require('../../Assets/Images/uni_logo.png') }
           style={styles.Product_Img}
           imageStyle={{ borderRadius: 10, alignItems: 'center' }}
           resizeMode='cover' >
    </ImageBackground>
    <View  style={styles.Detail_cont}>
     <Text style={styles.Title}>{item.data.name}</Text>
        <View style={styles.City_Cont}>
          <Text style={styles.City_Text}>{item.data.City}</Text>
        </View>
        </View>
      </TouchableOpacity>

      <View style={styles.Action_Cont}  >
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Edit_Uni_Details', {
          data: item.data,
          id: item.id,
        });
      }}>
      <Image
        source={require('../../Assets/Icons/edit.png')}
        style={[styles.icon, {width:25,height:25, }]}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        deleteItem(item.id);
      }}>
      <Image
        source={require('../../Assets/Icons/remove.png')}
        style={[styles.icon, { width:30,height:30,resizeMode:"contain"   }]}
      />
    </TouchableOpacity>
    </View>
    </View>
  );

  // Function to toggle the state of a specific item
  const toggleItemState = (index) => {
    const updatedStates = [...itemStates];
    updatedStates[index] = !updatedStates[index];
    setItemStates(updatedStates);
  };

  return (
    <ScrollView style={styles.MainCont}  showsVerticalScrollIndicator={false}>
      <View style={styles.Header} >
        <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={styles.Back_Cont} >
          <Image source={Back_Icon} style={styles.Back_Icon} />
        </TouchableOpacity>
        <Text style={styles.Back_Txt} >Addmission</Text>
        <View style={styles.Auth_Cont} >
        </View>
      </View>
      <View style={styles.Input_With_Filter} >
      <View style={styles.Input_Cont} >
        <Image source={Search} style={styles.SearchIcon} />
        <TextInput placeholder='Search here.....' placeholderTextColor={Colors.Grey9} style={styles.Search_Input}  
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)} />
      </View>
      <TouchableOpacity onPress={showAlert}  >
          <Image source={require('../../Assets/Icons/filter.png')} style={styles.Filter} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.Btn_Cont} showsHorizontalScrollIndicator={false}  >
        <TouchableOpacity style={[styles.Btn, BtnState === 0 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(0) }}>
          <Text style={[styles.Btn_Txt, BtnState === 0 ? styles.ActiveBtn_Txt : null]} >All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 1 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(1) }}>
          <Text style={[styles.Btn_Txt, BtnState == 1 ? styles.ActiveBtn_Txt : null]} >Government</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 2 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(2) }}>
          <Text style={[styles.Btn_Txt, BtnState == 2 ? styles.ActiveBtn_Txt : null]} >Semi-Goverment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 3 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(3) }}>
          <Text style={[styles.Btn_Txt, BtnState === 3 ? styles.ActiveBtn_Txt : null]} >Private</Text>
        </TouchableOpacity>
      </ScrollView>
{
  selectedCities.length>0?
  <View style={styles.selected_City_}> 
      <View style={styles.SelectedCitiesContainer}>
      {selectedCities.map((city, index) => (
        <View key={index} style={styles.SelectedCityBackground}>
          <Text style={styles.SelectedCityText}>{city}</Text>
        </View>
      ))}
    </View>
    </View>:null
}
      


      <View style={styles.FlatList_Cont} >
        <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
          data={filteredItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}

        />
      </View>
     
      <CitiesName
      visible={alertVisible}
      message="This is a custom alert!"
      onClose={() => { hideAlert();}}
      onCitiesSelect={onCitiesSelect}
      />
    </ScrollView>
  )
}

export default Get_Data

const styles = StyleSheet.create({
  MainCont: {
    backgroundColor: Colors.Bg,
    padding: '4%',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginVertical:"3%",
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
    width: 20, height: 20,
    resizeMode:"contain"
  },
  Auth_Cont: {
    flexDirection: 'row',
    alignItems: "center",
    marginRight: "5%"
  },
 
  Input_With_Filter:{
    justifyContent:"space-around",
    flexDirection: "row",
    borderWidth: 1,
    elevation: 3,
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    borderRadius: 10,
    paddingHorizontal: "2%",
    marginTop: "3%",
    alignItems:"center",
    height:55
   },
   Input_Cont: {
     flexDirection: "row",
     alignItems: "center",
   },
   SearchIcon: {
     width: 25, height: 25,
     marginRight: "2%"
   },
   Filter:{
     width: 25, height: 25,
     marginLeft: "2%"
   },
   Search_Input: {
     width: "70%",
     color: Colors.Black,
     fontFamily: Fonts.SF_Medium,
     fontSize: 14,
     backgroundColor: Colors.White
   },
   Btn_Cont: {
     marginTop: 20,
     marginBottom: 10
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
   },
   selected_City_Container:{
   marginBottom:"5%",
   marginTop:'3%'
   },
   Cities_Name:{
    fontSize: 22,
    lineHeight:28,
    color: 'red',
    fontFamily: Fonts.SF_Bold,
    marginBottom:"1%"
   },
   SelectedCitiesContainer:{
      flexDirection:"row",
      flexWrap:"wrap",
      marginBottom:'2%'
   },
   SelectedCityBackground:{
    backgroundColor:Colors.Green,
    margin:"1%",
    paddingVertical:"2%",
    paddingHorizontal:'3%',
    borderRadius:15
   },
   SelectedCityText:{
    fontSize: 14,
    lineHeight:18,
    color: Colors.White,
    fontFamily: Fonts.SF_Medium,
   },
   
  
  FlatList_Cont: {
    paddingBottom: "10%"
  },
  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    padding: '2%',
    flexDirection: "row",
    elevation:2,
    marginTop:"4%",
    height:110,
    alignItems:"center",
    width:"100%"
  },
  ItemCont:{
    flexDirection:"row",
    alignItems:"center",
    width:'90%',
  },
 
  Detail_cont: {
    justifyContent: "center",
    marginLeft: "4%",
    marginRight:"3%",
    width:"65%",
  },
  Product_Img: {
    width: 80, height: 80,
    resizeMode:"contain",
    marginLeft:'2%'
  },
  Title: {
    fontSize: 12,
    fontFamily: Fonts.SF_Bold,
    fontWeight: "300",
    lineHeight: 17,
    color: Colors.Black,
    marginBottom: "3%",
    height:60,
  },
  City_Cont: {
    backgroundColor: '#D0A700',
    alignItems: 'center',
    justifyContent:"center",
    width:140,
    height:27,
    borderRadius: 5,
    marginTop: "1%"
  },
  City_Text: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.White,
    fontFamily: Fonts.SF_Medium,
  },
  Action_Cont:{
    width:'10%',
    height:80,
    justifyContent:'space-between',
    alignItems:'flex-start'
  }
 
})

