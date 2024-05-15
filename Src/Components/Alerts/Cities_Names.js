import React, { useCallback, useState } from 'react';
import { View,ScrollView , Text, Modal, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Fonts } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';


const CitiesName = ({ visible, onClose,  onCitiesSelect }) => {
  const [selectedCities, setSelectedCities] = useState([]);

  cities = [
    'Abbottabad',
    'Ahmedpur East',
    'Arif Wala',
    'Attock',
    'Bahawalnagar',
    'Bahawalpur',
    'Bannu',
    'Bela',
    'Bhalwal',
    'Bhimber',
    'Burewala',
    'Charsadda',
    'Chak Jhumra',
    'Chakwal',
    'Chaman',
    'Chiniot',
    'Chishtian',
    'Chitral',
    'Chunian',
    'Dadu',
    'Daharki',
    'Dera Ghazi Khan',
    'Dera Ismail Khan',
    'Dina',
    'Faisalabad',
    'Ferozwala',
    'Fort Abbas',
    'Gakhar Mandi',
    'Ghotki',
    'Gojra',
    'Gujranwala',
    'Gujranwala Cantonment',
    'Gujrat',
    'Gwadar',
    'Hafizabad',
    'Hala',
    'Hangu',
    'Haroonabad',
    'Hasilpur',
    'Hassan Abdal',
    'Hyderabad',
    'Hub',
    'Islamabad',
    'Jacobabad',
    'Jalalpur Jattan',
    'Jaranwala',
    'Jatoi',
    'Jhang',
    'Jhelum',
    'Kabal',
    'Kamalia',
    'Kandhkot',
    'Kanganpur',
    'Karachi',
    'Karak',
    'Kasur',
    'Khanewal',
    'Khanpur',
    'Khairpur',
    'Kharian',
    'Khushab',
    'Khuzdar',
    'Kohat',
    'Kohlu',
    'Kot Addu',
    'Kot Abdul Malik',
    'Kotri',
    'Kulachi',
    'Lahore',
    'Lala Musa',
    'Larkana',
    'Layyah',
    'Leiah',
    'Lodhran',
    'Mandi Bahauddin',
    'Mansehra',
    'Mardan',
    'Matiari',
    'Mian Channu',
    'Mianwali',
    'Mingora',
    'Mirpur',
    'Mirpur Khas',
    'Mirpur Mathelo',
    'Multan',
    'Muridke',
    'Muzaffargarh',
    'Muzaffarabad',
    'Nankana Sahib',
    'Narowal',
    'Nasirabad',
    'Nawabshah',
    'Nowshera',
    'Okara',
    'Pakpattan',
    'Pasrur',
    'Peshawar',
    'Pindi Bhattian',
    'Qila Abdullah',
    'Quetta',
    'Rahim Yar Khan',
    'Rajanpur',
    'Rawalpindi',
    'Sadiqabad',
    'Sahiwal',
    'Samundri',
    'Sann',
    'Sargodha',
    'Sarai Alamgir',
    'Shahdadkot',
    'Shahdadpur',
    'Shahkot',
    'Shakargarh',
    'Sheikhupura',
    'Shikarpur',
    'Sialkot',
    'Sujawal',
    'Sukkur',
    'Surab',
    'Swabi',
    'Tank',
    'Tandlianwala',
    'Tando Adam',
    'Tando Allahyar',
    'Tando Muhammad Khan',
    'Taxila',
    'Thatta',
    'Toba Tek Singh',
    'Turbat',
    'Umerkot',
    'Vehari',
    'Wah Cantonment',
    'Warburton',
    'Wazirabad',
    'Ziarat',
]

  
  

  // // Function to handle city click
  // const handleCityClick = (city) => {
  //   // Check if the city is already selected
  //   if (selectedCities.includes(city)) {
  //     // Remove the city from the selected list
  //     setSelectedCities(selectedCities.filter((selectedCity) => selectedCity !== city));
  //   } else {
  //     // Add the city to the selected list
  //     setSelectedCities([...selectedCities, city]);
  //   }
  // };
  const handleCityClick = useCallback((city) => {
    setSelectedCities(prevSelectedCities => {
      if (prevSelectedCities.includes(city)) {
        return prevSelectedCities.filter(selectedCity => selectedCity !== city);
      } else {
        return [...prevSelectedCities, city];
      }
    });
  }, []);
  
  const renderItem = useCallback(({ item }) => (
    <TouchableOpacity
      onPress={() => handleCityClick(item)}
      style={[
        cityButtonStyle,
        { backgroundColor: selectedCities.includes(item) ? 'green' : 'white' },
      ]}
    >
      <Text style={{ color: selectedCities.includes(item) ? '#FFFFFF' : '#000', fontSize: 12, fontFamily: Fonts.SF_SemiBold }}>
        {item}
      </Text>
    </TouchableOpacity>
  ), [selectedCities, handleCityClick]);

  const cityButtonStyle = {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    margin: '1.5%',
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <ScrollView contentContainerStyle={styles.overlay}>
        <View style={styles.alertContainer}>
          <View style={{}} >  
            <Text style={styles.List_Txt} >Cities Name</Text>
           <View style={styles.FlatList_Cont} > 
               <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={3}
              data={cities}
              keyExtractor={(item) => item}
              renderItem={renderItem}
            />
            </View>

          </View>

          <TouchableOpacity style={styles.Done_Button} onPress={() => { onClose(); onCitiesSelect(selectedCities); }}>
            <Text style={styles.okButtonText}>Selected</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex:1
  },
  alertContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '2%',
    width:'94%',
    marginTop:'5%'
   
  },
  Done_Button: {
    borderRadius: 10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginVertical:"3%",
    backgroundColor:Colors.Green,
    top:'1%',
    width:150,
    alignSelf:"center"
  },
  okButtonText: {
    color: 'black',
    fontSize: 16,
    color:Colors.White,
    lineHeight:20
  },
  List_Txt:{
    color: 'black',
    fontSize: 20,
    marginVertical:'3%',
    alignSelf:"center",
    fontFamily:Fonts.SF_Bold,
    fontWeight:'500'
  },
  FlatList_Cont:{
    height:400,
   
  }
});

export default CitiesName;
