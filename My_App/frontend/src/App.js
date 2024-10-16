// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './navigation/StackNavigator';
// import { UserProvider } from './context/UserContext';

// export default function App() {
//   return (
//     <UserProvider>
//       {/* <NavigationContainer> */}
//         <StackNavigator />
//       {/* </NavigationContainer> */}
//     </UserProvider>
//   );
// }


// App.js BONNE VERSION
import React from 'react';
import { UserProvider } from './context/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ExploreScreen from './screens/ExploreScreen';




const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
   {/*  <NavigationContainer> */}
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        </Stack.Navigator>
     {/* </NavigationContainer> */}
    </UserProvider>
  );
};

export default App;


// App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './navigation/StackNavigator'; // Ou où que ton StackNavigator soit
// import { UserProvider } from './context/UserContext';

// const App = () => {
//   return (
//     <UserProvider>
//       {/* <NavigationContainer> */}
//         <StackNavigator />
//       {/* </NavigationContainer> */}
//     </UserProvider>
//   );
// };

// export default App;

