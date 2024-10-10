import React from 'react';
import { View, Text, Button } from 'react-native';
import { settingsStyles } from '../styles/settingsStyles';

export default function SettingsScreen( {navigation} ) {
  return (
    <View style={settingsStyles.container}>
      <Text>Settings Page</Text>
      <Button title="Save" style={settingsStyles.button} onPress={() => alert('Saved')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
