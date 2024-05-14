import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import React from 'react';
import { Colors } from '../../../Themes/Colors';
import { Fonts } from '../../../Themes/Fonts';


const Policies = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.heading}>{item.heading}</Text>
      <Text style={styles.Term_Text}>{item.text}</Text>
    </View>
  );




  return (
    <ScrollView contentContainerStyle={styles.MainCont}>
      <View style={styles.Header}>
        <Text style={styles.Vibes}>Terms & Privacy Policy</Text>
        <Text style={styles.Vibes}>     </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default Policies;


const styles=StyleSheet.create({
    MainCont:{
       backgroundColor:Colors.White,
       padding:'4%',
       flex:1,

    },
    Header:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
       paddingBottom:"3%"
    },
    Menu:{
       width:50,height:50,
       resizeMode:'contain'
    },
    Vibes:{
       fontSize:20,
       fontFamily:Fonts.SF_Bold,
       color:Colors.Green,
       fontWeight:'600'
    },
    itemContainer:{

    },
    heading:{
     fontSize:14,
     lineHeight:16,
     fontFamily:Fonts.SF_Bold,
     fontWeight:"400",
     color:Colors.Black,
     marginTop:"3%",
     marginBottom:"0.5%",
    },
    Term_Text:{
      fontSize:10,
      lineHeight:16,
      fontFamily:Fonts.SF_Regular,
      color:'red',
      textAlign:"justify"
    }
    
   })