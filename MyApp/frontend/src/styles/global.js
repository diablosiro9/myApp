import { StyleSheet } from 'react-native';
import { Button } from 'react-native-web';

export const globalStyles = StyleSheet.create({
  header: {
    backgroundColor: '#f4511e', // couleur du header
  },
  headerTitle: {
    fontWeight: 'bold',
    color: '#fff', // couleur du titre
  },
  headerButton: {
    marginHorizontal: 10, // ajuster la marge entre les boutons et le bord
    padding: 10, // espacement intérieur
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  // Button: {
  //   marginHorizontal: 20,
  //   lineHeight: 20,
  //   padding:  20,
  // },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

