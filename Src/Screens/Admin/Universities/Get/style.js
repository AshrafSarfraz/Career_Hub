import { StyleSheet } from "react-native";
import { Fonts } from "../../../../Themes/Fonts";
import { Colors } from "../../../../Themes/Colors";


export 
const styles = StyleSheet.create({
  MainCont: {
    backgroundColor: Colors.Bg,
    padding: '4%',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginVertical:"3%",
  },
  Back_Cont: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: "2%"
  },
  Back_Txt: {
    color: Colors.Green,
    fontFamily: Fonts.SF_Bold,
    lineHeight: 26,
    fontSize: 22,
    fontWeight: "700",
    marginRight: "5%"
  },
  Back_Icon: {
    width: 20, height: 20,
    resizeMode:"contain"
  },
  Auth_Cont: {
    flexDirection: 'row',
    alignItems: "center",
    marginRight: "5%"
  },
 
  Input_With_Filter:{
    justifyContent:"space-around",
    flexDirection: "row",
    borderWidth: 1,
    elevation: 3,
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    borderRadius: 10,
    paddingHorizontal: "2%",
    marginTop: "3%",
    alignItems:"center",
    height:55
   },
   Input_Cont: {
     flexDirection: "row",
     alignItems: "center",
   },
   SearchIcon: {
     width: 25, height: 25,
     marginRight: "2%"
   },
   Filter:{
     width: 25, height: 25,
     marginLeft: "2%"
   },
   Search_Input: {
     width: "70%",
     color: Colors.Black,
     fontFamily: Fonts.SF_Medium,
     fontSize: 14,
     backgroundColor: Colors.White
   },
   Btn_Cont: {
     marginTop: 20,
     marginBottom: 10
   },
   Btn: {
     paddingHorizontal: 20,
     paddingVertical: 12,
     borderRadius: 8,
     backgroundColor: Colors.White,
     marginRight: 10,
     borderWidth: 0.5,
     borderColor: Colors.Grey4
   },
   ActiveBtn: {
     backgroundColor: Colors.Green
   },
   Btn_Txt: {
     fontSize: 16,
     fontFamily: Fonts.SF_SemiBold,
     lineHeight: 20,
     color: Colors.Black
   },
   ActiveBtn_Txt: {
     color: Colors.White
   },
   selected_City_Container:{
   marginBottom:"5%",
   marginTop:'3%'
   },
   Cities_Name:{
    fontSize: 22,
    lineHeight:28,
    color: 'red',
    fontFamily: Fonts.SF_Bold,
    marginBottom:"1%"
   },
   SelectedCitiesContainer:{
      flexDirection:"row",
      flexWrap:"wrap",
      marginBottom:'2%'
   },
   SelectedCityBackground:{
    backgroundColor:Colors.Green,
    margin:"1%",
    paddingVertical:"2%",
    paddingHorizontal:'3%',
    borderRadius:15
   },
   SelectedCityText:{
    fontSize: 14,
    lineHeight:18,
    color: Colors.White,
    fontFamily: Fonts.SF_Medium,
   },
   
  
  FlatList_Cont: {
    paddingBottom: "10%"
  },
  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    padding: '2%',
    flexDirection: "row",
    elevation:2,
    marginTop:"4%",
    height:110,
    alignItems:"center",
    width:"100%"
  },
  ItemCont:{
    flexDirection:"row",
    alignItems:"center",
    width:'90%',
  },
 
  Detail_cont: {
    justifyContent: "center",
    marginLeft: "4%",
    marginRight:"3%",
    width:"65%",
  },
  Product_Img: {
    width: 90, height: 90,
    resizeMode:"contain",
    marginLeft:'2%'
  },
  Title: {
    fontSize: 12,
    fontFamily: Fonts.SF_Bold,
    fontWeight: "300",
    lineHeight: 17,
    color: Colors.Black,
    marginBottom: "3%",
  },
  City_Cont: {
    backgroundColor: "#D0A700",
    paddingHorizontal: "3%",
    borderRadius: 5,
    height: 27,
    justifyContent: "center",
    marginTop: "3%", // Adjust the margin to create space
    marginBottom: "3%", // Adjust the margin to create space
    alignSelf:"flex-start"
  },
  City_Text_Container: {
    justifyContent: "center", // Center the text vertically
  },
  City_Text: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.White,
    fontFamily: Fonts.SF_Medium,
  },
  
  Action_Cont:{
    width:'10%',
    height:80,
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  AddBtn:{
    width:65,height:65,
    borderRadius:50,
    elevation:2,
    position:"absolute",
    backgroundColor:Colors.Green,
    bottom:20,
    right:20,
    justifyContent:"center",
    alignItems:"center"

  }
 
})

