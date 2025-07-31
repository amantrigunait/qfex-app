import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

type SlideProps = {
  item: {
    title: string;
    image: any;
  };
};

const OnboardingSlide: React.FC<SlideProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

    </View>
  );
};

export default OnboardingSlide;

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  image: {
    height: 280,
    width: '100%',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
});
