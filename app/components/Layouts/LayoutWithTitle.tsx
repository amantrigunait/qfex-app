import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const LayoutWithTitle = ({ title, subtitle, children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6c6c6c',
    marginBottom: 24,
  },
  content: {
    flexDirection: 'column',
  },
});

export default LayoutWithTitle;
