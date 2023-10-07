import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Bg,
  },
  Back_Icon: {
    width: 30,
    height: 30,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:Colors.Bg
  },
  image: {
    width: '70%',
    height: '45%',
    borderRadius: 20,
    marginTop: '20%',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: Fonts.SF_Medium,
    color: Colors.Black2,
    width: '85%',
    lineHeight: 20,
    marginTop: '2%',
    
  },
  buttonContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: '12%',
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
    marginTop: '12%',
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
