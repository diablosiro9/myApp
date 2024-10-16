import React from 'react';
import { View, Text, Button } from 'react-native';
import { settingsStyles } from '../styles/settingsStyles';
import { button } from '../styles/buttonStyles';
import { globalStyles } from '../styles/global';


export default function SettingsScreen( {navigation} ) {
  return (
    <View style={settingsStyles.container}>
      <View style={globalStyles.titleTextBlack}> Settings Page </View>
      <View style={button.ButtonSettingsSave}> <Button title="Save" onPress={() => alert('Saved')} /> </View>
      <View style={button.ButtonSettingsBack}> <Button title="Go back" onPress={() => navigation.goBack()} /> </View>
    </View>
  );
}
