import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FormikProps } from 'formik';
import { FormValues } from '../../AccountSetup';
import LayoutWithTitle from '../../../components/Layouts/LayoutWithTitle';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import AppText from '../../../components/AppText/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';

const PersonalInfoStep = ({ formik }: { formik: FormikProps<FormValues> }) => {
  const [open, setOpen] = useState(false);

  return (
    <LayoutWithTitle
      title="Add your personal info"
      subtitle="This info needs to be accurate with your document"
    >
      {/* Full Name */}
      <View style={styles.inputFieldContainer}>
        <AppText style={styles.label}>Full Name</AppText>
        <AppTextInput
          name="fullName"
          placeholder="MR. John Doe"
          value={formik.values.fullName}
        />
      </View>

      {/* Username */}
      <View style={styles.inputFieldContainer}>
        <AppText style={styles.label}>Username</AppText>
        <AppTextInput
          name="username"
          placeholder="@username"
          value={formik.values.username}
        />
      </View>

      {/* DOB */}
      <View style={styles.inputFieldContainer}>
        <AppText style={styles.label}>Date of Birth</AppText>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={styles.dobInput}
        >
          <Icon name="calendar-outline" size={20} color="#6B7280" />
          <AppText style={styles.dobText}>
            {formik.values.dob ? formik.values.dob : 'MM/DD/YYYY'}
          </AppText>
        </TouchableOpacity>
      </View>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={formik.values.dob ? new Date(formik.values.dob) : new Date()}
        onConfirm={(date) => {
          setOpen(false);
          formik.setFieldValue('dob', date.toISOString().split('T')[0]);
        }}
        onCancel={() => setOpen(false)}
      />
    </LayoutWithTitle>
  );
};

export default PersonalInfoStep;

const styles = StyleSheet.create({
  label: {
    color: '#414141',
  },
  inputFieldContainer: {
    marginBottom: 20,
    gap: 10,
  },
  dobInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  dobText: {
    marginLeft: 10,
    color: '#111827',
  },
});
