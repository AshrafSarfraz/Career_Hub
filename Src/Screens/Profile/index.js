import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../../Themes/Colors';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;
        // Retrieve user data from Firestore
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

      // Upload the new image URL to the user document
      const userId = auth().currentUser.uid;
      const userRef = firestore().collection('users').doc(userId);
      await userRef.update({ userImage: image.path });

      setUserImage(image.path);
    } catch (error) {
      console.error('Error picking image:', error.message);
    }
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: Colors.Green,
          borderBottomWidth: 1,
          borderColor: Colors.Grey4,
          top: '-1%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={handleImagePick}>
          {userImage ? (
            <Image source={{ uri: userImage }} style={[styles.UserImg]} />
          ) : (
            <Image source={require('../../Assets/Images/uni_logo.png')} style={[styles.UserImg]} />
          )}
        </TouchableOpacity>
        {userData ? (
          <View>
            <Text style={styles.UserName}>{userData.Username} {userData.Lastname}</Text>
            <Text style={styles.UserName}>{userData.PhoneNumber}</Text>
            <Text style={styles.UserName}>{userData.Email}</Text>
            <Text style={styles.UserName}>{userData.Password}</Text>
          </View>
        ) : (
          <Text style={styles.UserName}>No Found</Text>
        )}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  UserImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
