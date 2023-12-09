import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  ScrollView,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { Calendar } from 'react-native-calendars'


const Post_Data = ({navigation}) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [name, setName] = useState('');
  const [City, setCity] = useState('');
  const [Status, setStatus] = useState('');
  const [Location, setLocation] = useState('');
  const [Longitude, setLongitude] = useState('');
  const [Latitude, setLatitude] = useState('');
  const [description, setDescription] = useState('');
  const [StartingDate, setStartingDate] = useState('2000-01-01');
  const [EndingDate, setEndingDate] = useState('2000-01-01');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Link, setLink] = useState('');
  const [VideoLink, setVideoLink] = useState('');
 

  const onDayPress = (day) => {
    setStartingDate(day.dateString);
  };

  const onDayPress1 = (day) => {
    setEndingDate(day.dateString);
  };

  // Pick Multiple Images
  const openImagePicker = () => {
    ImageCropPicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    })
      .then(images => {
        console.log(images);
        setSelectedImages(images);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Pick Video
 

  
 // upload Single Image
 const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      openGallery();
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const openGallery = async () => {
  const result = await ImageCropPicker.openPicker({ mediaType: 'photo' });
  if (!result.didCancel) {
    console.log(result);
    setImageData(result);
  }
};

const uploadImage = async (imageUrl = null) => {
  if (imageData) {
    const reference = storage().ref(imageData.path);
    await reference.putFile(imageData.path);
    const url = await reference.getDownloadURL();
    console.log(url);
     uploadItem(imageUrl || url);
  }
};
// Upload Single Image




 //Upload Multiple Images in Firebase 
 const uploadMultipleImages = async () => {
  const uploadTasks = selectedImages.map(async image => {
    const reference = storage().ref(image.path);
    await reference.putFile(image.path);
    return reference.getDownloadURL();
  });

  try {
    const downloadURLs = await Promise.all(uploadTasks);
    console.log(downloadURLs);
    uploadItem(null,downloadURLs);
  } catch (error) {
    console.error('Error uploading images:', error);
  }
};


  // Upload OverAll Item in Which image Url Used to Send and Get Item

  const uploadItem = async (imageUrl, imageUrls) => {
    try {
      await firestore().collection('items').add({
        name: name,
        City: City,
        Status: Status,
        Location: Location,
        Longitude: Longitude,
        Latitude: Latitude,
        description: description,
        StartingDate: StartingDate,
        EndingDate: EndingDate,
        PhoneNumber: PhoneNumber,
        Link: Link,
        VideoLink:VideoLink,
        imageUrls: imageUrls || [],
        // imageUrl: imageUrl|| '',
      });
  
      console.log('Item added!');
    } catch (error) {
      console.error('Error adding item to Firestore:', error);
    }
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Post_Data With Images ' Single ' and 'Multiple'</Text>
        </View>
        {imageData !== null ? (
          <Image source={{ uri: imageData.path }} style={styles.imageStyle} />
        ) : null} 

        {selectedImages.length > 0 && (
          <View>
            <Text>Selected Images:</Text>
            {selectedImages.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image.path }}
                style={styles.multiImageStyle}
              />
            ))}
          </View>
        )}


       
        <TextInput
          placeholder="University Name"
          placeholderTextColor={'#666666'}
          style={styles.inputStyle}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="City Name"
          placeholderTextColor={'#666666'}
          style={styles.inputStyle}
          value={City}
          onChangeText={text => setCity(text)}
        />
        <TextInput
          placeholder="Goverment, Private, Semi-Gov"
          placeholderTextColor={'#666666'}
          style={styles.inputStyle}
          value={Status}
          onChangeText={text => setStatus(text)}
        />
        <TextInput
          placeholder="Location (Address)"
          placeholderTextColor={'#666666'}
          style={styles.inputStyle}
          value={Location}
          onChangeText={text => setLocation(text)}
        />
        <View  style={styles.Input_Cont}>
        <TextInput
          placeholder="Longitude"
          placeholderTextColor={'#666666'}
          style={styles.inputStyle1}
          value={Longitude}
          onChangeText={text => setLongitude(text)}
        />
        <TextInput
        placeholder="Latitude"
        placeholderTextColor={'#666666'}
        style={styles.inputStyle1}
        value={Latitude}
        onChangeText={text => setLatitude(text)}
      />


        </View>
    

        <View style={styles.Schdule_Cont}>
        <View style={{alignItems:"center"}}>
        <Text style={styles.End} >Starting Date</Text>
        <Text style={styles.Dates}>{StartingDate}</Text>
        </View>
        <View style={{alignItems:"center"}}>
        <Text style={styles.End} >Ending Date</Text>
        <Text style={styles.Dates}>{EndingDate}</Text>
        </View>
       
        </View>

        <TextInput
          placeholder="Enter Item Description"
          placeholderTextColor={'#666666'}
          style={styles.inputStyle}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TextInput
        placeholder="Enter Administration Number"
        placeholderTextColor={'#666666'}
        style={styles.inputStyle}
        value={PhoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TextInput
      placeholder="Link"
      placeholderTextColor={'#666666'}
      style={styles.inputStyle}
      value={Link}
      onChangeText={text => setLink(text)}
    />
    <TextInput
    placeholder="Video Link"
    placeholderTextColor={'#666666'}
    style={styles.inputStyle}
    value={VideoLink}
    onChangeText={text => setVideoLink(text)}
  />

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
      <Text style={styles.selected_Date}  >Selected Date: {EndingDate}</Text>
    </View>
       
    {/*
 <TouchableOpacity
        style={styles.pickBtn}
        onPress={() => {
          requestCameraPermission();
        }}>
        <Text style={styles.BtnTxt} >Pick Posters</Text>
      </TouchableOpacity>  
    */}
         
      
     

         <TouchableOpacity
          style={styles.pickBtn}
          onPress={() => {
            openImagePicker();
          }}>
          <Text style={styles.BtnTxt} >Pick Multiple Images</Text>
        </TouchableOpacity>
      

        <TouchableOpacity
          style={styles.uploadBtn}
          onPress={() => { 
            uploadMultipleImages();
            // uploadImage();
            navigation.navigate('GET')
          }}>
          <Text style={{ color: '#Fff' }}>Upload Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.uploadBtn}
        onPress={() => { 
          navigation.navigate('GET')
        }}>
        <Text style={{ color: '#Fff' }}>Get Data</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Post_Data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  inputStyle: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    alignSelf: 'center',
    color:'black',
    fontSize:14
  },
   Input_Cont:{
    flexDirection:"row",
    width:"90%",
     alignSelf:"center",
     justifyContent:"space-between"
   },
  inputStyle1: {
    width: '48%',
    height: 55,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    alignSelf: 'center',
    color:'black',
    fontSize:14
  },
  Schdule_Cont:{
   marginTop:"5%",
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-evenly",
   backgroundColor:"purple",
   height:70,
   alignSelf:"center",
   borderRadius:10,
   width:"90%"
  },
  Dates:{
   fontSize:16,color:'white',
   lineHeight:25,
   fontWeight:"bold"
  },
  End:{
    fontSize:18,color:'black',
   lineHeight:25,
   fontWeight:"bold"
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
  Title:{
    fontSize:24,color:'black',
    lineHeight:30,
    fontWeight:"bold",
    marginVertical:"5%",
    alignSelf:"center"
  },
  BtnTxt:{
    fontSize:14,color:'black',
    lineHeight:30,
    fontWeight:"bold",
    alignSelf:"center"
  },
  videoStyle: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
});
