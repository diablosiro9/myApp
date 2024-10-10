import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>Welcome, {user.name}!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

