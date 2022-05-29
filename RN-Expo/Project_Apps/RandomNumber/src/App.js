import React, {useState}from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  //o useState vai permiter a mudanaça no numero
  //a variavel numero não muda
  //para mudar o valor usamos o setNumero
  const [numero, setNumero] = useState(0)

  //função que ira mudar o valor e depois atribuir o valor no setNumero

  function handleNumber() {
    const novo_numero = Math.floor(Math.random() * 60)
    setNumero(novo_numero)
  
}
//por fim é so chamar a função no touchableOpacity

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.conteudo}>
          <Text style={styles.Numero}>{numero}</Text>

          {/**meu butão pode ser com Pressable dessa forma: 
          <Pressable onPress={() => gerandoNumero()}>
            <View>
              <Text>Gerar Numero</Text>
            </View>
          </Pressable>
          ou usando o touchableOpacity
          */}

          <TouchableOpacity onPress={handleNumber} style={styles.botao}>
            <Text>Gerar Numero</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo:{
    alignItems: 'center',

  },
  botao:{
    marginTop: 15, // margin é responsavel pala distancia de fora
    backgroundColor: 'red',
    width: 125,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Numero:{
    fontSize: 20,
    color: 'blue',
  }
});
