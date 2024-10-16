// components/input/Input.js
import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';

const Input = ({ label, value, onChangeText, placeholder, keyboardType = 'default', secureTextEntry = false }) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
