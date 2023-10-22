import { View, Text, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'
import { DocPlus, Menu } from '../../Themes/Images'

import SubmissionAlert from '../../Components/Alerts/SubmissionAlert'
import CustomButton from '../../Components/CustomButton/CustomButton'

const Contact = ({navigation}) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
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
        <TouchableOpacity onPress={()=>{}} >
        <Image style={styles.Img} source={DocPlus} />
        <Text style={styles.Upload_Txt} >Upload here</Text>
        </TouchableOpacity>
       </View>
       <CustomButton title={'Submit'} onPress={showAlert} />
       <SubmissionAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert(),navigation.navigate('Bottom')}}
      />
    </ScrollView>
  )
}

export default Contact

const styles=StyleSheet.create({
  MainCont:{
    backgroundColor:Colors.Bg,
    padding:'2%',
    paddingHorizontal:'4%'
  },
  InputCont:{
    marginVertical:'4%'
  },
  Subject_Txt:{
    fontSize:14,
    fontFamily:Fonts.SF_Regular,
    color:Colors.Green,
    lineHeight:18,
    marginVertical:'4%'
  },
  Input_Design:{
    fontSize:14,
    fontFamily:Fonts.SF_Medium,
    color:Colors.Black,
    lineHeight:18,
    padding:'4%',
    elevation:1,
    backgroundColor:Colors.White,
    borderRadius:10,
  },
  Doc_Cont:{
    height:250,
    width:'100%',
    backgroundColor:Colors.White,
    borderRadius:10,
    elevation:1,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:100
  },
  Img:{
    width:50,height:50
  },
  Upload_Txt:{
    color:Colors.Grey9,
    fontSize:14,
    fontFamily:Fonts.SF_Regular,
     marginTop:'5%',
     textAlign:'center',
     marginLeft:"-2%"
    
  }

})