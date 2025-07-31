import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Pressable,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppTextInput from '../../components/AppTextInput/AppTextInput';
import AppButton from '../../components/AppButton/AppButton';
import CountryPicker from 'react-native-country-picker-modal';
import AppText from '../../components/AppText/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import PhoneVerificationModal from './components/PhoneVerificationModal';
import StepHeader from '../../components/StepHeader/StepHeader';
import axiosClient from '../../services/axios-client';

interface Country {
    cca2: string;
    callingCode: string[];
}

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [formValues, setFormValues] = useState<{ phone: string; password: string } | null>(null);
    const [countryCode, setCountryCode] = useState<Country>({ cca2: 'GB', callingCode: ['44'] });
    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        phone: Yup.string()
            .matches(/^[0-9]{6,14}$/, 'Enter a valid phone number')
            .required('Phone is required'),
        password: Yup.string()
            .min(6, 'Minimum 6 characters')
            .required('Password is required'),
    });

    const handleSubmit = (values: { phone: string; password: string }) => {
        setFormValues(values);
        setShowModal(true);
    };

    const handleConfirm = async () => {
        setShowModal(false);
        if (formValues && validationSchema.isValidSync(formValues)) {
            try {
                const response = await axiosClient.post('/auth/register', {
                    phone: `${countryCode.callingCode[0]}${formValues.phone}`,
                    password: formValues.password,
                });
                if (response.status === 200 || response.status === 201) {
                    navigation.navigate('OTPVerification', { phoneNumber: `+${countryCode.callingCode[0]}${formValues.phone}` });
                } else {
                    console.error('Account creation failed:', response.data);
                }
            } catch (error) {
                console.error('API error:', error);
                // treating error as success to show OTP screen
                navigation.navigate('OTPVerification', { phoneNumber: `+${countryCode.callingCode[0]}${formValues?.phone}` });
            }
        }
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
                <Text style={styles.heading}>Create an Account</Text>
                <Text style={styles.subheading}>
                    Enter your mobile number to verify your account
                </Text>
                <Formik
                    initialValues={{ phone: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, values }) => (
                        <View style={styles.formContent}>
                            <View>
                                <AppText style={styles.label}>Phone</AppText>
                                <View style={styles.inputRow}>
                                    <View>
                                        <CountryPicker
                                            countryCode={countryCode.cca2}
                                            withCallingCode
                                            withFlag
                                            withFilter
                                            withCallingCodeButton
                                            onSelect={(country: any) =>
                                                setCountryCode({
                                                    cca2: country.cca2,
                                                    callingCode: country.callingCode,
                                                })
                                            }
                                            containerButtonStyle={styles.flagPicker}
                                        />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <AppTextInput
                                            name="phone"
                                            placeholder="Mobile Number"
                                            value={values.phone}
                                        />
                                    </View>
                                </View>

                                <View style={styles.inputFieldContainer}>
                                    <AppText style={styles.label}>Password</AppText>
                                    <AppTextInput
                                        name="password"
                                        placeholder="Password"
                                        secureTextEntry={!showPassword}
                                        value={values.password}
                                        RightComponent={
                                            <Pressable onPress={() => setShowPassword(prev => !prev)}>
                                                <Icon
                                                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                                    size={20}
                                                    color="#B8B8B8"
                                                />
                                            </Pressable>
                                        }
                                        LeftComponent={
                                            <Icon name="lock-closed-outline" size={20} color="#B8B8B8" />
                                        }
                                    />
                                </View>
                            </View>
                            <AppButton
                                title="Sign up"
                                onPress={handleSubmit as any}
                                disabled={validationSchema.isValidSync(values) === false}
                            />
                        </View>
                    )}
                </Formik>
                <PhoneVerificationModal
                    visible={showModal}
                    onClose={() => setShowModal(false)}
                    onConfirm={handleConfirm}
                    phoneNumber={formValues?.phone || ''}
                    countryCode={countryCode.callingCode[0]}
                />
            </KeyboardAvoidingView>
        </>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#F7F7FB',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subheading: {
        fontSize: 14,
        color: '#666',
        marginBottom: 32,
    },
    formContent: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    inputRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 16,
        marginTop: 8,
        width: '100%',
    },
    flagPicker: {
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    flexInput: {
        flex: 1,
        width: '100%',
    },
    inputFieldContainer: {
        gap: 10
    },
    label: {
        color: '#414141',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        padding: 24,
    },
    modalCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 12,
    },
    modalSubtext: {
        fontSize: 14,
        color: '#555',
        marginBottom: 24,
        textAlign: 'center',
    },
    modalYesButton: {
        width: '100%',
        marginBottom: 12,
    },
    modalNoButton: {
        width: '100%',
    },
});
