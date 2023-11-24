import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useRoute } from '@react-navigation/native'
import { Back_Icon, Bookmark, Location } from '../../../Themes/Images';
import { styles } from './style';


const Uni_Details = ({ navigation }) => {
  const route = useRoute();
  const Uni = route.params.Data;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${'28.3808'},${'70.3745'}`;
    Linking.openURL(url);
  }

  // Define an array of slides based on Uni images
  const slides = [
    { key: 'slide1', image: Uni.Image1 },
    { key: 'slide2', image: Uni.Image2 },
    { key: 'slide3', image: Uni.Image3 },
  ];

  const renderSlides = ({ item }) => (
    <View style={styles.slideContainer}>
      <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
    </View>
  );

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.paginationScrollView}
        showsHorizontalScrollIndicator={false}
      >
        {slides.map((slide, index) => (
          <View
            key={slide.key}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.paginationDotActive,
            ]} />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.Back_Cont}>
          <Image source={Back_Icon} style={styles.Back_Icon} />
        </TouchableOpacity>
        <Text style={styles.Back_Txt}>Details</Text>
        <View style={styles.Auth_Cont}>
          <TouchableOpacity>
            <Image source={Bookmark} style={styles.Bookmark} />
          </TouchableOpacity>
        </View>
      </View>
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        onSlideChange={(index) => setCurrentIndex(index)}
        renderNextButton={() => null}
        renderDoneButton={() => null}
        renderPagination={() => null}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.paginationDotActive}
      />
      {renderPagination()}
      <View style={styles.Uni_Detail}>
        <View style={styles.Title_Cont}>
          <View style={styles.Title_Cont}>
            <Text style={styles.Title}>{Uni.Title}</Text>
          </View>
        </View>
        <View style={styles.City_Cont}>
          <Text style={styles.City_Text}>{Uni.City}</Text>
        </View>
        <Text style={styles.Status}>{Uni.Status}</Text>
        <View style={styles.Address_Cont}>
          <TouchableOpacity onPress={handleOpenMaps}>
            <Image source={Location} style={styles.Address_Img} />
          </TouchableOpacity>
          <Text style={styles.Address}>{Uni.Location}</Text>
        </View>
        <View style={styles.Schedule_Cont}>
          <View style={styles.Start_Cont} >
            <Text style={styles.Start_Date}>Start Date</Text>
            <Text style={styles.date} >10-Oct-2023</Text>
          </View>
          <View style={styles.End_Cont} >
            <Text style={styles.Start_Date}>End Date</Text>
            <Text style={styles.date} >24-Nov-2023</Text>
          </View>

        </View>
        <View style={styles.Desc_Cont}>
          <Text style={styles.Desc}>Description</Text>
          <Text style={styles.Detail}>{Uni.Description}</Text>
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('OwnerProfile') }}>
          <View style={styles.Phone_Cont}>
            <View style={styles.Contact} >
              <Image source={require('../../../Assets/Images/uni_logo.png')} style={styles.Uni_Logo} />
              <View style={styles.User}>
                <Text style={styles.OwnerName}>KFUEIT Administration</Text>
              </View>
            </View>
            <Image source={require('../../../Assets/Icons/phone.png')} style={styles.Phone_Icon} />
          </View>
        </TouchableOpacity>
        
        <Text style={[styles.Addmission_Open,{marginTop:'2%',marginBottom:'-2%'}]} >Addmission Open</Text>
        <Image source={require('../../../Assets/Images/poster.png')} style={styles.Poster} />
     
        <Text style={styles.Addmission_Open} >How To Apply?</Text>
        <Text style={styles.Link} >https://www.Kfueit.com.edu.pk</Text>
        <TouchableOpacity style={styles.Btn} onPress={() => { navigation.navigate('') }}>
        <Text style={styles.Rent}>Apply Us </Text>
        </TouchableOpacity>

        <Text style={styles.Addmission_Open} >Help For Apply</Text>
        <Image source={require('../../../Assets/Images/video.png')} style={{width:'100%',height:300,borderRadius:20}} />
     



      </View>

    </ScrollView>
  )
}

export default Uni_Details



