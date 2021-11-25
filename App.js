import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BarraNavegacion from './src/navigator/BarraNavegacion';

const App = () => {
  return (
    <NavigationContainer>
      <BarraNavegacion />
    </NavigationContainer>
  );
}

export default App;