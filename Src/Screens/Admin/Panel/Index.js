import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import { Colors } from '../../../Themes/Colors'
import CustomHeader2 from '../../../Components/CustomHeader2/CustomHeader2'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'

const Admin_Home = ({navigation}) => {
  return (
    <View style={Styles.Container}>
    <View style={Styles.Header}>
    <CustomHeader title={'Admin Panel'} onBackPress={()=>{navigation.goBack()}} />
    </View>
    <View style={Styles.Body}>
     <CustomButton title={'University Data'} onPress={()=>{navigation.navigate('Uni_Data')}} />
     <View style={Styles.Btn_Space} >
     <CustomButton title={'Job Data'} onPress={()=>{navigation.navigate('Job_Data')}} />
     </View>
     <CustomButton title={'SchlorShip'} onPress={()=>{navigation.navigate('Schlorship_Data')}} />
    </View>
    </View>
  )
}

export default Admin_Home

const Styles=StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:Colors.Bg,
      
    },
    Header:{
        paddingHorizontal:"5%",
        height:50
    },
    Admin_Txt:{

    },
    Btn_Space:{
        marginVertical:"5%",
         width:'100%'
    },
    Body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
   
})
