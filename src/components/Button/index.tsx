import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: String
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      {...props}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}