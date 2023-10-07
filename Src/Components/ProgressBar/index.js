import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

const ProgressBar = () => {
  return (
    <View style={{ flex: 1,borderRadius:10, backgroundColor:'#ECEDED' ,marginVertical:'1%'}}>
      <LinearGradient
        colors={[ '#F16E52','#18965E',]} // Define your gradient colors here
        start={{ x: 0, y: 0.5 }} // Horizontal gradient start point
        end={{ x: 1, y: 0.5 }} // Horizontal gradient end point
        style={{ width:'85%', borderRadius:10, transform: [{ scaleX: -1 }], overflow: 'hidden' }}
      >
        <Progress.Bar
          progress={0.1}
          width={400}
          height={10}
          color={'transparent'} // Set the progress bar color to transparent
          unfilledColor={'ECEDED'} // Set the unfilled color to transparent
          borderWidth={1} // Set the border width to zero
          borderRadius={10} // Set the border radius to zero
          useNativeDriver={true} // For performance optimization
          animated={true} // Enable animation if needed
        />
      </LinearGradient>
    </View>
  );
}

export default ProgressBar;
