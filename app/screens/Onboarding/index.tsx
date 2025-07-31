import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import OnboardingSlide from './components/OnboardingSlide';
import AppText from '../../components/AppText/AppText';
import AppButton from '../../components/AppButton/AppButton';

const { width } = Dimensions.get('window');

type SlideType = {
  id: string;
  title: string;
  image: any;
};

const slides: SlideType[] = [
  {
    id: '1',
    title: 'Trusted by millions of people',
    image: require('../../assets/images/onboarding_1.png'),
  },
  {
    id: '2',
    title: 'Trade 24/7, and track your portfolio',
    image: require('../../assets/images/onboarding_2.png'),
  },
  {
    id: '3',
    title: 'Use up to 50x leverage',
    image: require('../../assets/images/onboarding_3.png'),
  },
];

const OnboardingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const updateIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace('AuthLanding');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <OnboardingSlide item={item} />}
        keyExtractor={(item) => item.id}
        onScroll={updateIndex}
        scrollEventThrottle={16}
      />
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
          <AppText style={[styles.title, { textAlign: 'center', flex: 4 }]}>
            {slides[currentIndex].title}
          </AppText>
      </View>

      <AppButton
        title="Next"
        onPress={handleNext}
        style={{ marginHorizontal: 24, marginBottom: 60 }}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pagination: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  dotInactive: {
    width: 30,
    backgroundColor: '#c5c5c5ff',
  },
  dotActive: {
    width: 15,
    backgroundColor: '#3B82F6',
  },
  button: {
    marginHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#3B82F6',
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
    title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  }
});
