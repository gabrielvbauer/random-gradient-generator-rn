import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Lato_400Regular } from '@expo-google-fonts/lato'

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar 
        hidden
      />
      <Home />
    </>
  );
}