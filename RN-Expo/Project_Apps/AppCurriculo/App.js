import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function App() {

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Text>Olllllaaaaa</Text>
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
});
