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
        fontSize: 22,
        fontWeight: "700",
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
        width: 25, height: 25,
    },

    slideContainer: {
        backgroundColor: Colors.White,
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        elevation: 4,
        borderRadius: 10,
        overflow: "hidden",
        height: 330

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
        marginLeft: '40%'

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
        paddingHorizontal: "3%",
        alignItems: 'center',
        width: 150,
        padding: "1%",
        marginVertical: "3%",
        borderRadius: 5,
    },
    City_Text: {
        fontSize: 14,
        lineHeight: 18,
        color: Colors.White,
        fontFamily: Fonts.SF_Medium,
    },
    Title_Cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    Title_Cont: {
        flexDirection: "row",
        alignItems: 'center'
    },
    Title: {
        fontSize: 20,
        lineHeight: 25,
        color: Colors.Black,
        fontFamily: Fonts.SF_Medium,
    },
    Status: {
        fontSize: 20,
        lineHeight: 25,
        color: Colors.Black,
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
        fontSize: 16,
        lineHeight: 20,
        color: Colors.Black,
        fontFamily: Fonts.SF_Medium,
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
        fontFamily: Fonts.SF_Medium,
        marginVertical: "3%"
    },
    Detail: {
        fontSize: 15,
        lineHeight: 20,
        color: Colors.Black,
        fontFamily: Fonts.SF_Regular,
        marginBottom: '3%',
        width: "100%"
    },
    Contact: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Phone_Cont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%',
        backgroundColor: "#FFFFFF",
        borderWidth: 0.5,
        padding: '3%',
        borderRadius: 10,
        marginVertical: "1%",
    },
    Uni_Logo: {
        width: 60, height: 60,
        resizeMode: 'contain',
        marginRight: '2%'
    },
    User: {
        marginLeft: "3%"
    },

    OwnerName: {
        fontSize: 16,
        lineHeight: 20,
        color: Colors.Green,
        fontFamily: Fonts.SF_Bold,
        marginRight: "2%"

    },
    Btn: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: Colors.Green,
        width: '100%',
        padding: '4%',
        marginVertical: '5%',
        borderRadius: 10
    },

    Rent: {
        color: Colors.White,
        fontSize: 16,
        fontFamily: Fonts.SF_Medium,
        lineHeight: 20
    },

    Phone_Icon: {
        width: 60, height: 60,
    },
    Addmission_Open: {
        color: Colors.Black,
        fontSize: 20,
        fontFamily: Fonts.SF_SemiBold,
        lineHeight: 26,
    },
    Link: {
        color: Colors.Green,
        fontSize: 14,
        fontFamily: Fonts.SF_SemiBold,
        lineHeight: 20,
        marginVertical:"2%"
    },
    Poster_Cont: {

    },
    Poster: {
        width: 400,
        height: 350,
        resizeMode: 'stretch',
        alignSelf: "center"
    },




})