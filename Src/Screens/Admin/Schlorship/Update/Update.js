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
import { styles } from './style';
import ActivityIndicatorModal from '../../../../Components/Loader/ActivityIndicator';

const Schlorship_Update = ({ navigation }) => {
  const route = useRoute();

  const [Logo, setLogo] = useState(route.params.Logo || []);
  const [posterImages, setPosterImages] = useState(route.params.poster || []);
  const [Sch_name, setSch_name] = useState(route.params.Sch_name);
  const [Selected_City, setSelected_City] = useState(route.params.Selected_City);
  const [Province, setProvince] = useState(route.params.Province);
  const [Status, setStatus] = useState(route.params.Status);
  const [description, setDescription] = useState(route.params.description);
  const [Apply_Des, setApply_Des] = useState(route.params.Apply_Des);
  const [Qualification, setQualification] = useState(route.params.Qualification);
  const [StartingDate, setStartingDate] = useState(route.params.StartingDate);
  const [EndingDate, setEndingDate] = useState(route.params.EndingDate);
  const [Link, setLink] = useState(route.params.Link);
  const [Sch_Type, setSch_Type] = useState(route.params.Sch_Type);
  const [VideoLink, setVideoLink] = useState(route.params.VideoLink);
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
      }
    } catch (error) {
      setError('Error picking images: ' + error.message);
    }
  };
  
  const uploadImages = async (images, categoryName) => {
    try {
      const uploadTasks = images.map(async (image, index) => {
        const imageName = `${categoryName}_${index}.jpg`;
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

  const Update_Data = async (itemId) => {
    try {
      setIsLoading(true);
    const LogoImageUrls = Logo.length > 0 ? await uploadImages(Logo, 'Logo') : route.params.data.Logo;
     const posterImageUrls = posterImages.length > 0 ? await uploadImages(posterImages, 'Poster', itemId) : route.params.data.poster;
      const updatedData = {};
      if (LogoImageUrls) updatedData.Logo = LogoImageUrls;
      if (posterImageUrls) updatedData.poster = posterImageUrls;
      if (Sch_name) updatedData.Sch_name = Sch_name;
      if (Selected_City) updatedData.Selected_City = Selected_City;
      if (Province) updatedData.Province = Province;
      if (Status) updatedData.Status = Status;
      if (description) updatedData.description = description;
      if (Apply_Des) updatedData.Apply_Des = Apply_Des;
      if (Qualification) updatedData.Qualification = Qualification;
      if (StartingDate) updatedData.StartingDate = StartingDate;
      if (EndingDate) updatedData.EndingDate = EndingDate;
      if (Sch_Type) updatedData.Sch_Type = Sch_Type;
      if (VideoLink) updatedData.VideoLink = VideoLink;
      if (Link) updatedData.Link = Link;
      
      await firestore()
        .collection('Scholarship')
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
      <Text style={styles.headerText}>Update Scholarship</Text>
    </View>

    <View style={styles.Body_container}>

    <TextInput
      placeholder="ScholarShip Name"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Sch_name}
      onChangeText={text => setSch_name(text)}
    />
    <TextInput
      placeholder="In/Out Country"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Status}
      onChangeText={text => setStatus(text)}
    />
    <TextInput
      placeholder="ScholarShip Type"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Sch_Type}
      onChangeText={text => setSch_Type(text)}
    />
    <TextInput
      placeholder="ScholarShip Description"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={description}
      onChangeText={text => setDescription(text)}
    />
    <TextInput
    placeholder="Apply Description"
    placeholderTextColor={'#7F7F7F'}
    style={styles.inputStyle}
    value={Apply_Des}
    onChangeText={text => setApply_Des(text)}
  />
    <TextInput
      placeholder="Selected City"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Selected_City}
      onChangeText={text => setSelected_City(text)}
    />

    <TextInput
      placeholder="Qualification"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Qualification}
      onChangeText={text => setQualification(text)}
    />
    <TextInput
      placeholder="Apply Link"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Link}
      onChangeText={text => setLink(text)}
    />
    <TextInput
      placeholder="Province"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Province}
      onChangeText={text => setProvince(text)}
    />
    <TextInput
      placeholder="Video_Link"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={VideoLink}
      onChangeText={text => setVideoLink(text)}
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


    {renderImages(Logo, 'Logo')}
    {renderImages(posterImages, 'Poster_Images')}


    <TouchableOpacity
      style={styles.pickBtn}
      onPress={() => openImagePicker(setLogo)}>
      <Text style={styles.Picker_Txt}>New Logo</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.pickBtn}
      onPress={() => openImagePicker(setPosterImages)}>
      <Text style={styles.Picker_Txt}>New Poster</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.uploadBtn} onPress={() => { Update_Data(route.params.id); }}>
    <Text style={{ color: '#FFF' }}>Update Data</Text>
  </TouchableOpacity>
  </View>
    <ActivityIndicatorModal visible={isLoading} />
  </ScrollView>
  );
};

export default Schlorship_Update;

