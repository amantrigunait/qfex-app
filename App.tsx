import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ReduxProvider from './app/store';
import RootNavigation from './app/routes/RootNavigation';

let Root = function App() {
 
  const [showReleaseModal, setShowReleaseModal] = React.useState(false);
  return (
    <SafeAreaProvider>
      <ReduxProvider>
          <RootNavigation />
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default Root;