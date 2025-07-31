// IDScanOverlay.tsx
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../../../components/AppText/AppText';

const IDScanOverlay = () => {
  return (
    <View style={styles.overlay}>
      <AppText style={styles.step}>1/2</AppText>
      <AppText style={styles.instruction}>Please scan front of your ID card</AppText>

      <Image
        source={require('../../../assets/images/authlanding.png')}
        style={styles.idImage}
        resizeMode="contain"
      />

      <AppText style={styles.title}>ID verification in progress</AppText>
      <AppText style={styles.subtitle}>Hold tight, it won't take long</AppText>

      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
    </View>
  );
};

export default IDScanOverlay;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.85)',
    alignItems: 'center',
    paddingTop: 80,
  },
  step: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 8,
  },
  instruction: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  idImage: {
    width: 250,
    height: 160,
    marginVertical: 30,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 5,
  },
  progressBar: {
    width: 200,
    height: 6,
    backgroundColor: '#555',
    borderRadius: 4,
    marginTop: 20,
  },
  progressFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#3D7EFF',
    borderRadius: 4,
  },
});
