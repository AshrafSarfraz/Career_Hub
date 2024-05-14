import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import React from 'react';
import { Colors } from '../../../Themes/Colors';
import { Fonts } from '../../../Themes/Fonts';


const data = [
  { id: '1', heading: 'Acceptance of Terms:', text: 'By accessing or using Career-Hub, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as any additional guidelines or rules posted on the app.' },
  { id: '2', heading: 'Eligibility:', text: 'Career-Hub is intended for use by individuals who are at least 13 years old. By using the app, you affirm that you are at least 13 years old. If you are under the age of 18, you must have parental or guardian consent to use the app.' },
  { id: '3', heading: 'Account Registration:', text: 'To access certain features of Career-Hub, such as personalized notifications and application tracking, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update this information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.' },
  { id: '4', heading: 'Use of Content:', text: 'The content available on Career-Hub, including but not limited to text, images, videos, and other materials, is provided for informational purposes only. You may not modify, reproduce, distribute, display, or otherwise use any content from Career-Hub without the prior written consent of Career-Hub.' },
  { id: '5', heading: 'User Conduct:', text: 'You agree to use Career-Hub only for lawful purposes and in accordance with these terms and conditions. You may not: - Violate any applicable laws or regulations. - Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with any person or entity. - Interfere with or disrupt the operation of Career-Hub or the servers or networks connected to Career-Hub. - Use any automated means, including robots, spiders, or scrapers, to access Career-Hub or collect information from Career-Hub.' },
  { id: '6', heading: 'Privacy Policy:', text: 'Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and disclose information about you when you use Career-Hub.' },
  { id: '7', heading: 'Termination:', text: 'We reserve the right to terminate or suspend your access to Career-Hub at any time and for any reason, without prior notice or liability. Upon termination or suspension, your right to use Career-Hub will immediately cease.' },
  { id: '8', heading: 'Changes to Terms:', text: 'We may revise and update these terms and conditions from time to time in our sole discretion. All changes are effective immediately when we post them, and your continued use of Career-Hub after the posting of revised terms and conditions signifies your acceptance of the changes.' },
  { id: '9', heading: 'Contact Us:', text: 'If you have any questions or concerns about these terms and conditions, please contact us at [insert contact information].' },
];

const Policies = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.heading}>{item.heading}</Text>
      <Text style={styles.Item_text}>{item.text}</Text>
    </View>
  );

  // Function to concatenate all policy texts into a single string
  const generatePolicyText = () => {
    let policyText = '';
    data.forEach(policy => {
      policyText += `${policy.heading}\n${policy.text}\n\n`;
    });
    return policyText;
  };

  // Function to show alert with all policies
  const showPoliciesAlert = () => {
    Alert.alert('Terms & Policies', generatePolicyText());
  };

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