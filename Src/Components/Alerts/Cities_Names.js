import React, { useState } from 'react';
import { View,ScrollView , Text, Modal, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Fonts } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';


const CitiesName = ({ visible, onClose,  onCitiesSelect }) => {
  const [selectedCities, setSelectedCities] = useState([]);

  // Array of city names
  const cities = [
    'Islamabad',
    'Ahmedpur East',
    'Arif Wala',
    'Attock',
    'Bahawalnagar',
    'Bahawalpur',
    'Bhalwal',
    'Bhakkar',
    'Burewala',
    'Charsadda',
    'Chakwal',
    'Chaman',
    'Chiniot',
    'Chishtian',
    'Dadu',
    'Daharki',
    'Dera Ghazi Khan',
    'Dera Ismail Khan',
    'Faisalabad',
    'Ferozwala',
    'Ghotki',
    'Gojra',
    'Gujranwala',
    'Gujranwala Cantonment',
    'Gujrat',
    'Haroonabad',
    'Hasilpur',
    'Hafizabad',
    'Hyderabad',
    'Hub',
    'Islamabad',
    'Jacobabad',
    'Jaranwala',
    'Jatoi',
    'Jhang',
    'Jhelum',
    'Kabal',
    'Kamalia',
    'Kandhkot',
    'Kasur',
    'Khanewal',
    'Khanpur',
    'Khairpur',
    'Khuzdar',
    'Khushab',
    'Kohat',
    'Kot Addu',
    'Kot Abdul Malik',
    'Kotri',
    'Lahore',
    'Larkana',
    'Layyah',
    'Lodhran',
    'Mandi Bahauddin',
    'Mansehra',
    'Mardan',
    'Mianwali',
    'Mirpur',
    'Mirpur Khas',
    'Mirpur Mathelo',
    'Mingora',
    'Multan',
    'Muridke',
    'Muzaffargarh',
    'Muzaffarabad',
    'Narowal',
    'Nawabshah',
    'Nowshera',
    'Okara',
    'Pakpattan',
    'Peshawar',
    'Quetta',
    'Rahim Yar Khan',
    'Rawalpindi',
    'Sadiqabad',
    'Sahiwal',
    'Samundri',
    'Sargodha',
    'Shahdadkot',
    'Sheikhupura',
    'Shikarpur',
    'Sialkot',
    'Sukkur',
    'Swabi',
    'Tando Adam',
    'Tando Allahyar',
    'Tando Muhammad Khan',
    'Taxila',
    'Turbat',
    'Umerkot',
    'Vehari',
    'Wah Cantonment',
    'Wazirabad',
    // Add more cities as needed
  ];
  
  

  // Function to handle city click
  const handleCityClick = (city) => {
    // Check if the city is already selected
    if (selectedCities.includes(city)) {
      // Remove the city from the selected list
      setSelectedCities(selectedCities.filter((selectedCity) => selectedCity !== city));
    } else {
      // Add the city to the selected list
      setSelectedCities([...selectedCities, city]);
    }
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <ScrollView contentContainerStyle={styles.overlay}>
        <View style={styles.alertContainer}>
          <View style={{}} >  
            <Text style={styles.List_Txt} >List of Cities</Text>
           <View style={styles.FlatList_Cont} > 
            <FlatList 
            showsVerticalScrollIndicator={false}
            numColumns={3}
              data={cities}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
             
                <TouchableOpacity
                  onPress={() => handleCityClick(item)}
                  style={{
                    backgroundColor: selectedCities.includes(item) ? 'green' : 'white',
                    borderRadius: 10,
                    borderWidth:1,
                    margin:'1.5%',
                    paddingVertical:"2%",
                    alignItems:"center",
                    justifyContent:"center",
                    width:"30%",
                    paddingVertical:"2%"
                  }}
                >
                  <Text  style={{color:selectedCities.includes(item) ? '#FFFFFF' : 'black',textAlign:"center",fontSize:14}} >{item}</Text>
                </TouchableOpacity>
              )}
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
    height:55,
    alignItems:"center",
    justifyContent:"center",
    marginVertical:"3%",
    backgroundColor:Colors.Green,
    top:'1%'
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
