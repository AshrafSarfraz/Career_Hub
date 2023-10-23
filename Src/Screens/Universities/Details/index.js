import { View, Text, StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native'
import React,{useState} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useRoute } from '@react-navigation/native'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts';
import { Back_Icon, Bookmark, Location } from '../../../Themes/Images';



const slides = [
  {
    key: 'slide1',
   
    image: require('../../../Assets/Images/university.png'), // Replace with your own image path
  },
  {
    key: 'slide2',
    image: require('../../../Assets/Images/university.png'),// Replace with your own image path
  },
  {
    key: 'slide3',
    image: require('../../../Assets/Images/university.png'), // Replace with your own image path
  },
];



const Uni_Details = ({navigation}) => {
    const route=useRoute();
    const Uni=route.params.Data;
    const [currentIndex, setCurrentIndex] = useState(0);
    const renderSlides = ({ item }) => (
      <View style={styles.slideContainer}>
      <Image source={Uni.Image1} style={{width:'100%',height:'100%'}}
       resizeMode='cover' />
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
         ]}/>
          ))}
      </ScrollView>
      </View>
    );

  return (
    <ScrollView style={styles.MainContainer}>
         <View  style={styles.Header} >
          <TouchableOpacity   onPress={()=>{navigation.goBack()}}  style={styles.Back_Cont} >
            <Image  source={Back_Icon} style={styles.Back_Icon}/>
          </TouchableOpacity>
          <Text style={styles.Back_Txt} >Details</Text>
         <View style={styles.Auth_Cont} >
           <TouchableOpacity  >
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
   
      <View style={styles.Uni_Detail} >
      <View style={styles.Title_Cont} >
      <View style={styles.Title_Cont} >
      <Text style={styles.Title} >{Uni.Title}</Text>
      </View>
      </View>
      <View style={styles.City_Cont} >
      <Text style={styles.City_Text} >{Uni.City}</Text>
      </View>
      <Text style={styles.Status} >{Uni.Status}</Text>
      <View style={styles.Address_Cont} >
      <Image source={Location} style={styles.Address_Img} />
      <Text style={styles.Address} >{Uni.Location}</Text>
        </View>
        <View style={styles.Desc_Cont} >
        <Text style={styles.Desc} >Description</Text>
        <Text style={styles.Detail} >{Uni.Description}</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('OwnerProfile')}} >
         <View style={styles.OwnerDetail} >
            <Image source={require('../../../Assets/Images/uni_logo.png')} style={styles.OwnerImg} />
            <View  style={styles.User} >
            <Text style={styles.Owner_Text} >Owner :</Text>
            <Text style={styles.OwnerName} >KFUEIT</Text>
            </View>
         </View>
         </TouchableOpacity>

        <TouchableOpacity style={styles.Btn}  onPress={()=>{navigation.navigate('SelectDays')}} >
            <Text  style={styles.Rent}>Rent this Item</Text>
        </TouchableOpacity>
       
      </View>
 
 
   

    </ScrollView>
  )
}

export default Uni_Details

const styles=StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor:Colors.Bg,
        marginBottom:'6%'
       
      },
    Header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:'4%',
    backgroundColor:Colors.Bg,
    alignItems:"center"
    },
    Back_Cont:{
       flexDirection:'row',
       alignItems:"center",
    
    },
    Back_Txt:{
        
         color:Colors.Green,
         fontFamily:Fonts.SF_Bold,
         lineHeight:26,
         fontSize:22,
         fontWeight:"700",
         marginRight:"3%"
    },
    Back_Icon:{
     width:50,height:50,
     marginLeft:"5%",
   
    },
    Auth_Cont:{
      flexDirection:'row',
      alignItems:"center",
      marginRight:"5%"
    },
     
    Bookmark:{
      width:25,height:25, 
    },
     
      slideContainer: {
       backgroundColor:Colors.White,
       alignItems:'center',
       alignSelf:'center',
        width: '90%',
       elevation:4,
       borderRadius:10,
       overflow:"hidden",
       height:320

      },
      slideImage: {
        width: '100%',
        height: '100%',
       
       
       
      },
      paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        marginLeft:'40%'
    
      },
      paginationScrollView: {
        paddingHorizontal: 16,
    
      },
      paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 10,
        marginHorizontal: 4,
        backgroundColor: Colors.Grey9,
      },
      paginationDotActive: {
        backgroundColor: Colors.Green,
        width:30
      },
      Uni_Detail:{
       paddingHorizontal:'4%'
      },
      City_Cont:{
        backgroundColor:'#D0A700',
        paddingHorizontal:"3%",
        alignItems:'center',
        width:150,
        padding:"1%",
        marginVertical:"3%",
        borderRadius:5,
      },
      City_Text:{
        fontSize:14,
        lineHeight:18,
        color:Colors.White,
        fontFamily:Fonts.SF_Medium,
      },
      Title_Cont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
       
      },
      Title_Cont:{
        flexDirection:"row",
        alignItems:'center'
      },
      Title:{
        fontSize:20,
        lineHeight:25,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
      },
      Status:{
        fontSize:20,
        lineHeight:25,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
      },
      
     
      Rating:{
        fontSize:16,
        lineHeight:20,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
        paddingLeft:'2%'
      },
       Address_Cont:{
        flexDirection:'row',
        alignItems:"center",
        marginVertical:"2%"
       },
       Address_Img:{
        width:20,height:20,
        resizeMode:'contain',
        marginRight:"2%"
       },
      Address:{
        fontSize:16,
        lineHeight:18,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium, 
       },
       Price_Cont:{
        marginVertical:"3%",
        backgroundColor:Colors.White,
        padding:"3%",
        borderRadius:10,
       },
       Price:{
        fontSize:16,
        lineHeight:20,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
       },
       Total:{
        fontSize:16,
        lineHeight:20,
        color:Colors.Green,
        fontFamily:Fonts.SF_Medium,
        marginTop:"1%"
       },
       Desc_Cont:{

       },
       Desc:{
        fontSize:18,
        lineHeight:22,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
        marginVertical:"3%"
       },
       Detail:{
        fontSize:15,
        lineHeight:20,
        color:Colors.Black,
        fontFamily:Fonts.SF_Regular,
        marginBottom:'3%'
       },
       OwnerDetail:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.White,
        padding:'3%',
        borderRadius:8,
        borderWidth:0.2,
        marginVertical:"1%",
       },
       OwnerImg:{
         width:60,height:60,
         
       },
       User:{
        marginLeft:"3%"
       },
       Owner_Text:{
        fontSize:12,
        lineHeight:15,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
        marginBottom:'3%'
      },
      OwnerName:{
        fontSize:16,
        lineHeight:20,
        color:Colors.Black,
        fontFamily:Fonts.SF_Bold,
        marginBottom:'3%'
      },
      Btn:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:Colors.Green,
        width:'100%',
        padding:'4%',
        marginVertical:'5%',
        borderRadius:10
      },
      Plus1:{
        width:25,height:25,
        marginRight:'3%'
      },
      Rent:{
        color:Colors.White,
        fontSize:16,
        fontFamily:Fonts.SF_Medium,
        lineHeight:20
      },
       Top_Review_Cont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
       },
       Top:{
        fontSize:16,
        lineHeight:19,
        color:Colors.Black,
        fontWeight:'500',
        fontFamily:Fonts.SF_SemiBold,
       },
       View_Txt:{
        fontSize:14,
        lineHeight:17,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
       },
       Cart:{
         backgroundColor:Colors.White,
         padding:10,
         borderRadius:20,
         elevation:1,
         width:300,
         margin:10
       },
       TopReviewCont:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:15,
        marginBottom:10
       },
       OwnerImg2:{
         width:45,height:45
       },
       Review_Text:{
        fontSize:12,
        lineHeight:15,
        color:Colors.Black,
        fontFamily:Fonts.SF_Regular,
       }

   
      
})