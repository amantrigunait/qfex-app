import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';

// Lazy import screens
const OnboardingScreen = React.lazy(() => import('../screens/Onboarding'));
const AuthLandingScreen = React.lazy(() => import('../screens/AuthLanding'));
const RegisterScreen = React.lazy(() => import('../screens/Registration'));
const OTPVerification = React.lazy(() => import('../screens/OTPVerification/OTPVerification'));
const AccountSetupScreen = React.lazy(() => import('../screens/AccountSetup'));
const AccountVerification = React.lazy(() => import('../screens/AccountVerification'));
const TestScreen = React.lazy(() => import('../screens/TESTSCREEN'));

const Stack = createNativeStackNavigator();

function FallbackLoader() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Suspense fallback={<FallbackLoader />}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="AccountSetup" component={AccountSetupScreen} />
          <Stack.Screen name="OTPVerification" component={OTPVerification} />
          <Stack.Screen name="Registration" component={RegisterScreen} />
          <Stack.Screen name="AuthLanding" component={AuthLandingScreen} />
          <Stack.Screen name="AccountVerification" component={AccountVerification} />
          <Stack.Screen name="TestScreen" component={TestScreen} />
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  );
}
