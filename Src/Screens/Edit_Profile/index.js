import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../../Themes/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Edit } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import ActivityIndicatorModal from '../../Components/Loader/ActivityIndicator';

const Edit_Profile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [Username, setUsername] = useState(route.params.userData.Username);
  const [Lastname, setLastname] = useState(route.params.userData.Lastname);
  const [PhoneNumber, setPhoneNumber] = useState(route.params.userData.PhoneNumber);
  const [userImage, setUserImage] = useState(route.params.userData.userImage);
  const [isLoading, setIsLoading] = useState(false);

  const handleImagePick = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
      });
      setUserImage(image.path);
    } catch (error) {
      Alert.alert('Error', `Error picking image: ${error.message}`);
    }
  };

  const handleSaveChanges = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
      navigation.goBack();
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Error', `Failed to update profile: ${error.message}`);
    }
  };

  return (
    <View style={styles.Main_Cont}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader title={'Edit Profile'} onBackPress={() => { navigation.goBack() }} />
        <View style={styles.Header_Cont}>
          <Image source={{ uri: userImage }} style={styles.UserImg} />
          <TouchableOpacity onPress={handleImagePick} style={styles.Edit_Btn}>
            <Image source={Edit} style={styles.Edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.Body}>
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
            placeholder="Phone Number"
            value={PhoneNumber}
            placeholderTextColor={Colors.Grey9}
            onChangeText={(txt) => { setPhoneNumber(txt); }}
            style={styles.User_Input}
          />
        </View>
        <View style={{ marginTop: 100, marginBottom: 30 }}>
          <CustomButton title={'Save Changes'} onPress={handleSaveChanges} />
        </View>
      </ScrollView>
      <ActivityIndicatorModal visible={isLoading} />
    </View>
  );
};

export default Edit_Profile;

const styles = StyleSheet.create({
  Main_Cont: {
    flex: 1,
    backgroundColor: Colors.White4,
    padding: '4%'
  },
  Header_Cont: {
    height: 230,
    alignItems: 'center',
    justifyContent: "flex-end"
  },
  Edit_Btn: {
    top: "-25%",
    right: "-18%",
    borderRadius: 25,
  },
  Edit: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  UserImg: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  Body: {
    height: 270,
    justifyContent: "center"
  },
  User_Input: {
    fontSize: 16,
    fontFamily: Fonts.SF_SemiBold,
    color: Colors.Black,
    marginBottom: '4%',
    borderRadius: 10,
    backgroundColor: Colors.White,
    height: 60,
    paddingHorizontal: 14,
    elevation: 2,
    lineHeight: 22
  },
});
