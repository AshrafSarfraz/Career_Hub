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
  console.log('...',route.params.id)

  const [Logo, setLogo] = useState({
    assets: route.params.user ? data.user.map((url, index) => ({ uri: url, fileName: `image_${index}.jpg` })) : [],
  });
  
  const [posterImages, setPosterImages] = useState({
    assets: route.params.poster ? data.poster.map((url, index) => ({ uri: url, fileName: `image_${index}.jpg` })) : [],
  });
  
  const [uniImages, setUniImages] = useState({
    assets: route.params.uni ? data.uni.map((url, index) => ({ uri: url, fileName: `image_${index}.jpg` })) : [],
  });

  const [name, setName] = useState(route.params.data.name);
  const [City, setCity] = useState(route.params.data.City);
  const [City_Link, setCity_Link] = useState(route.params.data.City_Link);
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

  console.log(Logo)
  console.log(posterImages)

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
      const LogoImageUrls = await uploadImages(Logo.assets, 'Logo');
      const posterImageUrls = await uploadImages(posterImages.assets, 'Poster');
      const uniImageUrls = await uploadImages(uniImages.assets, 'Uni');
      const updatedData = {
        Logo: LogoImageUrls,
        poster: posterImageUrls,
        uni: uniImageUrls,
        name: name,
        City: City,
        City_Link:City_Link,
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
        Type:Type
      };

      await firestore()
      .collection('items')
      .doc(data.id)
      .update(updatedData);

      console.log('Item updated!');
      navigation.goBack();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

 

  const renderImages = (images, label) => {
    if (!images || !Array.isArray(images)) {
      console.warn(`Invalid ${label} images`);
      return null;
    }

    return (
      <View style={styles.imageContainer}>
        <Text style={styles.imageLabel}>{label}</Text>
        {images.map((image, index) => (
          <View key={index}>
            {console.log('Image URI:', image.uri)}
            <Image source={{ uri: image.uri }} style={styles.image} />
          </View>
        ))}
      </View>
    );
  };
  console.log('Poster Images:', route.params.data.poster);
console.log('Uni Images:', route.params.data.uni);

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
  <Text>Poster_Images</Text>
  {route.params.data && route.params.data.poster && route.params.data.poster.map((imageUri, index) => (
    <Image
      key={index}
      source={imageUri ?
         { uri: imageUri } :
          require('../../Assets/Images/uni_logo.png')}
      style={[styles.icon, { width: 35, height: 35, resizeMode: "contain" }]}
    />
  ))}
  <Text>lOGO</Text>
  {route.params.data && route.params.data.user && route.params.data.user.map((imageUri, index) => (
    <Image
      key={index}
      source={imageUri ?
         { uri: imageUri } :
          require('../../Assets/Images/uni_logo.png')}
      style={[styles.icon, { width: 35, height: 35, resizeMode: "contain" }]}
    />
  ))}
   <Text>Uni_Images</Text>
  {route.params.data && route.params.data.uni && route.params.data.uni.map((imageUri, index) => (
    <Image
      key={index}
      source={imageUri ?
         { uri: imageUri } :
          require('../../Assets/Images/uni_logo.png')}
      style={[styles.icon, { width: 35, height: 35, resizeMode: "contain" }]}
    />
  ))}


     
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
      <TouchableOpacity style={styles.uploadBtn}  onPress={() => {uploadItem(),navigation.goBack(); }}>
        <Text style={{ color: '#FFF' }}>Upload Data</Text>
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
    margin: 10,
    
  },
  imageLabel: {
    fontSize: 18,
    fontFamily:Fonts.SF_SemiBold,
    color:"#000",
    marginBottom: 10,
   
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




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import storage from '@react-native-firebase/storage';
// import firestore from '@react-native-firebase/firestore';
// import { useRoute } from '@react-navigation/native';
// import { Calendar } from 'react-native-calendars';

// const EditItem = ({ navigation }) => {
//   const route = useRoute();
  
//   const [imageData, setImageData] = useState({
//     assets: route.params.data.imageUrls.map((url, index) => ({ uri: url, fileName: `image_${index}.jpg` })),
//   });
//   const [name, setName] = useState(route.params.data.name);
//   const [City, setCity] = useState(route.params.data.City);
//   const [Status, setStatus] = useState(route.params.data.Status);
//   const [Location, setLocation] = useState(route.params.data.Location);
//   const [Longitude, setLongitude] = useState(route.params.data.Longitude);
//   const [Latitude, setLatitude] = useState(route.params.data.Latitude);
//   const [description, setDescription] = useState(route.params.data.description);
//   const [StartingDate, setStartingDate] = useState(route.params.data.StartingDate);
//   const [EndingDate, setEndingDate] = useState(route.params.data.EndingDate);
//   const [PhoneNumber, SetPhoneNumber] = useState(route.params.data.PhoneNumber);
//   const [Link, SetLink] = useState(route.params.data.Link);
//   const [VideoLink, setVideoLink] = useState(route.params.data.VideoLink);
//   const [updateIndices, setUpdateIndices] = useState([]);


//    const onDayPress = (day) => {
//     setStartingDate(day.dateString);
//   };
//   const onDayPress1 = (day) => {
//     setEndingDate(day.dateString);
//   };


//   const openImagePicker = () => {
//     ImagePicker.openPicker({
//       multiple: true,
//       waitAnimationEnd: false,
//       includeExif: true,
//       forceJpg: true,
//     })
//       .then(images => {
//         console.log(images);
//         setImageData({
//           assets: images.map((image, index) => ({ uri: image.path, fileName: `image_${index}.jpg` })),
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const uploadImages = async () => {
//     const uploadTasks = imageData.assets.map(async image => {
//       const reference = storage().ref(image.fileName);
//       await reference.putFile(image.uri);
//       return reference.getDownloadURL();
//     });

//     try {
//       const downloadURLs = await Promise.all(uploadTasks);
//       console.log(downloadURLs);
//       return downloadURLs;
//     } catch (error) {
//       console.error('Error uploading images:', error);
//       throw error;
//     }
//   };

//   //update Selected Images
//   // ... (previous code remains unchanged)

// // Function to update only the last two selected images
// const updateSelectedImages = async () => {
//   try {
//     const ImageUrls = await uploadImages();

//     // Update only the last two images
//     const updatedImages = [...imageData.assets];
//     const totalImages = updatedImages.length;

//     // Check if there are at least two images to update
//     if (totalImages >= 2) {
//       const lastIndex = totalImages - 1;
//       const secondToLastIndex = totalImages - 2;

//       // Update the last image
//       updatedImages[lastIndex].uri = ImageUrls[lastIndex];

//       // Update the second to last image
//       updatedImages[secondToLastIndex].uri = ImageUrls[secondToLastIndex];

//       // Update the state with the modified images
//       setImageData({ assets: updatedImages });

//       // Reset the update indices
//       setUpdateIndices([]);
//     } else {
//       console.warn('There are not enough images to update.');
//     }
//   } catch (error) {
//     console.error('Error updating images:', error);
//   }
// };

// // ... (rest of the code remains unchanged)

  


  // const uploadItem = async () => {
  //   try {
  //     const newImageUrls = await uploadImages();
  //     const updatedData = {
  //       name: name,
  //       City:City,
  //       Status:Status,
  //       Location:Location,
  //       Longitude:Longitude,
  //       Latitude:Latitude,
  //       description: description,
  //       StartingDate:StartingDate,
  //       EndingDate:EndingDate,
  //       PhoneNumber:PhoneNumber,
  //       Link:Link,
  //       imageUrls: newImageUrls,
  //       VideoLink:VideoLink
  //     };

  //     await firestore()
  //       .collection('items')
  //       .doc(route.params.id)
  //       .update(updatedData);

  //     console.log('Item updated!');
  //     navigation.goBack();
  //   } catch (error) {
  //     console.error('Error updating item:', error);
  //   }
  // };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Edit Item</Text>
//         </View>

//         {imageData && imageData.assets && imageData.assets.length > 0 ? (
//           <ScrollView horizontal>
//             {imageData.assets.map((image, index) => (
//               <Image
//                 key={index}
//                 source={{ uri: image.uri }}
//                 style={styles.imageStyle}
//               />
//             ))}
//           </ScrollView>
//         ) : null}


//         <TextInput
//         placeholder="Enter Item Name"
//         style={styles.inputStyle}
//         value={name}
//         onChangeText={text => setName(text)}
//       />
//       <TextInput
//         placeholder="Enter City"
//         style={styles.inputStyle}
//         value={City}
//         onChangeText={text => setCity(text)}
//       />
//       <TextInput
//         placeholder="Gov , Private,SemiGov"
//         style={styles.inputStyle}
//         value={Status}
//         onChangeText={text => setStatus(text)}
//       />
//       <TextInput
//         placeholder="Location"
//         style={styles.inputStyle}
//         value={Location}
//         onChangeText={text => setLocation(text)}
//       />
//       <View  style={styles.Input_Cont}>
//       <TextInput
//         placeholder="Longitude"
//         style={styles.inputStyle1}
//         value={Longitude}
//         onChangeText={text => setLongitude(text)}
//       />
//       <TextInput
//       placeholder="Latitude"
//       style={styles.inputStyle1}
//       value={Latitude}
//       onChangeText={text => setLatitude(text)}
//     />


//       </View>
  

//       <View style={styles.Schdule_Cont}>
//       <View style={{alignItems:"center"}}>
//       <Text style={styles.End} >Starting Date</Text>
//       <Text style={styles.Dates}>{StartingDate}</Text>
//       </View>
//       <View style={{alignItems:"center"}}>
//       <Text style={styles.End} >Ending Date</Text>
//       <Text style={styles.Dates}>{EndingDate}</Text>
//       </View>
     
//       </View>

//       <TextInput
//         placeholder="Enter Item Description"
//         style={styles.inputStyle}
//         value={description}
//         onChangeText={text => setDescription(text)}
//       />
//       <TextInput
//       placeholder="Enter Administration Number"
//       style={styles.inputStyle}
//       value={PhoneNumber}
//       onChangeText={text => SetPhoneNumber(text)}
//     />
//     <TextInput
//     placeholder="Link"
//     style={styles.inputStyle}
//     value={Link}
//     onChangeText={text => SetLink(text)}
//   />
//   <TextInput
//   placeholder="Video Link"
//   style={styles.inputStyle}
//   value={VideoLink}
//   onChangeText={text => setVideoLink(text)}
// />
//   <Text style={styles.Title} >Starting Date</Text>
//   <Calendar
//   markedDates={{
//     [StartingDate]: { selected: true, marked: true },
//   }}
//   onDayPress={onDayPress}
// />

// <View style={{ marginTop: 20 }}>
//   <Text>Selected Date: {StartingDate}</Text>
// </View>
// <Text style={styles.Title}>Ending Date</Text>

// <Calendar
// markedDates={{
//   [EndingDate]: { selected: true, marked: true },
// }}
// onDayPress={onDayPress1}
// />

//         <TouchableOpacity
//           style={styles.pickBtn}
//           onPress={() => {
//             openImagePicker();
//           }}>
//           <Text  style={{fontSize:14,color:"#000"}}>Pick Multiple Images From Gallery</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.uploadBtn}
//           onPress={() => {
//             uploadItem();
//             navigation.goBack();
//           }}>
//           <Text style={{ color: '#Fff' }}>Upload Item</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//         style={styles.uploadBtn}
//         onPress={() => {
//           updateSelectedImages();
//         }}>
//         <Text style={{ fontSize: 14, color: '#000' }}>Update Last 2 Images</Text>
//       </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default EditItem;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 60,
//     width: '100%',
//     backgroundColor: '#fff',
//     elevation: 5,
//     paddingLeft: 20,
//     justifyContent: 'center',
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   inputStyle: {
//     width: '90%',
//     height: 50,
//     borderRadius: 10,
//     borderWidth: 0.5,
//     paddingLeft: 20,
//     paddingRight: 20,
//     marginTop: 30,
//     alignSelf: 'center',
//     color:"#000000"
//   },
//   Input_Cont:{
//     flexDirection:"row",
//     width:"90%",
//      alignSelf:"center",
//      justifyContent:"space-between"
//    },
//   inputStyle1: {
//     width: '48%',
//     height: 55,
//     borderRadius: 10,
//     borderWidth: 0.5,
//     paddingLeft: 20,
//     paddingRight: 20,
//     marginTop: 30,
//     alignSelf: 'center',
//     color:'black',
//     fontSize:14
//   },
//   Schdule_Cont:{
//     marginTop:"5%",
//     flexDirection:"row",
//     alignItems:"center",
//     justifyContent:"space-evenly",
//     backgroundColor:"purple",
//     height:70,
//     alignSelf:"center",
//     borderRadius:10,
//     width:"90%"
//    },
//    Dates:{
//     fontSize:16,color:'white',
//     lineHeight:25,
//     fontWeight:"bold"
//    },
//    End:{
//      fontSize:18,color:'black',
//     lineHeight:25,
//     fontWeight:"bold"
//    },
//   pickBtn: {
//     width: '90%',
//     height: 50,
//     borderWidth: 0.5,
//     borderRadius: 10,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   uploadBtn: {
//     backgroundColor: '#5246f2',
//     width: '90%',
//     height: 50,
//     borderRadius: 10,
//     alignSelf: 'center',
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 70,
//   },
//   imageStyle: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     margin: 10,
//   },
// });
