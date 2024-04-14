import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React, { useRef, useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useRoute } from '@react-navigation/native'
import { Back_Icon, Bookmark, Bookmark1, Bookmark2, Location } from '../../../Themes/Images';
import { styles } from './style';
import YouTube from 'react-native-youtube-iframe';



const Uni_Details = ({ navigation }) => {
  const [BookmarkBtn, setBookmarkBtn] = useState(false)
  const route = useRoute();
  const item = route.params.item;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const latitude = item.data.Latitude ? item.data.Latitude : null
  const longitude = item.data.Longitude ? item.data.Longitude : null
  const phoneNumber = item.data.phoneNumber; // Replace with the phone number you want to dial
  const City_Link = item.data.City_Link;


  const handleOpenMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };
  const Website = () => {
    const url = City_Link;
    Linking.openURL(url);
  };
  const Contact = () => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url);
  };

  const renderSlides = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={{ uri: item }} style={{ width: '98%', height: '100%', borderRadius: 20 }} resizeMode='cover' />
      </View>)
  };
  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerStyle={styles.paginationScrollView}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const index = Math.round(offset / screenWidth); //  Assuming screenWidth is the width of your slide
          setCurrentIndex(index);
        }}
        scrollEventThrottle={200}                       //  Adjust the throttle value if needed
      >
        {item && item.data && item.data.uni && item.data.uni.map((item, index) => (
          <View key={index} style={[styles.paginationDot, index === currentIndex && styles.paginationDotActive]} />
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
          <TouchableOpacity onPress={() => { setBookmarkBtn(!BookmarkBtn) }} >
            {
              BookmarkBtn === false ? <Image source={Bookmark} style={styles.Bookmark} /> :
                <Image source={Bookmark1} style={[styles.Bookmark]} />
            }
          </TouchableOpacity>
        </View>
      </View>

      <AppIntroSlider
        renderItem={renderSlides}
        data={item.data.uni}
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
            <Text style={styles.Title}>{item.data.name}</Text>
          </View>
        </View>
        <View style={styles.City_Cont} >
          <TouchableOpacity  onPress={Website}>
            <Text style={styles.City_Text}>{item.data.City}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Status_Cont}>
          <View style={styles.Type_Cont}>
            <Text style={styles.Type_Txt}>{item.data.Type}</Text>
          </View>
          <Text style={styles.Status}>{item.data.Status}</Text>
        </View>
        <View style={styles.Address_Cont}>
          <TouchableOpacity onPress={handleOpenMaps}>
            <Image source={Location} style={styles.Address_Img} />
          </TouchableOpacity>
          <Text style={styles.Address}>{item.data.Location}</Text>
        </View>
        <View style={styles.Schedule_Cont}>
          <View style={styles.Start_Cont} >
            <Text style={styles.Start_Date}>Start Date</Text>
            <Text style={styles.date} >{item.data.StartingDate}</Text>
          </View>
          <View style={styles.End_Cont} >
            <Text style={styles.Start_Date}>End Date</Text>
            <Text style={styles.date} >{item.data.EndingDate}</Text>
          </View>

        </View>
        <View style={styles.Desc_Cont}>
          <Text style={styles.Desc}>Description</Text>
          <Text style={styles.Detail}>{item.data.description}</Text>
        </View>
        <TouchableOpacity onPress={Contact}>
          <View style={styles.Phone_Cont}>
            <View style={styles.Contact} >
              <Image source={{ uri: item.data.Logo[0] }} style={styles.Uni_Logo} />

              <View style={styles.User}>
                <Text style={styles.OwnerName}>{item.data.name}</Text>
              </View>
            </View>
            <View style={{ width: '15%' }} >
              <Image source={require('../../../Assets/Icons/phone.png')} style={styles.Phone_Icon} />
            </View>
          </View>
        </TouchableOpacity>

        <Text style={[styles.Addmission_Open, { marginTop: '3%' }]} >Addmission Open</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {item.data.poster && item.data.poster.map((poster, index) => (
            <Image key={index} source={{ uri: poster }} style={styles.Poster} />
          ))}

        </ScrollView>




        <Text style={styles.Addmission_Open} >How To Apply</Text>
        {/*
  <Image source={require('../../../Assets/Images/video.png')} style={{width:'100%',height:300,borderRadius:20}} />
      */}

        <YouTube
          videoId={item.data.VideoLink}
          height={300}
          play={false}
          fullscreen={false}
          loop={false}
          controls={true}
        />

        <TouchableOpacity style={styles.Apply_Btn} onPress={Website}>
          <Text style={styles.Rent}>Apply Now </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Req_Btn} onPress={() => { navigation.navigate('') }}>
          <Text style={styles.Rent}>Request to Apply</Text>
        </TouchableOpacity>


      </View>

    </ScrollView>
  )
}

export default Uni_Details



