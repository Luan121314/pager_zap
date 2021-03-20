
import React from 'react';
import { Provider } from 'react-native-paper';
import { PreferencesProvider } from './src/contexts/Preferences';
import Routes from './src/Routes';

const App = () => {
  return (
    <Provider >
      <PreferencesProvider>
        <Routes />
      </PreferencesProvider>
    </Provider>
  );
};

export default App;
