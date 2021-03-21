import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Switch,
  View,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {ThemeContext} from './context';
import {getStyles} from './styles';

const HomeScreen = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  const onThemeChange = () => {
    setTheme(theme.dark ? 'light' : 'dark');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Header />
        <View style={styles.wrapper}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Switch value={theme.dark} onValueChange={onThemeChange} />
          </View>
          <Text style={styles.highlight}>
            This is {theme.dark ? 'dark' : 'light'} mode
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
