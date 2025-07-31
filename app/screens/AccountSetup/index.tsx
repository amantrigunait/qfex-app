import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import CountryStep from './components/CountryStep';
import PersonalInfoStep from './components/PersonalInfoStep';
import AddressStep from './components/AddressStep';
import EmailStep from './components/EmailStep';
import AppButton from '../../components/AppButton/AppButton';
import StepHeader from '../../components/StepHeader/StepHeader';

export interface FormValues {
  country: string;
  fullName: string;
  username: string;
  dob: string;
  addressLine: string;
  city: string;
  postcode: string;
  email: string;
}

const validationSchema = [
  Yup.object().shape({ country: Yup.string().required('Country is required') }),
  Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    username: Yup.string().required('Username is required'),
  }),
  Yup.object().shape({ dob: Yup.string().required('DOB is required') }),
  Yup.object().shape({
    addressLine: Yup.string().required('Address Line is required'),
    city: Yup.string().required('City is required'),
    postcode: Yup.string().required('Postcode is required'),
  }),
  Yup.object().shape({ email: Yup.string().email().required('Email is required') }),
];

const AccountSetupScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [step, setStep] = useState(0);

  const initialValues: FormValues = {
    country: '',
    fullName: '',
    username: '',
    dob: '',
    addressLine: '',
    city: '',
    postcode: '',
    email: '',
  };

  const StepComponent = ({ formik }: { formik: FormikProps<FormValues> }) => {
    switch (step) {
      case 0:
        return <CountryStep formik={formik} />;
      case 1:
        return <PersonalInfoStep formik={formik} />;
      case 2:
        return <AddressStep formik={formik} />;
      case 3:
        return <EmailStep formik={formik} />;
      default:
        return <Text>Invalid Step</Text>;
    }
  };

  return (
    <>
      <StepHeader
        step={2}
        totalSteps={5}
        onBack={() => {
          if (step > 0) {
            setStep((s) => s - 1);
          } else {
            navigation.goBack();
          }
        }}
      />
      <View style={styles.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema[step]}
          validateOnMount={true}
          validateOnChange={true}
          onSubmit={(values) => {
            if (step === 3) {
              console.log('Final values:', values);
              navigation.navigate('AccountVerification');
            } else {
              setStep((s) => s + 1);
            }
          }}
        >
          {(formik) => {
            const stepFields = Object.keys(validationSchema[step].fields);
            const isStepValid = stepFields.every(
              (field) => !formik.errors[field as keyof FormValues]
            );

            return (
              <View style={{ flex: 1, justifyContent: 'space-between', marginBottom: 50 }}>
                <StepComponent formik={formik} />
                <AppButton
                  title={step === 3 ? 'Submit' : 'Continue'}
                  style={{ marginTop: 20 }}
                  onPress={async () => {
                    const errors = await formik.validateForm();
                    const stepErrors = stepFields.filter((field) => errors[field]);
                    if (stepErrors.length === 0) {
                      if (step === 3) formik.handleSubmit();
                      else setStep((s) => s + 1);
                    } else {
                      formik.setTouched(
                        stepFields.reduce((acc, cur) => {
                          acc[cur] = true;
                          return acc;
                        }, {} as any)
                      );
                    }
                  }}
                  disabled={!isStepValid}
                />
              </View>
            );
          }}
        </Formik>
      </View>
    </>

  );
};

export default AccountSetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
});
