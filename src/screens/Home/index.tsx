import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import { Button } from '../../components/Button';
import { styles } from './styles';
import { useState } from 'react';

export function Home() {
  const [actualGradient1, setActualGradient1] = useState('')
  const [actualGradient2, setActualGradient2] = useState('')
  const [autoMode, setAutoMode] = useState<Boolean>(false)
  const [intervalID, setIntervalID] = useState<NodeJS.Timer>()
  const randomFactor = ((255 - 0 + 1) + 0)

  const generateRGBValues = () => {
    let r = Math.floor(Math.random() * (randomFactor))
    let g = Math.floor(Math.random() * (randomFactor))
    let b = Math.floor(Math.random() * (randomFactor))

    let rr = Math.floor(Math.random() * (randomFactor))
    let gg = Math.floor(Math.random() * (randomFactor))
    let bb = Math.floor(Math.random() * (randomFactor))

    return {
      r,
      g,
      b,
      rr,
      gg,
      bb
    }
  }

  const generateRGBGradient = () => {
    const values = generateRGBValues();

    const firstGradient = `rgb(${values.r}, ${values.g}, ${values.b})`
    const secondGradient = `rgb(${values.rr}, ${values.gg}, ${values.bb})`

    setActualGradient1(firstGradient)
    setActualGradient2(secondGradient)
  }

  const enableAutoMode = () => {
    setAutoMode(!autoMode);

    if (intervalID) {
      clearInterval(intervalID)
    }

    if (autoMode != true) {
      return
    }

    const interval = setInterval(() => {
      generateRGBGradient()
    }, 500)
    setIntervalID(interval)
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[actualGradient1, actualGradient2]}
        style={styles.background}
      >
        <View style={styles.buttonsWrapper}>
          <Button 
            title="Click"
            onPress={() => generateRGBGradient()}
          />
          <Button 
            title="Auto mode"
            onPress={() => enableAutoMode()}
          />
        </View>
      </LinearGradient>
    </View>
  );
}