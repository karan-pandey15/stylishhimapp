import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoundTags = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    // Navigate to other screen when image is clicked
    navigation.navigate('skincare');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ImageContainer name="All Products" imageSource={require('../assets/firs.jpeg')} onPress={handleImagePress} />
        <ImageContainer name="Hair Spray" imageSource={require('../assets/thir.jpeg')} onPress={handleImagePress} />
        <ImageContainer name="Body Care" imageSource={require('../assets/bodycare.jpeg')} onPress={handleImagePress} />
      </View>
      <View style={styles.row}>
        <ImageContainer name="Moisturizer" imageSource={require('../assets/skin.jpeg')} onPress={handleImagePress} />
        <ImageContainer name="Skin Care" imageSource={require('../assets/bodycare.jpeg')} onPress={handleImagePress} />
        <ImageContainer name="Face Wash" imageSource={require('../assets/facewash.jpeg')} onPress={handleImagePress} />
      </View>
    </View>
  );
};

const ImageContainer = ({ name, imageSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50, // Rounded corners
    overflow: 'hidden', // Clip the content to the rounded border
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 5,
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RoundTags;
