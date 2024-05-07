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
import ActivityIndicatorModal from '../../../../Components/Loader/ActivityIndicator';
import { Calendar } from 'react-native-calendars';
import { styles } from './style';

const SchlorShip_Post = ({ navigation }) => {
  const [Logo, setLogo] = useState([]);
  const [posterImages, setPosterImages] = useState([]);
  const [Sch_name, setSch_name] = useState('');
  const [Selected_City, setSelected_City] = useState('');
  const [Province, setProvince] = useState('');
  const [Status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [Apply_Des, setApply_Des] = useState('');
  const [Qualification, setQualification] = useState('');
  const [StartingDate, setStartingDate] = useState('2000-01-01');
  const [EndingDate, setEndingDate] = useState('2000-01-01');
  const [Link, setLink] = useState('');
  const [Sch_Type, setSch_Type] = useState('');
  const [VideoLink, setVideoLink] = useState('');
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
      setError.error('Error picking images:', error);
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
      setError.error('Error uploading images:', error);
    }
  };

  const handleUpload = async () => {
    setIsLoading(true);
    const LogoImageUrls = await uploadImages(Logo, 'Logo');
    const posterImageUrls = await uploadImages(posterImages, 'Poster');
    try {
      await firestore().collection('Scholarship').doc().set({
        Logo: LogoImageUrls,
        poster: posterImageUrls,
        Sch_name: Sch_name,
        Selected_City: Selected_City,
        Province: Province,
        Status: Status,
        description: description,
        Apply_Des:Apply_Des,
        Qualification:Qualification,
        StartingDate: StartingDate,
        EndingDate: EndingDate,
        Link: Link,
        VideoLink: VideoLink,
        Sch_Type: Sch_Type
      });
      
    } catch (error) {
      setError('Error storing images in Firestore:', error);
    } finally {
      setIsLoading(false); // Hide activity indicator modal after upload completes
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
        <Text style={styles.headerText}>Post ScholarShip</Text>
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

        <TouchableOpacity style={styles.uploadBtn} onPress={() => { handleUpload() }}>
          <Text style={{ color: '#FFF' }}>Upload Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadBtn} onPress={() => { navigation.goBack() }}>
          <Text style={{ color: '#FFF' }}>Get All Data</Text>
        </TouchableOpacity>
      </View>
      <ActivityIndicatorModal visible={isLoading} />
    </ScrollView>
  );
};

export default SchlorShip_Post;



