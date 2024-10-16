// import React, { useContext } from 'react';
// import {ImageBackground, StyleSheet, View, Text, Button } from 'react-native';
// // import {styles} from '../styles/ViewStyleProps'
// import { settingsStyles } from '../styles/settingsStyles';
// import { button } from '../styles/buttonStyles';
// import { globalStyles } from '../styles/global';
// import { UserContext } from '../context/UserContext';
import React, { useContext } from 'react';
import {ImageBackground, View, Text, Button } from 'react-native';
// import { View, Text, Button } from 'react-native';
import { UserContext } from '../context/UserContext';
import { button } from '../styles/buttonStyles';
import { globalStyles } from '../styles/global';
import { settingsStyles } from '../styles/settingsStyles';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function HomeScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <View style={settingsStyles.container}>
    {/*  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
      <ImageBackground source={image} resizeMode="cover" style={settingsStyles.image}>
        {/* <View style={globalStyles.titleText}> */}
        <View style={globalStyles.titleText} >Welcome to the Home Screen!</View>
        {/* </View> */}
        <View style={globalStyles.titleTextHome} >{user.name}!</View>

        <View style={button.ButtonHome}>
        <Button title="Explore" style={settingsStyles.Button} onPress={() => navigation.navigate('Explore')} />
        {/* </View>
        <View style={button.ButtonSettings}> */}
        <Button title="Profile" style={button.ButtonSettings} onPress={() => navigation.navigate('Profile')} />
        <Button title="Settings" style={settingsStyles.Button} onPress={() => navigation.navigate('Settings')} />
        </View>
      
      </ImageBackground>
    </View>
  );
}

