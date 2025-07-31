import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import AppModal from '../../../components/AppModal/AppModal';
import AppButton from '../../../components/AppButton/AppButton';

interface PhoneVerificationModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: () => void;
    phoneNumber: string;
    countryCode: string;
}

const PhoneVerificationModal: React.FC<PhoneVerificationModalProps> = ({
    visible,
    onClose,
    onConfirm,
    phoneNumber,
    countryCode,
}) => {
    return (
        <AppModal visible={visible} onClose={onClose}>
            <Image
                source={require('../../../assets/images/ellipses_1.png')}
                style={styles.illustration}
                resizeMode="contain"
            />
            <Text style={styles.title}>Verify your phone number before we send code</Text>
            <Text style={styles.subtext}>
                Is this correct? +{countryCode} {phoneNumber}
            </Text>

            <AppButton title="Yes" onPress={onConfirm} style={styles.button} />
            <AppButton title="No" onPress={onClose} style={styles.buttonOutline} textStyle={styles.buttonOutlineText} />
        </AppModal>
    );
};

export default PhoneVerificationModal;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 12,
        marginTop: 16,
    },
    subtext: {
        fontSize: 14,
        color: '#555',
        marginBottom: 24,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        marginBottom: 12,
    },
    buttonOutline: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderColor: '#304FFE',
        borderWidth: 1,
        color: '#304FFE',
    },
    buttonOutlineText: {
        color: '#304FFE',
    },
    illustration: {
        width: 150,
        height: 150,
    },

});
