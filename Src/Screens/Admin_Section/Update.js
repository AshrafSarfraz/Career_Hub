import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,TextInput
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { Fonts } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';

const EditItem = ({ navigation }) => {
  const route = useRoute();
  // console.log('...',route.params.id)

   
  
  const [Logo, setLogo] = useState(route.params.Logo || []);
  const [posterImages, setPosterImages] = useState(route.params.poster || []);
  const [uniImages, setUniImages] = useState(route.params.uni || []);
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
      console.error('Error picking images:', error);
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
      console.error('Error uploading images:', error);
    }
  };

  const uploadItem = async () => {
    try {
      const LogoImageUrls = Logo.length > 0 ? await uploadImages(Logo, 'Logo') : route.params.data.Logo;
      const posterImageUrls = posterImages.length > 0 ? await uploadImages(posterImages, 'Poster') : route.params.data.poster;
      const uniImageUrls = uniImages.length > 0 ? await uploadImages(uniImages, 'Uni') : route.params.data.uni;
      
      const updatedData = {
        Logo: LogoImageUrls,
        poster: posterImageUrls,
        uni: uniImageUrls,
        name: name,
        City: City,
        City_Link: City_Link,
        Province: Province,
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
      };
  
      await firestore()
        .collection('Education')
        .doc(route.params.id)
        .update(updatedData);
  
      console.log('Item updated!');
      navigation.goBack();
    } catch (error) {
      console.error('Error updating item:', error);
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
    <Text style={styles.headerText}>Edit_Data</Text>
    </View>

    <View style={styles. Body_container}>
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
    <View  style={styles.Input_Cont}>
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
  <View style={{alignItems:"center"}}>
  <Text style={styles.End} >Starting Date</Text>
  <Text style={styles.Dates}>{StartingDate}</Text>
  </View>
  <View style={{alignItems:"center"}}>
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
  <Text style={{fontSize:14,color:"#000",fontFamily:Fonts.SF_SemiBold,marginVertical:'3%'}}>University Poster_Images Backend</Text>
  {route.params.data && route.params.data.poster && route.params.data.poster.map((imageUri, index) => (
    <Image
      key={index}
      source={imageUri ?
         { uri: imageUri } :
          require('../../Assets/Images/uni_logo.png')}
      style={[styles.icon, { width: 100, height: 100, resizeMode: "contain" ,marginBottom:'2%'}]}
    />
  ))}
  <Text style={{fontSize:14,color:"#000",fontFamily:Fonts.SF_SemiBold,marginVertical:'3%'}}>University Logo Backend</Text>
  {route.params.data && route.params.data.Logo && route.params.data.Logo.map((imageUri, index) => (
    <Image
      key={index}
      source={imageUri ?
         { uri: imageUri } :
          require('../../Assets/Images/uni_logo.png')}
      style={[styles.icon, { width: 100, height:100, resizeMode: "contain" ,marginBottom:"2%"}]}
    />
  ))}
   <Text style={{fontSize:14,color:"#000",fontFamily:Fonts.SF_SemiBold,marginVertical:'3%'}}>University Images Backend</Text>
  {route.params.data && route.params.data.uni && route.params.data.uni.map((imageUri, index) => (
    <Image
      key={index}
      source={imageUri ?
         { uri: imageUri } :
          require('../../Assets/Images/uni_logo.png')}
      style={[styles.icon, { width: 100, height: 100, resizeMode: "contain" }]}
    />
  ))}

  {renderImages( Logo, 'New Logo')}
  {renderImages(posterImages, 'New Poster_Images')}
  {renderImages(uniImages, 'New Uni_Images')}

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
<TouchableOpacity
  style={styles.pickBtn}
  onPress={() => openImagePicker(setUniImages)}>
  <Text style={styles.Picker_Txt}>New Uni-Images</Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.uploadBtn}  onPress={() => {uploadItem(),navigation.navigate('Get_Data'); }}>
        <Text style={{ color: '#FFF' }}>Update Data</Text>
      </TouchableOpacity>

    
      </View>
      </ScrollView>
  );
};

export default EditItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    },
    Body_container: {
      flex: 1,
      backgroundColor:'white',
      padding:10
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
    color:Colors.White
    },
    inputStyle: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor:'#000000',
    paddingHorizontal: 20,
    marginTop: 15,
    alignSelf: 'center',
    color:'black',
    fontSize:14,
    height:50
    },
    Input_Cont:{
    flexDirection:"row",
    width:"100%",
    alignSelf:"center",
    justifyContent:"space-between"
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
    color:'black',
    fontSize:14
    },
    Schdule_Cont:{
    marginTop:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    backgroundColor:Colors.Green,
    height:70,
    alignSelf:"center",
    borderRadius:10,
    width:"100%"
    },
    Dates:{
    fontSize:16,color:'black',
    lineHeight:25,
    fontFamily:Fonts.SF_SemiBold
    },
    End:{
    fontSize:18,color:'#FFFFFF',
    lineHeight:25,
    fontFamily:Fonts.SF_Black
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
  imageContainer: {
    margin:10,

    
  },
  imageLabel: {
    fontSize: 14,
    fontFamily:Fonts.SF_SemiBold,
    color:"#000000",
   
  },
  image: {
    width: 150,
    height:150,
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
    backgroundColor:Colors.Green
  },
  uploadBtn: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20
  },
  Picker_Txt:{
    color:Colors.White,
    fontSize:14,
    fontWeight:'500',
    fontFamily:Fonts.SF_SemiBold
  }
});


