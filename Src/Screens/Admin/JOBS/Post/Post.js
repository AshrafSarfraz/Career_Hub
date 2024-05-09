import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView, TextInput, Alert
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { Calendar } from 'react-native-calendars';
import { styles } from './style';
import ActivityIndicatorModal from '../../../../Components/Loader/ActivityIndicator';

const Job_Post = ({ navigation }) => {
  const [posterImages, setPosterImages] = useState([]);
  const [name, setname] = useState('');
  const [City, setCity] = useState('');
  const [Description, setDescription] = useState('');
  const [Seats, setSeats] = useState('');
  const [Position, setPosition] = useState('');
  const [Location, setLocation] = useState('');
  const [Country, setCountry] = useState('');
  const [Status, setStatus] = useState('');
  const [Qualification, setQualification] = useState('');
  const [Organization, setOrganization] = useState('');
  const [Employment_Type, setEmployment_Type] = useState('');
  const [StartingDate, setStartingDate] = useState('');
  const [EndingDate, setEndingDate] = useState('');
  const [Apply_Des, setApply_Des] = useState('');
  const [Link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState('');
  
    const onDayPress = (day) => {
      setStartingDate(day.dateString);
    };
  
    const onDayPress1 = (day) => {
      setEndingDate(day.dateString);
    };
  
    const openImagePicker = async (setImage) => {
      try {
        const results = await ImageCropPicker.openPicker({
          mediaType: 'photo',
          multiple: true,
        });
  
        if (!results.didCancel) {
          setImage(results.map((result) => result.path));
        }
      } catch (error) {
        setError('Error picking images:', error);
        // Handle error gracefully
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
        setError('Error uploading images:', error);
        // Handle error gracefully
        throw error;
      }
    };
  
    const resetForm = () => {
      setname('');
      setCity('');
      setDescription('');
      setSeats('');
      setPosition('');
      setLocation('');
      setCountry('');
      setStatus('');
      setQualification('');
      setOrganization('');
      setEmployment_Type('');
      setStartingDate('');
      setEndingDate('');
      setApply_Des('');
      setLink('');
    };
  
    const handleUpload = async () => {
      setIsLoading(true); // Start loading indicator
  
      try {
        const posterImageUrls = await uploadImages(posterImages, 'Poster');
  
        await firestore().collection('Jobs-Posting').doc().set({
          poster: posterImageUrls,
          Job_Name: name,
          Job_City: City,
          Description: Description,
          Seats: Seats,
          Status: Status,
          Position: Position,
          Country: Country,
          Qualification: Qualification,
          Organization: Organization,
          Employment_Type: Employment_Type,
          StartingDate: StartingDate,
          EndingDate: EndingDate,
          Apply_Des: Apply_Des,
          Link: Link,
        });
  
        resetForm(); // Reset form fields
  
        navigation.goBack(); // Navigate back
      } catch (error) {
        setError('Error uploading data:', error);
      } 
    };
  
    const renderImages = (images, label) => {
      return (
        <View style={styles.imageContainer}>
          <Text style={styles.imageLabel}>{label}</Text>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </View>
      );
    };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Job-Posting</Text>
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
    

        <TouchableOpacity style={styles.uploadBtn} onPress={() => { handleUpload()}}>
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

export default Job_Post;



