import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Button } from 'react-native';
// import {styles} from '../styles/ViewStyleProps'
import { settingsStyles } from '../styles/settingsStyles';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function HomeScreen({ navigation }) {
  return (
    <View style={settingsStyles.container}>
    {/*  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
      <ImageBackground source={image} resizeMode="cover" style={settingsStyles.image}>
        <Text>Welcome to the Home Screen!</Text>
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      </ImageBackground>
    </View>
  );
}

