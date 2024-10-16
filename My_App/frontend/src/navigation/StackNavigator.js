// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Header from '../components/Header';
// import HomeScreen from '../screens/HomeScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen';
// import { Button } from 'react-native';

// import { TouchableOpacity, Text } from 'react-native';
// import { globalStyles } from '../styles/global';
// import { settingsStyles } from '../styles/settingsStyles'; 
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';  // Ton écran de connexion
import HomeScreen from '../screens/HomeScreen';    // Ton écran d'accueil
import ProfileScreen from '../screens/ProfileScreen';  // Ton profil (fonctionne déjà)
import RegisterScreen from '../screens/RegisterScreen';  // Inscription
import SettingsScreen from '../screens/SettingsScreen';
import ExploreScreen from '../screens/ExploreScreen';    // Ton écran d'accueil    // Ton écran d'accueil

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
	<Stack.Navigator
		screenOptions={{
			headerStyle: globalStyles.header, // Style pour le header
			headerTitleStyle: globalStyles.headerTitle, // Style pour le titre
			headerRight: () => (
				<Button
				  title="Right"
				  onPress={() => alert('Right button')}
				  style={globalStyles.headerButton}  // Style pour le bouton droit
				/>
			),
			headerLeft: () => (
				<Button
				  title="Left"
				  onPress={() => alert('Left button')}
				  style={globalStyles.headerButton}  // Style pour le bouton gauche
				/>
			  ),
      	}}>	
		<Stack.Screen name="Login" component={LoginScreen} />
		<Stack.Screen name="Home" component={HomeScreen} />
		<Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
		<Stack.Screen name="Settings" component={SettingsScreen} />
  	</Stack.Navigator>
  );
}

