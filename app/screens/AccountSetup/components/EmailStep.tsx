import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormikProps } from 'formik';
import { FormValues } from '../../AccountSetup';
import LayoutWithTitle from '../../../components/Layouts/LayoutWithTitle';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import AppText from '../../../components/AppText/AppText';

const EmailStep = ({ formik }: { formik: FormikProps<FormValues> }) => {
  return (
    <LayoutWithTitle
      title="Add Your Email"
      subtitle="This will be used to verify and communicate with you"
    >
      <View style={styles.inputFieldContainer}>
        <AppText style={styles.label}>Email</AppText>
        <AppTextInput
          name="email"
          placeholder="Enter email"
          value={formik.values.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
    </LayoutWithTitle>
  );
};

export default EmailStep;

const styles = StyleSheet.create({
  label: {
    color: '#414141',
  },
  inputFieldContainer: {
    marginBottom: 20,
    gap: 10,
  },
});
