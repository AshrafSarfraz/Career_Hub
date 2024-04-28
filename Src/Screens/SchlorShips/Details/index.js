import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React, { useRef, useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useRoute } from '@react-navigation/native'
import { Back_Icon, Bookmark, Bookmark1, Bookmark2, Location } from '../../../Themes/Images';
import { styles } from './style';
import YouTube from 'react-native-youtube-iframe';
import { useDispatch, useSelector } from 'react-redux';
import { Add_Scholarship, Remove_Scholarship } from '../../../Redux_Toolkit/wishlist/Scholarship_slice';
import { Colors } from '../../../Themes/Colors';



const Sch_Details = ({ navigation }) => {
  const dispatch=useDispatch();
  const Scholarship_D = useSelector((state) => state.scholarship); // Accessing 'user' slice

  const route = useRoute();
  const item = route.params.item;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);


  const Website = () => {
    const url = City_Link;
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
          const index = Math.round(offset / screenWidth);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={200}
      >
        {item && item.data && item.data.poster && item.data.poster.map((item, index) => (
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
        {Scholarship_D.find(Scholarship_D => Scholarship_D.id === item.id) ? (
          <TouchableOpacity onPress={() => {dispatch(Remove_Scholarship(item.id))}} style={{}} >
            <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]}/>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {dispatch(Add_Scholarship(item))}} style={{}} >
            <Image source={Bookmark} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
          </TouchableOpacity>
        )}
        </View>
      </View>

      <AppIntroSlider
        renderItem={renderSlides}
        data={item.data.poster}
        onSlideChange={(index) => setCurrentIndex(index)}
        renderNextButton={() => null}
        renderDoneButton={() => null}
        renderPagination={() => null}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.paginationDotActive} />
      {renderPagination()}
      <View style={styles.Uni_Detail}>
        <View style={styles.Title_Cont}>
          <View style={styles.Title_Cont}>
            <Text style={styles.Title}>{item.data.Sch_name}</Text>
          </View>
        </View>
        <View style={styles.City_Cont} >
          <TouchableOpacity onPress={Website}>
            <Text style={styles.City_Text}>{item.data.Selected_City}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Status_Cont}>
          <View style={styles.Type_Cont}>
            <Text style={styles.Type_Txt}>{item.data.Sch_Type}</Text>
          </View>
          <Text style={styles.Status}>{item.data.Status}</Text>
        </View>
        <View style={styles.Desc_Cont}>
          <Text style={styles.Desc}>Description</Text>
          <Text style={styles.Detail}>{item.data.description}</Text>
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
        <Text style={styles.Addmission_Open} >How To Apply</Text>
        <YouTube
          videoId={item.data.VideoLink}
          height={200}
          play={false}
          fullscreen={false}
          loop={false}
          controls={true}
        />
        <View style={styles.Desc_Cont}>
          <Text style={styles.Desc}>Apply Description</Text>
          <Text style={styles.Detail}>{item.data.Apply_Des}</Text>
        </View>
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

export default Sch_Details


// <Text style={[styles.Addmission_Open, { marginTop: '3%' }]} >Schlorship</Text>
// <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
//   {item.data.poster && item.data.poster.map((poster, index) => (
//     <Image key={index} source={{ uri: poster }} style={styles.Poster} />
//   ))}
// </ScrollView>
