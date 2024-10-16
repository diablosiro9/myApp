import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Header({ navigation }) {
  return (
    <View style={globalStyles.header}>
      <TouchableOpacity onPress={() => alert('Left button')} style={globalStyles.headerButton}>
        <Text>Left</Text>
      </TouchableOpacity>
      <Text style={globalStyles.headerTitle}>My App</Text>
      <TouchableOpacity onPress={() => alert('Right button')} style={globalStyles.headerButton}>
        <Text>Right</Text>
      </TouchableOpacity>
    </View>
  );
}