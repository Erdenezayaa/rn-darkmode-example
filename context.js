import {useColorScheme} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {themes} from './themes';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const ThemeContextProvider = ({children}) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(themes[systemTheme]);
  useEffect(() => {
    AsyncStorage.getItem('theme').then(value => {
      if (value === 'dark' || value === 'light') {
        setThemeValue(value);
      }
    });
  }, []);
  const setThemeValue = value => {
    setTheme(themes[value]);
    AsyncStorage.setItem('theme', value);
  };
  return (
    <ThemeProvider
      value={{
        theme,
        setTheme: setThemeValue,
      }}>
      {children}
    </ThemeProvider>
  );
};
