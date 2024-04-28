import { StyleSheet, Dimensions } from "react-native";
import { Fonts } from "../../../Themes/Fonts";
import { Colors } from "../../../Themes/Colors";


export const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: Colors.Bg,
        marginBottom: '6%',
        padding: "5%"

    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '4%',
        backgroundColor: Colors.Bg,
        alignItems: "center",
        paddingVertical: "1%",
        paddingBottom: "5%"
    },
    Back_Cont: {
        flexDirection: 'row',
        alignItems: "center",

    },
    Back_Txt: {
        color: Colors.Green,
        fontFamily: Fonts.SF_Bold,
        lineHeight: 26,
        fontSize: 18,
        fontWeight: "400",
        marginRight: "3%"
    },
    Back_Icon: {
        width: 20, height: 20,
        resizeMode: "contain"

    },
    Auth_Cont: {
        flexDirection: 'row',
        alignItems: "center",
        marginRight: "5%"
    },

    Bookmark: {
        width: 23, height: 23,
        resizeMode:"contain",
        tintColor:Colors.Green
    },

    slideContainer: {
        backgroundColor: Colors.White,
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        elevation: 4,
        borderRadius: 10,
        overflow: "hidden",
        height: 300

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
        marginLeft: '40%',
        marginTop:"2%"

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
        width: 30
    },
    Uni_Detail: {
        paddingHorizontal: '0%'
    },
    City_Cont: {
        backgroundColor: '#D0A700',
        height:25,
        marginVertical:'2%',
        alignItems:"center",
        padding:"1%",
        paddingHorizontal:"2%",
        alignSelf:"flex-start",
        borderRadius:5
    },
    City_Text: {
        fontSize: 12,
        color: Colors.White,
        fontFamily: Fonts.SF_Medium,
    },
    Title_Cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    Title: {
        fontSize: 18,
        lineHeight: 24,
        color: Colors.Black,
        fontFamily: Fonts.SF_Medium,
        marginBottom:"1%",
    },
    Status_Cont:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      width:"100%",
      marginBottom:'2%'
    },
    Status: {
        fontSize: 16,
        lineHeight: 22,
        color: Colors.Black,
        fontFamily: Fonts.SF_Medium,
        letterSpacing:0.3
    },
    Type_Cont:{
      backgroundColor:"#9B1E2E",
      paddingHorizontal:"3%",
      borderRadius:5,
      height:27,
      justifyContent:"center"
    },
    Type_Txt:{
        fontSize: 12,
        lineHeight: 20,
        color: Colors.White,
        fontFamily: Fonts.SF_Medium,
    },
    Address_Cont: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: "2%"
    },
    Address_Img: {
        width: 20, height: 20,
        resizeMode: 'contain',
        marginRight: "2%"
    },
    Address: {
        fontSize: 14,
        lineHeight: 20,
        color: Colors.Black,
        fontFamily: Fonts.SF_Medium,
        width:"94%"
    },
    Schedule_Cont: {
        backgroundColor: Colors.White,
        height: 70,
        marginVertical: '4%',
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    Start_Cont: {
        width: '50%',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
        borderColor: Colors.Green
    },
    End_Cont: {
        width: '50%',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    Start_Date: {
        fontSize: 14,
        lineHeight: 18,
        color: Colors.Black,
        fontFamily: Fonts.SF_Regular,
    },
    date: {
        fontSize: 16,
        lineHeight: 20,
        color: Colors.Green,
        fontFamily: Fonts.SF_Bold,
        marginTop: "2%",
    },
    Desc_Cont: {

    },
    Desc: {
        fontSize: 18,
        lineHeight: 22,
        color: Colors.Black,
        fontFamily: Fonts.SF_SemiBold,
        marginVertical: "3%"
    },
    Detail: {
        fontSize: 14,
        lineHeight: 20,
        color: '#000000',
        fontFamily: Fonts.SF_Regular,
        marginBottom: '3%',
        width: "100%",
        paddingBottom:"3%",
    },
    Phone_Cont: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        borderWidth: 0.5,
        padding: '2%',
        borderRadius: 10,
        marginVertical: "1%",
        height:75
    },
    Contact: {
        flexDirection: 'row',
        alignItems: 'center',
        width:"85%",
    },
    Uni_Logo: {
        width: 50, height: 50,
        resizeMode: 'contain',
    },
    User: {
        marginLeft: "2%",
        width:"80%",
        alignItems:"center"
    },
    OwnerName: {
        fontSize: 12,
        lineHeight: 15,
        color: Colors.Black,
        fontFamily: Fonts.SF_Bold,
        width:'100%',
        
    },
    Apply_Btn: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: Colors.Green,
        width: '100%',
        padding: '4%',
        borderRadius: 10,
        marginTop:"4%"
    },
    Req_Btn: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#003300',
        width: '100%',
        padding: '4%',
        marginVertical: '5%',
        borderRadius: 10,
        marginBottom:"10%"
    },
    Rent: {
        color: Colors.White,
        fontSize: 16,
        fontFamily: Fonts.SF_Medium,
        lineHeight: 20
    },
    Phone_Icon: {
        width: 50, height: 50,
        resizeMode:'contain'
    },
    Addmission_Open: {
        color: Colors.Black,
        fontSize: 16,
        fontFamily: Fonts.SF_SemiBold,
        lineHeight: 24,
        marginBottom:"3%"
    },
    Link: {
        color: Colors.Green,
        fontSize: 14,
        fontFamily: Fonts.SF_SemiBold,
        lineHeight: 20,
        marginVertical:"2%"
    },
    Poster_Cont: {
       width:'100%',
       height:300,
       
    },
    Poster: {
       width:330,
       height:300,
       marginHorizontal:10,
       borderRadius:20,
       marginVertical:10,
       resizeMode:'contain'
    },
    Wishlist: {
        width: 25,
        height: 25,
        alignSelf:"center",
        resizeMode:"contain"
      },


})