import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      {/* <NavigationContainer> */}
        <StackNavigator />
      {/* </NavigationContainer> */}
    </UserProvider>
  );
}

