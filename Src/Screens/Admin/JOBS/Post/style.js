import { StyleSheet } from "react-native";
import { Colors } from "../../../../Themes/Colors";
import { Fonts } from "../../../../Themes/Fonts";

StyleSheet
export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    Body_container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10
    },
    header: {
      height: 60,
      width: '100%',
      backgroundColor: Colors.Green,
      elevation: 5,
      paddingLeft: 10,
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 18,
      fontWeight: '700',
      color: Colors.White
    },
    inputStyle: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: '#000000',
      paddingHorizontal: 20,
      marginTop: 15,
      alignSelf: 'center',
      color: 'black',
      fontSize: 14,
      height: 50
    },
    Input_Cont: {
      flexDirection: "row",
      width: "100%",
      alignSelf: "center",
      justifyContent: "space-between"
    },
    inputStyle1: {
      width: '48%',
      height: 50,
      borderRadius: 10,
      borderWidth: 0.5,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 10,
      alignSelf: 'center',
      color: 'black',
      fontSize: 14
    },
    Schdule_Cont: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: Colors.Green,
      height: 70,
      alignSelf: "center",
      borderRadius: 10,
      width: "100%"
    },
    Dates: {
      fontSize: 16, color: 'black',
      lineHeight: 25,
      fontFamily: Fonts.SF_SemiBold
    },
    End: {
      fontSize: 18, color: '#FFFFFF',
      lineHeight: 25,
      fontFamily: Fonts.SF_Black
    },
    pickBtn: {
      width: '90%',
      height: 50,
      borderWidth: 0.5,
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    uploadBtn: {
      backgroundColor: '#5246f2',
      width: '90%',
      height: 50,
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 70,
    },
    imageStyle: {
      width: '90%',
      height: 200,
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 20,
    },
    pickBtn: {
      width: '90%',
      height: 50,
      borderWidth: 0.5,
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    multiImageStyle: {
      width: 150,
      height: 150,
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 20,
    },
    Title: {
      fontSize: 24, color: 'black',
      lineHeight: 30,
      fontWeight: "bold",
      marginVertical: "5%",
      alignSelf: "center"
    },
    imageContainer: {
      margin: 10,
  
    },
    imageLabel: {
      fontSize: 18,
      fontFamily: Fonts.SF_SemiBold,
      color: "#000",
      marginBottom: 10,
  
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    pickBtn: {
      width: '100%',
      height: 50,
      borderWidth: 0.5,
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: Colors.Green
    },
    uploadBtn: {
      backgroundColor: 'red',
      width: '100%',
      height: 50,
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20
    },
    Picker_Txt: {
      color: Colors.White,
      fontSize: 14,
      fontWeight: '500',
      fontFamily: Fonts.SF_SemiBold
    }
  });