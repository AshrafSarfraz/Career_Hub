import { View,ScrollView, Text, Image, StyleSheet, TouchableOpacity, Alert, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../../Themes/Colors';
import { useNavigation } from '@react-navigation/native';
import { Edit } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';


const Edit_Profile = () => {
  const [userData, setUserData] = useState(null);
  const [Username, setUsername] = useState('');
  const [Lastname, setLastname] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [userImage, setUserImage]=useState('')
  const navigation = useNavigation();
 
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;
        try {
          const userDocument = await firestore().collection('users').doc(userId).get();
          if (userDocument.exists) {
            const userDataFromFirestore = userDocument.data();
            setUserData(userDataFromFirestore);
            setUserImage(userDataFromFirestore.imageUrl);
            setUsername(userDataFromFirestore && userDataFromFirestore.Username ? userDataFromFirestore.Username : '');
            setLastname(userDataFromFirestore && userDataFromFirestore.Lastname ? userDataFromFirestore.Lastname : '');
            setPhoneNumber(userDataFromFirestore && userDataFromFirestore.PhoneNumber ? userDataFromFirestore.PhoneNumber : '');
            

          } else {
            console.log('User document does not exist.');
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      } else {
        // No user is signed in
        setUserData(null);
      }
    });
    return () => unsubscribe(); // Cleanup function to unsubscribe from the onAuthStateChanged listener
  }, []);

 
  const handleImagePick = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
      });
      setUserImage(image.path);
    } catch (error) {
      console.error('Error picking image:', error.message);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const userId = auth().currentUser.uid;
      const userRef = firestore().collection('users').doc(userId);
      if (userImage) {
        await userRef.update({
          userImage: userImage,
        });
      }
      await userRef.update({
        Username: Username,
        Lastname: Lastname,
        PhoneNumber: PhoneNumber,
      });
     Alert.alert('Added')
      const updatedUserData = await userRef.get();
      setUserData(updatedUserData.data());
    } catch (error) {
      console.error('Error updating user data:', error.message);
    }
  };
  
  

  

  return (
   
    <View style={styles.Main_Cont}>
    <ScrollView   showsVerticalScrollIndicator={false}>
    <CustomHeader title={'Edit Profile'} onBackPress={()=>{navigation.goBack(l)}}/>
    
    <View  style={styles.Header_Cont}>
      {userData && userData.userImage ? (
        <Image source={{ uri: userData.userImage }} style={[styles.UserImg]} />)
        :(<Image source={require('../../Assets/Images/uni_logo.png')} style={[styles.UserImg]} />)
      }
      <TouchableOpacity onPress={handleImagePick}  style={styles.Edit_Btn}>
      <Image source={Edit} style={styles.Edit} />
      </TouchableOpacity>
      </View>


      <View  style={styles.Body} >
     
      <TextInput
      placeholder="First Name"
      value={Username}
      placeholderTextColor={Colors.Grey9}
      onChangeText={(txt) => { setUsername(txt); }}
      style={styles.User_Input}
    />
      <TextInput
      placeholder="Last Name"
      value={Lastname}
      placeholderTextColor={Colors.Grey9}
      onChangeText={(txt) => { setLastname(txt); }}
      style={styles.User_Input}
    />
    <TextInput
    placeholder="Last Name"
    value={PhoneNumber}
    placeholderTextColor={Colors.Grey9}
    onChangeText={(txt) => { setPhoneNumber(txt); }}
    style={styles.User_Input}
  />
      </View>
     <View style={{marginTop:100,marginBottom:30}}>
     <CustomButton title={'Save Changes'} onPress={handleSaveChanges} />
      </View>
      </ScrollView>
    </View>

  );
};

export default Edit_Profile;

const styles = StyleSheet.create({
  Main_Cont:{
    flex:1,
    backgroundColor:Colors.White4,
    padding:'4%'
  },
  Header_Cont:{
   height:230,
   alignItems:'center',
   justifyContent:"flex-end"
  },
  Edit_Btn:{
     top:"-25%",
     right:"-18%",
     borderRadius:25,
  },
   Edit:{
    width: 32,
    height: 32,
    resizeMode: 'contain',
    
   },
  UserImg: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius:100,
  },
  Body:{
   height:270,
   justifyContent:"center"
  },
  User_Input:{
  fontSize:16,
  fontFamily:Fonts.SF_SemiBold,
  color:Colors.Black,
  marginBottom:'4%',
  borderRadius:10,
  backgroundColor:Colors.White,
  height:60,
  paddingHorizontal:14,
  elevation:2,
  lineHeight:22
  },

});




// {userData ? (
//   <View>
//     <Text style={styles.UserName}>{userData.Username} {userData.Lastname}</Text>
//     <Text style={styles.UserName}>{userData.PhoneNumber}</Text>
//     <Text style={styles.UserName}>{userData.Email}</Text>
//     <Text style={styles.UserName}>{userData.Password}</Text>
//     </View>
// ) : (
// <Text style={styles.UserName}>No Data Found</Text>
// )}




