import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, SafeAreaView, Text, Pressable, Linking } from 'react-native';

const colorFundoGit = '#010409';
const imagenGitHub = 'https://avatars.githubusercontent.com/u/59882986?s=96&v=4';
const handoPressGitHub = 'https://github.com/Gilberto-Martins'

export default function App() {

  const urlGitHub = async () => {
    console.log('Verificando Link')
    const resp = await Linking.canOpenURL(handoPressGitHub)

    if(resp){
      console.log('Link Verificado.')
      console.log('Abrindo o Link.....')
      await Linking.openURL(handoPressGitHub)
    }
  }


  return (


    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <StatusBar style='inverted' backgroundColor={colorFundoGit} />

        <Image accessibilityLabel=' Imagem de Gilberto Martins' source={{ uri: imagenGitHub }} style={styles.imgGitHub} />
        
        <Text accessibilityLabel='Nome: Gilberto Martins' style={[styles.texto, styles.name]}>Gilberto Martins </Text>
        <Text accessibilityLabel='NickName: gilbertomartins' style={[styles.texto, styles.nickname]}>gilbertomatins</Text>
        <Text accessibilityLabel='Descrição: Sou um Universitário da Uninassau. curso: bacharel Ciência da Computação.' style={[styles.texto, styles.descricao]}>Concluindo bacharelado em ciências da computação. Alguns dos meus hobbies são Games, Ficção e adquirir cada vez mais conhecimento por desenvolvimento Mobile. Sou autodidata e gosto de desafios.</Text>

        <View style={styles.Dio}>
          <View style={styles.caixinhas}></View>{/**1 */}
          <View style={styles.caixinhas}></View>{/**2 */}
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>{/**13 */}
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>{/**15 Verde escuro */}
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={[styles.caixinhas, styles.caixaDio]}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          <View style={styles.caixinhas}></View>
          
        </View>

        <Pressable onPress={() => urlGitHub()}>
          <View>
            <Text style={styles.button}>Open in GitHub</Text>
          </View>
        </Pressable>

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
  name: {
    marginTop: 20,
    fontWeight: 'bold',//negrito
    fontSize: 25,
    color: '#a9a9a9'
  },
  nickname: {
    fontSize: 15,
    color: '#474a51'
  },
  descricao: {
    fontWeight: 'bold',// negrito
    fontSize: 15,
    color: '#696969',
    textAlign:'center'
  },
  button: {
    backgroundColor: '#494c4e',
    fontWeight: 'bold',
    color: '#CDCDCD',
    borderRadius: 5,
    padding: 15,
    marginTop: 25,
  },
  Dio:{
    marginTop: 30 ,
    width: 250,
    height: 115,
    flexDirection: 'row' ,
    flexWrap: "wrap",
    justifyContent: "center"
  },
  caixinhas:{
    margin: 3,
    backgroundColor: "#179a29",
    width: 13,
    height: 13,
    borderRadius: 4,
  },
  caixaDio:{
    backgroundColor: "#90ee90"
  }
});
