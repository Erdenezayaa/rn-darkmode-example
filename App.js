import React from 'react';
import HomeScreen from './ HomeScreen';

import {ThemeContextProvider} from './context';

const App = () => {
  return (
    <ThemeContextProvider>
      <HomeScreen />
    </ThemeContextProvider>
  );
};

export default App;
