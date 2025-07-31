// components/StepHeader.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface StepHeaderProps {
  step: number;
  totalSteps: number;
  onBack: () => void;
  style?: ViewStyle;
  hideBackButton?: boolean;
}

const StepHeader: React.FC<StepHeaderProps> = ({ step, totalSteps, title, onBack, style, hideBackButton }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <View style={[styles.container, style]}>

      <View style={styles.topRow}>
        {!hideBackButton && (
          <>
            <TouchableOpacity onPress={onBack}>
              <Icon name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
            <View style={{ width: 24 }} />
          </>
        )}

      </View>

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: '#ffffffff',
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  progressBarBackground: {
    height: 3,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 3,
    backgroundColor: '#3366FF', // Indigo/purple (matches screenshot)
    borderRadius: 2,
  },
});

export default StepHeader;