
import { View, Text, ScrollView, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from '../../../Themes/Colors'
import { Back_Icon, Bookmark, Bookmark1, Search } from '../../../Themes/Images'
import { useIsFocused} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import CitiesName from '../../../Components/Alerts/Cities_Names'
import { styles } from './style';
import ActivityIndicatorModal from '../../../Components/Loader/ActivityIndicator';
import { UniversitiesData } from '../../../Redux_Toolkit/University_Data/Universities';
import { Add_Scholarship, Remove_Scholarship } from '../../../Redux_Toolkit/wishlist/Scholarship_slice';



const SchlorShip_Data = (props) => {
  const dispatch=useDispatch();
  const Scholarship_D = useSelector((state) => state.scholarship); // Accessing 'user' slice


  const isFocused = useIsFocused();
  const currentDate = new Date();
  const [BtnState, setBtnState] = useState(0)
  const [items, setItems] = useState([]);
  const filteredData = items.filter(item => new Date(item.data.EndingDate) >= currentDate);
  const [filteredItems, setFilteredItems] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState('');


  useEffect(()=>{
    filteredData.map(item=>{
      dispatch(UniversitiesData(item))
    })
    },[] )

  useEffect(() => {
    getItems();
  }, [isFocused]);

  const showAlert = () => {
    setAlertVisible(true);
  };
  const hideAlert = () => {
    setAlertVisible(false);
  };

  const toggleItemState = (index) => {
    const updatedStates = [...itemStates];
    updatedStates[index] = !updatedStates[index];
    setItemStates(updatedStates);
  };

  useEffect(() => {
    filterItems();
  }, [searchQuery, items]);

  useEffect(() => {
    setFilteredItems(filterDataByButton());
  }, [BtnState, items, selectedCities]);

  const filterItems = () => {
    const filtered = filteredData.filter((item) => {
      if (item && item.data && typeof item.data.name === 'string') {
        const itemName = item.data.name.toLowerCase();
        const searchLowerCase = searchQuery.toLowerCase();
        return itemName.includes(searchLowerCase);
      }
      return false; 
    });
    setFilteredItems(filtered);
  };
  

  const filterDataByButton = () => {
    let filtered = filteredData;
    if (selectedCities.length > 0) {
      switch (BtnState) {
        case 0:
          filtered = filtered.filter(
            item =>
              selectedCities.includes(item.data.City) &&
              (BtnState === 0 || item.data.Status === 'Pakistan' ||  item.data.Status === 'Foreign')
          );
          break;
        case 1:
          filtered = filtered.filter(item => item.data.Status === 'Pakistan' && selectedCities.includes(item.data.City));
          break;
        case 2:
          filtered = filtered.filter(item => item.data.Status === 'Foreign' && selectedCities.includes(item.data.City));
          break;
        default:
          break;
      }
    } else {
      switch (BtnState) {
        case 0:
          break;
        case 1:
          filtered = filtered.filter(item => item.data.Status === 'Pakistan');
          break;
        case 2:
          filtered = filtered.filter(item => item.data.Status === 'Foreign');
          break;
        default:
          break;
      }
    }

    // console.log('Filtered Data:', filtered);
    return filtered;
  };

  const onCitiesSelect = (cities) => {
    setSelectedCities(cities);
  };

  const onSearchInputChange = (text) => {
    setSearchQuery(text);
  };

  const getItems = () => {
    try {
      firestore()
        .collection('Schlorship')
        .get()
        .then(querySnapshot => {   // console.log('Total items: ', querySnapshot.size);
          let tempData = [];
          querySnapshot.forEach(documentSnapshot => {
            tempData.push({
              id: documentSnapshot.id,
              data: documentSnapshot.data(),
            });
          });
          setIsLoading(false)
          setItems(tempData);
        })
        .catch(error => {
          setIsLoading(false)
          setError.error('Error getting items from Firestore:', error);
        });
    } catch (error) {
      setIsLoading(false)
      setError.error('Error fetching items:', error);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>
      <TouchableOpacity  style={styles.Img_Cont}  onPress={() => { props.navigation.navigate('Sch_Details', { item: item }) }} >
      <Image source={{ uri: item.data.Logo[0] }} style={styles.Product_Img} resizeMode='cover'/>
     <View style={styles.Title_City_Container}>
      <Text style={styles.Title}>{item.data.Sch_name}</Text>
        <View style={styles.City_Cont}>
          <Text style={styles.City_Text}>{item.data.Status}</Text>
        </View>
        </View>         
      </TouchableOpacity> 
      <View  style={{width:"10%",height:90,justifyContent:"flex-end"}}>
        {Scholarship_D.find(Scholarship_D => Scholarship_D.id === item.id) ? (
          <TouchableOpacity onPress={() => {dispatch(Remove_Scholarship(item.id))}} style={{}} >
            <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]}/>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {dispatch(Add_Scholarship(item))}} style={{}} >
            <Image source={Bookmark} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );



  return (
    <ScrollView style={styles.MainCont} showsVerticalScrollIndicator={false}>
      <View style={styles.Header} >
        <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={styles.Back_Cont} >
          <Image source={Back_Icon} style={styles.Back_Icon} />
        </TouchableOpacity>
        <Text style={styles.Back_Txt} >Scholarship</Text>
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
          <Image source={require('../../../Assets/Icons/filter.png')} style={styles.Filter} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.Btn_Cont} showsHorizontalScrollIndicator={false}  >
        <TouchableOpacity style={[styles.Btn, BtnState === 0 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(0) }}>
          <Text style={[styles.Btn_Txt, BtnState === 0 ? styles.ActiveBtn_Txt : null]} >All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 1 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(1) }}>
          <Text style={[styles.Btn_Txt, BtnState == 1 ? styles.ActiveBtn_Txt : null]} >Pakistan</Text>
        </TouchableOpacity>
     
        <TouchableOpacity style={[styles.Btn, BtnState === 3 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(2) }}>
          <Text style={[styles.Btn_Txt, BtnState === 3 ? styles.ActiveBtn_Txt : null]} >Foreign</Text>
        </TouchableOpacity>
      </ScrollView>
      {
        selectedCities.length > 0 ?
          <View style={styles.selected_City_}>
            <View style={styles.SelectedCitiesContainer}>
              {selectedCities.map((city, index) => (
                <View key={index} style={styles.SelectedCityBackground}>
                  <Text style={styles.SelectedCityText}>{city}</Text>
                </View>
              ))}
            </View>
          </View> : null
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
        onClose={() => { hideAlert(); }}
        onCitiesSelect={onCitiesSelect}
      />
      <ActivityIndicatorModal visible={isLoading} />
    </ScrollView>
  )
}

export default SchlorShip_Data



