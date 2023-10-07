// CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { Colors } from '../../Themes/Colors';



const CustomButton= ({ title, onPress, }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Green, // Example color
    width:'98%',
    alignSelf:"center",
    padding:'4%',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
