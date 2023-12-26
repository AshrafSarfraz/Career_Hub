import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Button, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../../Themes/Colors';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Fonts } from '../../Themes/Fonts';
import { Edit } from '../../Themes/Images';


const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;// Retrieve user data from Firestore
        try {
          const userDocument = await firestore().collection('users').doc(userId).get();
          if (userDocument.exists) {
            const userDataFromFirestore = userDocument.data();
            setUserData(userDataFromFirestore);
            // Set user image URL directly from user document
            setUserImage(userDataFromFirestore.imageUrl);
          } else {
            console.log('User document does not exist.');
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      } else {
        setUserData(null);
      }
    });
    return () => unsubscribe(); // Cleanup function to unsubscribe from the onAuthStateChanged listener
  }, []);

  useEffect(() => {
    checkGoogleSignIn();
  }, []);

  const checkGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        const currentUser = await GoogleSignin.getCurrentUser();
        setUserInfo(currentUser.user);
      }
    } catch (error) {
      console.error('Error checking Google Sign-In:', error.message);
    }
  };

  return (
   
    <View style={styles.Main_Cont}>
    <ScrollView   showsVerticalScrollIndicator={false}>
    <View  style={styles.Header_Cont}>
    {(userData && userData.userImage || userInfo && userInfo.photo) ? (
      <View>  
    {userData ? (
        <Image source={{ uri: userData.userImage }} style={[styles.UserImg]} />) : (
    (userInfo ?
        <Image source={{ uri: userInfo.photo }} style={[styles.UserImg]} /> : null)
      )}
      </View>): (<Image source={require('../../Assets/Images/uni_logo.png')} style={[styles.UserImg]} /> )
    }
    </View>
    <View  style={styles.Body} >
      {(userData || userInfo) ? (
        <View>
          {userData ? (
            <View>
              <View style={styles.Data_Cont}>
              <Text style={styles.UserName}>{userData.Username} {userData.Lastname}</Text>
              </View>
              <View style={styles.Data_Cont}>
              <Text style={styles.UserName}>{userData.PhoneNumber}</Text>
              </View>
              <View style={styles.Data_Cont}>
              <Text style={styles.UserName}>{userData.Email}</Text>
              </View>
              <TouchableOpacity  style={styles.Edit_Btn}  onPress={()=>{navigation.navigate('Edit_Profile')}}>
              <Text  style={styles.Edit_Txt}>Edit Profile</Text>
              </TouchableOpacity> 
              </View>     
          ) : (
            <View>
            <View style={styles.Data_Cont}>
            <Text style={styles.UserName}>{userInfo.name}</Text>
            </View>
            <View style={styles.Data_Cont}>
            <Text style={styles.UserName}>{userInfo.email}</Text>
            </View>
             
              </View>
          ) }    
        </View>
      ) : (
        <Text style={styles.UserName}>No Data Found</Text>
      )}

      </View>
    </ScrollView>
  </View>
  );
};

export default Profile;
  const styles = StyleSheet.create({
    Main_Cont:{
      flex:1,
      backgroundColor:Colors.White4,
      padding:'4%'
    },
    Header_Cont:{
     height:200,
     alignItems:'center',
     justifyContent:"flex-end"
    },
    Edit_Btn:{
       backgroundColor:Colors.Green  ,
       flexDirection:"row",
       alignItems:'center',
       justifyContent:'center',
       width:'99%',
       alignSelf:"center",
       height:55,
       borderRadius:10,
       alignSelf:'flex-end',
       marginTop:'10%',
    },
     Edit:{
      width: 30,
      height: 30,
      resizeMode: 'contain',
      marginRight:"2%"
     },
     Edit_Txt:{
      fontSize:16,
      color:Colors.White,
      lineHeight:22,
      fontFamily:Fonts.SF_SemiBold
     },
    UserImg: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
      borderRadius:100
    },
    Body:{
     height:450,
     justifyContent:"center"
    },
    Data_Cont:{
      backgroundColor:Colors.White,
      marginBottom:"4%",
      width:"99%",
      alignSelf:'center',
      height:60,
      justifyContent:'center',
      paddingHorizontal:10,
      borderRadius:10,
      elevation:3
    },
    UserName:{
     fontSize:16,
     color:Colors.Black,
     fontFamily:Fonts.SF_Medium,
     lineHeight:22
    }
  
  })

