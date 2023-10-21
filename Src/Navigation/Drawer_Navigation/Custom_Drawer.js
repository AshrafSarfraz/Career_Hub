import React, { useState } from 'react';
import { View,StyleSheet,Image,Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Bobi, Logo, Profile, Profile2 } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';

  

function CustomDrawerContent(props) {
    const [ButtonState,setButtonState]=useState(1)


    return (
        <View style={styles.DrawerCont}>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        {/* <DrawerItem
          style={styles.Btn1}
          label="Help"
          onPress={() =>{props.navigation.navigate('Navigator')}}
        /> */}


        <TouchableOpacity onPress={()=>{setButtonState(1),props.navigation.navigate('HomeScreen')}}  style={[styles.ButtonStyle,ButtonState===1?styles.ActiveButton:null]} >
          {ButtonState===1?
          <Image source={Bobi}  style={styles.HomeIcon} />
          :
          <Image source={Bobi}  style={styles.HomeIcon} />  }
          <Text style={[styles.Label,ButtonState===1?styles.ActiveButtonTxt:null]} >Home</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{setButtonState(2),props.navigation.navigate('Buy_Pixel')}}  style={[styles.ButtonStyle,ButtonState===2?styles.ActiveButton:null]} >
          {ButtonState===2?
          <Image source={Bobi}  style={styles.HomeIcon} />
          :
          <Image source={Bobi}  style={styles.HomeIcon} />  }
          <Text style={[styles.Label,ButtonState===2?styles.ActiveButtonTxt:null]} >Buy Pixel</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{setButtonState(3),props.navigation.navigate('View_Pixel')}}  style={[styles.ButtonStyle,ButtonState===3?styles.ActiveButton:null]} >
          {ButtonState===3?
          <Image source={Bobi}  style={styles.HomeIcon} />
          :
          <Image source={Bobi}  style={styles.HomeIcon} />  }
          <Text style={[styles.Label,ButtonState===3?styles.ActiveButtonTxt:null]} >View Pixel</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{setButtonState(4),props.navigation.navigate('')}}  style={[styles.ButtonStyle,ButtonState===4?styles.ActiveButton:null]} >
          {ButtonState===4?
          <Image source={Profile}  style={styles.HomeIcon} />
          :
          <Image source={Profile2}  style={styles.HomeIcon} />  }
          <Text style={[styles.Label,ButtonState===4?styles.ActiveButtonTxt:null]} >Contact us</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{setButtonState(5),props.navigation.navigate('Policies')}}  style={[styles.ButtonStyle,ButtonState===5?styles.ActiveButton:null]} >
          {ButtonState===5?
          <Image source={Bobi}  style={styles.HomeIcon} />
          :
          <Image source={Bobi}  style={styles.HomeIcon} />  }
          <Text style={[styles.Label,ButtonState===5?styles.ActiveButtonTxt:null]} >Terms & Privay Policy</Text>
        </TouchableOpacity>
        
        <View  style={styles.VersionContainer} >
        <Image
        style={styles.logo_Image}
        source={Logo}
      />
         <Text  style={styles.Vibes} >Vibes</Text>
         <Text  style={styles.ShareVibes} >SHARE YOUR VIBES WITH US</Text>
         <Text  style={styles.Version} >VERSION 1.0</Text>
        </View>
      </DrawerContentScrollView>
      </View>
    );
  }
  export default CustomDrawerContent;

  const styles=StyleSheet.create({
      DrawerCont:{
        flex:1,
        backgroundColor:'red',
        padding:"4%",
        paddingTop:'30%'
       },
    ButtonStyle:{
      width:'100%',
      padding:'2%',
      alignItems:'center',
      flexDirection:"row",
      padding:'4%',
      paddingHorizontal:"6%",
      marginBottom:'4%'
    },
    ActiveButton:{
      backgroundColor:'#000000',
      borderRadius:7
    },
    ActiveButtonTxt:{
      color:'red'
    },
    HomeIcon:{
      width:25,height:25,resizeMode:'contain',marginRight:"5%"
    },
    Label:{
      fontSize:16,
      lineHeight:20,
      color:"#FFFFFF",
      fontWeight:'700'
    },
    VersionContainer:{
      marginTop:'63%',
      justifyContent:'center',
      alignItems:'center'
    },
 
  logo_Image: {
    height: 60,
    width:60,
    resizeMode: 'contain',
  },
  Vibes:{
    fontSize:22,
    fontFamily:Fonts.SF_Bold,
    color:"#FFFFFF",
    fontWeight:'900',
    lineHeight:30,
   
  },
  ShareVibes:{
    fontSize:8,
    fontFamily:Fonts.SF_Bold,
    color:'#000000',
    fontWeight:'bold',
    letterSpacing:1, 
  },
  Version:{
    fontSize:13,
    fontFamily:Fonts.SF_Bold,
    color:'#000000',
    fontWeight:'bold',
    marginTop:'1%'
  },
  })