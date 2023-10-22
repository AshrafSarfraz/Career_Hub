import { View,ScrollView, Text, StyleSheet, TextInput } from 'react-native'
import React,{useState} from 'react'
import CustomHeader2 from '../../Components/CustomHeader2/CustomHeader2'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'
import PaymentAlert from '../../Components/Alerts/ConfirmPayment'

const Payment = ({navigation}) => {
    const [alertVisible, setAlertVisible] = useState(false);

    const showAlert = () => {
      setAlertVisible(true);
    };
  
    const hideAlert = () => {
      setAlertVisible(false);
    };
  return (
    <ScrollView contentContainerStyle={styles.MainCont} >
      <View style={styles.Header} >
       <CustomHeader2  title={'Payments'}  onBackPress={()=>{navigation.goBack()}} />
      </View>
      <View style={styles.Body} >
       <View>
        <Text style={styles.CardTxt} >Card Name</Text>
        <TextInput placeholder='Andrew Ainsley' placeholderTextColor={Colors.Grey9} style={styles.InputText} />
       </View>
       <View>
        <Text style={styles.CardTxt} >Card Number</Text>
        <TextInput placeholder='2672 4738 7837 7285'  keyboardType='numeric' placeholderTextColor={Colors.Grey9} style={styles.InputText} />
       </View>
     
     <View style={styles.InputCont}>
        <View style={styles.CvvCont} >
        <Text style={styles.CardTxt} >Expiry</Text>
        <TextInput placeholder='09/07/26'  placeholderTextColor={Colors.Grey9} style={styles.Cvv} keyboardType='numeric' />
       </View>
       <View style={styles.CvvCont} >
        <Text style={styles.CardTxt} >CVV</Text>
        <TextInput placeholder='699' placeholderTextColor={Colors.Grey9} style={styles.Cvv} keyboardType='numeric'/>
       </View>
     </View>


        </View>
        <View style={styles.Footer} >
      <CustomButton title={'Confirm Payment'} onPress={showAlert} />
        </View>
        <PaymentAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert(),navigation.navigate('RentedItem',{ updateButtonState: 1 })}}
      />
    </ScrollView>
  )
}

export default Payment

const styles=StyleSheet.create({
        MainCont:{
            padding:'3%',
         
            backgroundColor:Colors.Bg
        },
        Header:{
         

        },
        Body:{
          marginVertical:"4%"
        },
        CardTxt:{
           fontSize:18,
           fontFamily:Fonts.SF_SemiBold,
           lineHeight:22,
           color:Colors.Black
        },
        InputText:{
           backgroundColor:Colors.White,
           padding:'4%',
           borderRadius:6,
          elevation:1,
           marginVertical:'4%',
           color:Colors.Black,
           fontSize:14
        },
        InputCont:{
           flexDirection:'row',
           justifyContent:'space-between'
        },
        CvvCont:{
          width:'45%',
          
        },
        Cvv:{
            backgroundColor:Colors.White,
            padding:'9%',
            width:'100%',
            borderRadius:6,
           elevation:1,
            marginVertical:'4%',
            color:Colors.Black,
            fontSize:14
        },
        Footer:{
           marginTop:'55%'
}
})