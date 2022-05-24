import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, SafeAreaView, Text ,TouchableOpacity} from 'react-native';

const colorFundoGit = '#010409';
const imagenGitHub = 'https://avatars.githubusercontent.com/u/59882986?s=96&v=4';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <StatusBar style='inverted' backgroundColor={colorFundoGit} />
        <Image source={{ uri: imagenGitHub }} style={styles.imgGitHub} />
        <Text style={[styles.texto, styles.name]}>Gilberto Martins </Text>
        <Text style={[styles.texto, styles.nickname]}>gilbertomatins</Text>
        <Text style={[styles.texto, styles.descricao]}>Sou um Universitário da Uninassau. curso: bacharel Ciência da Computação.</Text>
        <TouchableOpacity onPress={() => alert('Olá Pessoas')}>
          <Text style={styles.texto}>Ola</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorFundoGit,
    flex: 1,
    justifyContent: 'space-evenly', // esta centralizando no eixo vertival
    //alignItems: 'center', // horizontal
    flexDirection: 'column' // eixo horizontal(por padrão é column fazendo se referenciar ao eixo vertival)
  },
  content: {
    alignItems: 'center', // esta centralizando no eixo horizontal
    padding: 25
  },
  imgGitHub: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'blue'
  },
  texto: {
    color: 'white',
  },
  name:{
    marginTop: 20,
    fontWeight: 'bold',//negrito
    fontSize: 25,
    color: '#a9a9a9'
  },
  nickname:{
    fontSize: 15,
    color: '#474a51'
  },
  descricao:{
    fontWeight: 'bold',// negrito
    fontSize: 17,
    color: '#696969',
  }
});
