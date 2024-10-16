import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../context/UserContext';
import { button } from '../styles/buttonStyles';
import { globalStyles } from '../styles/global';


export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={globalStyles.titleTextBlack} >Welcome to the Profile Screen!</View>
      <Text>Profile Screen</Text>

      <View style={globalStyles.titleTextBlack} ><Text>Welcome, {user.name}!</Text></View>
      <View style={globalStyles.titleTextBlack} ><Text>Email: {user.email}</Text></View>
      <View style={button.ButtonProfile}> <Button title="Go back" onPress={() => navigation.goBack()} /></View>
    </View>
  );
}

// // screens/ProfileScreen.js
// import React, { useContext } from 'react';
// import { View, Text, Button } from 'react-native';
// import { UserContext } from '../context/UserContext';
// import { globalStyles } from '../styles/global';
// import { button } from '../styles/buttonStyles';

// export default function ProfileScreen({ navigation }) {
//   const { user } = useContext(UserContext);  // Récupérer l'utilisateur connecté depuis le contexte

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={globalStyles.titleTextBlack}>Profile Screen</Text>
//       {user ? (
//         <>
//           <Text>Welcome, {user.name}!</Text>  {/* Affiche les informations de l'utilisateur */}
//           <Text>Email: {user.email}</Text>
//           <Button title="Go back" onPress={() => navigation.goBack()} />
//         </>
//       ) : (
//         <Text>No user is logged in.</Text>
//       )}
//     </View>
//   );
// }

