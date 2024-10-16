// screens/LoginScreen.js
import React, { useState, useContext } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import Input from '../components/input/Input';
import { UserContext } from '../context/UserContext';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <Input
//         label="Email"
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Enter your email"
//         keyboardType="email-address"
//       />
//       <Input
//         label="Password"
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Enter your password"
//         secureTextEntry
//       />
//       <Button title="Login" onPress={() => navigation.navigate('Profile')} />
//       <Text
//         style={styles.link}
//         onPress={() => navigation.navigate('Register')}
//       >
//         Don't have an account? Sign up
//       </Text>
//     </View>
//   );
// };

const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);  // Accéder à la fonction pour définir l'utilisateur
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    try {
      const response = await fetch('https://your-backend-api.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // L'authentification réussit
        const user = data.user;
        const token = data.token;
  
        setUser(user);  // Enregistre l'utilisateur dans le contexte
  
        // Optionnel : Stockage du token avec AsyncStorage pour l'utiliser plus tard
        await AsyncStorage.setItem('authToken', token);
  
        // Redirige vers la page Home
        navigation.navigate('Home');
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  // const handleLogin = () => {
  //   // Simuler un appel à une API et récupérer un utilisateur
  //   const fakeUser = {
  //     id: 1,
  //     name: 'John Doe',
  //     email: email,
  //   };
// 
  //   // Enregistrer l'utilisateur dans le contexte
  //   setUser(fakeUser);

  //   // Rediriger vers la page Profile
  //   navigation.navigate('Home');
  //   navigation.replace('Register');

  //       // Remplace la navigation actuelle (Login) par Home sans empiler l'historique
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'Settings' }],
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Register')}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginScreen;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   link: {
//     marginTop: 20,
//     color: 'blue',
//     textAlign: 'center',
//   },
// });

// export default LoginScreen;
