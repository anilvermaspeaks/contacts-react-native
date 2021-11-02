import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import AppContainer from './src/navigations'

import AppProvider from './src/context/provider'

export default function App() {
  return (
    <AppProvider><AppContainer /></AppProvider>
  );
}