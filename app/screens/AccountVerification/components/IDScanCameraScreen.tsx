import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import IDScanOverlay from './IDScanOverlay'; // the overlay you designed

const IDScanCameraScreen = ({ onScanComplete }: { onScanComplete: () => void }) => {
  const devices = useCameraDevices();
  const device = devices.back;
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    // Request camera permission on mount
    (async () => {
      const status = await Camera.requestCameraPermission();
      if (status === 'denied') {
        // Handle denial
      }
    })();
  }, []);

  const handleIDCaptured = () => {
    setOverlayVisible(true);
    setTimeout(() => {
      setOverlayVisible(false);
      onScanComplete();
    }, 2000); // Simulated scan duration
  };

  if (!device) return null;

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        onInitialized={handleIDCaptured}
      />

      {isOverlayVisible && <IDScanOverlay />}
    </View>
  );
};

export default IDScanCameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
