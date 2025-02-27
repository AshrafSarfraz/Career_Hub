import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { fetchJobData, deleteJobItem } from './Backend'; // Import backend functions
import { Colors } from '../../../../Themes/Colors';
import { Back_Icon, Plus, Search } from '../../../../Themes/Images';
import CitiesName from '../../../../Components/Alerts/Cities_Names';
import ActivityIndicatorModal from '../../../../Components/Loader/ActivityIndicator';
import { styles } from './style';

const Job_Data = (props) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const currentDate = new Date();
  const [BtnState, setBtnState] = useState(0);
  const [items, setItems] = useState([]);
  const [itemStates, setItemStates] = useState(items.map(() => true));
  const filteredData = items;
  const [filteredItems, setFilteredItems] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState('');
  
  const filterItems = () => {
    const filtered = filteredData.filter((item) => {
      const itemName = (item.data && item.data.Job_Name) ? item.data.Job_Name.toLowerCase() : '';
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
        (BtnState === 0 || item.data.Status === 'Government' || item.data.Status === 'Private')
    );
          break;
        case 1:
          filtered = filtered.filter(item => item.data.Status === 'Government' && selectedCities.includes(item.data.City));
          break;
        case 2:
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

  const getItems = async () => {
    try {
      setIsLoading(true);
      const data = await fetchJobData(); // Call fetchJobData from backend
      setItems(data);
      setIsLoading(false);
    } catch (error) {
      setError('Error fetching items:', error.message);
      setIsLoading(false);
    }
  };

  const deleteItem = async (docId) => {
    try {
      setIsLoading(true);
      await deleteJobItem(docId); // Call deleteJobItem from backend
      await getItems(); // Refresh data after deletion
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError('Error deleting item:', error.message);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>

      <TouchableOpacity  style={styles.ItemCont} onPress={() => { props.navigation.navigate('Jobs_Details', { item: item }) }} >
   <ImageBackground source={ item.data && item.data.poster && item.data.poster[0] ? { uri: item.data.poster[0] }
          : require('../../../../Assets/Images/uni_logo.png') }
           style={styles.Product_Img}
           imageStyle={{ borderRadius: 10, alignItems: 'center' }}
           resizeMode='cover' >
    </ImageBackground>
    <View  style={styles.Detail_cont}>
     <Text style={styles.Title}>{item.data.Job_Name}</Text>
     <View style={styles.City_Cont}>
     <View style={styles.City_Text_Container}>
       <Text style={styles.City_Text}>{item.data.Job_City}</Text>
     </View>
   </View>
        </View>
      </TouchableOpacity>

      <View style={styles.Action_Cont}  >
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Job_Update', {
          data: item.data,
          id: item.id,
        });
      }}>
      <Image
        source={require('../../../../Assets/Icons/edit.png')}
        style={[styles.icon, {width:25,height:25, }]}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        deleteItem(item.id);
      }}>
      <Image
        source={require('../../../../Assets/Icons/remove.png')}
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
    <View>
    <ScrollView style={styles.MainCont}  showsVerticalScrollIndicator={false}>
      <View style={styles.Header} >
        <TouchableOpacity onPress={() => { navigation.goBack()}} style={styles.Back_Cont} >
          <Image source={Back_Icon} style={styles.Back_Icon} />
        </TouchableOpacity>
        <Text style={styles.Back_Txt} >Jobs</Text>
        <View style={styles.Auth_Cont} >
        </View>
      </View>
      <View style={styles.Input_With_Filter} >
      <View style={styles.Input_Cont} >
      <TouchableOpacity onPress={filterItems}>
      <Image source={Search} style={styles.SearchIcon} />
      </TouchableOpacity> 
        <TextInput placeholder='Search here...' placeholderTextColor={Colors.Grey9} style={styles.Search_Input}  
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)} />
      </View>
      <TouchableOpacity onPress={showAlert}  >
          <Image source={require('../../../../Assets/Icons/filter.png')} style={styles.Filter} />
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
          <Text style={[styles.Btn_Txt, BtnState === 2 ? styles.ActiveBtn_Txt : null]} >Private</Text>
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
          data={items}
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
      <ActivityIndicatorModal visible={isLoading} />
      </ScrollView>
      <TouchableOpacity  style={styles.AddBtn} onPress={()=>{navigation.navigate('Job_Post')}} >
      <Image source={Plus}  style={{width:25,height:25,tintColor:'white'}}/>
      </TouchableOpacity>
     </View>
  )}

export default Job_Data
