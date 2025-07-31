import React from 'react';
import { View, Text, Button, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import AppText from '../../../components/AppText/AppText';

const IDScanStep = ({ onNext }: { onNext: () => void }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
            <Image
                source={require('../../../assets/images/idscan.png')}
                style={styles.illustration}
                resizeMode="contain"
            />
            <AppText style={styles.title}>Scan ID document to verify your identity</AppText>
            <AppText style={styles.subtitle}>Confirm your identity with just a few taps on your phone</AppText>
            

            <TouchableOpacity style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }} onPress={onNext}>
                <Image
                    source={require('../../../assets/images/scan_button.png')}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                />
                <AppText style={{ marginTop: 5 }}>Scan</AppText>
            </TouchableOpacity>
        </View>
    );
};

export default IDScanStep;

const styles = StyleSheet.create({
    illustration: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#777',
        marginTop: 10,
    },

})
