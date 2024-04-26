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

const Jobs_Update = ({ navigation }) => {
  const route = useRoute();
  const [posterImages, setPosterImages] = useState(route.params.poster ? [...route.params.poster] : [])
  const [name, setname] = useState(route.params.data.name);
  const [City, setCity] = useState(route.params.data.City);
  const [Description, setDescription] = useState(route.params.data.Description);
  const [Seats, setSeats] = useState(route.params.data.Seats);
  const [Position, setPosition] = useState(route.params.data.Position);
  const [Location, setLocation] = useState(route.params.data.Location);
  const [Country, setCountry] = useState(route.params.data.Country);
  const [Status, setStatus] = useState(route.params.data.Status);
  const [Qualification, setQualification] = useState(route.params.data.Qualification);
  const [Organization, setOrganization] = useState(route.params.data.Organization);
  const [Employment_Type, setEmployment_Type] = useState(route.params.data.Employment_Type);
  const [StartingDate, setStartingDate] = useState(route.params.data.StartingDate);
  const [EndingDate, setEndingDate] = useState(route.params.data.EndingDate);
  const [Apply_Des, setApply_Des] = useState(route.params.data.Apply_Des);
  const [Link, setLink] = useState(route.params.data.Link);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState('');

    // Call uploadItem function after setting images
    const openImagePicker = async () => {
      try {
        const results = await ImageCropPicker.openPicker({
          mediaType: 'photo',
          multiple: true,
        });
    
        if (results && !results.didCancel) {
          const updatedImages = results.map((result) => result.path);
          setPosterImages(updatedImages);
          uploadItem(); // Call uploadItem function after setting images
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

  const uploadItem = async () => {
    try {
      setIsLoading(true);
  
      const itemId = route.params.itemId; // Get the item ID from route params
  
      // Upload poster images
      const posterImageUrls = posterImages.length > 0 ? await uploadImages(posterImages, 'Poster', itemId) : route.params.poster;
  
      // Prepare updated data
      const updatedData = {
        poster: posterImageUrls,
        name,
        City,
        Description,
        Seats,
        Position,
        Location,
        Country,
        Status,
        Qualification,
        StartingDate,
        EndingDate,
        Organization,
        Link,
        Employment_Type,
        Apply_Des,
      };
  
      // Update Firestore document
      await firestore()
        .collection('Jobs')
        .doc(itemId)
        .update(updatedData);
  
      setIsLoading(false);
      navigation.goBack();
    } catch (error) {
      setError('Error updating item: ' + error.message);
      setIsLoading(false);
    }
  };
  

  
  // Call uploadItem function when the upload button is pressed
  <TouchableOpacity style={styles.uploadBtn} onPress={uploadItem}>
    <Text style={{ color: '#FFF' }}>Upload Data</Text>
  </TouchableOpacity>
  
      


  

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
      <Text style={styles.headerText}>Job-Update</Text>
    </View>

    <View style={styles.Body_container}>

    <TextInput
      placeholder="Job Name"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={name}
      onChangeText={text => setname(text)}
    />
    <TextInput
      placeholder="Job City"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={City}
      onChangeText={text => setCity(text)}
    />
    <TextInput
    placeholder="Government, Private"
    placeholderTextColor={'#7F7F7F'}
    style={styles.inputStyle}
    value={Status}
    onChangeText={text => setStatus(text)}
  />
    <TextInput
      placeholder="Description"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Description}
      onChangeText={text => setDescription(text)}
    />
    <TextInput
      placeholder="Seats"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Seats}
      onChangeText={text => setSeats(text)}
    />
    <TextInput
      placeholder="Position"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Position}
      onChangeText={text => setPosition(text)}
    />
    <TextInput
      placeholder="Location"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Location}
      onChangeText={text => setLocation(text)}
    />

    <TextInput
      placeholder="Country"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Country}
      onChangeText={text => setCountry(text)}
    />
    <View style={styles.Input_Cont}>
      <TextInput
        placeholder="Qualification"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle1}
        value={Qualification}
        onChangeText={text => setQualification(text)}
      />
      <TextInput
        placeholder="Organization"
        placeholderTextColor={'#7F7F7F'}
        style={styles.inputStyle1}
        value={Organization}
        onChangeText={text => setOrganization(text)}
      />
    </View>
    <TextInput
      placeholder="Employment_Type"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Employment_Type}
      onChangeText={text => setEmployment_Type(text)}
    />
    <TextInput
      placeholder="Apply_Des"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Apply_Des}
      onChangeText={text => setApply_Des(text)}
    />
 
    <TextInput
      placeholder="Link"
      placeholderTextColor={'#7F7F7F'}
      style={styles.inputStyle}
      value={Link}
      onChangeText={text => setLink(text)}
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

    {renderImages(posterImages, 'Job_Poster')}


    <TouchableOpacity
      style={styles.pickBtn}
      onPress={() => openImagePicker(setPosterImages)}>
      <Text style={styles.Picker_Txt}>Pick Poster</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.uploadBtn} onPress={() => { uploadItem() }}>
      <Text style={{ color: '#FFF' }}>Upload Data</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.uploadBtn} onPress={() => { navigation.navigate('Job_Data') }}>
      <Text style={{ color: '#FFF' }}>Get All Data</Text>
    </TouchableOpacity>
  </View>
    <ActivityIndicatorModal visible={isLoading} />
  </ScrollView>
  );
};

export default Jobs_Update;





  


  








