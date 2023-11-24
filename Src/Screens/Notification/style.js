import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'





const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.Bg,
        padding:'3%',
      
    },
    Flatlist_View:{
        backgroundColor:Colors.Bg,
        
      
    },
  
   
    Card_View:{
    flexDirection:'row',
    borderRadius:10,
    backgroundColor:Colors.White,
    padding:'2%',
    height:110
   
    
    
    },
    Alarm_Imge:{
    height:80,
    width:80,
    borderRadius:40,
   
    },
    DeletImage_Style:{ 
        width: 24, 
        height: 24,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:"50%"
    },
    Texts_View:{
        marginLeft:10,
        alignSelf:'center',
        justifyContent:'center',
        width:'68%'
    },
    separator: {
        height: 4, // Adjust the height as needed for spacing
        // Change to your desired separator color
      },
    Info_Text:{
         
        fontSize:12,
        fontWeight:'500',
         fontFamily:Fonts.SF_Regular,
        color:Colors.Black2,
        lineHeight:16,
       
    },
    Type_Text:{
        fontSize:14,
        fontWeight:'500',
         fontFamily:Fonts.SF_SemiBold,
        color:Colors.Black,
        lineHeight:18,
        marginTop:10
    },
    
    Circular_View:{
        padding:'4%',
        borderRadius:20,
        paddingRight:'2%'
    },
Today_Text:{
fontWeight:'600',
fontSize:18,
color:Colors.Black2,
margin:'4%'
},

    Time_Text:{
        fontSize:12,
        fontWeight:'400',
         fontFamily:Fonts.SF_Regular,
        color:Colors.Black2,
        lineHeight:16,
       
    },
    BtnCont:{
        flexDirection:'row',
        alignItems:"center"
    },
    Btn_Txt:{
        fontSize:10,fontFamily:Fonts.SF_Regular,
        color:Colors.Grey9,
        lineHeight:12,
        
    },
    Btn_Txt:{
        fontSize:12,
        fontWeight:'400',
         fontFamily:Fonts.SF_Medium,
        color:Colors.Black2,
        lineHeight:16,
    },
    Footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:"6%",
        
    },
    Image2:{
        width:15,height:15
    }

})

export default style