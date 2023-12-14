import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Bg,
  },
  Back_Icon: {
    width: 20,
    height: 20,
    resizeMode:"contain"
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.Bg
  },
  image: {
    width: '70%',
    height: '45%',
    borderRadius: 20,
    marginTop: '15%',
  },
  Title:{
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.SF_Black,
    color: Colors.Black,
    lineHeight: 26,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: Fonts.SF_Medium,
    color: Colors.Black,
    lineHeight: 20,
    marginTop: '3%',
 
  },
  buttonContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: '10%',
  },
  prevButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  prevButtonText: {
    color: Colors.Black2,
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '4%',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.Grey4,
    marginHorizontal: 2,
  },
  activePaginationDot: {
    backgroundColor: Colors.Green,
    width: 30,
    height: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
