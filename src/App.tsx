import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import './i18n';


import { store } from './store';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ReduxProvider>
  );
} 