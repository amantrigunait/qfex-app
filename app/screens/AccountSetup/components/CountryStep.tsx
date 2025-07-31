import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormikProps } from 'formik';
import { FormValues } from '../../AccountSetup';
import LayoutWithTitle from '../../../components/Layouts/LayoutWithTitle';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';

const CountryStep = ({ formik }: { formik: FormikProps<FormValues> }) => {
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>();

  useEffect(() => {
    if (formik.values.country) {
    }
  }, []);

  const handleSelect = (country: Country) => {
    setCountryCode(country.cca2);
    formik.setFieldValue('country', country.name);
  };

  return (
    <LayoutWithTitle
      title="Country of residence"
      subtitle="This info needs to be accurate with your document"
    >
      <Text style={styles.label}>Country</Text>
      <CountryPicker
        withFilter
        withFlag
        withCountryNameButton
        withAlphaFilter
        countryCode={countryCode}
        onSelect={handleSelect}
        placeholder="Select your country"
        containerButtonStyle={styles.flagPicker}
        rightIcon={{ name: 'chevron-down', size: 24, color: '#000' }}
      />
      {formik.touched.country && formik.errors.country && (
        <Text style={styles.error}>{formik.errors.country}</Text>
      )}
    </LayoutWithTitle>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  flagPicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default CountryStep;
