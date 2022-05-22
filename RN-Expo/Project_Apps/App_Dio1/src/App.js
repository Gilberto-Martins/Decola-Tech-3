import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image ,StyleSheet, Text, View , TouchableOpacity} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      {/*importanto imagem da net*/}
      <Image source={{uri: "https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s"}} style={styles.logo} /> 

      {/*importando imagem do app
        import logo from './assets/logo.png
        <Image soucer={logo} style={{width: 305, height: 250}}>
      
      */}
      

      <Text>Meu Primiro app usando o React Native Expo!!!</Text>
      
      <TouchableOpacity onPress={() => alert('Olá Pessoas')} style={styles.button}>
        <Text style={styles.buttonText}>Dispara o Alert</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

//estilo do app
const styles = StyleSheet.create({
  container: {
    flex: 1, // expandir para a tela inteira
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    margin:5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center'
  },
  buttonText:{
    color:'white',
    fontSize: 20
  },
  logo:{
    width: 305,
    height: 250,
  }

});
