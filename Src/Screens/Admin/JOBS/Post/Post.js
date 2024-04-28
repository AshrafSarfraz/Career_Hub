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
  const [name, setname] = useState('Power Planning & Monitoring');
  const [City, setCity] = useState('Islamabad');
  const [Description, setDescription] = useState('Today jobs latest Power Planning & Monitoring Company Government jobs in Pakistan has been announced, Interested Candidates to fulfill these positions with Handsome Salary Package and Allowances according to Organization Policies., currently hiring for various positions in government jobs across Pakistan, including jobs in Islamabad 2024. Explore our latest govt job vacancies in Pakistan and apply online for Power Planning & Monitoring Company Careers today.');
  const [Seats, setSeats] = useState('1');
  const [Position, setPosition] = useState('1');
  const [Location, setLocation] = useState('Islamabad, Pakistan');
  const [Country, setCountry] = useState('Pakistan');
  const [Status, setStatus] = useState('Government');
  const [Qualification, setQualification] = useState('Chartered Accountant from ICAP');
  const [Organization, setOrganization] = useState('Power Planning & Monitoring Company');
  const [Employment_Type, setEmployment_Type] = useState('Full Time');
  const [StartingDate, setStartingDate] = useState('2000-01-01');
  const [EndingDate, setEndingDate] = useState('2000-01-01');
  const [Apply_Des, setApply_Des] = useState('Prepare a hard copy of your application along with all required documents.Send your application via mail to the General Manager (HR) at the following address: Room No. 112, Evacuee Trust Complex, F-5/1, Agha Khan Road, Islamabad. Alternatively, you can apply online on the website www.pitc.com.pk. Make sure to include a recent passport-size photograph, copy of your CNIC or Passport, and experience certificates with your application. Attest copies of your degrees and certificates as required. Only shortlisted candidates will be contacted for the interview process. No TA/DA will be provided for the interview. Note that Power Planning & Monitoring Company (SPPAC) reserves the right to withhold or cancel the recruitment process at any stage without assigning any reason.');
  const [Link, setLink] = useState('www.pitc.com.pk');
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
        console.error('Error picking images:', error);
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
        console.error('Error uploading images:', error);
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
        console.error('Error uploading data:', error);
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



