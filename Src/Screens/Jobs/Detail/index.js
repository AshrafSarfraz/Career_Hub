import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React, { useRef, useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native'
import { Back_Icon, Bookmark, Bookmark1, Location } from '../../../Themes/Images';
import { styles } from './style';
import { Add_Job, RemoveJob } from '../../../Redux_Toolkit/wishlist/Job_slice';
import { Colors } from '../../../Themes/Colors';

const Jobs_Details = ({ navigation }) => {
  const dispatch=useDispatch();
  const Job = useSelector((state) => state.job); 
  const route = useRoute();
  const item = route.params.item;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const Link = item.data.Link ? item.data.Link : null

  const Website = () => {
    const url = Link;
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
        {Job.find(Job => Job.id === item.id) ? (
          <TouchableOpacity onPress={() => { dispatch(RemoveJob(item.id)) }} style={{}} >
            <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => { dispatch(Add_Job(item)) }} style={{}} >
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
        activeDotStyle={styles.paginationDotActive}
      />
      {renderPagination()}

      <View style={styles.Uni_Detail}>
        <View style={styles.Title_Cont}>
          <Text style={styles.Title}>{item.data.Job_Name}</Text>
        </View>
        <View style={styles.City_Cont}>
          <Text style={styles.City_Text}>{item.data.Job_City}</Text>
        </View>

        <View style={styles.Status_Cont}>
          <View style={styles.Type_Cont}>
            <Text style={styles.Type_Txt}>{item.data.Organization}</Text>
          </View>
          <Text style={styles.Status}>{item.data.Status}</Text>
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
          <Text style={styles.Detail}>{item.data.Description}</Text>
        </View>
        <View></View>
        <View  style={styles.Table_Outer_Cont}>
        <View style={styles.Table_Cont}>
          <View style={styles.Table_Header} >
            <Text style={styles.Table_Body}>Position</Text>
          </View>
          <View style={styles.Table_Column} >
            <Text style={styles.Table_Txt} >{item.data.Position}</Text>
          </View>
        </View>
        <View style={styles.Table_Cont}>
          <View style={styles.Table_Header} >
            <Text style={styles.Table_Body}>Seats</Text>
          </View>
          <View style={styles.Table_Column} >
            <Text style={styles.Table_Txt} >{item.data.Seats}</Text>
          </View>
        </View>
        <View style={styles.Table_Cont}>
          <View style={styles.Table_Header} >
            <Text style={styles.Table_Body}>Qualification</Text>
          </View>
          <View style={styles.Table_Column} >
            <Text style={styles.Table_Txt} >{item.data.Qualification}</Text>
          </View>
        </View>
        <View style={styles.Table_Cont}>
          <View style={styles.Table_Header} >
            <Text style={styles.Table_Body}>Employment_Type</Text>
          </View>
          <View style={styles.Table_Column} >
            <Text style={styles.Table_Txt} >{item.data.Employment_Type}</Text>
          </View>
        </View>
        </View>
        <View style={styles.Desc_Cont}>
          <Text style={styles.Desc}>Apply Description</Text>
          <Text style={styles.Detail}>{item.data.Apply_Des}</Text>
        </View>

        <TouchableOpacity style={styles.Apply_Btn} onPress={Website}>
          <Text style={styles.Rent}>Apply Now </Text>
        </TouchableOpacity>


      </View>

    </ScrollView>
  )
}

export default Jobs_Details



