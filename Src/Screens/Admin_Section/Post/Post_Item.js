import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView, TextInput, Alert
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { Colors } from '../../../Themes/Colors';
import { Fonts } from '../../../Themes/Fonts';
import ActivityIndicatorModal from '../../../Components/Loader/ActivityIndicator';


const Post_Data = ({ navigation }) => {
  const [Logo, setLogo] = useState([]);
  const [posterImages, setPosterImages] = useState([]);
  const [uniImages, setUniImages] = useState([]);
  const [name, setName] = useState('');
  const [City, setCity] = useState('');
  const [Province, setProvince] = useState('');
  const [Campus, setCampus] = useState('');
  const [City_Link, setCity_Link] = useState('');
  const [Status, setStatus] = useState('');
  const [Location, setLocation] = useState('');
  const [Longitude, setLongitude] = useState('');
  const [Latitude, setLatitude] = useState('');
  const [description, setDescription] = useState('');
  const [StartingDate, setStartingDate] = useState('2000-01-01');
  const [EndingDate, setEndingDate] = useState('2000-01-01');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Link, setLink] = useState('');
  const [Type, setType] = useState('');
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
    const uniImageUrls = await uploadImages(uniImages, 'Uni');
    try {
      await firestore().collection('Education').doc().set({
        Logo: LogoImageUrls,
        poster: posterImageUrls,
        uni: uniImageUrls,
        name: name,
        City: City,
        Province: Province,
        Campus: Campus,
        City_Link: City_Link,
        Status: Status,
        Location: Location,
        Longitude: Longitude,
        Latitude: Latitude,
        description: description,
        StartingDate: StartingDate,
        EndingDate: EndingDate,
        PhoneNumber: PhoneNumber,
        Link: Link,
        VideoLink: VideoLink,
        Type: Type

      });
      //  console.log('Images uploaded successfully!');
        setName(''),setDescription(''), setLongitude(''), setLatitude(''),
        setLocation(''), setPhoneNumber(''), setLink(''),setCampus(''),setCity(''),setCity_Link('')
    } catch (error) {
      // console.error('Error storing images in Firestore:', error);
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
        <Text style={styles.headerText}>Post_Data</Text>
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
          placeholder="Government, Private, Semi-Government"
          placeholderTextColor={'#7F7F7F'}
          style={styles.inputStyle}
          value={Status}
          onChangeText={text => setStatus(text)}
        />
        <TextInput
          placeholder="University-Type"
          placeholderTextColor={'#7F7F7F'}
          style={styles.inputStyle}
          value={Type}
          onChangeText={text => setType(text)}
        />
        <TextInput
          placeholder="Enter Item Description"
          placeholderTextColor={'#7F7F7F'}
          style={styles.inputStyle}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TextInput
          placeholder="City Name"
          placeholderTextColor={'#7F7F7F'}
          style={styles.inputStyle}
          value={City}
          onChangeText={text => setCity(text)}
        />
        <TextInput
          placeholder="City_Link"
          placeholderTextColor={'#7F7F7F'}
          style={styles.inputStyle}
          value={City_Link}
          onChangeText={text => setCity_Link(text)}
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
{/* 
   

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
        {renderImages(uniImages, 'Uni_Images')}


        <TouchableOpacity
          style={styles.pickBtn}
          onPress={() => openImagePicker(setLogo)}>
          <Text style={styles.Picker_Txt}>Pick Uni_Logo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pickBtn}
          onPress={() => openImagePicker(setPosterImages)}>
          <Text style={styles.Picker_Txt}>Pick Poster</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pickBtn}
          onPress={() => openImagePicker(setUniImages)}>
          <Text style={styles.Picker_Txt}>Pick Uni-Images</Text>
        </TouchableOpacity>
        */}
        <TouchableOpacity style={styles.uploadBtn} onPress={() => { handleUpload() }}>
          <Text style={{ color: '#FFF' }}>Upload Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadBtn} onPress={() => { navigation.navigate('Get_Data') }}>
          <Text style={{ color: '#FFF' }}>Get All Data</Text>
        </TouchableOpacity>
      </View>
      <ActivityIndicatorModal visible={isLoading} />
    </ScrollView>
  );
};

export default Post_Data;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  Body_container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: Colors.Green,
    elevation: 5,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.White
  },
  inputStyle: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000000',
    paddingHorizontal: 20,
    marginTop: 15,
    alignSelf: 'center',
    color: 'black',
    fontSize: 14,
    height: 50
  },
  Input_Cont: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  inputStyle1: {
    width: '48%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    alignSelf: 'center',
    color: 'black',
    fontSize: 14
  },
  Schdule_Cont: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: Colors.Green,
    height: 70,
    alignSelf: "center",
    borderRadius: 10,
    width: "100%"
  },
  Dates: {
    fontSize: 16, color: 'black',
    lineHeight: 25,
    fontFamily: Fonts.SF_SemiBold
  },
  End: {
    fontSize: 18, color: '#FFFFFF',
    lineHeight: 25,
    fontFamily: Fonts.SF_Black
  },
  pickBtn: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  uploadBtn: {
    backgroundColor: '#5246f2',
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  imageStyle: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  pickBtn: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  multiImageStyle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  Title: {
    fontSize: 24, color: 'black',
    lineHeight: 30,
    fontWeight: "bold",
    marginVertical: "5%",
    alignSelf: "center"
  },
  imageContainer: {
    margin: 10,

  },
  imageLabel: {
    fontSize: 18,
    fontFamily: Fonts.SF_SemiBold,
    color: "#000",
    marginBottom: 10,

  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  pickBtn: {
    width: '100%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.Green
  },
  uploadBtn: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  Picker_Txt: {
    color: Colors.White,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Fonts.SF_SemiBold
  }
});

