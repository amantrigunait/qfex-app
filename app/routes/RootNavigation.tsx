import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { getSecureValue } from '../utils/keyChain';
import { updateToken, updateUser } from '../store/userSlice';
import TESTSCREEN from '../screens/TESTSCREEN';
import OnboardingScreen from '../screens/Onboarding';
import AuthLandingScreen from '../screens/AuthLanding';
import RegisterScreen from '../screens/Registration';
import OTPVerification from '../screens/OTPVerification/OTPVerification';
import AccountSetupScreen from '../screens/AccountSetup';
import AccountVerification from '../screens/AccountVerification';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="AccountSetup" component={AccountSetupScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="Registration" component={RegisterScreen} />
        <Stack.Screen name="AuthLanding" component={AuthLandingScreen} />
        <Stack.Screen name="AccountVerification" component={AccountVerification} />
        <Stack.Screen name="TestScreen" component={TESTSCREEN} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}