import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Animated, Dimensions } from 'react-native';

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const images = [
    require('../assets/Mega-Menu-1.png'),
    require('../assets/carimgtwo.jpg'), 
    require('../assets/Mega-Menu-1.png'),
  ];

  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the banner every 1 second
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -currentIndex * windowWidth,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bannerContainer, { transform: [{ translateX: animatedValue }] }]}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center', 
  },
  bannerContainer: {
    flexDirection: 'row',
  },
  image: {
    width: Dimensions.get('window').width, // Use full window width
    height: 200, // Adjust height as needed
  },
});

export default BannerSlider;
