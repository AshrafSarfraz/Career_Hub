import { View, Text, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { DocPlus, Menu, Plus } from '../../Themes/Images'
import SubmissionAlert from '../../Components/Alerts/SubmissionAlert'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { styles } from './style';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';
import ActivityIndicatorModal from '../../Components/Loader/ActivityIndicator';


const Contact = ({navigation}) => {
  const [BugsImages, setBugsImages] = useState([]);
  const [Subject, setSubject] = useState('');
  const [Description, setDescription] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [Error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

 const openImagePicker = async () => {
  try {
    const results = await ImageCropPicker.openPicker({
      mediaType: 'photo',
      multiple: true,
    });

    if (!results.didCancel) {
      const selectedImages = results.map((result) => result.path);
      if (Array.isArray(selectedImages)) {
        setBugsImages(selectedImages);
      } else {
        console.error("Selected images are not an array:", selectedImages);
      }
    }
  } catch (error) {
    setError('Error picking images:', error);
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
    }
  };

  const handleUpload = async () => {
    setIsLoading(true);
    const BugsImagesUrl = await uploadImages(BugsImages, 'BugsImages');
    try {
      await firestore().collection('Complaint').doc().set({
        BugsImages: BugsImagesUrl,
        Subject:Subject,
        Description:Description
      });
      setBugsImages([]),setSubject(''),setDescription(''),
      showAlert()
    } catch (error) {
      setError('Error storing images in Firestore:', error);
      setIsLoading(false);
    } finally {
      setIsLoading(false); // Hide activity indicator modal after upload completes
    }
  };

  const renderImages = (images, label) => {
    return (
      <View style={styles.imageContainer}>
        <Text style={styles.imageLabel}>{label}</Text>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={{width:70,height:70,resizeMode:"contain",marginRight:5,borderWidth:2,borderColor:"blue"}} />
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.MainCont} >
      <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between",marginTop:"3%"}} >
      <TouchableOpacity onPress={()=>navigation.openDrawer()} >
      <Image source={Menu} style={{width:50,height:50 ,marginRight:"3%" }} />
      </TouchableOpacity>
       <Text  style={{fontSize:20,color:Colors.Green,fontFamily:Fonts.SF_Bold,fontWeight:"500"}}>Contact_Us</Text>
       <Text  >                  </Text>
       </View>
      <View  style={styles.InputCont} >
       <Text style={styles.Subject_Txt} >Subject</Text>
       <TextInput style={styles.Input_Design} placeholder='Enter Subject' placeholderTextColor={Colors.Grey9} />
       <Text style={styles.Subject_Txt} >Description</Text>
       <TextInput style={styles.Input_Design} placeholder='Enter Description' placeholderTextColor={Colors.Grey9} />
      </View>
      <Text style={styles.Subject_Txt} >Upload up to 3 images:</Text>
      
       <View style={styles.Doc_Cont} >
        <TouchableOpacity onPress={() => openImagePicker(setBugsImages)} style={styles.btn_} >
         <View style={styles.Plus_Img_Cont}>
        <Image style={styles.Img} source={Plus} />
        </View>
        <Text style={styles.Upload_Txt} >Upload here</Text>
        </TouchableOpacity>
        <View>
        {renderImages(BugsImages, '')}
        </View>
     
       </View>
       <CustomButton title={'Submit'} onPress={()=>{handleUpload()}} />
       <ActivityIndicatorModal visible={isLoading} />
       <SubmissionAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert(),navigation.navigate('Bottom')}}
      />
    </ScrollView>
  )
}

export default Contact
