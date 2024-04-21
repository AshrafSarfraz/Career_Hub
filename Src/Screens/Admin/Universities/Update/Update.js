import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { Fonts } from '../../../../Themes/Fonts';
import { styles } from './style';
import ActivityIndicatorModal from '../../../../Components/Loader/ActivityIndicator';

const EditItem = ({ navigation }) => {
  const route = useRoute();

  const [logoImages, setLogoImages] = useState(route.params.Logo ? [...route.params.Logo] : []);
  const [posterImages, setPosterImages] = useState(route.params.poster ? [...route.params.poster] : []);
  const [uniImages, setUniImages] = useState(route.params.uni ? [...route.params.uni] : []);


  const [name, setName] = useState(route.params.data.name);
  const [City, setCity] = useState(route.params.data.City);
  const [City_Link, setCity_Link] = useState(route.params.data.City_Link);
  const [Province, setProvince] = useState(route.params.data.Province);
  const [Campus, setCampus] = useState(route.params.data.Campus);
  const [Status, setStatus] = useState(route.params.data.Status);
  const [Location, setLocation] = useState(route.params.data.Location);
  const [Longitude, setLongitude] = useState(route.params.data.Longitude);
  const [Latitude, setLatitude] = useState(route.params.data.Latitude);
  const [description, setDescription] = useState(route.params.data.description);
  const [StartingDate, setStartingDate] = useState(route.params.data.StartingDate);
  const [EndingDate, setEndingDate] = useState(route.params.data.EndingDate);
  const [PhoneNumber, setPhoneNumber] = useState(route.params.data.PhoneNumber);
  const [Link, setLink] = useState(route.params.data.Link);
  const [VideoLink, setVideoLink] = useState(route.params.data.VideoLink);
  const [Type, setType] = useState(route.params.data.Type);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState('');


  const openImagePicker = async (setImage, itemId) => {
    try {
      const results = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        multiple: true,
      });

      if (results && !results.didCancel) { // Check if results is not undefined
        const updatedImages = results.map((result) => result.path); // Update state variable with selected image paths
        setImage(updatedImages);
        // Call uploadItem function after setting images
      }
    } catch (error) {
      setError('Error picking images: ' + error.message);
    }
  };
      
  
    
 
  const uploadImages = async (images, categoryName, itemId) => {
    try {
      const uploadTasks = images.map(async (image, index) => {
        const imageName = `${categoryName}_${itemId}_${index}.jpg`;
        const reference = storage().ref(imageName);
        await reference.putFile(image);
        return reference.getDownloadURL();
      });

      const downloadURLs = await Promise.all(uploadTasks);
      return downloadURLs;
    } catch (error) {
      setError('Error uploading images: ' + error.message);
      throw error;
    }
  };

  const uploadItem = async (itemId) => {
    try {
      setIsLoading(true);
  
      const LogoImageUrls = logoImages.length > 0 ? await uploadImages(logoImages, 'Logo', itemId) : route.params.data.Logo;
      const posterImageUrls = posterImages.length > 0 ? await uploadImages(posterImages, 'Poster', itemId) : route.params.data.poster;
      const uniImageUrls = uniImages.length > 0 ? await uploadImages(uniImages, 'Uni', itemId) : route.params.data.uni;

      // Update data
      const updatedData = {};
      if (LogoImageUrls) updatedData.Logo = LogoImageUrls;
      if (posterImageUrls) updatedData.poster = posterImageUrls;
      if (uniImageUrls) updatedData.uni = uniImageUrls;
      if (name) updatedData.name = name;
      if (City) updatedData.City = City;
      if (City_Link) updatedData.City_Link = City_Link;
      if (Province) updatedData.Province = Province;
      if (Status) updatedData.Status = Status;
      if (Location) updatedData.Location = Location;
      if (Longitude) updatedData.Longitude = Longitude;
      if (Latitude) updatedData.Latitude = Latitude;
      if (description) updatedData.description = description;
      if (StartingDate) updatedData.StartingDate = StartingDate;
      if (EndingDate) updatedData.EndingDate = EndingDate;
      if (PhoneNumber) updatedData.PhoneNumber = PhoneNumber;
      if (Link) updatedData.Link = Link;
      if (VideoLink) updatedData.VideoLink = VideoLink;
      if (Type) updatedData.Type = Type;
  
      
      await firestore()
        .collection('Education')
        .doc(itemId)
        .update(updatedData); 
      setIsLoading(false);
      navigation.goBack();
    } catch (error) {
      setError('Error updating item: ' + error.message);
      setIsLoading(false);
    }
  };
      


  

  const onDayPress = (day) => {
    setStartingDate(day.dateString);
  };

  const onDayPress1 = (day) => {
    setEndingDate(day.dateString);
  };

  const renderImages = (images, label) => {
    if (Array.isArray(images) && images.length > 0) {
      return (
        <View style={styles.imageContainer}>
          <Text style={styles.imageLabel}>{label}</Text>
          {images.map((image, index) => (
            <Image
              key={index}
              source={typeof image === 'string' ? { uri: image } : require('../../../../Assets/Images/uni_logo.png')}
              style={styles.image}
            />
          ))}
        </View>
      );
    } else {
      // Return a default message or null if images is empty
      return null; // or <Text>No images to display</Text>
    }
  };

  
 

  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Edit_Data</Text>
    </View>

    <View style={styles.Body_container}>
      <TextInput
        placeholder="University Name"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="City Name"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={City}
        onChangeText={text => setCity(text)}
      />
      <TextInput
        placeholder="Government, Private, Semi-Government"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={Status}
        onChangeText={text => setStatus(text)}
      />
      <TextInput
        placeholder="Location (Address)"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={Location}
        onChangeText={text => setLocation(text)}
      />
      <View style={styles.Input_Cont}>
        <TextInput
          placeholder="Longitude"
          placeholderTextColor={'#7F7F7F'}
          style={styles.inputStyle1}
          value={Longitude}
          onChangeText={text => setLongitude(text)}
        />
        <TextInput
          placeholder="Latitude"
          placeholderTextColor={'#7F7F7F'}
          style={styles.inputStyle1}
          value={Latitude}
          onChangeText={text => setLatitude(text)}
        />
      </View>


      <TextInput
        placeholder="Enter Item Description"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        placeholder="Enter Administration Number"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={PhoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TextInput
        placeholder="Apply_Link"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={Link}
        onChangeText={text => setLink(text)}
      />
      <TextInput
        placeholder="Video_Link"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={VideoLink}
        onChangeText={text => setVideoLink(text)}
      />
      <TextInput
        placeholder="City_Link"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={City_Link}
        onChangeText={text => setCity_Link(text)}
      />
      <TextInput
        placeholder="University-Type"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={Type}
        onChangeText={text => setType(text)}
      />
      <TextInput
        placeholder="Campus"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={Campus}
        onChangeText={text => setCampus(text)}
      />
      <TextInput
        placeholder="Province"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle}
        value={Province}
        onChangeText={text => setProvince(text)}
      />
      <View style={styles.Schdule_Cont}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.End} >Starting Date</Text>
          <Text style={styles.Dates}>{StartingDate}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.End} >Ending Date</Text>
          <Text style={styles.Dates}>{EndingDate}</Text>
        </View>

      </View>

      <Text style={styles.Title} >Starting Date</Text>
      <Calendar
        markedDates={{
          [StartingDate]: { selected: true, marked: true },
        }}
        onDayPress={onDayPress}
      />

      <View style={{ marginTop: 20 }}>
        <Text>Selected Date: {StartingDate}</Text>
      </View>
      <Text style={styles.Title}>Ending Date</Text>

      <Calendar
        markedDates={{
          [EndingDate]: { selected: true, marked: true },
        }}
        onDayPress={onDayPress1}
      />

      <View style={{ marginTop: 20 }}>
        <Text>Selected Date: {EndingDate}</Text>
      </View>
      <Text style={{ fontSize: 14, color: "#000", fontFamily: Fonts.SF_SemiBold, marginVertical: '3%' }}>University Poster_Images Backend</Text>
      {route.params.data && route.params.data.poster && route.params.data.poster.map((imageUri, index) => (
        <Image
          key={index}
          source={typeof imageUri === 'string' ? { uri: imageUri } : require('../../../../Assets/Images/uni_logo.png')}
          style={[styles.icon, { width: 100, height: 100, resizeMode: "contain", marginBottom: '2%' }]}
        />
      ))}
      
      {route.params.data && route.params.data.Logo && route.params.data.Logo.map((imageUri, index) => (
        <Image
          key={index}
          source={typeof imageUri === 'string' ? { uri: imageUri } : require('../../../../Assets/Images/uni_logo.png')}
          style={[styles.icon, { width: 100, height: 100, resizeMode: "contain", marginBottom: "2%" }]}
        />
      ))}
      
      {route.params.data && route.params.data.uni && route.params.data.uni.map((imageUri, index) => (
        <Image
          key={index}
          source={typeof imageUri === 'string' ? { uri: imageUri } : require('../../../../Assets/Images/uni_logo.png')}
          style={[styles.icon, { width: 100, height: 100, resizeMode: "contain" }]}
        />
      ))}
      
      

      {renderImages(logoImages, 'New Logo')}
      {renderImages(posterImages, 'New Poster_Images')}
      {renderImages(uniImages, 'New Uni_Images')}

      <TouchableOpacity
      style={styles.pickBtn}
      onPress={() => openImagePicker(setLogoImages, route.params.id)}>
      <Text style={styles.Picker_Txt}>New Logo</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.pickBtn}
      onPress={() => openImagePicker(setPosterImages, route.params.id)}>
      <Text style={styles.Picker_Txt}>New Poster</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.pickBtn}
      onPress={() => openImagePicker(setUniImages, route.params.id)}>
      <Text style={styles.Picker_Txt}>New University Images</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.uploadBtn} onPress={() => { uploadItem(route.params.id); }}>
    <Text style={{ color: '#FFF' }}>Update Data</Text>
  </TouchableOpacity>

    </View>
    <ActivityIndicatorModal visible={isLoading} />
  </ScrollView>
  );
};

export default EditItem;





  


  








