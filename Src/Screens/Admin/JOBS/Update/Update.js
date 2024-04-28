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
  const [posterImages, setPosterImages] = useState(route.params.poster ? [...route.params.poster] : []);
  const [Job_Name, setJob_Name] = useState(route.params.data.Job_Name);
  const [Job_City, setJob_City] = useState(route.params.data.Job_City);
  const [Description, setDescription] = useState(route.params.data.Description);
  const [Seats, setSeats] = useState(route.params.data.Seats);
  const [Position, setPosition] = useState(route.params.data.Position);
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
     const posterImageUrls = posterImages.length > 0 ? await uploadImages(posterImages, 'Poster', itemId) : route.params.data.poster;
      const updatedData = {};
      if (posterImageUrls) updatedData.poster = posterImageUrls;
      if (Job_Name) updatedData.Job_Name = Job_Name;
      if (Job_City) updatedData.Job_City = Job_City;
      if (Description) updatedData.Description = Description;
      if (Seats) updatedData.Seats = Seats;
      if (Position) updatedData.Position = Position;
      if (Country) updatedData.Country = Country;
      if (Status) updatedData.Status = Status;
      if (Qualification) updatedData.Qualification = Qualification;
      if (Organization) updatedData.Organization = Organization;
      if (StartingDate) updatedData.StartingDate = StartingDate;
      if (EndingDate) updatedData.EndingDate = EndingDate;
      if (Employment_Type) updatedData.Employment_Type = Employment_Type;
      if (Link) updatedData.Link = Link;
      
      await firestore()
        .collection('Jobs-Posting')
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
    placeholder="Job Name"
    placeholderTextColor={'#7F7F7F'}
    style={styles.inputStyle}
    value={Job_Name}
    onChangeText={text => setJob_Name(text)}
  />
  <TextInput
    placeholder="Job City"
    placeholderTextColor={'#7F7F7F'}
    style={styles.inputStyle}
    value={Job_City}
    onChangeText={text => setJob_City(text)}
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
      
      
      {renderImages(posterImages, 'New Poster_Images')}


    <TouchableOpacity
      style={styles.pickBtn}
      onPress={() => openImagePicker(setPosterImages, route.params.id)}>
      <Text style={styles.Picker_Txt}>New Poster</Text>
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









// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   TextInput
// } from 'react-native';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import storage from '@react-native-firebase/storage';
// import firestore from '@react-native-firebase/firestore';
// import { useRoute } from '@react-navigation/native';
// import { Calendar } from 'react-native-calendars';
// import { styles } from './style';
// import ActivityIndicatorModal from '../../../../Components/Loader/ActivityIndicator';

// const Jobs_Update = ({ navigation }) => {
//   const route = useRoute();
//   const [posterImages, setPosterImages] = useState(route.params.poster ? [...route.params.poster] : [])
//   const [name, setname] = useState(route.params.data.Job_Name);
//   const [City, setCity] = useState(route.params.data.Job_City);
//   const [Description, setDescription] = useState(route.params.data.Description);
//   const [Seats, setSeats] = useState(route.params.data.Seats);
//   const [Position, setPosition] = useState(route.params.data.Position);
//   const [Country, setCountry] = useState(route.params.data.Country);
//   const [Status, setStatus] = useState(route.params.data.Status);
//   const [Qualification, setQualification] = useState(route.params.data.Qualification);
//   const [Organization, setOrganization] = useState(route.params.data.Organization);
//   const [Employment_Type, setEmployment_Type] = useState(route.params.data.Employment_Type);
//   const [StartingDate, setStartingDate] = useState(route.params.data.StartingDate);
//   const [EndingDate, setEndingDate] = useState(route.params.data.EndingDate);
//   const [Apply_Des, setApply_Des] = useState(route.params.data.Apply_Des);
//   const [Link, setLink] = useState(route.params.data.Link);
//   const [isLoading, setIsLoading] = useState(false);
//   const [Error, setError] = useState('');

//     // Call uploadItem function after setting images
//     const openImagePicker = async () => {
//       try {
//         const results = await ImageCropPicker.openPicker({
//           mediaType: 'photo',
//           multiple: true,
//         });
    
//         if (results && !results.didCancel) {
//           const updatedImages = results.map((result) => result.path);
//           setPosterImages(updatedImages);
//           uploadItem(); // Call uploadItem function after setting images
//         }
//       } catch (error) {
//         setError('Error picking images: ' + error.message);
//       }
//     };
      
  
    
 
//   const uploadImages = async (images, categoryName, itemId) => {
//     try {
//       const uploadTasks = images.map(async (image, index) => {
//         const imageName = `${categoryName}_${itemId}_${index}.jpg`;
//         const reference = storage().ref(imageName);
//         await reference.putFile(image);
//         return reference.getDownloadURL();
//       });

//       const downloadURLs = await Promise.all(uploadTasks);
//       return downloadURLs;
//     } catch (error) {
//       setError('Error uploading images: ' + error.message);
//       throw error;
//     }
//   };


//       // Update Firestore document
//       const uploadItem = async () => {
//         try {
//           setIsLoading(true);
//           const posterImageUrls = posterImages.length > 0 ? await uploadImages(posterImages, 'poster', route.params.itemId) : route.params.poster;
//           const updatedData = {
//             poster: posterImageUrls,
//             Job_Name: name,
//             Job_City: City,
//             Description: Description,
//             Seats: Seats,
//             Status: Status,
//             Position: Position,
//             Country: Country,
//             Qualification: Qualification,
//             Organization: Organization,
//             Employment_Type: Employment_Type,
//             StartingDate: StartingDate,
//             EndingDate: EndingDate,
//             Apply_Des: Apply_Des,
//             Link: Link,
//           };
    
//           // Update Firestore document
//           await firestore()
//             .collection('Jobs-Posting')
//             .doc(route.params.itemId)
//             .update(updatedData);
    
//           setIsLoading(false); // Stop the loader
//           navigation.goBack(); // Navigate back
//         } catch (error) {
//           setError('Error updating item: ' + error.message);
//           setIsLoading(false); // Stop the loader in case of error
//         }
//       };

  
//   // Call uploadItem function when the upload button is pressed
//   <TouchableOpacity style={styles.uploadBtn} onPress={uploadItem}>
//     <Text style={{ color: '#FFF' }}>Upload Data</Text>
//   </TouchableOpacity>
  
      


  

//   const onDayPress = (day) => {
//     setStartingDate(day.dateString);
//   };

//   const onDayPress1 = (day) => {
//     setEndingDate(day.dateString);
//   };

//   const renderImages = (images, label) => {
//     if (Array.isArray(images) && images.length > 0) {
//       return (
//         <View style={styles.imageContainer}>
//           <Text style={styles.imageLabel}>{label}</Text>
//           {images.map((image, index) => (
//             <Image
//               key={index}
//               source={typeof image === 'string' ? { uri: image } : require('../../../../Assets/Images/uni_logo.png')}
//               style={styles.image}
//             />
//           ))}
//         </View>
//       );
//     } else {
//       // Return a default message or null if images is empty
//       return null; // or <Text>No images to display</Text>
//     }
//   };

  
 

//   return (
//     <ScrollView style={styles.container}>
//     <View style={styles.header}>
//       <Text style={styles.headerText}>Job-Update</Text>
//     </View>

//     <View style={styles.Body_container}>

  //   <TextInput
  //     placeholder="Job Name"
  //     placeholderTextColor={'#7F7F7F'}
  //     style={styles.inputStyle}
  //     value={name}
  //     onChangeText={text => setname(text)}
  //   />
  //   <TextInput
  //     placeholder="Job City"
  //     placeholderTextColor={'#7F7F7F'}
  //     style={styles.inputStyle}
  //     value={City}
  //     onChangeText={text => setCity(text)}
  //   />
  //   <TextInput
  //   placeholder="Government, Private"
  //   placeholderTextColor={'#7F7F7F'}
  //   style={styles.inputStyle}
  //   value={Status}
  //   onChangeText={text => setStatus(text)}
  // />
  //   <TextInput
  //     placeholder="Description"
  //     placeholderTextColor={'#7F7F7F'}
  //     style={styles.inputStyle}
  //     value={Description}
  //     onChangeText={text => setDescription(text)}
  //   />
  //   <TextInput
  //     placeholder="Seats"
  //     placeholderTextColor={'#7F7F7F'}
  //     style={styles.inputStyle}
  //     value={Seats}
  //     onChangeText={text => setSeats(text)}
  //   />
  //   <TextInput
  //     placeholder="Position"
  //     placeholderTextColor={'#7F7F7F'}
  //     style={styles.inputStyle}
  //     value={Position}
  //     onChangeText={text => setPosition(text)}
  //   />

  //   <TextInput
  //     placeholder="Country"
  //     placeholderTextColor={'#7F7F7F'}
  //     style={styles.inputStyle}
  //     value={Country}
  //     onChangeText={text => setCountry(text)}
  //   />
  //   <View style={styles.Input_Cont}>
  //     <TextInput
  //       placeholder="Qualification"
  //       placeholderTextColor={'#7F7F7F'}
  //       style={styles.inputStyle1}
  //       value={Qualification}
  //       onChangeText={text => setQualification(text)}
  //     />
  //     <TextInput
  //       placeholder="Organization"
  //       placeholderTextColor={'#7F7F7F'}
  //       style={styles.inputStyle1}
  //       value={Organization}
  //       onChangeText={text => setOrganization(text)}
  //     />
  //   </View>
  //   <TextInput
  //     placeholder="Employment_Type"
  //     placeholderTextColor={'#7F7F7F'}
  //     style={styles.inputStyle}
  //     value={Employment_Type}
  //     onChangeText={text => setEmployment_Type(text)}
  //   />
  //   <TextInput
  //     placeholder="Apply_Des"
  //     placeholderTextColor={'#7F7F7F'}
  //     style={styles.inputStyle}
  //     value={Apply_Des}
  //     onChangeText={text => setApply_Des(text)}
  //   />
 
  //   <TextInput
  //     placeholder="Link"
  //     placeholderTextColor={'#7F7F7F'}
  //     style={styles.inputStyle}
  //     value={Link}
  //     onChangeText={text => setLink(text)}
  //   />

//     <View style={styles.Schdule_Cont}>
//       <View style={{ alignItems: "center" }}>
//         <Text style={styles.End} >Starting Date</Text>
//         <Text style={styles.Dates}>{StartingDate}</Text>
//       </View>
//       <View style={{ alignItems: "center" }}>
//         <Text style={styles.End} >Ending Date</Text>
//         <Text style={styles.Dates}>{EndingDate}</Text>
//       </View>

//     </View>

//     <Text style={styles.Title} >Starting Date</Text>
//     <Calendar
//       markedDates={{
//         [StartingDate]: { selected: true, marked: true },
//       }}
//       onDayPress={onDayPress}
//     />

//     <View style={{ marginTop: 20 }}>
//       <Text>Selected Date: {StartingDate}</Text>
//     </View>
//     <Text style={styles.Title}>Ending Date</Text>

//     <Calendar
//       markedDates={{
//         [EndingDate]: { selected: true, marked: true },
//       }}
//       onDayPress={onDayPress1}
//     />

//     <View style={{ marginTop: 20 }}>
//       <Text>Selected Date: {EndingDate}</Text>
//     </View>

//     {renderImages(posterImages, 'poster')}


//     <TouchableOpacity
//       style={styles.pickBtn}
//       onPress={() => openImagePicker(setPosterImages)}>
//       <Text style={styles.Picker_Txt}>Pick Poster</Text>
//     </TouchableOpacity>


//     <TouchableOpacity style={styles.uploadBtn} onPress={uploadItem}>
//     <Text style={{ color: '#FFF' }}>Upload Data</Text>
//   </TouchableOpacity>
  

//     <TouchableOpacity style={styles.uploadBtn} onPress={() => { navigation.goBack() }}>
//       <Text style={{ color: '#FFF' }}>Get All Data</Text>
//     </TouchableOpacity>
//   </View>
//     <ActivityIndicatorModal visible={isLoading} />
//   </ScrollView>
//   );
// };

// export default Jobs_Update;





  


  








