import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormikProps } from 'formik';
import { FormValues } from '../../AccountSetup';
import LayoutWithTitle from '../../../components/Layouts/LayoutWithTitle';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import AppText from '../../../components/AppText/AppText';

const AddressStep = ({ formik }: { formik: FormikProps<FormValues> }) => {
  return (
    <LayoutWithTitle
      title="Address"
      subtitle="Enter the address as per your valid government ID"
    >
      {/* Address Line */}
      <View style={styles.inputFieldContainer}>
        <AppText style={styles.label}>Address Line</AppText>
        <AppTextInput
          name="addressLine"
          placeholder="Enter address line"
          value={formik.values.addressLine}
        />
      </View>

      {/* City */}
      <View style={styles.inputFieldContainer}>
        <AppText style={styles.label}>City</AppText>
        <AppTextInput
          name="city"
          placeholder="Enter city"
          value={formik.values.city}
        />
      </View>

      {/* Postcode */}
      <View style={styles.inputFieldContainer}>
        <AppText style={styles.label}>Postcode</AppText>
        <AppTextInput
          name="postcode"
          placeholder="Enter postcode"
          value={formik.values.postcode}
        />
      </View>
    </LayoutWithTitle>
  );
};

export default AddressStep;

const styles = StyleSheet.create({
  label: {
    color: '#414141',
  },
  inputFieldContainer: {
    marginBottom: 20,
    gap: 10,
  },
});
