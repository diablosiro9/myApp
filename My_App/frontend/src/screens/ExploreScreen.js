import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../context/UserContext';
import { button } from '../styles/buttonStyles';
import { globalStyles } from '../styles/global';


export default function ExploreScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={globalStyles.titleTextBlack} >Welcome to the Explore Screen!</View>
      <Text>Explore Screen</Text>

      <View style={globalStyles.titleTextBlack} ><Text>Welcome, {user.name}!</Text></View>
      <View style={globalStyles.titleTextBlack} ><Text>Email: {user.email}</Text></View>
      <View style={button.ButtonProfile}> <Button title="Go back" onPress={() => navigation.goBack()} /></View>
    </View>
  );
}