import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.Name}>
        <Text style={styles.Texo}>Frist Name:</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 0.3,
    borderRadius: 8,
    textAlign: 'center',

    margin: 5,
    height: 35,
    width: 130,
  },
  Name:{
    alignItems: 'center',
    flexDirection : 'row',

  }
});
