import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const TESTSCREEN = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
});

export default TESTSCREEN;