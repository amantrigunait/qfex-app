import React, { useState } from 'react';
import { View } from 'react-native';
import IDScanStep from './components/IDScanStep';
import StepHeader from '../../components/StepHeader/StepHeader';
// import SelfieStep from './components/SelfieStep';
// import VerificationStatusStep from './components/VerificationStatusStep';

export type VerificationStep = 'SCAN_ID' | 'TAKE_SELFIE' | 'VERIFY_STATUS';
export const steps = ['SCAN_ID', 'TAKE_SELFIE', 'VERIFY_STATUS'] as const;


const AccountVerification: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [stepIndex, setStepIndex] = useState(0);

    const nextStep = () => setStepIndex((prev) => prev + 1);

    const steps: VerificationStep[] = ['SCAN_ID', 'TAKE_SELFIE', 'VERIFY_STATUS'];

    const renderStep = () => {
        switch (steps[stepIndex]) {
            case 'SCAN_ID':
                return <IDScanStep onNext={nextStep} />;
            //   case 'TAKE_SELFIE':
            //     return <SelfieStep onNext={nextStep} />;
            //   case 'VERIFY_STATUS':
            //     return <VerificationStatusStep />;
            default:
                return null;
        }
    };

    return (
        <>
            <StepHeader
                step={3}
                totalSteps={5}
                onBack={() => navigation.goBack()}
            />
            <View style={{ flex: 1 }}>{renderStep()}</View>;
        </>
    )
};

export default AccountVerification;
