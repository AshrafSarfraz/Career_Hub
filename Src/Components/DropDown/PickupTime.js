import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';

const PickupTime = () => {
  const [condition, setCondition] = useState('Select');
  const [showInput, setShowInput] = useState(false);

  const handleConditionChange = (selectedItem) => {
    setCondition(selectedItem);
    setShowInput(selectedItem === 'Other');
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickupContainer}>
        <Text style={styles.pickupText}>Pick up</Text>
        <View style={styles.dropdownContainer}>
              <SelectDropdown
        data={['Select', '9:30 AM', '10:00 AM', '10:30 AM']}
        defaultButtonText={condition}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        onSelect={handleConditionChange}
        buttonTextAfterSelection={(selectedItem) => selectedItem}
        rowTextForSelection={(item) => item}
        renderDropdownIcon={() => (
          <AntDesign name="caretdown" size={14} color={Colors.Green} />
        )}
        // Add this line to set the dropdown menu's width to 100%
        dropdownStyle={styles.dropdownMenu}
      />
        </View>
      </View>

      {showInput && (
        <View>
          <Text style={styles.explainText}>Explain type of report</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Type"
            placeholderTextColor="#9E9E9E"
            textAlignVertical="top"
            onChangeText={(text) => {
              // Handle the input text change here
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom:0
  },
  pickupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#9E9E9E',
    borderWidth: 0.5,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: 'white',
    height: 55,
  },
  
  pickupText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight:19,
    color: Colors.Black,
    fontFamily:Fonts.SF_SemiBold,
    marginLeft: 10,
  },
  dropdownContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  dropdownButton: {
    width: 120,
    backgroundColor: 'white',
    height: 35,
    borderRadius: 10,
  },
  dropdownButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.Green,
    fontFamily:Fonts.SF_Bold,
  },
  explainText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9E9E9E',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 120,
    borderColor: '#9E9E9E',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 14,
    color: 'black',
  },
});

export default PickupTime;
