import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import logo from './assets/favicon.png'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <View >
        <Image source={logo} style={styles.logo} />
        <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // espande para a tela inteira
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    backgroundColor: 'pink',
    color: 'blue',
    padding: 0,
  },
  logo: {
    width: 200,
    height: 205
  },
});
