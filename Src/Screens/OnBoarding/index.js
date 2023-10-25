import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { Back_Icon } from '../../Themes/Images';
import { styles } from './style';
import { SlidesData } from './DummyData';


const OnBoarding = ({ navigation }) => {

  const [showRealApp, setShowRealApp] = useState(false);
  const sliderRef = useRef(null); // Ref for the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    if (currentIndex < SlidesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current?.goToSlide(currentIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      sliderRef.current?.goToSlide(currentIndex - 1);
    }
  };

  const renderItem = ({ item, index }) => {
    const isLastSlide = index === SlidesData.length - 1;
    const isFirstSlide = index === 0;

    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        {isFirstSlide ? null : (
          <TouchableOpacity style={styles.prevButton} onPress={handlePrevSlide}>
            <Image source={Back_Icon} style={styles.Back_Icon} />
          </TouchableOpacity>
        )}

        <Image source={item.image} style={styles.image} resizeMode="contain" />

        <Text style={styles.description}>{item.text}</Text>
        <View style={styles.paginationContainer}>
          {SlidesData.map((slide, ind) => (
            <View
              key={slide.key}
              style={[
                styles.paginationDot,
                ind === currentIndex ? styles.activePaginationDot : null,
              ]}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          {isLastSlide ? (
            <CustomButton title={'Next'} onPress={() => navigation.navigate('Login')} />
          ) : (
            <CustomButton title={'Next'} onPress={handleNextSlide} />
          )}
        </View>
      </View>
    );
  };

  if (showRealApp) {
    return <Text>Your App Content Goes Here</Text>;
  } else {
    return (
      <View style={styles.container}>
        <AppIntroSlider
          ref={sliderRef}
          renderItem={renderItem}
          data={SlidesData}
          initialNumToRender={SlidesData.length} // Add this line
          onSlideChange={(index) => setCurrentIndex(index)}
          renderNextButton={() => null}
          renderDoneButton={() => null}
          renderPagination={() => null}
        />
      </View>
    );
  }
};
export default OnBoarding;