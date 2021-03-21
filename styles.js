import {StyleSheet} from 'react-native';

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    highlight: {
      fontWeight: '700',
      color: theme.colors.text,
      marginTop: 10,
      textAlign: 'center',
    },
    wrapper: {
      backgroundColor: theme.colors.background,
    },
  });

export {getStyles};
