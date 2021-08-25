import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 80,
    paddingVertical: 9,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    color: '#FFF',
  }
});