import React from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  TextStyle,
  Platform,
} from 'react-native';

interface AppTextProps extends TextProps {
  weight?: 'book' | 'medium' | 'heavy';
  style?: TextStyle | TextStyle[];
}

const getFontFamily = (weight: AppTextProps['weight']) => {
  switch (weight) {
    case 'medium':
      return 'AvenirLTStd-Medium';
    case 'heavy':
      return 'AvenirLTStd-Heavy';
    default:
      return 'AvenirLTStd';
  }
};

const AppText: React.FC<AppTextProps> = ({ style, weight = 'book', children, ...rest }) => {
  const fontFamily = getFontFamily(weight);

  return (
    <Text
      {...rest}
      style={[{ fontFamily }, styles.base, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    color: '#000000ff', // Set default text color if needed
  },
});

export default AppText;
