import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import AppButton from '../../components/AppButton/AppButton';
import StepHeader from '../../components/StepHeader/StepHeader';

const CELL_COUNT = 6;

interface Props {
  navigation: any;
  route?: {
    params: {
      phoneNumber: string;
    };
  };
}

const OtpVerificationScreen: React.FC<Props> = ({ navigation, route }) => {
  //   const { phoneNumber } = route.params;
  const phoneNumber = route?.params?.phoneNumber || '1234567890';
  const [value, setValue] = useState('');
  const [resendTimer, setResendTimer] = useState(0);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleResend = () => {
    setResendTimer(30);
    setTimeout(() => setResendTimer(0), 30000);
  };

  const handleVerify = () => {
    navigation.navigate('AccountSetup');
  };

  return (
    <>
      <StepHeader
        step={1}
        totalSteps={5}
        onBack={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View>
          <Text style={styles.title}>Confirm your phone</Text>
          <Text style={styles.subtitle}>
            We sent a 6 digit code to {phoneNumber}
          </Text>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <Text style={styles.resendText}>
            Didn’t get a code?{' '}
            <Text style={styles.resendLink} onPress={handleResend}>
              Resend
            </Text>
          </Text>
        </View>

        <AppButton
          title="Verify Your Number"
          onPress={handleVerify}
          disabled={value.length !== 6}
          style={value.length === 6 ? styles.buttonActive : styles.buttonDisabled}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
  },
  codeFieldRoot: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },
  cell: {
    width: 40,
    height: 50,
    lineHeight: 48,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    textAlign: 'center',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 24,
    fontWeight: '500',
  },
  focusCell: {
    borderColor: '#3D5CFF',
  },
  resendText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 20,
  },
  resendLink: {
    color: '#3D5CFF',
    fontWeight: '500',
  },
  buttonActive: {
    backgroundColor: '#3D5CFF',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
});
