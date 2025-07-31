import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import AppText from '../../components/AppText/AppText';
import StepHeader from '../../components/StepHeader/StepHeader';

const AuthLandingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

  return (
      <View style={styles.container}>
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../../assets/images/authlanding.png')}
            style={styles.illustration}
            resizeMode="contain"
          />
          <AppText style={styles.title}>Create your {'\n'} QFEX account</AppText>
          <AppText style={styles.subtitle}>QFEX is the 24/7 stock exchange</AppText>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => {
          navigation.navigate('Registration');
        }}>
          <AppText style={styles.primaryButtonText}>Sign up</AppText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => { }}>
          <AppText style={styles.secondaryButtonText}>Log in</AppText>
        </TouchableOpacity>

        <AppText style={styles.footerText}>
          By continuing you accept our{'\n'}
          <AppText style={styles.link} onPress={() => Linking.openURL('https://qfex.com/terms')}>
            Terms of Service
          </AppText>{' '}
          and{' '}
          <AppText style={styles.link} onPress={() => Linking.openURL('https://qfex.com/privacy')}>
            Privacy Policy
          </AppText>
        </AppText>
      </View>
  );
};

export default AuthLandingScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    color: '#A0A0B0',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  illustration: {
    width: 300,
    height: 300,
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },
  primaryButton: {
    backgroundColor: '#3366FF',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 50,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    borderColor: '#3366FF',
    borderWidth: 1.5,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 50,
    width: '100%',
    alignItems: 'center',
    marginBottom: 32,
  },
  secondaryButtonText: {
    color: '#3366FF',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  link: {
    color: '#3366FF',
    textDecorationLine: 'underline',
  },
});