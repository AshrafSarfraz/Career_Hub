import { StyleSheet } from "react-native";
import { Fonts } from "../../Themes/Fonts";
import { Colors } from "../../Themes/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  Header:{
  alignItems:"center",
  height:50,
  width:"100%",
  justifyContent:"center",
  backgroundColor:Colors.Green,
  marginBottom:"2%"
  },
  Header_Txt:{
   fontFamily:Fonts.SF_Bold,
   fontSize:16,
   lineHeight:22,
   color:Colors.White
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  Btn_Cont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '94%',
    alignSelf:"center",
    marginVertical:"2%",
    marginBottom:"4%"

  },
  Btn: {
    width: "32%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: 'green',
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    fontFamily:Fonts.SF_SemiBold,
    color: Colors.Green,
    fontSize: 14,
    lineHeight: 18
  },
  Active_Btn: {
    backgroundColor: Colors.Green,
    width: "30%",
    borderWidth: 1,
    borderColor: Colors.Green,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  Active_Txt: {
    color: Colors.White,
    fontFamily:Fonts.SF_Medium,
    fontSize: 14,
    lineHeight: 18
  },
  
  FlatList_Cont: {
    paddingBottom: "10%",
    width:"94%",
    alignSelf:"center"
  },
  Cart: {
    backgroundColor: Colors.White,
    width:'100%',
    borderRadius: 10,
    padding: '3%',
    flexDirection: "row",
    elevation: 2,
    marginBottom: "3%",
    height: 120,
    alignItems: "center",
  },
  Img_Cont:{
   flexDirection:"row",
   alignItems:"center",
   width:'90%'
  },
  Product_Img: {
    width: 80, height: 80,
    resizeMode: "contain",
    borderRadius:10
  },
  Title_City_Container:{
     flexDirection:"column",
     justifyContent:'space-around',
     marginLeft:'3%',
     width:'70%',
  },
  City_Cont: {
    backgroundColor: '#D0A700',
    borderRadius: 5,
    height:27,
    paddingHorizontal:"3%",
    paddingVertical:'1%',
    justifyContent:'center',
    alignSelf:"flex-start"
  },
  City_Text: {
    fontSize: 12,
    lineHeight: 17,
    color: Colors.White,
    fontFamily: Fonts.SF_Medium,
  },
  Title: {
    fontSize: 14,
    fontFamily: Fonts.SF_Bold,
    fontWeight: "400",
    lineHeight: 16,
    color: Colors.Black,
    width: "100%",
    marginBottom:"3%"
  },
  Detail_cont: {
    justifyContent: "center",
    marginLeft: "4%",
    marginRight: "3%",
    
  },
  Wishlist: {
    width: 23,
    height: 23,
    alignSelf:"center",
    resizeMode:"contain"
  },
});